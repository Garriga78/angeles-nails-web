import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DKXoufgr.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_0sKRk8TO.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { s as supabase } from '../../chunks/supabase_D7TddHP9.mjs';
export { renderers } from '../../renderers.mjs';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { data, error: error2 } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error2) throw error2;
      window.location.href = "/admin";
    } catch (err) {
      setError(err.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleLogin, children: [
    error && /* @__PURE__ */ jsx("div", { className: "bg-red-50 text-red-700 p-3 rounded-md text-sm", children: error }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-md shadow-sm -space-y-px", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email-address", className: "sr-only", children: "Email" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "email-address",
            name: "email",
            type: "email",
            autoComplete: "email",
            required: true,
            className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-stone-300 placeholder-stone-500 text-stone-900 rounded-t-md focus:outline-none focus:ring-gold-500 focus:border-gold-500 focus:z-10 sm:text-sm",
            placeholder: "Email",
            value: email,
            onChange: (e) => setEmail(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "sr-only", children: "Contraseña" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "password",
            name: "password",
            type: "password",
            autoComplete: "current-password",
            required: true,
            className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-stone-300 placeholder-stone-500 text-stone-900 rounded-b-md focus:outline-none focus:ring-gold-500 focus:border-gold-500 focus:z-10 sm:text-sm",
            placeholder: "Contraseña",
            value: password,
            onChange: (e) => setPassword(e.target.value)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: loading,
        className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brown-800 hover:bg-brown-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 disabled:opacity-50 transition-colors duration-200",
        children: loading ? "Entrando..." : "Entrar"
      }
    ) })
  ] });
}

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Acceso Admin | Angeles Nails Studio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center bg-cream-50 py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"> <div class="text-center"> <h2 class="mt-6 text-3xl font-serif font-bold text-brown-800">
Panel de Administración
</h2> <p class="mt-2 text-sm text-brown-600">
Inicia sesión para gestionar el contenido
</p> </div> ${renderComponent($$result2, "LoginForm", LoginForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/components/admin/LoginForm", "client:component-export": "default" })} </div> </div> ` })}`;
}, "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/pages/admin/login.astro", void 0);

const $$file = "C:/Users/aleja/OneDrive - Tictag Branding Digital/TICTAG/CLIENTES/ANGELES NAILS/WEB/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
