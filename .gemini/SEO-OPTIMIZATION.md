# Optimización SEO - Angeles Nails Studio

## Resumen de cambios realizados:

### 1. Componente SEO mejorado ✅
- Agregado soporte para keywords
- Metatags OpenGraph optimizados para Facebook, Twitter, WhatsApp
- Dimensiones de imagen OG (1200x630)
- Locale español (es_ES)
- Alt text para imágenes OG

### 2. Páginas que necesitan actualización de SEO:

#### Homepage (/)
```astro
<Layout
    title="Angeles Nails Studio | Salón de Belleza Premium en Murcia - Plaza Santo Domingo"
    description="Salón de belleza de alta gama en Murcia. Manicura rusa, pedicura, cejas, pestañas y peluquería. +500 clientas satisfechas. Reserva tu cita en Plaza Santo Domingo."
    keywords="salón belleza Murcia, manicura Murcia, pedicura Murcia, cejas Murcia, pestañas Murcia, peluquería Murcia, manicura rusa, polygel, semipermanente, Plaza Santo Domingo"
    image="/img/og-home.jpg"
>
```

#### /servicios
```astro
<Layout
    title="Nuestros Servicios | Angeles Nails Studio - Belleza Integral en Murcia"
    description="Descubre nuestra gama completa de servicios: Manicura, Pedicura, Cejas, Pestañas y Peluquería. Tratamientos exclusivos en el centro de Murcia."
    keywords="servicios belleza Murcia, tratamientos estética Murcia, manicura profesional, pedicura spa, diseño cejas, extensiones pestañas, tratamientos capilares"
    image="/img/tratamientos-capilares.png"
>
```

#### /manicura
```astro
<Layout
    title="Manicura en Murcia | Uñas Perfectas - Angeles Nails Studio"
    description="Servicios de manicura en Murcia: uñas naturales, semipermanente, soft gel y polygel. Técnica profesional, higiene clínica y resultados duraderos en Plaza Santo Domingo."
    keywords="manicura Murcia, manicura rusa Murcia, semipermanente Murcia, polygel Murcia, soft gel, uñas esculpidas, nail art Murcia, manicura profesional"
    image={manicuraImg}
>
```

#### /pedicura
```astro
<Layout
    title="Pedicura en Murcia | Cuidado Profesional de Pies - Angeles Nails Studio"
    description="Pedicura profesional en Murcia: tratamiento completo, semipermanente, polygel y pediespa. Salud y belleza para tus pies en Plaza Santo Domingo."
    keywords="pedicura Murcia, pedicura spa Murcia, pediespa, pedicura semipermanente, tratamiento pies, pedicura profesional, cuidado pies Murcia"
    image={pedicuraImg}
>
```

#### /cejas
```astro
<Layout
    title="Diseño de Cejas en Murcia | Microblading y Laminado - Angeles Nails Studio"
    description="Diseño profesional de cejas en Murcia: laminado, tinte, henna y microblading. Realza tu mirada con técnicas avanzadas en Plaza Santo Domingo."
    keywords="cejas Murcia, diseño cejas Murcia, laminado cejas, microblading Murcia, tinte cejas, henna cejas, depilación cejas, visagismo cejas"
    image={cejasImg}
>
```

#### /pestanas
```astro
<Layout
    title="Extensiones de Pestañas en Murcia | Lifting y Volumen - Angeles Nails Studio"
    description="Extensiones de pestañas en Murcia: pelo a pelo, volumen ruso, megavolumen y lifting. Mirada perfecta 24/7 en Plaza Santo Domingo."
    keywords="extensiones pestañas Murcia, lifting pestañas Murcia, volumen ruso, megavolumen pestañas, pestañas pelo a pelo, lash lifting Murcia"
    image={pestanasImg}
>
```

#### /peluqueria
```astro
<Layout
    title="Peluquería en Murcia | Tratamientos Capilares Premium - Angeles Nails Studio"
    description="Peluquería profesional en Murcia: botox capilar, alisados, hidratación profunda y peinados. Salud y belleza para tu cabello en Plaza Santo Domingo."
    keywords="peluquería Murcia, botox capilar Murcia, alisado brasileño, tratamiento capilar, hidratación cabello, peinados Murcia, peluquería profesional"
    image={peluqueriaImg}
>
```

#### /nosotras
```astro
<Layout
    title="Nosotras | Equipo Profesional - Angeles Nails Studio Murcia"
    description="Conoce al equipo de Angeles Nails Studio: profesionales apasionadas por la belleza y el bienestar. Experiencia, formación continua y atención personalizada."
    keywords="equipo Angeles Nails, profesionales belleza Murcia, estilistas Murcia, manicuristas profesionales, equipo salón belleza"
    image="/img/team-og.jpg"
>
```

#### /contacto
```astro
<Layout
    title="Contacto y Reservas | Angeles Nails Studio - Plaza Santo Domingo, Murcia"
    description="Reserva tu cita en Angeles Nails Studio. Plaza Santo Domingo, Murcia. Teléfono: +34 613 30 29 14. Horario: L-V 10:00-20:00. ¡Te esperamos!"
    keywords="contacto Angeles Nails, reservar cita Murcia, salón belleza Plaza Santo Domingo, teléfono salón belleza Murcia, horario Angeles Nails"
    image="/img/salon-og.jpg"
>
```

#### /blog
```astro
<Layout
    title="Blog | Consejos de Belleza y Tendencias - Angeles Nails Studio"
    description="Descubre los mejores consejos de belleza, tendencias en uñas, cuidado de cejas y pestañas en nuestro blog. Tips profesionales y novedades del sector."
    keywords="blog belleza, consejos uñas, tendencias manicura, cuidado pestañas, tips belleza, blog Angeles Nails, novedades belleza Murcia"
    image="/img/blog-principal_com.png"
>
```

#### /cookies
```astro
<Layout
    title="Política de Cookies | Angeles Nails Studio"
    description="Información sobre el uso de cookies en Angeles Nails Studio. Conoce qué cookies utilizamos y cómo gestionarlas."
    keywords="política cookies, cookies Angeles Nails, privacidad web"
>
```

#### /privacidad
```astro
<Layout
    title="Política de Privacidad | Angeles Nails Studio"
    description="Política de privacidad y protección de datos de Angeles Nails Studio. Cumplimiento RGPD y derechos del usuario."
    keywords="política privacidad, protección datos, RGPD, privacidad Angeles Nails"
>
```

### 3. Subcategorías dinámicas ([...slug].astro)

El archivo ya tiene buena estructura, pero necesita keywords dinámicas:

```astro
const keywords = `${service.hero_title}, ${service.category} Murcia, ${service.hero_title} Murcia, salón belleza Murcia, tratamiento ${service.category}, Angeles Nails Studio`;

<Layout
    title={service.title}
    description={service.intro_description?.substring(0, 160) || service.hero_subtitle}
    keywords={keywords}
    image={service.hero_image_url}
>
```

### 4. Imágenes OG recomendadas

Crear/optimizar estas imágenes (1200x630px):
- `/img/og-default.jpg` - Imagen por defecto (logo + slogan)
- `/img/og-home.jpg` - Para homepage
- `/img/team-og.jpg` - Para página nosotras
- `/img/salon-og.jpg` - Para contacto

### 5. Schema.org JSON-LD

El componente SEO ya incluye Schema.org para:
- BeautySalon (páginas generales)
- BlogPosting (artículos del blog)

Incluye datos estructurados de:
- Dirección: Plaza Santo Domingo, Murcia
- Teléfono: +34 613 30 29 14
- Horario: L-V 10:00-20:00
- Rango de precios: $$

## Próximos pasos:

1. ✅ Actualizar Layout en cada página con title, description y keywords optimizados
2. ⏳ Crear imágenes OG optimizadas (1200x630px)
3. ⏳ Agregar keywords dinámicas en subcategorías
4. ⏳ Verificar que todas las imágenes tengan alt text descriptivo
5. ⏳ Implementar breadcrumbs para mejorar SEO
6. ⏳ Agregar FAQ Schema en páginas relevantes

## Beneficios de estas optimizaciones:

✅ **Mejor posicionamiento en Google** para búsquedas locales
✅ **Compartición optimizada** en redes sociales (Facebook, Twitter, WhatsApp)
✅ **Rich snippets** en resultados de búsqueda
✅ **Mayor CTR** con descripciones atractivas
✅ **Experiencia de usuario mejorada** con información clara
