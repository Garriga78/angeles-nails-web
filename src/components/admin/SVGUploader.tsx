import { useState } from 'react';
import { supabase } from '../../lib/supabase';

interface SVGUploaderProps {
    onUpload: (url: string) => void;
    currentSVG?: string;
}

export default function SVGUploader({ onUpload, currentSVG }: SVGUploaderProps) {
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true);
            setError(null);

            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('Debes seleccionar un archivo SVG');
            }

            const file = event.target.files[0];

            // Validate SVG file
            if (!file.type.includes('svg')) {
                throw new Error('El archivo debe ser un SVG');
            }

            const fileExt = 'svg';
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('images')
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            const { data } = supabase.storage.from('images').getPublicUrl(filePath);
            onUpload(data.publicUrl);
        } catch (error: any) {
            setError(error.message);
            console.error('Error uploading SVG:', error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="space-y-2">
            <div className="flex items-center gap-4">
                <label className="cursor-pointer">
                    <input
                        type="file"
                        accept=".svg,image/svg+xml"
                        onChange={handleUpload}
                        disabled={uploading}
                        className="hidden"
                    />
                    <span className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors border border-gray-300">
                        {uploading ? 'Subiendo...' : 'Subir SVG'}
                    </span>
                </label>
                {currentSVG && (
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 bg-gray-50 rounded border border-gray-200 flex items-center justify-center p-1">
                            <img src={currentSVG} alt="SVG preview" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xs text-gray-500">SVG actual</span>
                    </div>
                )}
            </div>
            {error && (
                <p className="text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}
