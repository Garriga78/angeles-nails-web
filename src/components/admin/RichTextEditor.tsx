import { useState, useRef, useEffect } from 'react';
import ImageUploader from './ImageUploader';

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
    const [showImageUploader, setShowImageUploader] = useState(false);
    const editorRef = useRef<HTMLDivElement>(null);

    // Sync external value changes to editor
    useEffect(() => {
        if (editorRef.current && editorRef.current.innerHTML !== value) {
            editorRef.current.innerHTML = value;
        }
    }, [value]);

    const handleInput = () => {
        if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
    };

    const execCommand = (command: string, value: string | undefined = undefined) => {
        document.execCommand(command, false, value);
        editorRef.current?.focus();
    };

    const formatBold = () => execCommand('bold');
    const formatItalic = () => execCommand('italic');
    const formatH2 = () => execCommand('formatBlock', '<h2>');
    const formatH3 = () => execCommand('formatBlock', '<h3>');
    const formatParagraph = () => execCommand('formatBlock', '<p>');
    const formatUnorderedList = () => execCommand('insertUnorderedList');
    const formatOrderedList = () => execCommand('insertOrderedList');

    const handleImageUpload = (url: string) => {
        const img = `<img src="${url}" alt="Imagen" class="w-full rounded-lg my-4" />`;
        execCommand('insertHTML', img);
        setShowImageUploader(false);
    };

    return (
        <div className="border border-gray-300 rounded-md">
            {/* Toolbar */}
            <div className="bg-gray-50 border-b border-gray-300 p-2 flex flex-wrap gap-1">
                <button
                    type="button"
                    onClick={formatBold}
                    className="px-3 py-1 text-sm font-bold bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Negrita"
                >
                    B
                </button>
                <button
                    type="button"
                    onClick={formatItalic}
                    className="px-3 py-1 text-sm italic bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Cursiva"
                >
                    I
                </button>

                <div className="w-px bg-gray-300 mx-1"></div>

                <button
                    type="button"
                    onClick={formatH2}
                    className="px-3 py-1 text-sm font-semibold bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Título H2"
                >
                    H2
                </button>
                <button
                    type="button"
                    onClick={formatH3}
                    className="px-3 py-1 text-sm font-semibold bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Título H3"
                >
                    H3
                </button>
                <button
                    type="button"
                    onClick={formatParagraph}
                    className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Párrafo"
                >
                    P
                </button>

                <div className="w-px bg-gray-300 mx-1"></div>

                <button
                    type="button"
                    onClick={formatUnorderedList}
                    className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Lista con viñetas"
                >
                    • Lista
                </button>
                <button
                    type="button"
                    onClick={formatOrderedList}
                    className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Lista numerada"
                >
                    1. Lista
                </button>

                <div className="w-px bg-gray-300 mx-1"></div>

                <button
                    type="button"
                    onClick={() => setShowImageUploader(!showImageUploader)}
                    className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
                    title="Insertar imagen"
                >
                    🖼️ Imagen
                </button>
            </div>

            {/* Image Uploader */}
            {showImageUploader && (
                <div className="bg-blue-50 border-b border-gray-300 p-3">
                    <p className="text-sm text-gray-700 mb-2">Sube una imagen para insertarla en el contenido:</p>
                    <ImageUploader
                        onUpload={handleImageUpload}
                        currentImage=""
                    />
                </div>
            )}

            {/* ContentEditable Editor */}
            <div
                ref={editorRef}
                contentEditable
                onInput={handleInput}
                className="w-full p-4 min-h-[400px] max-h-[600px] overflow-y-auto focus:outline-none focus:ring-2 focus:ring-gold-500 prose prose-sm max-w-none"
                style={{
                    fontSize: '14px',
                    lineHeight: '1.6'
                }}
            />

            {/* Help Text */}
            <div className="bg-gray-50 border-t border-gray-300 p-2 text-xs text-gray-600">
                💡 Tip: Selecciona texto y haz clic en los botones para aplicar formato. Verás el resultado en tiempo real.
            </div>
        </div>
    );
}
