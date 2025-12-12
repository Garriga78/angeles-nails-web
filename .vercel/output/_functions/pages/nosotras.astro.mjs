import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_DKXoufgr.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_9OUHQbHX.mjs';
import { $ as $$CTAWhatsApp } from '../chunks/CTAWhatsApp_Csy7W9Qh.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_CSYJuceG.mjs';
import { s as supabase } from '../chunks/supabase_D7TddHP9.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Nosotras = createComponent(async ($$result, $$props, $$slots) => {
  const { data: teamMembers, error } = await supabase.from("team_members").select("*").order("display_order", { ascending: true });
  if (error) {
    console.error("Error fetching team members:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nosotras | Angeles Nails Studio - Nuestro Equipo en Murcia", "description": "Conoce al equipo de profesionales de Angeles Nails Studio. M\xE1s de 10 a\xF1os de experiencia en belleza y bienestar en el coraz\xF3n de Murcia.", "data-astro-cid-qku47c7e": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CTAWhatsApp", $$CTAWhatsApp, { "data-astro-cid-qku47c7e": true })}  ${maybeRenderHead()}<section id="hero" class="relative h-screen flex items-center justify-center overflow-hidden pt-32" data-astro-cid-qku47c7e> <div class="absolute inset-0 z-0" id="hero-media" data-astro-cid-qku47c7e> <!-- Video placeholder - will be replaced with actual video --> <img src="/img/nosotras.jpg" alt="Angeles Nails Background" class="w-full h-full object-cover" data-astro-cid-qku47c7e> <div class="absolute inset-0 bg-black/50" data-astro-cid-qku47c7e></div> </div> <div class="text-center z-10 px-4 max-w-4xl mx-auto" data-astro-cid-qku47c7e> <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white reveal-text opacity-0" data-astro-cid-qku47c7e>
Nuestra<br data-astro-cid-qku47c7e>historia
</h1> <p class="text-xl md:text-2xl text-white max-w-3xl mx-auto reveal-text opacity-0" data-astro-cid-qku47c7e>
Más de una década dedicadas a realzar tu belleza natural
</p> </div> <!-- Scroll indicator --> <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10" data-astro-cid-qku47c7e> <div class="w-6 h-10 border-2 border-cream-50 rounded-full flex justify-center" data-astro-cid-qku47c7e> <div class="w-1 h-3 bg-cream-50 rounded-full mt-2 animate-bounce" data-astro-cid-qku47c7e></div> </div> </div> </section>  <div class="relative overflow-hidden bg-cream-50 py-12" data-astro-cid-qku47c7e> <div class="crossing-text whitespace-nowrap" data-astro-cid-qku47c7e> <span class="font-serif text-8xl md:text-[12rem] lg:text-[16rem] font-bold text-brown-800/10" data-astro-cid-qku47c7e>
BELLEZA · EXCELENCIA · PASIÓN · BELLEZA · EXCELENCIA · PASIÓN ·
</span> </div> </div>  <section class="py-32 bg-cream-50 relative overflow-hidden" data-astro-cid-qku47c7e> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-qku47c7e> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center" data-astro-cid-qku47c7e> <!-- Parallax Image --> <div class="reveal-element opacity-0 relative" data-astro-cid-qku47c7e> <div class="parallax-image sticky top-32" data-astro-cid-qku47c7e> <div class="relative group" data-astro-cid-qku47c7e> <img src="/img/salon.jpg" alt="Salón Angeles Nails" class="w-full h-[600px] object-cover rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-105" data-astro-cid-qku47c7e> <div class="absolute -bottom-8 -right-8 w-40 h-40 bg-gold-500 rounded-full opacity-20 blur-3xl" data-astro-cid-qku47c7e></div> <div class="absolute -top-8 -left-8 w-40 h-40 bg-gold-400 rounded-full opacity-20 blur-3xl" data-astro-cid-qku47c7e></div> </div> </div> </div> <!-- Content --> <div class="space-y-8" data-astro-cid-qku47c7e> <h2 class="text-4xl md:text-5xl font-serif font-bold text-brown-800 reveal-text opacity-0 leading-tight" data-astro-cid-qku47c7e>
Donde la belleza se encuentra con la excelencia
</h2> <div class="space-y-6 text-lg md:text-xl text-brown-700 leading-relaxed" data-astro-cid-qku47c7e> <p class="reveal-text opacity-0" data-astro-cid-qku47c7e>
En <strong data-astro-cid-qku47c7e>Angeles Nails Studio</strong>, creemos
                            que cada visita debe ser una experiencia única de
                            autocuidado y transformación.
</p> <p class="reveal-text opacity-0" data-astro-cid-qku47c7e>
Nuestro salón es un espacio donde la <strong data-astro-cid-qku47c7e>técnica profesional</strong> se une con la <strong data-astro-cid-qku47c7e>atención personalizada</strong>.
</p> <p class="reveal-text opacity-0" data-astro-cid-qku47c7e>
Lo que nos hace especiales es nuestra <strong data-astro-cid-qku47c7e>pasión por los detalles</strong>. Todo está pensado para que te sientas especial.
</p> <div class="reveal-text opacity-0 pt-4" data-astro-cid-qku47c7e> <div class="inline-block px-8 py-4 bg-gold-500/10 border-l-4 border-gold-500" data-astro-cid-qku47c7e> <p class="text-2xl md:text-3xl font-serif font-bold text-brown-800" data-astro-cid-qku47c7e>
+500 clientas satisfechas
</p> <p class="text-sm text-brown-600 mt-1" data-astro-cid-qku47c7e>
nos avalan cada día
</p> </div> </div> </div> </div> </div> </div> </section>  <div class="relative overflow-hidden bg-white py-12" data-astro-cid-qku47c7e> <div class="crossing-text-reverse whitespace-nowrap" data-astro-cid-qku47c7e> <span class="font-serif text-8xl md:text-[12rem] lg:text-[16rem] font-bold text-gold-500/40" data-astro-cid-qku47c7e>
PROFESIONALIDAD · HIGIENE · CALIDAD · PROFESIONALIDAD · HIGIENE
                ·
</span> </div> </div>  <section class="py-32 bg-white relative" data-astro-cid-qku47c7e> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-qku47c7e> <h2 class="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-brown-800 reveal-text opacity-0" data-astro-cid-qku47c7e>
Nuestros valores
</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-12" data-astro-cid-qku47c7e> <!-- Valor 1 --> <div class="reveal-element opacity-0 text-center group cursor-pointer" data-astro-cid-qku47c7e> <div class="mb-8 transform transition-transform duration-500 group-hover:scale-110" data-astro-cid-qku47c7e> <span class="text-8xl" data-astro-cid-qku47c7e>✨</span> </div> <h3 class="text-2xl md:text-3xl font-serif font-bold mb-4 text-brown-800" data-astro-cid-qku47c7e>
Excelencia
</h3> <p class="text-brown-600 leading-relaxed text-lg" data-astro-cid-qku47c7e>
Máxima calidad en cada servicio con productos
                        profesionales de primera línea.
</p> </div> <!-- Valor 2 --> <div class="reveal-element opacity-0 text-center group cursor-pointer" data-astro-cid-qku47c7e> <div class="mb-8 transform transition-transform duration-500 group-hover:scale-110" data-astro-cid-qku47c7e> <span class="text-8xl" data-astro-cid-qku47c7e>🛡️</span> </div> <h3 class="text-2xl md:text-3xl font-serif font-bold mb-4 text-brown-800" data-astro-cid-qku47c7e>
Higiene
</h3> <p class="text-brown-600 leading-relaxed text-lg" data-astro-cid-qku47c7e>
Protocolo de esterilización de grado médico. Tu salud es
                        nuestra prioridad absoluta.
</p> </div> <!-- Valor 3 --> <div class="reveal-element opacity-0 text-center group cursor-pointer" data-astro-cid-qku47c7e> <div class="mb-8 transform transition-transform duration-500 group-hover:scale-110" data-astro-cid-qku47c7e> <span class="text-8xl" data-astro-cid-qku47c7e>💖</span> </div> <h3 class="text-2xl md:text-3xl font-serif font-bold mb-4 text-brown-800" data-astro-cid-qku47c7e>
Pasión
</h3> <p class="text-brown-600 leading-relaxed text-lg" data-astro-cid-qku47c7e>
Cada cliente es único y merece una atención
                        personalizada y dedicada.
</p> </div> </div> </div> </section>  <section class="py-32 bg-gradient-to-br from-brown-50 to-cream-100 relative overflow-hidden" data-astro-cid-qku47c7e> <!-- Background decoration --> <div class="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" data-astro-cid-qku47c7e></div> <div class="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" data-astro-cid-qku47c7e></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-astro-cid-qku47c7e> <h2 class="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-brown-800 reveal-text opacity-0" data-astro-cid-qku47c7e>
Nuestro equipo
</h2> <p class="text-xl md:text-2xl text-brown-600 text-center mb-24 max-w-3xl mx-auto reveal-text opacity-0" data-astro-cid-qku47c7e>
Profesionales apasionadas, certificadas y en constante formación
</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12" data-astro-cid-qku47c7e> <!-- Team members with staggered reveal --> <div class="reveal-element opacity-0 group" data-astro-cid-qku47c7e> <div class="relative mb-6 overflow-hidden rounded-2xl" data-astro-cid-qku47c7e> <img src="/img/Eliana.jpg" alt="Eliana" class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110" data-astro-cid-qku47c7e> <div class="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-qku47c7e></div> </div> <h3 class="text-2xl md:text-3xl font-serif font-bold mb-2 text-brown-800" data-astro-cid-qku47c7e>
Eliana
</h3> <p class="text-gold-600 font-medium mb-3 text-lg" data-astro-cid-qku47c7e>
Manicurista
</p> <p class="text-brown-600 leading-relaxed" data-astro-cid-qku47c7e>
Especialista en manicura rusa y polygel. +8 años de
                        experiencia.
</p> </div> <div class="reveal-element opacity-0 group" data-astro-cid-qku47c7e> <div class="relative mb-6 overflow-hidden rounded-2xl" data-astro-cid-qku47c7e> <img src="/img/Andrea.jpg" alt="Andrea" class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110" data-astro-cid-qku47c7e> <div class="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-qku47c7e></div> </div> <h3 class="text-2xl md:text-3xl font-serif font-bold mb-2 text-brown-800" data-astro-cid-qku47c7e>
Andrea
</h3> <p class="text-gold-600 font-medium mb-3 text-lg" data-astro-cid-qku47c7e>
Estilista
</p> <p class="text-brown-600 leading-relaxed" data-astro-cid-qku47c7e>
Experta en tratamientos capilares y peinados de última
                        tendencia.
</p> </div> <div class="reveal-element opacity-0 group" data-astro-cid-qku47c7e> <div class="relative mb-6 overflow-hidden rounded-2xl" data-astro-cid-qku47c7e> <img src="/img/Nore.jpg" alt="Nore" class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110" data-astro-cid-qku47c7e> <div class="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-qku47c7e></div> </div> <h3 class="text-2xl md:text-3xl font-serif font-bold mb-2 text-brown-800" data-astro-cid-qku47c7e>
Nore
</h3> <p class="text-gold-600 font-medium mb-3 text-lg" data-astro-cid-qku47c7e>
Pestañas & Cejas
</p> <p class="text-brown-600 leading-relaxed" data-astro-cid-qku47c7e>
Certificada en lifting y diseño. Mirada perfecta
                        garantizada.
</p> </div> <div class="reveal-element opacity-0 group" data-astro-cid-qku47c7e> <div class="relative mb-6 overflow-hidden rounded-2xl" data-astro-cid-qku47c7e> <img src="/img/Angie.jpg" alt="Angie" class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110" data-astro-cid-qku47c7e> <div class="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-qku47c7e></div> </div> <h3 class="text-2xl md:text-3xl font-serif font-bold mb-2 text-brown-800" data-astro-cid-qku47c7e>
Angie
</h3> <p class="text-gold-600 font-medium mb-3 text-lg" data-astro-cid-qku47c7e>
Manicurista
</p> <p class="text-brown-600 leading-relaxed" data-astro-cid-qku47c7e>
Especialista en nail art. Creatividad y precisión en
                        cada diseño.
</p> </div> </div> </div> </section>  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "data-astro-cid-qku47c7e": true })} <section class="py-40 bg-gradient-to-br from-brown-900 via-brown-800 to-black text-cream-50 relative overflow-hidden" data-astro-cid-qku47c7e> <div class="absolute inset-0 opacity-10" data-astro-cid-qku47c7e> <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" data-astro-cid-qku47c7e></div> </div> <div class="max-w-5xl mx-auto px-4 text-center relative z-10" data-astro-cid-qku47c7e> <h2 class="text-4xl md:text-5xl font-serif font-bold mb-8 reveal-text opacity-0 leading-tight text-cream-50" data-astro-cid-qku47c7e>
¿Lista para conocernos?
</h2> <p class="text-xl md:text-2xl mb-16 text-cream-200 reveal-text opacity-0 max-w-3xl mx-auto" data-astro-cid-qku47c7e>
Ven a visitarnos y descubre por qué somos el salón de confianza
                de cientos de clientas en Murcia
</p> <div class="flex flex-col sm:flex-row gap-6 justify-center reveal-text opacity-0" data-astro-cid-qku47c7e> <a href="https://wa.me/34613302914?text=Hola,%20quiero%20reservar%20una%20cita" class="group relative px-12 py-5 text-xl font-medium" data-astro-cid-qku47c7e> <span class="relative z-10 text-brown-900 group-hover:text-cream-50 transition-colors duration-300" data-astro-cid-qku47c7e>Reservar cita</span> <div class="absolute inset-0 bg-gold-500 group-hover:bg-transparent border-2 border-gold-500 transition-all duration-300" data-astro-cid-qku47c7e></div> </a> <a href="/contacto" class="group relative px-12 py-5 text-xl font-medium" data-astro-cid-qku47c7e> <span class="relative z-10 text-cream-50 group-hover:text-brown-900 transition-colors duration-300" data-astro-cid-qku47c7e>Cómo llegar</span> <div class="absolute inset-0 bg-transparent group-hover:bg-cream-50 border-2 border-cream-50 transition-all duration-300" data-astro-cid-qku47c7e></div> </a> </div> </div> </section>  ${renderScript($$result2, "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/pages/nosotras.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/pages/nosotras.astro", void 0);

const $$file = "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/pages/nosotras.astro";
const $$url = "/nosotras";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Nosotras,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
