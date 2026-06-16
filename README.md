# Chandni Adil Welfare Foundation

A static Next.js + TypeScript website for the Chandni Adil Welfare Foundation work in Mohra Syedan.

The site is built for Vercel and does not need a database. Content is stored in TypeScript files and images live in `public/images`.

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Edit In VS Code

Open this folder in VS Code:

```bash
code .
```

Useful files:

- `src/app/site-data.ts` - foundation name, contact details, projects, timeline, and photo story text.
- `src/app/page.tsx` - homepage layout and sections.
- `src/app/globals.css` - global colors, font tokens, and page defaults.
- `public/images` - photos used by the website.

## Replace Photos

1. Add real photos to `public/images`.
2. Update image paths in `src/app/site-data.ts`.
3. Keep paths starting with `/images/`, for example `/images/masjid-before.jpg`.

Current image files:

- `foundation-logo.png`
- `community-bench-group.png`
- `bench-installation.png`
- `bench-varnish.png`
- `woodwork-shop.png`
- `masjid-steps-work.png`
- `foundation-site-founders.png`
- `completed-pavilion.png`

The older `mohra-syedan-hero.png` file is only a temporary placeholder and is not currently used by the page.

## GitHub From VS Code

If this folder is not on GitHub yet:

1. Create an empty GitHub repository.
2. In VS Code, open this folder.
3. Use Source Control to commit the files.
4. Add the GitHub repository as the remote.
5. Push the branch.

Terminal version:

```bash
git add .
git commit -m "Create foundation website base"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Deploy On Vercel

1. Push this folder to GitHub.
2. In Vercel, create a new project from the GitHub repo.
3. Vercel should detect Next.js automatically.
4. Use the build command: `npm run build`.
5. Each future push to GitHub will trigger a new Vercel deployment.

## Commands

```bash
npm run dev
npm run build
npm run lint
```
