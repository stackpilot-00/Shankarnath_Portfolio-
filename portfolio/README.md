# M Shankarnath: Portfolio
Static site: `index.html`, `css/style.css`, `js/script.js`. No backend, no API keys.

## Run locally
Open `index.html` in a browser (or use the VS Code Live Server extension).

## Deploy on GitHub Pages
1. Create a repo and upload the contents of this folder (`index.html` at the root).
2. Repo **Settings > Pages** > Source: *Deploy from a branch* > `main` / `(root)` > Save.
3. Your site appears at `https://<username>.github.io/<repo>/`.

## Edit your details
- Text sections (About, Education, Experience, Contact): edit `index.html`.
- Skills and projects: edit the arrays at the top of `js/script.js`.
- Colors and fonts: edit the variables at the top of `css/style.css`.

## Add a project
Copy one object in the `projects` array in `js/script.js` and change `title`, `type`, `cat`, `tags`, `short`, `long`. Add `link:"https://..."` only for real live sites.

## Notes
- There is no contact form on purpose: a form needs a backend. Contact uses `mailto:` and social links.
- Google Fonts load online; the site falls back to system fonts offline.

## Photo and resume
- Photo: replace `assets/images/shankarnath.jpg` (square, about 640x640 works well).
- Resume: replace `assets/M_Shankarnath_Resume.pdf`, keeping the same file name.
