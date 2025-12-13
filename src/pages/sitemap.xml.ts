import { supabase } from "../lib/supabase";

export async function GET() {
    const siteUrl = "https://angelesnails.es"; // Replace with actual domain

    // Fetch dynamic data
    const { data: services } = await supabase
        .from("services")
        .select("category, slug, updated_at");

    const { data: posts } = await supabase
        .from("blog_posts")
        .select("slug, created_at")
        .eq("is_published", true);

    const pages = [
        "",
        "/manicura",
        "/pedicura",
        "/cejas",
        "/pestanas",
        "/peluqueria",
        "/blog",
        "/contacto",
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
            .map((page) => `
    <url>
        <loc>${siteUrl}${page}</loc>
        <changefreq>daily</changefreq>
        <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>
    `).join("")}
    
    ${services?.map((service) => `
    <url>
        <loc>${siteUrl}/${service.category}/${service.slug}</loc>
        <lastmod>${new Date(service.updated_at || Date.now()).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    `).join("") || ""}

    ${posts?.map((post) => `
    <url>
        <loc>${siteUrl}/blog/${post.slug}</loc>
        <lastmod>${new Date(post.created_at).toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    `).join("") || ""}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}
