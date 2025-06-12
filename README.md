# Zach Aries – Portfolio

This is my personal portfolio website, built with [Next.js](https://nextjs.org/) using the **App Router**, styled with [Chakra UI](https://chakra-ui.com/), and deployed to GitHub Pages as a static site.

🔗 **Live site:** [https://zjaries.github.io/portfolio/](https://zjaries.github.io/portfolio/)

---

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/blog/next-15)
- **Routing:** App Router (`app/` directory)
- **Styling:** Chakra UI
- **Deployment:** GitHub Pages (via static export)
- **Languages:** TypeScript, React 19

---

## 🚀 Getting Started

### Install dependencies

```bash
yarn install
```

### Run locally

```bash
yarn dev
```

### Build for production

```bash
yarn build
```

This triggers Next.js's static export (to the `out/` directory) thanks to `output: 'export'` in `next.config.js`.

### Deploy to GitHub Pages

```bash
yarn deploy
```

This builds the site and deploys the `out/` directory to the `gh-pages` branch using [`gh-pages`](https://github.com/tschaub/gh-pages). The `--nojekyll` flag is used to ensure GitHub serves files and folders starting with `_`.

---

## 🌐 Deployment Notes

- Uses `basePath` and `assetPrefix` set to `/portfolio` in production mode.
- `NODE_ENV=production` must be set during build for basePath to be respected.
- Assets and public files (e.g. images in `/public`) must be referenced with `basePath` in production, or use `next/image` which handles this automatically.
- Site is hosted at: `https://zjaries.github.io/portfolio/`

---

## 📁 Project Structure

```
/public             # Static assets (e.g., images)
/src
  ├── app           # App Router pages
  ├── components    # Reusable components
/next.config.js     # Next.js config with `output: 'export'`
/tsconfig.json      # TypeScript config
/out                # Exported static site (after `yarn build`)
```

---

## 📸 Screenshots

---

## 🧑‍💻 License

This project is open source and available under the [MIT License](LICENSE).
