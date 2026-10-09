import Image from "@11ty/eleventy-img";
import path from "node:path";

const TZ = "America/Los_Angeles";
const fmt = (opts) => (d) => new Intl.DateTimeFormat("en-US", { timeZone: TZ, ...opts }).format(new Date(d));

export default function (eleventyConfig) {
  // small helpers for the Atom feed (we don't use the RSS plugin: it also pulls in Eleventy's base-URL rewriting,
  // which would double the /josh/ prefix on every link)
  eleventyConfig.addFilter("dateToRfc3339", (d) => new Date(d).toISOString().replace(/\.\d{3}Z$/, "Z"));
  eleventyConfig.addFilter("absoluteUrl", (url, base) => new URL(url, base).href);
  eleventyConfig.addFilter("getNewestCollectionItemDate", (items) => items.reduce((m, i) => (i.date > m ? i.date : m), items[0].date));
  eleventyConfig.addFilter("htmlToAbsoluteUrls", (html, base) =>
    (html || "").replace(/(\s(?:href|src))="(\/(?!\/)[^"]*)"/g, (m, attr, u) => attr + '="' + new URL(u, base).href + '"'));
  // newest 30 posts for the Atom feed
  eleventyConfig.addCollection("feedPosts", (api) => api.getFilteredByTag("post").sort((a, b) => b.date - a.date).slice(0, 30));
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addLayoutAlias("post", "post.njk");
  eleventyConfig.addLayoutAlias("default", "base.njk");

  eleventyConfig.addFilter("year", (d) => fmt({ year: "numeric" })(d));
  eleventyConfig.addFilter("shortDate", fmt({ month: "short", day: "numeric" }));
  eleventyConfig.addFilter("longDate", fmt({ year: "numeric", month: "long", day: "numeric" }));
  // URL date comes from the post filename (YYYY-MM-DD-slug.md), so timezones can never shift a URL
  eleventyConfig.addFilter("fileDatePath", (inputPath, fallbackDate) => {
    const m = String(inputPath).match(/(\d{4})-(\d{2})-(\d{2})-[^/\\]*$/);
    return m ? m[1] + "/" + m[2] + "/" + m[3] : fallbackDate;
  });
  eleventyConfig.addFilter("datePath", (d) => { const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date(d)).map((x) => [x.type, x.value])); return `${p.year}/${p.month}/${p.day}`; });
  // plain-text snippet of rendered post HTML, cut at a word boundary
  eleventyConfig.addFilter("excerpt", (html, words = 50) => {
    const text = (html || "")
      .replace(/<(script|style|figure|figcaption|h[1-6])[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&quot;/g, '"')
      .replace(/&#0?39;|&apos;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
      .replace(/\s+/g, " ")
      .trim();
    const w = text.split(" ");
    if (w.length <= words) return text;
    return w.slice(0, words).join(" ").replace(/[\s,;:.\-–—]+$/, "") + "…";
  });
  // src of the first <img> in rendered post HTML (a generated thumbnail for galleries)
  eleventyConfig.addFilter("firstImage", (html) => {
    const m = (html || "").match(/<img[^>]+src="([^"]*\/media\/thumbs\/[^"]+)"/i);
    return m ? m[1] : "";
  });
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());

  eleventyConfig.addCollection("postsByYear", (api) => {
    const posts = api.getFilteredByTag("post").sort((a, b) => b.date - a.date);
    const years = new Map();
    for (const p of posts) {
      const y = fmt({ year: "numeric" })(p.date);
      if (!years.has(y)) years.set(y, []);
      years.get(y).push(p);
    }
    return [...years].map(([year, items]) => ({ year, items }));
  });

  const slug = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "tag";
  eleventyConfig.addFilter("tagSlug", slug);
  const termList = (field) => (api) => {
    const map = new Map();
    for (const p of api.getFilteredByTag("post").sort((a, b) => b.date - a.date))
      for (const t of p.data[field] || []) {
        if (t === "post") continue;
        const k = slug(t);
        if (!map.has(k)) map.set(k, { slug: k, name: t, posts: [] });
        const e = map.get(k);
        if (!e.posts.includes(p)) e.posts.push(p);
      }
    return [...map.values()].map((e) => ({ ...e, count: e.posts.length })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  };
  eleventyConfig.addCollection("tagList", termList("tags"));
  eleventyConfig.addCollection("categoryList", termList("categories"));

  // {% gallery "2008/12", "IMG_9787.JPG,IMG_9788.JPG" %} -> thumbnails linking to full-size originals.
  // Thumbnails are generated at build time into /media/thumbs/.
  eleventyConfig.addAsyncShortcode("gallery", async function (dir, files, alt = "") {
    const out = [];
    for (const f of files.split(files.includes("|") ? "|" : ",").map((s) => s.trim()).filter(Boolean)) {
      const src = path.join("src/media", dir, f);
      const meta = await Image(src, {
        widths: [240],
        formats: ["jpeg"],
        outputDir: "_site/media/thumbs/",
        urlPath: "/josh/media/thumbs/",
        filenameFormat: (id, s, width, format) => `${dir.replace(/[/]/g, "-")}-${path.parse(f).name}-${width}.${format}`,
      });
      const t = meta.jpeg[0];
      out.push(`<a href="/josh/media/${dir}/${f}"><img src="${t.url}" width="${t.width}" height="${t.height}" alt="${alt || f}" loading="lazy"></a>`);
    }
    return `<div class="gallery">${out.join("\n")}</div>`;
  });

  // Any <a href="/josh/media/x.jpg"><img src="/josh/media/x.jpg" width="W"> is a thumbnail link:
  // generate a W-wide thumbnail from the full-size file and use that for the <img>.
  eleventyConfig.addTransform("thumbs", async function (content) {
    if (!(this.page.outputPath || "").endsWith(".html")) return content;
    const re = /(<a [^>]*href="(\/josh\/media\/[^"]+\.(?:jpe?g|png|gif))"[^>]*>\s*)<img src="\2" width="(\d+)"([^>]*)>/gi;
    const jobs = [...content.matchAll(re)];
    if (!jobs.length) return content;
    let out = "";
    let last = 0;
    for (const m of jobs) {
      const rel = decodeURIComponent(m[2].slice("/josh/".length));
      const ext = path.extname(rel).toLowerCase();
      const format = ext === ".png" ? "png" : "jpeg";
      const meta = await Image(path.join("src", rel), {
        widths: [Math.min(Math.max(Number(m[3]) * 2, 200), 480)],
        formats: [format],
        outputDir: "_site/media/thumbs/",
        urlPath: "/josh/media/thumbs/",
        filenameFormat: (id, s, width, fmt) => `${rel.replace(/[\\/]/g, "-").replace(/\.[^.]+$/, "")}-${width}.${fmt}`,
      });
      const t = meta[format][0];
      out += content.slice(last, m.index) + `${m[1]}<img src="${t.url}" width="${t.width}" height="${t.height}"${m[4]}>`;
      last = m.index + m[0].length;
    }
    return out + content.slice(last);
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    pathPrefix: "/josh/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
