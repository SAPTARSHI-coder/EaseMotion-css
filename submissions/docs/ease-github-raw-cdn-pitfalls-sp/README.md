# GitHub Raw CDN CSS Pitfalls Guide

An interactive documentation showcase that compares loading **EaseMotion CSS** via **jsDelivr**, **unpkg**, and **`raw.githubusercontent.com`**, and explains when the GitHub Raw CDN fails (MIME / Content-Type, caching, broken styles) with a clear production recommendation panel.

> Submission track: `submissions/docs/ease-github-raw-cdn-pitfalls-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue [#46162](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46162)

---

## What does this do?

The EaseMotion README lists multiple CDN options, including GitHub Raw:

```html
<link
  rel="stylesheet"
  href="https://raw.githubusercontent.com/SAPTARSHI-coder/EaseMotion-css/main/easemotion.min.css"
/>
```

Beginners often paste that Raw URL expecting it to behave like jsDelivr or unpkg. In practice, Raw responses frequently use the wrong `Content-Type` (`text/plain` instead of `text/css`), have weak caching, and can make a perfectly valid stylesheet look “broken.”

This lab helps you:

- Compare jsDelivr / unpkg / GitHub Raw side by side
- Generate copy-ready `<link>` tags for the selected provider + file
- Probe live `Content-Type` headers (when the browser allows CORS)
- See an educational mock of unstyled UI when Raw fails
- Leave with a clear production recommendation

---

## How is it used?

1. Open `demo.html` in a browser (internet required for CDN probe + EaseMotion styles).
2. Pick a **provider** (jsDelivr, unpkg, or GitHub Raw) and a **file**.
3. Read the **live verdict** and copy the generated snippet.
4. Click **Probe Content-Type** to inspect response headers.
5. Study the comparison table, pitfalls list, and recommendation panel.

---

## Features

- Provider selector with risk badges (Recommended / Risky)
- File toggle: `easemotion.min.css` or `easemotion.css`
- Live verdict panel (Safe vs Risky tone)
- Copy-to-clipboard for `<link>` tag and raw URL
- Live header probe (`Content-Type`, HTTP status, interpretation)
- Comparison matrix (MIME, caching, production suitability)
- Visual “styled vs broken” preview cards
- Pitfall explanations: MIME, cache, rate limits, false bug reports
- Production recommendation checklist
- Responsive, accessible UI with keyboard-friendly radio controls
- Respects `prefers-reduced-motion`

---

## URL formats used in the demo

| Provider | Example URL |
|----------|-------------|
| jsDelivr (pinned) | `https://cdn.jsdelivr.net/npm/easemotion-css@1.2.0/easemotion.min.css` |
| unpkg (pinned) | `https://unpkg.com/easemotion-css@1.2.0/easemotion.min.css` |
| GitHub Raw | `https://raw.githubusercontent.com/SAPTARSHI-coder/EaseMotion-css/main/easemotion.min.css` |

---

## Why is it useful?

- Prevents false “EaseMotion CSS is broken” reports caused by CDN misuse
- Documents a real README footgun without editing core or the README itself
- Freeze-safe: only new files under `submissions/docs/`
- Complements the CDN semver picker docs tool (this one focuses on **Raw MIME pitfalls**, not semver selection)

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) for the page chrome |
| Comparison + probe UI | Inline JS in `demo.html` |
| Layout & visual states | `style.css` |

---

## Folder structure

```text
submissions/docs/ease-github-raw-cdn-pitfalls-sp/
├── demo.html
├── style.css
└── README.md
```

---

## Policy notes

- Does **not** modify `core/`, `components/`, workflows, or existing files
- Compatible with the freeze notice and #13244 (new submission folder only)
- Educational showcase — recommended README wording changes remain maintainer-only

---

## License

Same as EaseMotion CSS (MIT).
