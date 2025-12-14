import { useState } from 'react';
import { supabase } from '../../lib/supabase';

interface ImageUploaderProps {
    onUpload: (url: string) => void;
    currentImage?: string;
    bucketName?: string;
}

export default function ImageUploader({ onUpload, currentImage, bucketName = 'images' }: ImageUploaderProps) {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true);
            setError(null);

            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('Debe seleccionar una imagen para subir.');
            }

            const file = event.target.files[0];

            // Validar tamaño de archivo (máximo 2MB)
            const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
            if (file.size > maxSizeInBytes) {
                throw new Error(
                    `La imagen es demasiado grande (${(file.size / 1024 / 1024).toFixed(2)}MB). El tamaño máximo permitido es 2MB. ` +
                    `Puedes comprimir tu imagen usando I❤IMG: https://www.iloveimg.com/compress-image`
                );
            }

            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from(bucketName)
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            // Get Public URL
            const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);

            onUpload(data.publicUrl);

        } catch (error: any) {
            setError(error.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="space-y-4">
            {currentImage && (
                <div className="relative w-40 h-40 overflow-hidden rounded-lg shadow-md border border-gray-200 group">
                    <img
                        src={currentImage}
                        alt="Vista previa"
                        className="w-full h-full object-cover"
                    />
                    <button
                        type="button"
                        onClick={() => onUpload('')}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 shadow-sm hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                        title="Eliminar imagen"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {uploading ? 'Subiendo...' : 'Subir imagen'}
                </label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    disabled={uploading}
                    className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-brown-50 file:text-brown-700
            hover:file:bg-brown-100"
                />
            </div>
            {error && (
                <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                    {error.includes('I❤IMG') ? (
                        <div>
                            <p className="font-semibold mb-1">❌ Error: Imagen demasiado grande</p>
                            <p className="mb-2">{error.split('Puedes comprimir')[0]}</p>
                            <p>
                                Puedes comprimir tu imagen usando{' '}
                                <a
                                    href="https://www.iloveimg.com/compress-image"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 underline font-semibold"
                                >
                                    I❤IMG (Click aquí)
                                </a>
                            </p>
                        </div>
                    ) : (
                        <p>{error}</p>
                    )}
                </div>
            )}
        </div>
    );
}
