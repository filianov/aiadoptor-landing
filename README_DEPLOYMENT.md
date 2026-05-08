# AIAdoptor Landing Deployment

Static multilingual landing page for AIAdoptor.

## What is included

- Main English page: `/`
- German page: `/de/`
- Russian page: `/ru/`
- Ukrainian page: `/uk/`
- SEO files: `robots.txt`, `sitemap.xml`
- GitHub Pages custom domain file: `CNAME`
- GitHub Pages passthrough marker: `.nojekyll`

## Local checks

Run these before publishing:

```bash
node scripts/generate-locales.js
node --check app.js
xmllint --noout sitemap.xml
python3 -m http.server 4175
```

Then open:

```text
http://127.0.0.1:4175/
http://127.0.0.1:4175/de/
http://127.0.0.1:4175/ru/
http://127.0.0.1:4175/uk/
```

## GitHub Pages publishing

1. Create a new GitHub repository, for example `aiadoptor-landing`.
2. In this folder, initialize Git:

```bash
git init
git add .
git commit -m "Initial AIAdoptor landing page"
git branch -M main
git remote add origin git@github.com:YOUR_GITHUB_USERNAME/aiadoptor-landing.git
git push -u origin main
```

3. In GitHub, open repository settings.
4. Go to Pages.
5. Choose Deploy from a branch.
6. Select branch `main` and folder `/ (root)`.
7. Save.
8. In the custom domain field, use:

```text
aiadoptor.com
```

## DNS

For `aiadoptor.com`, point DNS to GitHub Pages.

Recommended setup:

- `www` as a CNAME to `YOUR_GITHUB_USERNAME.github.io`
- apex domain `aiadoptor.com` with GitHub Pages A/AAAA records from GitHub documentation

After DNS updates, enable HTTPS in GitHub Pages settings.

## Form and automation roadmap

The current contact form is static and opens an email draft to `aiadoptor@gmail.com`.
To collect leads in a database, send automatic emails and register people for events, connect the form to an external service such as Tally, Brevo, Make, Calendly or Zoom.
