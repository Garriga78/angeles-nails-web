import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

interface Category {
    id: string;
    slug: string;
    title: string;
    seo_text: string;
}

const CategoryManager: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
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
                .update({ seo_text: category.seo_text })
                .eq('id', category.id);

            if (error) throw error;
            setSuccessMessage(`Texto SEO guardado para ${category.title}`);
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

    const insertTag = (id: string, tag: 'b' | 'i' | 'br' | 'a') => {
        const category = categories.find(c => c.id === id);
        if (!category) return;

        let insertion = '';
        if (tag === 'b') insertion = '<b>texto negrita</b>';
        if (tag === 'i') insertion = '<i>texto cursiva</i>';
        if (tag === 'br') insertion = '<br/>\n';
        if (tag === 'a') insertion = '<a href="https://" class="text-gold-600 hover:underline">enlace</a>';

        const textarea = document.getElementById(`textarea-${id}`) as HTMLTextAreaElement;
        if (textarea) {
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const text = category.seo_text || '';
            const newText = text.substring(0, start) + insertion + text.substring(end);

            handleTextChange(id, newText);
        }
    };

    if (loading) return <div className="text-center py-8">Cargando categorías...</div>;

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-serif font-bold text-brown-800 mb-6">Gestor de Textos SEO</h2>

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
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-brown-800 capitalize">{category.title}</h3>
                            <button
                                onClick={() => handleSave(category)}
                                disabled={saving}
                                className="bg-brown-700 text-white px-4 py-2 rounded hover:bg-gold-500 transition-colors disabled:opacity-50"
                            >
                                {saving ? 'Guardando...' : 'Guardar Cambios'}
                            </button>
                        </div>

                        <div className="mb-2 flex gap-2">
                            <button onClick={() => insertTag(category.id, 'b')} className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm font-bold border border-gray-300">B</button>
                            <button onClick={() => insertTag(category.id, 'i')} className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm italic border border-gray-300">I</button>
                            <button onClick={() => insertTag(category.id, 'br')} className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm border border-gray-300">Salto de línea</button>
                            <button onClick={() => insertTag(category.id, 'a')} className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded text-sm text-blue-600 underline border border-gray-300">Enlace</button>
                        </div>

                        <textarea
                            id={`textarea-${category.id}`}
                            value={category.seo_text || ''}
                            onChange={(e) => handleTextChange(category.id, e.target.value)}
                            className="w-full h-48 p-4 border border-gray-300 rounded-md font-mono text-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                            placeholder="Escribe aquí el texto SEO para esta categoría. Puedes usar HTML básico."
                        />
                        <p className="text-xs text-gray-500 mt-2">
                            Consejo: Usa los botones de arriba para insertar etiquetas de formato.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryManager;
