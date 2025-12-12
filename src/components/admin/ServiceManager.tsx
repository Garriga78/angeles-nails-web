import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import ImageUploader from './ImageUploader';
import SVGUploader from './SVGUploader';

interface Service {
    id: string;
    slug: string;
    category: 'manicura' | 'pedicura' | 'cejas' | 'pestanas' | 'peluqueria';
    title: string;
    hero_title: string;
    hero_subtitle: string;
    hero_image_url: string;
    intro_title: string;
    intro_description: string;
    features_title: string;
    features_image_url: string;
    feature_1_title: string;
    feature_1_description: string;
    feature_2_title: string;
    feature_2_description: string;
    feature_3_title: string;
    feature_3_description: string;
    process_title: string;
    process_step_1_icon: string;
    process_step_1_title: string;
    process_step_1_description: string;
    process_step_2_icon: string;
    process_step_2_title: string;
    process_step_2_description: string;
    process_step_3_icon: string;
    process_step_3_title: string;
    process_step_3_description: string;
    seo_content: string;
    price: string;
    duration: string;
    display_order: number;
}

export default function ServiceManager() {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingService, setEditingService] = useState<Partial<Service> | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'basic' | 'hero' | 'intro' | 'features' | 'process' | 'seo'>('basic');

    useEffect(() => {
        fetchServices();
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const fetchServices = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('services')
            .select('*')
            .order('display_order', { ascending: true });

        if (error) console.error('Error fetching services:', error);
        else setServices(data || []);
        setLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de que quieres eliminar este servicio?')) return;

        const { error } = await supabase.from('services').delete().eq('id', id);
        if (error) {
            alert('Error eliminando servicio');
            console.error(error);
        } else {
            fetchServices();
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingService) return;

        // Generate slug from title if missing
        if (!editingService.slug && editingService.title) {
            editingService.slug = editingService.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        }

        let error;
        if (editingService.id) {
            const { error: err } = await supabase
                .from('services')
                .update(editingService)
                .eq('id', editingService.id);
            error = err;
        } else {
            const { error: err } = await supabase.from('services').insert([editingService]);
            error = err;
        }

        if (error) {
            console.error('Error saving service:', error);
            alert('Error al guardar: ' + error.message);
        } else {
            setIsModalOpen(false);
            setEditingService(null);
            fetchServices();
        }
    };

    const openModal = (service?: Service) => {
        if (service) {
            setEditingService({ ...service });
        } else {
            setEditingService({
                title: '',
                slug: '',
                category: 'manicura',
                hero_title: '',
                hero_subtitle: '',
                hero_image_url: '',
                intro_title: '',
                intro_description: '',
                features_title: '',
                features_image_url: '',
                feature_1_title: '',
                feature_1_description: '',
                feature_2_title: '',
                feature_2_description: '',
                feature_3_title: '',
                feature_3_description: '',
                process_title: 'Paso a paso',
                process_step_1_icon: '',
                process_step_1_title: '',
                process_step_1_description: '',
                process_step_2_icon: '',
                process_step_2_title: '',
                process_step_2_description: '',
                process_step_3_icon: '',
                process_step_3_title: '',
                process_step_3_description: '',
                seo_content: '',
                price: '',
                duration: '',
                display_order: 0
            });
        }
        setActiveTab('basic');
        setIsModalOpen(true);
    };

    if (loading) return <div>Cargando servicios...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Listado de Servicios</h2>
                <button
                    onClick={() => openModal()}
                    className="bg-brown-800 hover:bg-brown-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                    + Nuevo Servicio
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imagen</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {services.map((service) => (
                            <tr key={service.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="h-12 w-16 bg-gray-100 rounded overflow-hidden">
                                        {service.hero_image_url ? (
                                            <img src={service.hero_image_url} alt="" className="h-full w-full object-cover" />
                                        ) : <span className="flex items-center justify-center h-full text-xs text-gray-400">Sin img</span>}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service.hero_title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{service.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono text-xs">{service.slug}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button onClick={() => openModal(service)} className="text-gold-600 hover:text-gold-900 mr-4">Editar</button>
                                    <button onClick={() => handleDelete(service.id)} className="text-red-600 hover:text-red-900">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && editingService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsModalOpen(false)}></div>

                    <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col pointer-events-auto">
                        <form onSubmit={handleSave} className="flex flex-col h-full">
                            {/* Header - Fixed */}
                            <div className="px-6 py-4 border-b border-gray-200 bg-white rounded-t-lg z-10 shrink-0">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    {editingService.id ? 'Editar Servicio' : 'Nuevo Servicio'}
                                </h3>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto px-6 py-4 min-h-0 overscroll-contain">

                                {/* Tabs */}
                                <div className="border-b border-gray-200 mb-6">
                                    <nav className="-mb-px flex space-x-4">
                                        {['basic', 'hero', 'intro', 'features', 'process', 'seo'].map((tab) => (
                                            <button
                                                key={tab}
                                                type="button"
                                                onClick={() => setActiveTab(tab as any)}
                                                className={`${activeTab === tab
                                                    ? 'border-gold-500 text-gold-600'
                                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                                    } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm capitalize`}
                                            >
                                                {tab === 'basic' ? 'Básico' : tab === 'seo' ? 'SEO' : tab}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                {/* Tab Content */}
                                <div className="space-y-6">
                                    {activeTab === 'basic' && (
                                        <>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Título (Meta)</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={editingService.title || ''}
                                                        onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Slug (URL)</label>
                                                    <input
                                                        type="text"
                                                        value={editingService.slug || ''}
                                                        onChange={(e) => setEditingService({ ...editingService, slug: e.target.value })}
                                                        placeholder="auto-generado"
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Categoría</label>
                                                    <select
                                                        value={editingService.category || 'manicura'}
                                                        onChange={(e: any) => setEditingService({ ...editingService, category: e.target.value })}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                                    >
                                                        <option value="manicura">Manicura</option>
                                                        <option value="pedicura">Pedicura</option>
                                                        <option value="cejas">Cejas</option>
                                                        <option value="pestanas">Pestañas</option>
                                                        <option value="peluqueria">Peluquería</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Precio</label>
                                                    <input
                                                        type="text"
                                                        value={editingService.price || ''}
                                                        onChange={(e) => setEditingService({ ...editingService, price: e.target.value })}
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">Duración</label>
                                                    <input
                                                        type="text"
                                                        value={editingService.duration || ''}
                                                        onChange={(e) => setEditingService({ ...editingService, duration: e.target.value })}
                                                        placeholder="ej: 60 min"
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {activeTab === 'hero' && (
                                        <>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Título Hero</label>
                                                <input
                                                    type="text"
                                                    value={editingService.hero_title || ''}
                                                    onChange={(e) => setEditingService({ ...editingService, hero_title: e.target.value })}
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Subtítulo Hero</label>
                                                <input
                                                    type="text"
                                                    value={editingService.hero_subtitle || ''}
                                                    onChange={(e) => setEditingService({ ...editingService, hero_subtitle: e.target.value })}
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Imagen Hero</label>
                                                <ImageUploader
                                                    onUpload={(url) => setEditingService({ ...editingService, hero_image_url: url })}
                                                    currentImage={editingService.hero_image_url}
                                                />
                                            </div>
                                        </>
                                    )}

                                    {activeTab === 'intro' && (
                                        <>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Título Intro (¿Qué es...?)</label>
                                                <input
                                                    type="text"
                                                    value={editingService.intro_title || ''}
                                                    onChange={(e) => setEditingService({ ...editingService, intro_title: e.target.value })}
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Descripción Intro</label>
                                                <textarea
                                                    rows={4}
                                                    value={editingService.intro_description || ''}
                                                    onChange={(e) => setEditingService({ ...editingService, intro_description: e.target.value })}
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                                />
                                            </div>
                                        </>
                                    )}

                                    {activeTab === 'features' && (
                                        <>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Título Sección Features</label>
                                                <input
                                                    type="text"
                                                    value={editingService.features_title || ''}
                                                    onChange={(e) => setEditingService({ ...editingService, features_title: e.target.value })}
                                                    placeholder="ej: Ventajas del..."
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Imagen Features</label>
                                                <ImageUploader
                                                    onUpload={(url) => setEditingService({ ...editingService, features_image_url: url })}
                                                    currentImage={editingService.features_image_url}
                                                />
                                            </div>

                                            <div className="border-t pt-4">
                                                <h4 className="font-medium text-gray-900 mb-3">Feature 1</h4>
                                                <div className="grid grid-cols-1 gap-3">
                                                    <input
                                                        type="text"
                                                        placeholder="Título"
                                                        value={editingService.feature_1_title || ''}
                                                        onChange={(e) => setEditingService({ ...editingService, feature_1_title: e.target.value })}
                                                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                                    />
                                                    <textarea
                                                        rows={2}
                                                        placeholder="Descripción"
                                                        value={editingService.feature_1_description || ''}
                                                        onChange={(e) => setEditingService({ ...editingService, feature_1_description: e.target.value })}
                                                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div className="border-t pt-4">
                                                <h4 className="font-medium text-gray-900 mb-3">Feature 2</h4>
                                                <div className="grid grid-cols-1 gap-3">

