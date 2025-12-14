# Gestor de Imágenes de Categorías

## Descripción
Esta actualización permite subir y cambiar las imágenes de las categorías principales (Manicura, Pedicura, Cejas, Pestañas, Peluquería) desde el panel de administración.

## Pasos para implementar

### 1. Actualizar la base de datos en Supabase

1. Accede a tu proyecto en [Supabase](https://supabase.com)
2. Ve a **SQL Editor**
3. Copia y pega el contenido del archivo `database/add_category_images.sql`
4. Ejecuta el script haciendo clic en **Run**

El script añadirá la columna `hero_image_url` a la tabla `categories`.

### 2. Verificar el Storage de Supabase

Asegúrate de que el bucket `images` existe en Supabase Storage:

1. Ve a **Storage** en el panel de Supabase
2. Si no existe el bucket `images`, créalo:
   - Haz clic en **New bucket**
   - Nombre: `images`
   - **Public bucket**: Sí (marcado)
   - Haz clic en **Create bucket**

### 3. Configurar políticas de Storage (si es necesario)

Si tienes problemas para subir imágenes, verifica las políticas de Storage:

1. Ve a **Storage** > **Policies**
2. Selecciona el bucket `images`
3. Asegúrate de tener políticas que permitan:
   - **INSERT**: Para subir nuevas imágenes
   - **SELECT**: Para ver las imágenes
   
Ejemplo de política para INSERT:
```sql
CREATE POLICY "Allow authenticated uploads"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'images');
```

Ejemplo de política para SELECT (público):
```sql
CREATE POLICY "Allow public access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'images');
```

### 4. Usar el gestor de categorías

1. Accede al panel de administración: `/admin`
2. Inicia sesión si es necesario
3. Ve a la pestaña **Categorías**
4. Para cada categoría verás:
   - **Imagen actual**: Preview de la imagen si ya existe
   - **Subir/Cambiar imagen**: Botón para seleccionar una nueva imagen
   - **Texto SEO**: Editor de texto enriquecido para el contenido SEO

5. Para subir o cambiar una imagen:
   - Haz clic en el área de subida de archivos
   - Selecciona una imagen (JPG o PNG recomendado)
   - Tamaño recomendado: 1200x800px
   - La imagen se subirá automáticamente a Supabase Storage
   - Haz clic en **Guardar Cambios** para confirmar

### 5. Verificar los cambios

1. Ve a la página de servicios: `/servicios`
2. Las imágenes de las categorías principales deberían mostrarse correctamente
3. Si no ves cambios, limpia la caché del navegador (Ctrl + F5)

## Estructura de archivos modificados

- `src/components/admin/CategoryManager.tsx`: Componente actualizado con gestor de imágenes
- `src/pages/servicios.astro`: Actualizado para usar imágenes de la tabla categories
- `database/add_category_images.sql`: Script SQL para actualizar la base de datos

## Notas técnicas

- Las imágenes se almacenan en Supabase Storage en la carpeta `categories/`
- El nombre de archivo incluye el slug de la categoría y un timestamp para evitar conflictos
- Las URLs son públicas y se guardan en la columna `hero_image_url` de la tabla `categories`
- El componente `ImageUploader` existente se reutiliza para mantener consistencia en la UI

## Solución de problemas

### Las imágenes no se suben
- Verifica que el bucket `images` existe y es público
- Revisa las políticas de Storage en Supabase
- Comprueba la consola del navegador para errores

### Las imágenes no se muestran en la página
- Verifica que la URL se guardó correctamente en la base de datos
- Limpia la caché del navegador
- Comprueba que el bucket es público

### Error de permisos
- Asegúrate de estar autenticado en el panel de administración
- Verifica las políticas de Storage en Supabase
