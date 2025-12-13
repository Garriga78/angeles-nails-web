import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import RichTextEditor from './RichTextEditor';

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

                        <RichTextEditor
                            value={category.seo_text || ''}
                            onChange={(newValue) => handleTextChange(category.id, newValue)}
                        />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryManager;
