import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import ImageUploader from './ImageUploader';
import RichTextEditor from './RichTextEditor';

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image_url: string;
    category: string;
    is_published: boolean;
}

export default function BlogManager() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingPost, setEditingPost] = useState<Partial<BlogPost> | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const fetchPosts = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) console.error('Error fetching posts:', error);
        else setPosts(data || []);
        setLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de que quieres eliminar este artículo?')) return;

        const { error } = await supabase.from('blog_posts').delete().eq('id', id);
        if (error) {
            alert('Error eliminando artículo');
            console.error(error);
        } else {
            fetchPosts();
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingPost) return;

        // Generate slug from title if missing
        if (!editingPost.slug && editingPost.title) {
            editingPost.slug = editingPost.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        }

        let error;
        if (editingPost.id) {
            const { error: err } = await supabase
                .from('blog_posts')
                .update(editingPost)
                .eq('id', editingPost.id);
            error = err;
        } else {
            const { error: err } = await supabase.from('blog_posts').insert([editingPost]);
            error = err;
        }

        if (error) {
            console.error('Error saving post:', error);
            alert('Error al guardar: ' + error.message);
        } else {
            setIsModalOpen(false);
            setEditingPost(null);
            fetchPosts();
        }
    };

    const openModal = (post?: BlogPost) => {
        if (post) {
            setEditingPost({ ...post });
        } else {
            setEditingPost({
                title: '',
                slug: '',
                excerpt: '',
                content: '',
                image_url: '',
                category: 'Novedades',
                is_published: false
            });
        }
        setIsModalOpen(true);
    };

    if (loading) return <div>Cargando artículos...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Gestión del Blog</h2>
                <button
                    onClick={() => openModal()}
                    className="bg-brown-800 hover:bg-brown-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                    + Nuevo Artículo
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imagen</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="h-12 w-16 bg-gray-100 rounded overflow-hidden">
                                        {post.image_url ? (
                                            <img src={post.image_url} alt="" className="h-full w-full object-cover" />
                                        ) : <span className="flex items-center justify-center h-full text-xs text-gray-400">Sin img</span>}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{post.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${post.is_published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {post.is_published ? 'Publicado' : 'Borrador'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button onClick={() => openModal(post)} className="text-gold-600 hover:text-gold-900 mr-4">Editar</button>
                                    <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-900">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && editingPost && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsModalOpen(false)}></div>

                    <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] flex flex-col pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <form onSubmit={handleSave} className="flex flex-col h-full overflow-hidden">
                            {/* Header - Fixed */}
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    {editingPost.id ? 'Editar Artículo' : 'Nuevo Artículo'}
                                </h3>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto px-6 py-4 min-h-0">
                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                        <label className="block text-sm font-medium text-gray-700">Título</label>
                                        <input
                                            type="text"
                                            required
                                            value={editingPost.title || ''}
                                            onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">Categoría</label>
                                        <input
                                            type="text"
                                            value={editingPost.category || ''}
                                            onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label className="block text-sm font-medium text-gray-700">Slug</label>
                                        <input
                                            type="text"
                                            value={editingPost.slug || ''}
                                            onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
                                            placeholder="auto-generado"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-2 flex items-center mt-6">
                                        <input
                                            id="is_published"
                                            type="checkbox"
                                            checked={editingPost.is_published || false}
                                            onChange={(e) => setEditingPost({ ...editingPost, is_published: e.target.checked })}
                                            className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="is_published" className="ml-2 block text-sm text-gray-900">
                                            Publicado
                                        </label>
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label className="block text-sm font-medium text-gray-700">Extracto (Resumen)</label>
                                        <textarea
                                            rows={2}
                                            value={editingPost.excerpt || ''}
                                            onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Contenido</label>
                                        <RichTextEditor
                                            value={editingPost.content || ''}
                                            onChange={(content) => setEditingPost({ ...editingPost, content })}
                                        />
                                    </div>

                                    <div className="sm:col-span-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Imagen Destacada</label>
                                        <ImageUploader
                                            onUpload={(url) => setEditingPost({ ...editingPost, image_url: url })}
                                            currentImage={editingPost.image_url}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Footer - Fixed */}
                            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-sm font-medium text-white bg-brown-800 border border-transparent rounded-md hover:bg-brown-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
                                >
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
