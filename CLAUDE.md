# Kyle's portfolio

React 18 + Vite 5 static site, plain JavaScript (JSX) with CSS Modules. No tests, no backend. `README.md` has the full file map.

## Commands

- `npm install`, `npm run dev`, `npm run build` (output `dist/`), `npm run preview`
- Don't run these in the sandbox mount: `node_modules` is Kyle's Windows install. Copy the repo to a scratch directory, build there, and copy changed source files back.

## Rules

- **All copy lives in `src/data/`** (`profile.js`, `experience.js`, `projects.js`, `skills.js`, `lookingFor.js`, `navigation.js`). Content edits touch only those files; don't put text in components.
- Every experience bullet and project has a `plain` and a `technical` version (the Reading Mode toggle). Update both.
- **Facts come from Kyle's master career file** (`Kyle_Master_Career_File.md` in Google Drive). Never invent experience, metrics, employers or skills. Keep the portfolio consistent with the current resume in `../Resumes/`.
- Colors, type and spacing are tokens in `src/styles/tokens.css` (light + dark, `ThemeContext`). Use the tokens, not hard-coded values.
- A new section needs: a file in `src/sections/`, a `<Section id title>` wrapper, an entry in `App.jsx`, and its id in `src/data/navigation.js`.
- The resume PDF is `public/kyle-prindle-resume.pdf`. Replace it when the resume in `../Resumes/` changes.
- Remote: `kprindle/kyle-portfolio`. Deploy target not set yet (any static host; GitHub Pages needs `base` in `vite.config.js`).
