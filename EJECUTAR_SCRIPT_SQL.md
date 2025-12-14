# 🚨 GUÍA RÁPIDA: Ejecutar Script SQL en Supabase

## ⚠️ IMPORTANTE
El error "Error al actualizar la imagen" se debe a que **falta ejecutar el script SQL** en Supabase.

---

## 📋 PASOS A SEGUIR (5 minutos)

### PASO 1: Abrir Supabase SQL Editor

1. Ve a tu navegador (ya tienes Supabase abierto)
2. Selecciona tu proyecto **Angeles Nails**
3. En el menú lateral izquierdo, busca el icono **SQL Editor** (parece `</>` o tiene el texto "SQL")
4. Haz clic en **SQL Editor**

### PASO 2: Crear Nueva Query

1. Dentro del SQL Editor, haz clic en **"+ New query"** (botón arriba a la derecha)
2. Se abrirá un editor de texto vacío

### PASO 3: Copiar el Script

**Copia TODO el siguiente código:**

```sql
-- Script para añadir el campo hero_image_url a la tabla categories
-- y configurar el storage para las imágenes de categorías

-- 1. Añadir columna hero_image_url a la tabla categories
ALTER TABLE categories 
ADD COLUMN IF NOT EXISTS hero_image_url TEXT;

-- Comentario explicativo
COMMENT ON COLUMN categories.hero_image_url IS 'URL de la imagen principal de la categoría para mostrar en la página de servicios';

-- 2. Crear bucket de storage si no existe (esto puede requerir hacerlo desde la UI)
-- Ve a Storage > Create bucket > nombre: "images" > público: Sí

-- 3. Políticas de Storage (ejecutar después de crear el bucket)
-- Eliminar políticas existentes si existen (para evitar errores de duplicados)
DROP POLICY IF EXISTS "Allow authenticated uploads to images bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public access to images bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated updates to images bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated deletes from images bucket" ON storage.objects;

-- Política para permitir subir imágenes (usuarios autenticados)
CREATE POLICY "Allow authenticated uploads to images bucket"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'images');

-- Política para permitir acceso público a las imágenes
CREATE POLICY "Allow public access to images bucket"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'images');

-- Política para permitir actualizar imágenes (usuarios autenticados)
CREATE POLICY "Allow authenticated updates to images bucket"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'images');

-- Política para permitir eliminar imágenes (usuarios autenticados)
CREATE POLICY "Allow authenticated deletes from images bucket"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'images');
```

### PASO 4: Pegar y Ejecutar

1. **Pega** el código en el editor SQL de Supabase
2. Haz clic en el botón **"Run"** (esquina inferior derecha, o Ctrl+Enter)
3. Espera a que aparezca el mensaje **"Success. No rows returned"** (esto es normal)

### PASO 5: Verificar el Bucket "images"

1. En el menú lateral izquierdo, ve a **Storage**
2. Busca el bucket llamado **"images"**

**Si NO existe:**
   - Haz clic en **"New bucket"**
   - Nombre: `images`
   - **Marca la casilla "Public bucket"** ✅
   - Haz clic en **"Create bucket"**

**Si SÍ existe:**
   - Haz clic en el bucket `images`
   - Ve a **"Policies"** (pestaña arriba)
   - Verifica que tenga políticas (si ejecutaste el script, ya deberían estar)

---

## ✅ VERIFICACIÓN

Después de ejecutar el script:

1. Ve a **Table Editor** en Supabase
2. Selecciona la tabla **categories**
3. Deberías ver una nueva columna llamada **hero_image_url** (puede estar al final)

---

## 🎯 PROBAR LA FUNCIONALIDAD

1. Ve a `http://localhost:4321/admin`
2. Inicia sesión
3. Ve a la pestaña **Categorías**
4. Intenta subir una imagen
5. **Ahora debería funcionar** ✅

---

## 🆘 SI SIGUE SIN FUNCIONAR

Revisa la consola del navegador (F12 > Console) y dime qué error aparece. Puede ser:

- ❌ **"column does not exist"** → El script no se ejecutó correctamente
- ❌ **"permission denied"** → Falta configurar las políticas de Storage
- ❌ **"bucket not found"** → El bucket "images" no existe o no es público

---

## 📝 RESUMEN

1. ✅ Abrir SQL Editor en Supabase
2. ✅ Copiar y pegar el script completo
3. ✅ Ejecutar (Run)
4. ✅ Verificar que existe el bucket "images" (público)
5. ✅ Probar subir imagen en /admin

**Tiempo estimado: 3-5 minutos**
