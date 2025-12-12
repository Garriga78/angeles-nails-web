import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import ImageUploader from './ImageUploader';

interface TeamMember {
    id: string;
    name: string;
    role: string;
    image_url: string;
    bio: string;
    display_order: number;
}

export default function TeamManager() {
    const [members, setMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingMember, setEditingMember] = useState<Partial<TeamMember> | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('team_members')
            .select('*')
            .order('display_order', { ascending: true });

        if (error) console.error('Error fetching team:', error);
        else setMembers(data || []);
        setLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('¿Estás seguro de que quieres eliminar a este miembro del equipo?')) return;

        const { error } = await supabase.from('team_members').delete().eq('id', id);
        if (error) {
            alert('Error eliminando miembro');
            console.error(error);
        } else {
            fetchMembers();
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingMember) return;

        let error;
        if (editingMember.id) {
            const { error: err } = await supabase
                .from('team_members')
                .update(editingMember)
                .eq('id', editingMember.id);
            error = err;
        } else {
            const { error: err } = await supabase.from('team_members').insert([editingMember]);
            error = err;
        }

        if (error) {
            console.error('Error saving member:', error);
            alert('Error al guardar: ' + error.message);
        } else {
            setIsModalOpen(false);
            setEditingMember(null);
            fetchMembers();
        }
    };

    const openModal = (member?: TeamMember) => {
        if (member) {
            setEditingMember({ ...member });
        } else {
            setEditingMember({
                name: '',
                role: '',
                image_url: '',
                bio: '',
                display_order: 0
            });
        }
        setIsModalOpen(true);
    };

    if (loading) return <div>Cargando equipo...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Gestión del Equipo</h2>
                <button
                    onClick={() => openModal()}
                    className="bg-brown-800 hover:bg-brown-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                    + Nuevo Miembro
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member) => (
                    <div key={member.id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-48 overflow-hidden bg-gray-100">
                            {member.image_url ? (
                                <img src={member.image_url} alt={member.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400">Sin foto</div>
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="font-serif font-bold text-lg text-brown-800">{member.name}</h3>
                            <p className="text-sm text-gold-600 font-medium">{member.role}</p>
                            <div className="mt-4 flex justify-end gap-2">
                                <button onClick={() => openModal(member)} className="text-sm text-gray-600 hover:text-brown-800">Editar</button>
                                <button onClick={() => handleDelete(member.id)} className="text-sm text-red-500 hover:text-red-700">Eliminar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && editingMember && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
                            <form onSubmit={handleSave} className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="mb-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        {editingMember.id ? 'Editar Miembro' : 'Nuevo Miembro'}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 gap-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                                        <input
                                            type="text"
                                            required
                                            value={editingMember.name || ''}
                                            onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Rol / Puesto</label>
                                        <input
                                            type="text"
                                            value={editingMember.role || ''}
                                            onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Biografía</label>
                                        <textarea
                                            rows={3}
                                            value={editingMember.bio || ''}
                                            onChange={(e) => setEditingMember({ ...editingMember, bio: e.target.value })}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Foto de Perfil</label>
                                        <ImageUploader
                                            onUpload={(url) => setEditingMember({ ...editingMember, image_url: url })}
                                            currentImage={editingMember.image_url}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Orden de Visualización</label>
                                        <input
                                            type="number"
                                            value={editingMember.display_order || 0}
                                            onChange={(e) => setEditingMember({ ...editingMember, display_order: parseInt(e.target.value) })}
                                            className="mt-1 block w-20 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gold-500 focus:border-gold-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="submit"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brown-800 text-base font-medium text-white hover:bg-brown-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    >
                                        Guardar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
