# Muhammed Ejas — Portfolio

Structural engineer portfolio built with TanStack Start. The homepage is
pre-rendered to plain HTML at build time, so the site can be hosted as a fully
static bundle on GitHub Pages.

## Deploy to GitHub Pages

1. Connect this Lovable project to GitHub (Lovable editor: **+ menu → GitHub →
   Connect project**) and push to the `main` branch of your repository.
2. In the GitHub repository, go to **Settings → Pages → Build and deployment →
   Source** and select **GitHub Actions**.
3. Push (or re-run the "Deploy to GitHub Pages" workflow). The site goes live
   at `https://<username>.github.io/<repo-name>/`.

Every future push to `main` rebuilds and redeploys the site automatically.

### Custom domain

To serve the site from a custom domain (e.g. `mohdejas.com`):

1. Add the domain in **Settings → Pages → Custom domain** and configure the
   DNS records GitHub shows you.
2. In `.github/workflows/deploy.yml`, change `PAGES_BASE` to `/` (or delete the
   `env:` block under the build step).

## Local development

```sh
bun install
bun run dev
```

## Static build

```sh
# For GitHub Pages under a sub-path:
PAGES_BASE=/<repo-name>/ bun run build   # output in .output/public

# For hosting at a domain root:
bun run build
```
