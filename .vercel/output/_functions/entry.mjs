import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BQt2tlgQ.mjs';
import { manifest } from './manifest_Dqk4OrrT.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin/login.astro.mjs');
const _page3 = () => import('./pages/admin.astro.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/cejas-murcia/diseno-cejas-murcia.astro.mjs');
const _page7 = () => import('./pages/cejas-murcia/laminado-cejas-murcia.astro.mjs');
const _page8 = () => import('./pages/cejas-murcia/tinte-henna-murcia.astro.mjs');
const _page9 = () => import('./pages/cejas-murcia.astro.mjs');
const _page10 = () => import('./pages/contacto.astro.mjs');
const _page11 = () => import('./pages/manicura-murcia/manicura-hombres-murcia.astro.mjs');
const _page12 = () => import('./pages/manicura-murcia/polygel-murcia.astro.mjs');
const _page13 = () => import('./pages/manicura-murcia/retirada-permanente-murcia.astro.mjs');
const _page14 = () => import('./pages/manicura-murcia/retirada-polygel-murcia.astro.mjs');
const _page15 = () => import('./pages/manicura-murcia/semipermanente-murcia.astro.mjs');
const _page16 = () => import('./pages/manicura-murcia/soft-gel-murcia.astro.mjs');
const _page17 = () => import('./pages/manicura-murcia/unas-naturales-murcia.astro.mjs');
const _page18 = () => import('./pages/manicura-murcia.astro.mjs');
const _page19 = () => import('./pages/nosotras.astro.mjs');
const _page20 = () => import('./pages/pedicura-murcia/pedicura-clasica-murcia.astro.mjs');
const _page21 = () => import('./pages/pedicura-murcia/pedicura-spa-murcia.astro.mjs');
const _page22 = () => import('./pages/pedicura-murcia/semipermanente-murcia.astro.mjs');
const _page23 = () => import('./pages/pedicura-murcia.astro.mjs');
const _page24 = () => import('./pages/peluqueria-murcia/corte-murcia.astro.mjs');
const _page25 = () => import('./pages/peluqueria-murcia/peinado-murcia.astro.mjs');
const _page26 = () => import('./pages/peluqueria-murcia/tratamientos-murcia.astro.mjs');
const _page27 = () => import('./pages/peluqueria-murcia.astro.mjs');
const _page28 = () => import('./pages/pestanas-murcia/extensiones-clasicas-murcia.astro.mjs');
const _page29 = () => import('./pages/pestanas-murcia/lifting-pestanas-murcia.astro.mjs');
const _page30 = () => import('./pages/pestanas-murcia/volumen-ruso-murcia.astro.mjs');
const _page31 = () => import('./pages/pestanas-murcia.astro.mjs');
const _page32 = () => import('./pages/servicios.astro.mjs');
const _page33 = () => import('./pages/index.astro.mjs');
const _page34 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/login.astro", _page2],
    ["src/pages/admin/index.astro", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/cejas-murcia/diseno-cejas-murcia.astro", _page6],
    ["src/pages/cejas-murcia/laminado-cejas-murcia.astro", _page7],
    ["src/pages/cejas-murcia/tinte-henna-murcia.astro", _page8],
    ["src/pages/cejas-murcia/index.astro", _page9],
    ["src/pages/contacto.astro", _page10],
    ["src/pages/manicura-murcia/manicura-hombres-murcia.astro", _page11],
    ["src/pages/manicura-murcia/polygel-murcia.astro", _page12],
    ["src/pages/manicura-murcia/retirada-permanente-murcia.astro", _page13],
    ["src/pages/manicura-murcia/retirada-polygel-murcia.astro", _page14],
    ["src/pages/manicura-murcia/semipermanente-murcia.astro", _page15],
    ["src/pages/manicura-murcia/soft-gel-murcia.astro", _page16],
    ["src/pages/manicura-murcia/unas-naturales-murcia.astro", _page17],
    ["src/pages/manicura-murcia/index.astro", _page18],
    ["src/pages/nosotras.astro", _page19],
    ["src/pages/pedicura-murcia/pedicura-clasica-murcia.astro", _page20],
    ["src/pages/pedicura-murcia/pedicura-spa-murcia.astro", _page21],
    ["src/pages/pedicura-murcia/semipermanente-murcia.astro", _page22],
    ["src/pages/pedicura-murcia/index.astro", _page23],
    ["src/pages/peluqueria-murcia/corte-murcia.astro", _page24],
    ["src/pages/peluqueria-murcia/peinado-murcia.astro", _page25],
    ["src/pages/peluqueria-murcia/tratamientos-murcia.astro", _page26],
    ["src/pages/peluqueria-murcia/index.astro", _page27],
    ["src/pages/pestanas-murcia/extensiones-clasicas-murcia.astro", _page28],
    ["src/pages/pestanas-murcia/lifting-pestanas-murcia.astro", _page29],
    ["src/pages/pestanas-murcia/volumen-ruso-murcia.astro", _page30],
    ["src/pages/pestanas-murcia/index.astro", _page31],
    ["src/pages/servicios.astro", _page32],
    ["src/pages/index.astro", _page33],
    ["src/pages/[...slug].astro", _page34]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2d6a719a-135e-4ddd-88f3-09f9e398b8f2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
