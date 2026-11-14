# CUSail Website

Website for [CUSail](https://cusail.com), Cornell’s autonomous sailboat project team. The site is static HTML, CSS, and JavaScript. There is no build step and no package install.

## Run locally

From the repository root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

You can also open `index.html` directly in a browser. A local server is the closer match to how the site is hosted, because pages under `app/` use relative paths.

If you use the VS Code Live Server extension, this repo is already set to port `5501`.

## Pages

| Page | File |
| --- | --- |
| About | `index.html` |
| Our Team | `app/ourteam.html` |
| Recruitment | `app/recruitment.html` |
| Fleet | `app/fleet.html` |
| Sponsorship | `app/sponsorship.html` |
| Gallery | `app/gallery.html` |
| Contact | `app/contact.html` |
| Giving Day | `app/givingday.html` |

## Layout

- `index.html` and `app/` are the pages.
- `css/` and `js/` are shared styles and scripts. `css/all.css` and `js/all.js` load on every page.
- `images/` holds photos, icons, and logos.
- `documents/` holds the current sponsorship packet.
- `CNAME` points the GitHub Pages site at `cusail.com`.
