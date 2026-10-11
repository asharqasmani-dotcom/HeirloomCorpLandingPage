# Arvon — editable local homepage

A static developer copy of the supplied Arvon homepage. The original rendered HTML, responsive Elementor styles, imagery, fonts, and frontend animation/widget scripts are retained for fidelity. No WordPress installation or npm dependencies are needed to preview it.

## Run

Requires Python 3. From this folder:

```sh
npm run dev
```

Open http://localhost:5173. Alternatively run `python3 -m http.server 5173 --bind 127.0.0.1`.
Serve over HTTP; do not double-click index.html, because asset paths are relative to the server root.

## Edit

- `index.html`: all homepage text, sections, links, image references, and form markup. Search for the text you want to replace.
- `styles/custom.css`: add CSS overrides here, preserving original vendor CSS.
- `scripts/local.js`: local form behavior and your future custom interactions.
- `assets/dit.nomadenstudio.com/arvon/wp-content/uploads/sites/7/2026/01/`: original photography and logos.
- `assets/dit.nomadenstudio.com/arvon/wp-content/uploads/sites/7/elementor/css/`: original layout, breakpoint, typography and color settings. `post-188.css` is the homepage; `post-4.css` contains global styles.
- `assets/fonts.googleapis.com/` and `assets/fonts.gstatic.com/`: local font styles and font files.
- `original-kit/`: the complete unmodified supplied Elementor kit, including other page templates and reference screenshots. These JSON templates can also be imported into a compatible WordPress/Elementor installation.
- `reference/`: saved reference HTML and download manifest for provenance and troubleshooting.

## Build

```sh
npm run build
npm run preview
```

Upload the contents of `dist/` to a static host at its root. No server-side application is included.

## Integration boundaries

This deliverable covers the homepage. Navigation links to other demo pages retain their original destinations; the supplied original kit includes those pages for future development. Original placeholder links remain placeholders. Form submissions are intercepted locally and display an honest preview notice: connect your own email/CRM endpoint before launch. They do not submit to the original demo's WordPress backend. Embedded video links, if used, require the third-party video host.

The original branding and content are intentionally retained for you to replace. Retain the applicable template and image licenses supplied with your purchase. This is a static extraction, not a replacement WordPress theme or editable Elementor installation.
