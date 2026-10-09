# GunderBlog

The source for https://gunderson.io/josh/, built with [Eleventy](https://www.11ty.dev/) (v3) and the
[Hacker](https://github.com/pages-themes/hacker) theme (CC0), published to GitHub Pages by a GitHub Actions workflow.

## Writing and previewing

```
npm install
npm start        # live preview at http://localhost:8080/josh/
npm run build    # one-off build into _site/
```

- Posts are Markdown files in `src/posts/`, named `YYYY-MM-DD-slug.md`, with `title`, `date`, optional `categories` and `tags`.
- Images and other files go under `src/media/` (`/josh/media/...`).
- Photo galleries use `{% gallery "dir", "a.jpg|b.jpg", "alt" %}`; thumbnails are generated at build time.

## Deploying

Pushing to `main` runs `.github/workflows/pages.yml`, which builds the site and publishes `_site/`.
In the repository settings, Pages -> Source must be set to **GitHub Actions**.
