import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DKXoufgr.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_9OUHQbHX.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - P\xE1gina no encontrada", "description": "La p\xE1gina que buscas no existe." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-center min-h-[70vh] px-4"> <div class="text-center"> <h1 class="text-6xl font-serif text-brown-800 mb-4">404</h1> <p class="text-xl text-brown-600 mb-8">
Lo sentimos, la página que buscas no existe.
</p> <a href="/" class="inline-block bg-brown-800 text-cream-50 px-8 py-3 rounded-full hover:bg-gold-500 hover:text-brown-900 transition-colors duration-300">
Volver al Inicio
</a> </div> </div> ` })}`;
}, "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/pages/404.astro", void 0);

const $$file = "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
