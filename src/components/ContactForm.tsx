import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: 'servicios',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Preparar datos para Web3Forms
            const formDataToSend = new FormData();
            formDataToSend.append('access_key', '8fa9e30d-1c15-461f-ab32-74eacbdc1f37');
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('subject', `Contacto Angeles Nails - ${formData.subject}`);
            formDataToSend.append('message', formData.message);
            formDataToSend.append('to', 'mimate@angelesnails.es');

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    subject: 'servicios',
                    message: ''
                });
                // Scroll to success message
                setTimeout(() => {
                    document.getElementById('success-message')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 100);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-gold-100">
            <h2 className="text-3xl font-serif text-brown-800 mb-8">
                Envíanos un mensaje
            </h2>

            {/* Success Message */}
            {status === 'success' && (
                <div
                    id="success-message"
                    className="mb-6 p-6 bg-green-50 border-2 border-green-500 rounded-lg animate-fade-in"
                >
                    <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div>
                            <p className="text-green-800 font-semibold text-lg">¡Gracias!</p>
                            <p className="text-green-700">Hemos recibido tu mensaje y en breve nos pondremos en contacto contigo.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
                <div className="mb-6 p-6 bg-red-50 border-2 border-red-500 rounded-lg animate-fade-in">
                    <p className="text-red-800">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-brown-600 uppercase tracking-wider"
                    >
                        Nombre Completo
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-2 border-b border-gold-200 focus:border-gold-500 focus:ring-0 bg-transparent transition-colors placeholder-brown-300"
                        placeholder="Tu nombre"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-brown-600 uppercase tracking-wider"
                        >
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-0 py-2 border-b border-gold-200 focus:border-gold-500 focus:ring-0 bg-transparent transition-colors placeholder-brown-300"
                            placeholder="+34 000 000 000"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-brown-600 uppercase tracking-wider"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-0 py-2 border-b border-gold-200 focus:border-gold-500 focus:ring-0 bg-transparent transition-colors placeholder-brown-300"
                            placeholder="tu@email.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-brown-600 uppercase tracking-wider"
                    >
                        Asunto
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-0 py-2 border-b border-gold-200 focus:border-gold-500 focus:ring-0 bg-transparent transition-colors text-brown-800"
                    >
                        <option value="servicios">Reserva de Servicios</option>
                        <option value="consulta">Otras Consultas</option>
                        <option value="empleo">¿Quieres trabajar con nosotros?</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-brown-600 uppercase tracking-wider"
                    >
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-2 border-b border-gold-200 focus:border-gold-500 focus:ring-0 bg-transparent transition-colors placeholder-brown-300 resize-none"
                        placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-brown-800 text-cream-50 py-4 rounded-full hover:bg-gold-500 hover:text-brown-900 transition-all duration-300 font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
