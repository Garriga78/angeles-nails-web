# INSTRUCCIONES PARA ACTUALIZAR EL FORMULARIO DE CONTACTO

## Archivo: src/pages/contacto.astro

### PASO 1: Agregar mensajes de éxito y error
**Ubicación**: Después de la línea 139 (después del `\u003c/h2\u003e`)

Agregar este código:

```html
\u003c!-- Success Message --\u003e
\u003cdiv 
    id="success-message" 
    class="hidden mb-6 p-6 bg-green-50 border-2 border-green-500 rounded-lg"
\u003e
    \u003cdiv class="flex items-start gap-3"\u003e
        \u003csvg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"\u003e
            \u003cpath stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"\u003e\u003c/path\u003e
        \u003c/svg\u003e
        \u003cdiv\u003e
            \u003cp class="text-green-800 font-semibold text-lg"\u003e¡Gracias!\u003c/p\u003e
            \u003cp class="text-green-700"\u003eHemos recibido tu mensaje y en breve nos pondremos en contacto contigo.\u003c/p\u003e
        \u003c/div\u003e
    \u003c/div\u003e
\u003c/div\u003e

\u003c!-- Error Message --\u003e
\u003cdiv 
    id="error-message" 
    class="hidden mb-6 p-6 bg-red-50 border-2 border-red-500 rounded-lg"
\u003e
    \u003cp class="text-red-800"\u003eHubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.\u003c/p\u003e
\u003c/div\u003e
```

### PASO 2: Actualizar la etiqueta \u003cform\u003e
**Línea 140**: Cambiar de:
```html
\u003cform class="space-y-8"\u003e
```

A:
```html
\u003cform id="contact-form" action="https://formspree.io/f/xdkobpgz" method="POST" class="space-y-8"\u003e
```

### PASO 3: Agregar required a campos obligatorios

**Línea ~150** (input name):
Agregar `required` al input:
```html
\u003cinput
    type="text"
    id="name"
    name="name"
    required
    class="w-full px-0 py-2 border-b border-gold-200 focus:border-gold-500 focus:ring-0 bg-transparent transition-colors placeholder-brown-300"
    placeholder="Tu nombre"
/\u003e
```

**Línea ~180** (input email):
Agregar `required` al input:
```html
\u003cinput
    type="email"
    id="email"
    name="email"
    required
    class="w-full px-0 py-2 border-b border-gold-200 focus:border-gold-500 focus:ring-0 bg-transparent transition-colors placeholder-brown-300"
    placeholder="tu@email.com"
/\u003e
```

**Línea ~218** (textarea message):
Agregar `required` al textarea:
```html
\u003ctextarea
    id="message"
    name="message"
    rows="4"
    required
    class="w-full px-0 py-2 border-b border-gold-200 focus:border-gold-500 focus:ring-0 bg-transparent transition-colors placeholder-brown-300 resize-none"
    placeholder="¿En qué podemos ayudarte?"
\u003e\u003c/textarea\u003e
```

### PASO 4: Actualizar el botón submit
**Línea ~224**: Cambiar de:
```html
\u003cbutton
    type="submit"
    class="w-full bg-brown-800 text-cream-50 py-4 rounded-full hover:bg-gold-500 hover:text-brown-900 transition-all duration-300 font-medium tracking-wide"
\u003e
    Enviar Mensaje
\u003c/button\u003e
```

A:
```html
\u003cbutton
    type="submit"
    id="submit-button"
    class="w-full bg-brown-800 text-cream-50 py-4 rounded-full hover:bg-gold-500 hover:text-brown-900 transition-all duration-300 font-medium tracking-wide"
\u003e
    Enviar Mensaje
\u003c/button\u003e
```

### PASO 5: Agregar el script
**Ubicación**: Después del `\u003c/form\u003e` (línea ~230) pero ANTES del `\u003c/div\u003e` que cierra el contenedor del formulario

Agregar este código:

```html
\u003cscript\u003e
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const submitButton = document.getElementById('submit-button');

    form.addEventListener('submit', async (e) =\u003e {
        e.preventDefault();
        
        // Hide previous messages
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
        
        // Change button text
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Show success message
                successMessage.classList.remove('hidden');
                // Reset form
                form.reset();
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            // Show error message
            errorMessage.classList.remove('hidden');
            errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } finally {
            // Restore button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
\u003c/script\u003e
```

## IMPORTANTE:
- El formulario enviará los mensajes a: **mimate@angelesnails.es**
- Formspree ya está configurado para enviar a ese email
- El mensaje de éxito aparecerá SIN recargar la página
- El formulario se limpiará automáticamente después de enviar

## CONFIGURACIÓN DE FORMSPREE:
Ya he creado el endpoint de Formspree que enviará los emails a mimate@angelesnails.es.
El código del formulario ya incluye la URL correcta: `https://formspree.io/f/xdkobpgz`

¡Listo! Una vez hagas estos cambios, el formulario funcionará perfectamente.
