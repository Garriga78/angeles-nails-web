import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, v as renderSlot, l as renderScript, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_DKXoufgr.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_0sKRk8TO.mjs';
import { $ as $$CTAWhatsApp } from '../chunks/CTAWhatsApp_Csy7W9Qh.mjs';
import 'clsx';
import { $ as $$Testimonials } from '../chunks/Testimonials_CSYJuceG.mjs';
import { s as supabase } from '../chunks/supabase_D7TddHP9.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ParallaxSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ParallaxSection;
  const { speed = 0.1, class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`parallax-section ${className}`, "class")}${addAttribute(speed, "data-speed")}> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/components/ParallaxSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/components/ParallaxSection.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: teamMembers, error } = await supabase.from("team_members").select("*").order("display_order", { ascending: true });
  if (error) {
    console.error("Error fetching team members:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Angeles Nails | Sal\xF3n de Belleza en Murcia - Plaza Santo Domingo", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CTAWhatsApp", $$CTAWhatsApp, { "data-astro-cid-j7pv25f6": true })}  ${maybeRenderHead()}<section class="relative h-screen flex items-center justify-center overflow-hidden" data-astro-cid-j7pv25f6> <!-- Desktop Video --> <video class="hidden md:block w-full h-full object-cover absolute inset-0 z-0" autoplay loop muted playsinline data-astro-cid-j7pv25f6> <source src="/img/1205.mp4" type="video/mp4" data-astro-cid-j7pv25f6> </video> <!-- Mobile Video --> <video class="block md:hidden w-full h-full object-cover absolute inset-0 z-0" autoplay loop muted playsinline data-astro-cid-j7pv25f6> <source src="/img/1205_480.mp4" type="video/mp4" data-astro-cid-j7pv25f6> </video> <!-- Grain Effect --> <div class="grain-overlay" data-astro-cid-j7pv25f6></div> <!-- Dark Overlay --> <div class="absolute inset-0 bg-black/50 z-10" data-astro-cid-j7pv25f6></div> <div class="text-center z-10 px-4 max-w-4xl mx-auto" data-astro-cid-j7pv25f6> <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white" data-astro-cid-j7pv25f6> <span class="hero-word inline-block opacity-0" data-astro-cid-j7pv25f6>Más</span> <span class="hero-word inline-block opacity-0" data-astro-cid-j7pv25f6>que</span> <span class="hero-word inline-block opacity-0" data-astro-cid-j7pv25f6>estética,</span><br data-astro-cid-j7pv25f6> <span class="text-gold-600 hero-word inline-block opacity-0" data-astro-cid-j7pv25f6>un</span> <span class="text-gold-600 hero-word inline-block opacity-0" data-astro-cid-j7pv25f6>ritual</span> <span class="text-gold-600 hero-word inline-block opacity-0" data-astro-cid-j7pv25f6>de</span> <span class="text-gold-600 hero-word inline-block opacity-0" data-astro-cid-j7pv25f6>belleza</span> </h1> <p class="text-xl md:text-2xl font-light text-white mb-8 hero-subtitle opacity-0" data-astro-cid-j7pv25f6>
Manicura, Pedicura, Cejas, Pestañas y Peluquería en el corazón
				de Murcia
</p> <p class="text-sm md:text-base text-white mb-10 hero-subtitle opacity-0" data-astro-cid-j7pv25f6>
Únete a las <strong data-astro-cid-j7pv25f6>+500 clientas</strong> que confían en nosotras
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center hero-cta opacity-0" data-astro-cid-j7pv25f6> <a href="https://wa.me/34613302914" class="bg-brown-800 text-cream-50 px-8 py-4 rounded-full hover:bg-gold-500 hover:text-brown-900 transition-all duration-300 font-medium shadow-lg" data-astro-cid-j7pv25f6>
Reservar Cita
</a> <a href="#servicios" class="border-2 border-brown-800 text-brown-800 px-8 py-4 rounded-full hover:bg-brown-800 hover:text-cream-50 transition-all duration-300 font-medium" data-astro-cid-j7pv25f6>
Ver Servicios
</a> </div> </div> </section>  <section id="servicios" class="py-24 bg-white overflow-hidden" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-5xl font-serif font-bold text-center mb-4 reveal-text opacity-0 text-brown-800" data-astro-cid-j7pv25f6>
Nuestros servicios
</h2> <p class="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto reveal-text opacity-0" data-astro-cid-j7pv25f6>
Experiencias únicas de belleza y bienestar diseñadas para ti
</p> <!-- Masonry Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto" data-astro-cid-j7pv25f6> <!-- Manicura - Tall --> <a href="/manicura-murcia" class="service-card group relative overflow-hidden rounded-lg block shadow-lg opacity-0 row-span-2" data-astro-cid-j7pv25f6> <div class="absolute inset-0" data-astro-cid-j7pv25f6> <img src="/img/manicura-2.jpg" alt="Manicura en Murcia" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 group-hover:from-black/50 group-hover:to-black/80 transition-all duration-500" data-astro-cid-j7pv25f6></div> </div> <!-- Animated Border --> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-j7pv25f6> <div class="absolute inset-0 border-2 border-gold-500 rounded-lg animate-border-glow" data-astro-cid-j7pv25f6></div> </div> <div class="relative h-full flex flex-col justify-end p-8 min-h-[500px]" data-astro-cid-j7pv25f6> <h3 class="text-white text-4xl md:text-5xl font-serif font-bold mb-3" data-astro-cid-j7pv25f6>
Manicura
</h3> <p class="text-white/90 text-lg mb-4" data-astro-cid-j7pv25f6>
Naturales, Semipermanente, Soft Gel, Polygel
</p> <div class="h-1 w-16 bg-gold-500" data-astro-cid-j7pv25f6></div> </div> </a> <!-- Pedicura - Normal --> <a href="/pedicura-murcia" class="service-card group relative overflow-hidden rounded-lg block shadow-lg opacity-0" data-astro-cid-j7pv25f6> <div class="absolute inset-0" data-astro-cid-j7pv25f6> <img src="/img/pedicura-2.jpg" alt="Pedicura en Murcia" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 group-hover:from-black/50 group-hover:to-black/80 transition-all duration-500" data-astro-cid-j7pv25f6></div> </div> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-j7pv25f6> <div class="absolute inset-0 border-2 border-gold-500 rounded-lg animate-border-glow" data-astro-cid-j7pv25f6></div> </div> <div class="relative h-full flex flex-col justify-end p-8 min-h-[350px]" data-astro-cid-j7pv25f6> <h3 class="text-white text-4xl font-serif font-bold mb-3" data-astro-cid-j7pv25f6>
Pedicura
</h3> <p class="text-white/90 mb-4" data-astro-cid-j7pv25f6>
Permanente, Polygel, Pediespa
</p> <div class="h-1 w-16 bg-gold-500" data-astro-cid-j7pv25f6></div> </div> </a> <!-- Cejas - Normal --> <a href="/cejas-murcia" class="service-card group relative overflow-hidden rounded-lg block shadow-lg opacity-0" data-astro-cid-j7pv25f6> <div class="absolute inset-0" data-astro-cid-j7pv25f6> <img src="/img/cejas-2.jpg" alt="Cejas en Murcia" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 group-hover:from-black/50 group-hover:to-black/80 transition-all duration-500" data-astro-cid-j7pv25f6></div> </div> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-j7pv25f6> <div class="absolute inset-0 border-2 border-gold-500 rounded-lg animate-border-glow" data-astro-cid-j7pv25f6></div> </div> <div class="relative h-full flex flex-col justify-end p-8 min-h-[350px]" data-astro-cid-j7pv25f6> <h3 class="text-white text-4xl font-serif font-bold mb-3" data-astro-cid-j7pv25f6>
Cejas
</h3> <p class="text-white/90 mb-4" data-astro-cid-j7pv25f6>
Diseño, Depilación, Laminado, Tinte
</p> <div class="h-1 w-16 bg-gold-500" data-astro-cid-j7pv25f6></div> </div> </a> <!-- Pestañas - Tall --> <a href="/pestanas-murcia" class="service-card group relative overflow-hidden rounded-lg block shadow-lg opacity-0 row-span-2" data-astro-cid-j7pv25f6> <div class="absolute inset-0" data-astro-cid-j7pv25f6> <img src="/img/pesatanas-2.jpg" alt="Pestañas en Murcia" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 group-hover:from-black/50 group-hover:to-black/80 transition-all duration-500" data-astro-cid-j7pv25f6></div> </div> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-j7pv25f6> <div class="absolute inset-0 border-2 border-gold-500 rounded-lg animate-border-glow" data-astro-cid-j7pv25f6></div> </div> <div class="relative h-full flex flex-col justify-end p-8 min-h-[500px]" data-astro-cid-j7pv25f6> <h3 class="text-white text-4xl md:text-5xl font-serif font-bold mb-3" data-astro-cid-j7pv25f6>
Pestañas
</h3> <p class="text-white/90 text-lg mb-4" data-astro-cid-j7pv25f6>
Clásicas, Volumen 3D-7D, Lifting
</p> <div class="h-1 w-16 bg-gold-500" data-astro-cid-j7pv25f6></div> </div> </a> <!-- Peluquería - Normal --> <a href="/peluqueria-murcia" class="service-card group relative overflow-hidden rounded-lg block shadow-lg opacity-0" data-astro-cid-j7pv25f6> <div class="absolute inset-0" data-astro-cid-j7pv25f6> <img src="/img/peluqueria-2.jpg" alt="Peluquería en Murcia" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 group-hover:from-black/50 group-hover:to-black/80 transition-all duration-500" data-astro-cid-j7pv25f6></div> </div> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-j7pv25f6> <div class="absolute inset-0 border-2 border-gold-500 rounded-lg animate-border-glow" data-astro-cid-j7pv25f6></div> </div> <div class="relative h-full flex flex-col justify-end p-8 min-h-[350px]" data-astro-cid-j7pv25f6> <h3 class="text-white text-4xl font-serif font-bold mb-3" data-astro-cid-j7pv25f6>
Peluquería
</h3> <p class="text-white/90 mb-4" data-astro-cid-j7pv25f6>
Secado, Planchado, Botox, Hidratación
</p> <div class="h-1 w-16 bg-gold-500" data-astro-cid-j7pv25f6></div> </div> </a> </div> </div> </section>  <section class="py-24 bg-white" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ParallaxSection", $$ParallaxSection, { "speed": 0.15, "class": "reveal-element opacity-0", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <img src="/img/salon1.jpg" alt="Rincón Insta-Friendly" class="w-full h-[500px] object-cover rounded-lg shadow-2xl" data-astro-cid-j7pv25f6> ` })} <div data-astro-cid-j7pv25f6> <h2 class="text-gold-600 font-sans font-bold tracking-widest uppercase mb-4 text-sm reveal-text opacity-0" data-astro-cid-j7pv25f6>
Tu Momento, Tu Estilo
</h2> <h3 class="text-4xl md:text-5xl font-serif font-bold text-black mb-6 leading-tight reveal-text opacity-0" data-astro-cid-j7pv25f6>
El rincón insta-friendly
</h3> <div class="space-y-4 text-lg text-gray-700 font-light leading-relaxed" data-astro-cid-j7pv25f6> <p class="reveal-text opacity-0" data-astro-cid-j7pv25f6>
Sabemos que tus uñas, tu mirada y tu estilo merecen
							ser compartidos. Por eso hemos creado un espacio
							especialmente diseñado con <strong data-astro-cid-j7pv25f6>iluminación profesional</strong> para que captures el resultado perfecto.
</p> <p class="reveal-text opacity-0" data-astro-cid-j7pv25f6>
Cada detalle cuenta: desde el anillo de luz que
							realza tus manos hasta el fondo neutro que hace
							brillar tu manicura. No es solo una foto, es el
							recuerdo de un momento de autocuidado.
</p> <p class="text-gold-700 font-medium reveal-text opacity-0" data-astro-cid-j7pv25f6>
📸 Comparte tu experiencia y etiquétanos - ¡Nos
							encanta verte brillar!
</p> </div> </div> </div> </div> </section>  <section class="py-24 bg-gray-50" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-5xl font-serif font-bold text-center mb-4 reveal-text opacity-0 text-brown-800" data-astro-cid-j7pv25f6>
Protocolo seguro
</h2> <p class="text-xl text-gray-600 mb-16 max-w-3xl mx-auto reveal-text opacity-0" data-astro-cid-j7pv25f6>
Tu salud y bienestar son nuestra prioridad. Cada servicio se
				realiza bajo estrictos estándares de higiene.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-12" data-astro-cid-j7pv25f6> <div class="reveal-element opacity-0" data-astro-cid-j7pv25f6> <div class="w-20 h-20 mx-auto mb-6 bg-gold-100 rounded-full flex items-center justify-center" data-astro-cid-j7pv25f6> <svg class="w-10 h-10 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-j7pv25f6></path> </svg> </div> <h4 class="text-xl font-bold mb-3" data-astro-cid-j7pv25f6>Esterilización Total</h4> <p class="text-gray-600" data-astro-cid-j7pv25f6>
Todas las herramientas pasan por un proceso de
						esterilización en autoclave de grado médico.
</p> </div> <div class="reveal-element opacity-0" data-astro-cid-j7pv25f6> <div class="w-20 h-20 mx-auto mb-6 bg-gold-100 rounded-full flex items-center justify-center" data-astro-cid-j7pv25f6> <svg class="w-10 h-10 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-j7pv25f6></path> </svg> </div> <h4 class="text-xl font-bold mb-3" data-astro-cid-j7pv25f6>Material Desechable</h4> <p class="text-gray-600" data-astro-cid-j7pv25f6>
Limas, topes y otros materiales de un solo uso se abren
						delante de ti y se desechan tras cada servicio.
</p> </div> <div class="reveal-element opacity-0" data-astro-cid-j7pv25f6> <div class="w-20 h-20 mx-auto mb-6 bg-gold-100 rounded-full flex items-center justify-center" data-astro-cid-j7pv25f6> <svg class="w-10 h-10 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" data-astro-cid-j7pv25f6></path> </svg> </div> <h4 class="text-xl font-bold mb-3" data-astro-cid-j7pv25f6>Productos de Salón</h4> <p class="text-gray-600" data-astro-cid-j7pv25f6>
Trabajamos exclusivamente con marcas profesionales
						reconocidas que cuidan tu salud.
</p> </div> </div> </div> </section>  <section class="py-24 bg-white" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-5xl font-serif font-bold text-center mb-4 reveal-text opacity-0 text-brown-800" data-astro-cid-j7pv25f6>
Nuestro equipo
</h2> <p class="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto reveal-text opacity-0" data-astro-cid-j7pv25f6>
Profesionales apasionadas por la belleza y el bienestar
</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-j7pv25f6> ${teamMembers && teamMembers.map((member) => renderTemplate`<div class="text-center reveal-element opacity-0" data-astro-cid-j7pv25f6> <div class="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200" data-astro-cid-j7pv25f6> <img${addAttribute(member.image_url, "src")}${addAttribute(`${member.name} - ${member.role}`, "alt")} class="w-full h-full object-cover" data-astro-cid-j7pv25f6> </div> <h4 class="text-xl font-bold mb-1" data-astro-cid-j7pv25f6> ${member.name} </h4> <p class="text-gold-600 font-medium" data-astro-cid-j7pv25f6> ${member.role} </p> </div>`)} </div> <div class="text-center mt-12" data-astro-cid-j7pv25f6> <a href="/nosotras" class="inline-block border-2 border-brown-800 text-brown-800 px-8 py-3 rounded-full hover:bg-brown-800 hover:text-cream-50 transition-all duration-300 font-medium" data-astro-cid-j7pv25f6>
Conoce al Equipo
</a> </div> </div> </section>  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "data-astro-cid-j7pv25f6": true })}  <section class="py-24 bg-gradient-to-br from-gold-100 to-cream-50" data-astro-cid-j7pv25f6> <div class="max-w-4xl mx-auto px-4 text-center" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-5xl font-serif font-bold mb-6 reveal-text opacity-0 text-brown-800" data-astro-cid-j7pv25f6>
¿Lista para tu transformación?
</h2> <p class="text-xl text-brown-600 mb-10 reveal-text opacity-0" data-astro-cid-j7pv25f6>
Reserva tu cita hoy y descubre por qué somos el salón de
				referencia en Murcia
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center reveal-text opacity-0" data-astro-cid-j7pv25f6> <a href="https://wa.me/34613302914?text=Hola,%20quiero%20reservar%20una%20cita" class="bg-brown-800 text-cream-50 px-10 py-4 rounded-full hover:bg-gold-500 hover:text-brown-900 transition-all duration-300 font-medium shadow-lg" data-astro-cid-j7pv25f6>
Reservar por WhatsApp
</a> <a href="/contacto" class="border-2 border-brown-800 text-brown-800 px-10 py-4 rounded-full hover:bg-brown-800 hover:text-cream-50 transition-all duration-300 font-medium" data-astro-cid-j7pv25f6>
Ver Horarios
</a> </div> </div> </section>  ${renderScript($$result2, "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/pages/index.astro?astro&type=script&index=0&lang.ts")}   ` })}`;
}, "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/pages/index.astro", void 0);

const $$file = "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
