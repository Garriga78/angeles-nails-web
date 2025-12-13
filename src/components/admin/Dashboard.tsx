import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import AuthGuard from './AuthGuard';
import ServiceManager from './ServiceManager';
import BlogManager from './BlogManager';
import TeamManager from './TeamManager';
import CategoryManager from './CategoryManager';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState<'services' | 'blog' | 'team' | 'categories'>('services');

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = '/admin/login';
    };

    return (
        <AuthGuard>
            <div className="min-h-screen bg-gray-100">
                {/* Top Navbar */}
                <nav className="bg-white shadow">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    <span className="font-serif text-xl font-bold text-brown-800">Admin Panel</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button
                                    onClick={handleLogout}
                                    className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="py-10">
                    <header>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold leading-tight text-gray-900 font-serif">
                                {activeTab === 'services' && 'Gestión de Servicios'}
                                {activeTab === 'blog' && 'Gestión del Blog'}
                                {activeTab === 'team' && 'Gestión del Equipo'}
                            </h1>
                        </div>
                    </header>
                    <main>
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            {/* Tabs */}
                            <div className="border-b border-gray-200 mt-6">
                                <nav className="-mb-px flex space-x-8">
                                    <button
                                        onClick={() => setActiveTab('services')}
                                        className={`${activeTab === 'services'
                                            ? 'border-gold-500 text-gold-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                    >
                                        Servicios
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('categories')}
                                        className={`${activeTab === 'categories'
                                            ? 'border-gold-500 text-gold-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                    >
                                        Textos Categorías
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('blog')}
                                        className={`${activeTab === 'blog'
                                            ? 'border-gold-500 text-gold-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                    >
                                        Blog
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('team')}
                                        className={`${activeTab === 'team'
                                            ? 'border-gold-500 text-gold-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                    >
                                        Equipo
                                    </button>
                                </nav>
                            </div>

                            {/* Content Area */}
                            <div className="px-4 py-8 sm:px-0">
                                <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                                    <div className="p-6">
                                        {activeTab === 'services' && <ServiceManager />}
                                        {activeTab === 'categories' && <CategoryManager />}
                                        {activeTab === 'blog' && <BlogManager />}
                                        {activeTab === 'team' && <TeamManager />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </AuthGuard>
    );
}
