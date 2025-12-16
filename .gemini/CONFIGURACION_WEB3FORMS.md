# CONFIGURACIÓN DEL FORMULARIO DE CONTACTO

## ⚠️ IMPORTANTE: Necesitas obtener tu Access Key de Web3Forms

### Paso 1: Obtener tu Access Key GRATUITA

1. Ve a: **https://web3forms.com/**
2. Haz clic en **"Get Started - It's Free"**
3. Ingresa tu email: **mimate@angelesnails.es**
4. Recibirás un email con tu **Access Key** (es gratis, no requiere tarjeta)
5. Copia la Access Key que te envíen

### Paso 2: Actualizar el código

Abre el archivo: `src/components/ContactForm.tsx`

Busca la línea 20 (aproximadamente):
```typescript
formDataToSend.append('access_key', 'b8c7e4f3-9d2a-4b1c-8e5f-6a7d9c3b2e1a');
```

Reemplaza `'b8c7e4f3-9d2a-4b1c-8e5f-6a7d9c3b2e1a'` con tu Access Key real.

Por ejemplo, si tu Access Key es `abc123-def456-ghi789`, quedaría:
```typescript
formDataToSend.append('access_key', 'abc123-def456-ghi789');
```

### Paso 3: Guardar y probar

1. Guarda el archivo
2. Recarga la página de contacto
3. Prueba el formulario
4. Deberías recibir el email en **mimate@angelesnails.es**

## ✅ Ventajas de Web3Forms:

- ✅ **100% Gratuito** (hasta 250 emails/mes)
- ✅ **Sin registro complicado** - solo necesitas tu email
- ✅ **Emails instantáneos** a mimate@angelesnails.es
- ✅ **Sin límites** de formularios
- ✅ **Funciona sin recargar la página**

## 🔍 Verificación:

Una vez configurado correctamente:
1. El formulario NO recargará la página
2. Verás el mensaje verde de éxito
3. Recibirás un email en mimate@angelesnails.es con:
   - Nombre del contacto
   - Email del contacto
   - Teléfono
   - Asunto seleccionado
   - Mensaje

## 📧 Formato del email que recibirás:

```
De: noreply@web3forms.com
Para: mimate@angelesnails.es
Asunto: Contacto Angeles Nails - [Asunto seleccionado]

Nombre: [Nombre del usuario]
Email: [Email del usuario]
Teléfono: [Teléfono del usuario]

Mensaje:
[Mensaje del usuario]
```

## ⚡ Alternativa rápida (si no quieres registrarte):

Si prefieres no usar Web3Forms, puedo configurar el formulario para que use:
- **EmailJS** (también gratuito)
- **Netlify Forms** (si despliegas en Netlify)
- **Tu propio servidor SMTP**

¿Cuál prefieres?
