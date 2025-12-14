-- Script para añadir el campo hero_image_url a la tabla categories
-- y configurar el storage para las imágenes de categorías
-- Ejecutar este script en el SQL Editor de Supabase

-- 1. Añadir columna hero_image_url a la tabla categories
ALTER TABLE categories 
ADD COLUMN IF NOT EXISTS hero_image_url TEXT;

-- Comentario explicativo
COMMENT ON COLUMN categories.hero_image_url IS 'URL de la imagen principal de la categoría para mostrar en la página de servicios';

-- 2. Crear bucket de storage si no existe (esto puede requerir hacerlo desde la UI)
-- Ve a Storage > Create bucket > nombre: "images" > público: Sí

-- 3. Políticas de Storage (ejecutar después de crear el bucket)
-- Política para permitir subir imágenes (usuarios autenticados)
CREATE POLICY IF NOT EXISTS "Allow authenticated uploads to images bucket"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'images');

-- Política para permitir acceso público a las imágenes
CREATE POLICY IF NOT EXISTS "Allow public access to images bucket"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'images');

-- Política para permitir actualizar imágenes (usuarios autenticados)
CREATE POLICY IF NOT EXISTS "Allow authenticated updates to images bucket"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'images');

-- Política para permitir eliminar imágenes (usuarios autenticados)
CREATE POLICY IF NOT EXISTS "Allow authenticated deletes from images bucket"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'images');

