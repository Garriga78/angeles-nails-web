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
                        <div className="w-12 h-12 bg-gray-50 rounded border border-gray-200 flex items-center justify-center p-1 relative group">
                            <img src={currentSVG} alt="SVG preview" className="w-full h-full object-contain" />
                            <button
                                type="button"
                                onClick={() => onUpload('')}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 shadow-sm hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
                                title="Eliminar SVG"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
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
