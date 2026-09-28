# Kyle Prindle, portfolio

React + Vite portfolio. Content is kept separate from layout, so most updates only touch `src/data/`.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
npm run preview  # serve the production build locally
```

## Where things live

```
src/
  data/                 All site copy. Edit these to update the site.
    profile.js          Name, headline, intro, contact links, proof points, resume link
    lookingFor.js       Target roles, location, employment type, industries
    experience.js       Jobs (each bullet has plain + technical versions), earlier work, education
    projects.js         Project write-ups (plain story + technical notes + stack)
    skills.js           Skill groups
    navigation.js       Sidebar/menu sections
  context/
    ReadingModeContext.jsx   "Plain English" vs "Technical detail" toggle state
  hooks/
    useActiveSection.js      Highlights the current section in the nav
  components/
    layout/             Sidebar, MobileHeader, NavLinks, Section wrapper, Footer
    ui/                 ReadingToggle, TagList, ContactLinks
  sections/             Hero, LookingFor, Experience, Projects, Skills, Contact
  styles/
    tokens.css          Colors, type scale, spacing (light + dark)
    global.css          Base element styles, focus, reduced motion
```

Components use CSS Modules (`*.module.css`) so styles stay scoped to each file.

## Common edits

- **Add a resume download:** put the PDF in `public/` and set `resumeUrl: '/kyle-prindle-resume.pdf'` in `src/data/profile.js`. Buttons appear automatically.
- **Add a project:** add an object to `src/data/projects.js` with `plain` and `technical` blocks.
- **Add a section:** create it in `src/sections/`, wrap it in `<Section id="..." title="...">`, add it to `App.jsx`, and add the id to `src/data/navigation.js`.
- **Change colors or fonts:** `src/styles/tokens.css`.

## Deploy

Any static host works. Build command `npm run build`, output directory `dist`.
- Vercel or Netlify: import the repo, they detect Vite automatically.
- GitHub Pages: set `base: '/<repo-name>/'` in `vite.config.js` first.
