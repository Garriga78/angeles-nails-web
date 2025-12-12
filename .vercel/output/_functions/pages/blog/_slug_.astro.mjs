import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_DKXoufgr.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_9OUHQbHX.mjs';
import { $ as $$CTAWhatsApp } from '../../chunks/CTAWhatsApp_Csy7W9Qh.mjs';
import { s as supabase } from '../../chunks/supabase_D7TddHP9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { data: post, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).eq("is_published", true).single();
  if (error || !post) {
    return Astro2.redirect("/404");
  }
  const publishedDate = new Date(post.published_at).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.title} | Blog Angeles Nails Studio`, "description": post.excerpt }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CTAWhatsApp", $$CTAWhatsApp, { "message": `Hola, he le\xEDdo el art\xEDculo "${post.title}" y tengo una pregunta` })}  ${maybeRenderHead()}<section class="relative h-[60vh] flex items-center justify-center overflow-hidden pt-32"> <div class="absolute inset-0 z-0"> <img${addAttribute(post.image_url || "/img/placeholder.svg", "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-b from-brown-900/80 via-brown-800/60 to-cream-50"></div> </div> <div class="text-center z-10 px-4 max-w-4xl mx-auto"> <span class="inline-block px-4 py-1 bg-gold-500 text-brown-900 text-xs font-semibold uppercase tracking-wider rounded-full mb-4"> ${post.category} </span> <h1 class="font-serif text-4xl md:text-6xl font-bold mb-4 text-cream-50"> ${post.title} </h1> <p class="text-cream-100 text-sm"> ${publishedDate} </p> </div> </section>  <article class="py-16 bg-white"> <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Excerpt --> <p class="text-xl text-brown-700 leading-relaxed mb-8 font-light italic border-l-4 border-gold-500 pl-6"> ${post.excerpt} </p> <!-- Content --> <div class="prose prose-lg max-w-none text-brown-800 prose-headings:font-serif prose-headings:text-brown-900 prose-a:text-gold-600 prose-a:no-underline hover:prose-a:text-brown-800 prose-strong:text-brown-900 prose-ul:text-brown-700 prose-ol:text-brown-700">${unescapeHTML(post.content)}</div> </div> </article>  <section class="py-16 bg-cream-100"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-serif font-bold text-brown-800 mb-4">
¿Te ha gustado este artículo?
</h2> <p class="text-brown-600 mb-8 text-lg">
Reserva tu cita y descubre todos nuestros servicios
</p> <a href="https://wa.me/34613302914?text=Hola,%20quiero%20reservar%20una%20cita" class="inline-block bg-brown-800 text-cream-50 px-10 py-4 rounded-full hover:bg-gold-500 hover:text-brown-900 transition-all duration-300 font-medium text-lg">
Reservar cita
</a> </div> </section>  <section class="py-8 bg-white"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <a href="/blog" class="inline-flex items-center text-gold-600 hover:text-brown-800 transition-colors font-medium"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg>
Volver al blog
</a> </div> </section> ` })}`;
}, "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
