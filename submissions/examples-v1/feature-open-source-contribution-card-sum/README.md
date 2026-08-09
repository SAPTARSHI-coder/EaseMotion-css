# Open Source Contribution Card

Related issue: #51884

## What does this do?

This demo lets you create a branded, animated share card for an open-source contribution. Enter repository details (owner, name, stars, description, and contributor), optionally pull live metadata from the GitHub REST API, preview the card with EaseMotion-inspired indigo styling, and export a PNG image via an off-screen canvas.

## How is it used?

Open `demo.html` in any modern browser — no build step or local server required.

1. Fill in the form fields or click **Fetch from GitHub** to load `https://api.github.com/repos/{owner}/{repo}`.
2. Click **Update preview** (or edit fields — the preview updates live) to see the animated share card.
3. Click **Export PNG** to download a 1200×630 social-ready image.

The preview card uses semantic HTML and custom classes such as `share-card` and `contribution-form-panel`. All styles live in `style.css`; export logic is inline in `demo.html`.

## Why is it useful?

Contributors often want a polished visual to celebrate merges, blog posts, or social posts. This tool combines form input, optional API enrichment, motion-enhanced preview, and canvas export in one self-contained page — useful for hackathons, portfolio sites, and maintainer onboarding kits without third-party design tools or CDN dependencies.

## Accessibility

- Form labels are associated with inputs; status messages use `aria-live`.
- Focus rings on interactive controls.
- Under `prefers-reduced-motion: reduce`, card entrance and glow animations are disabled.

## Files

```
submissions/examples/feature-open-source-contribution-card-sum/
├── demo.html
├── style.css
└── README.md
```
