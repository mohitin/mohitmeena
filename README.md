# mohitin.github.io

Research portfolio of Mohit Kumar Meena, served at https://mohitin.github.io/.

A single static page with no build step. GitHub Actions deploys the repository to GitHub Pages on every push to `main` (see `.github/workflows/static.yml`).

## Files

| Path | What it is |
| --- | --- |
| `index.html` | All page content: research, publications, experience, projects, contact |
| `assets/css/site.css` | Styles, colour tokens, light and dark themes |
| `assets/js/site.js` | CV link setting, mobile menu, active-section highlight |
| `assets/Mohit_Kumar_Meena_CV.pdf` | CV served by default |
| `assets/img/mohit-meena.jpg` | Portrait used in the hero graph |
| `assets/img/og-card.png` | Preview image shown when the link is shared |
| `assets/fonts/` | Self-hosted Literata and Hanken Grotesk |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Browser and phone icons |

## Common edits

**Point the CV buttons at Google Drive.** Open `assets/js/site.js` and paste the Drive share link into the first line:

```js
const CV_URL = "https://drive.google.com/file/d/FILE_ID/view?usp=sharing";
```

In Drive, set the file to "Anyone with the link can view". Keep the same Drive file and use "Manage versions" to upload a new CV, so the link never changes. To go back to the PDF in this repository, set `CV_URL = ""`.

**Update the CV stored here.** Replace `assets/Mohit_Kumar_Meena_CV.pdf` with a file of the same name.

**Add a publication.** Copy one `<li class="pub">` block inside the right year in `index.html` and edit it. Your name goes in `<strong>`.

**Change the "Last updated" date.** It is in the footer at the end of `index.html`.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
