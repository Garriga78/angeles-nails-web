import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import RichTextEditor from './RichTextEditor';
import ImageUploader from './ImageUploader';

interface Category {
    id: string;
    slug: string;
    title: string;
    seo_text: string;
    hero_image_url?: string;
}

const CategoryManager: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploadingImage, setUploadingImage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const { data, error } = await supabase
                .from('categories')
                .select('*')
                .order('title');

            if (error) throw error;
            setCategories(data || []);
        } catch (err) {
            console.error('Error fetching categories:', err);
            setError('Error al cargar las categorías');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (category: Category) => {
        setSaving(true);
        setError(null);
        setSuccessMessage(null);

        try {
            const { error } = await supabase
                .from('categories')
                .update({
                    seo_text: category.seo_text,
                    hero_image_url: category.hero_image_url
                })
                .eq('id', category.id);

            if (error) throw error;
            setSuccessMessage(`Cambios guardados para ${category.title}`);
            setTimeout(() => setSuccessMessage(null), 3000);
        } catch (err) {
            console.error('Error saving category:', err);
            setError('Error al guardar los cambios');
        } finally {
            setSaving(false);
        }
    };

    const handleTextChange = (id: string, newText: string) => {
        setCategories(categories.map(cat =>
            cat.id === id ? { ...cat, seo_text: newText } : cat
        ));
    };

    const handleImageUpload = async (categoryId: string, imageUrl: string) => {
        setUploadingImage(categoryId);
        setError(null);

        try {
            const category = categories.find(cat => cat.id === categoryId);
            if (!category) throw new Error('Categoría no encontrada');

            // Update category with new image URL
            const { error: updateError } = await supabase
                .from('categories')
                .update({ hero_image_url: imageUrl })
                .eq('id', categoryId);

            if (updateError) throw updateError;

            // Update local state
            setCategories(categories.map(cat =>
                cat.id === categoryId ? { ...cat, hero_image_url: imageUrl } : cat
            ));

            setSuccessMessage(`Imagen actualizada para ${category.title}`);
            setTimeout(() => setSuccessMessage(null), 3000);
        } catch (err) {
            console.error('Error updating image:', err);
            setError('Error al actualizar la imagen');
        } finally {
            setUploadingImage(null);
        }
    };

    if (loading) return <div className="text-center py-8">Cargando categorías...</div>;

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-serif font-bold text-brown-800 mb-6">Gestor de Categorías</h2>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 sticky top-4 z-50">
                    {successMessage}
                </div>
            )}

            <div className="grid grid-cols-1 gap-8">
                {categories.map((category) => (
                    <div key={category.id} className="bg-white p-6 rounded-lg shadow-md border border-gold-200">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-brown-800 capitalize">{category.title}</h3>
                            <button
                                onClick={() => handleSave(category)}
                                disabled={saving}
                                className="bg-brown-700 text-white px-4 py-2 rounded hover:bg-gold-500 transition-colors disabled:opacity-50"
                            >
                                {saving ? 'Guardando...' : 'Guardar Cambios'}
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-brown-700 mb-3">Imagen Principal</h4>
                            <div className="flex flex-col md:flex-row gap-4 items-start">
                                {/* Current Image Preview */}
                                {category.hero_image_url && (
                                    <div className="w-full md:w-1/3">
                                        <p className="text-sm text-gray-600 mb-2">Imagen actual:</p>
                                        <img
                                            src={category.hero_image_url}
                                            alt={category.title}
                                            className="w-full h-48 object-cover rounded-lg shadow-md"
                                        />
                                    </div>
                                )}

                                {/* Image Uploader */}
                                <div className="w-full md:w-2/3">
                                    <p className="text-sm text-gray-600 mb-2">
                                        {category.hero_image_url ? 'Cambiar imagen:' : 'Subir imagen:'}
                                    </p>
                                    <ImageUploader
                                        onUpload={(imageUrl) => handleImageUpload(category.id, imageUrl)}
                                        currentImage={category.hero_image_url}
                                    />
                                    <p className="text-xs text-gray-500 mt-2">
                                        Recomendado: 1200x800px, formato JPG o PNG
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SEO Text Section */}
                        <div>
                            <h4 className="text-lg font-semibold text-brown-700 mb-3">Texto SEO</h4>
                            <RichTextEditor
                                value={category.seo_text || ''}
                                onChange={(newValue) => handleTextChange(category.id, newValue)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryManager;
