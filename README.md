# Akkshaya Kumar R V — Portfolio

A minimalist developer portfolio inspired by [dillion.io](https://dillion.io/), built with Next.js, shadcn/ui, and Magic UI.

## Features

- Single config file for all content: [`src/data/resume.tsx`](./src/data/resume.tsx)
- Responsive layout with blur-fade animations
- Dark / light theme toggle
- Static export ready for **GitHub Pages**

## Customize Your Portfolio

Edit [`src/data/resume.tsx`](./src/data/resume.tsx) to update:

- Name, headline, intro, about, experience, projects, achievements
- Education, skills, and contact message
- GitHub / LinkedIn URLs (currently placeholders)

Also update `url` in that file to your live site URL once deployed.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
```

Static files are output to the `out/` folder.

### Test a GitHub Pages build locally

For a **project site** (e.g. `username.github.io/Akkshay-Portfolio-website`):

```bash
# Windows PowerShell
$env:NEXT_PUBLIC_BASE_PATH="/Akkshay-Portfolio-website"; npm run build

# macOS / Linux
NEXT_PUBLIC_BASE_PATH=/Akkshay-Portfolio-website npm run build
```

For a **user site** (`username.github.io` repo), leave `NEXT_PUBLIC_BASE_PATH` unset:

```bash
npm run build
```

## Host on GitHub Pages

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

### 3. Automatic deploys

The workflow at [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) runs on every push to `main`:

- Installs dependencies
- Sets `NEXT_PUBLIC_BASE_PATH` automatically:
  - **Project site** (`YOUR_REPO_NAME` ≠ `username.github.io`): uses `/YOUR_REPO_NAME`
  - **User site** (repo named `username.github.io`): uses no base path (site at root)
- Builds the static site to `out/`
- Deploys to GitHub Pages

After the first successful run, your site will be live at:

| Site type | URL |
|-----------|-----|
| Project site | `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` |
| User site | `https://YOUR_USERNAME.github.io/` |

### 4. Update your profile links

In `src/data/resume.tsx`, set:

```ts
url: "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
```

…and replace the placeholder GitHub / LinkedIn URLs in `contact.social`.

## basePath Reference

GitHub Pages project sites are served from a subpath (`/repo-name`). This project reads `NEXT_PUBLIC_BASE_PATH` at build time and sets Next.js `basePath` + `assetPrefix`.

| Deployment | `NEXT_PUBLIC_BASE_PATH` | Example URL |
|------------|-------------------------|-------------|
| Project site | `/Akkshay-Portfolio-website` | `https://user.github.io/Akkshay-Portfolio-website/` |
| User site | *(empty / unset)* | `https://user.github.io/` |
| Local dev | *(empty / unset)* | `http://localhost:3000` |

The GitHub Actions workflow sets this automatically. Override manually only if you rename the repo or use a custom domain.

## Tech Stack

- Next.js 16 (App Router, static export)
- React 19, TypeScript
- Tailwind CSS, shadcn/ui, Magic UI
- Framer Motion

## License

MIT
