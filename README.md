# Muhammed Ejas — Portfolio Resume Site

A single self-contained `index.html` file — no build step, no dependencies to install. This README walks through hosting it for free on GitHub Pages so you get a live URL like `https://<your-username>.github.io/<repo-name>/`.

## 1. Create the repository

1. Go to [github.com/new](https://github.com/new).
2. Repository name: something like `resume` or `portfolio` (this becomes part of your URL).
3. Set it to **Public** (GitHub Pages on the free plan requires a public repo).
4. Leave "Add a README" unchecked — you already have this one.
5. Click **Create repository**.

## 2. Upload the file

**Easiest way (no git needed):**
1. On your new repo's page, click **"Add file" → "Upload files"**.
2. Drag in `index.html` (and this `README.md` if you want).
3. Commit directly to the `main` branch.

**Or with git, if you prefer the command line:**
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
# copy index.html into this folder
git add index.html README.md
git commit -m "Add resume site"
git push
```

## 3. Turn on GitHub Pages

1. In your repo, go to **Settings → Pages** (left sidebar, under "Code and automation").
2. Under **Source**, choose **"Deploy from a branch"**.
3. Branch: **main**, folder: **/ (root)**. Click **Save**.
4. Wait 30–60 seconds, then refresh the page — GitHub will show your live URL:
   `https://<your-username>.github.io/<repo-name>/`

That's it — the page is live and free, and stays up as long as the repo exists.

## 4. Making future edits

Any time you want to update content (a new role, a new project, a palette change), just edit `index.html` and re-upload it the same way (or `git push` again) — GitHub Pages redeploys automatically within a minute or two.

## 5. Optional: custom domain

If you own a domain (e.g. `muhammedejas.com`), you can point it at this site:
1. In **Settings → Pages → Custom domain**, enter your domain and save (this creates a `CNAME` file in the repo automatically).
2. At your domain registrar, add a `CNAME` DNS record pointing to `<your-username>.github.io`.
3. Wait for DNS to propagate (can take a few hours), then check "Enforce HTTPS" back in the Pages settings.

## Notes

- The "Download Resume" button on the site links to your Google Drive file — make sure that file's sharing is set to **"Anyone with the link"** so visitors can actually open it.
- The site uses Google Fonts and the Tailwind CDN, both loaded from `<head>` — these work fine on GitHub Pages since it's a real public host (no sandbox restrictions there).
