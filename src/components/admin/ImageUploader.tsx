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
                <div className="relative w-40 h-40 overflow-hidden rounded-lg shadow-md border border-gray-200">
                    <img
                        src={currentImage}
                        alt="Vista previa"
                        className="w-full h-full object-cover"
                    />
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
            {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
    );
}
