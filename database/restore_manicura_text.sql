-- Restaurar texto SEO para la categoría Manicura
-- Este script restaura el texto que se borró accidentalmente

UPDATE categories 
SET seo_text = '<p>En <strong>Angeles Nails Studio</strong>, la manicura no es solo un servicio, es un <strong>ritual de autocuidado</strong> diseñado para que tus manos luzcan impecables durante semanas. Desde uñas naturales hasta las técnicas más avanzadas en polygel, cada tratamiento se realiza con la máxima atención al detalle.</p><p>Nuestro equipo de manicuristas expertas utiliza productos profesionales de salón y sigue estrictos protocolos de higiene para garantizar resultados duraderos y seguros.</p>'
WHERE slug = 'manicura';

-- Verificar el cambio
SELECT slug, title, seo_text FROM categories WHERE slug = 'manicura';
