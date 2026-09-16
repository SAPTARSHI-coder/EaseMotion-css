# AI Prompt Template Selector Grid with Hover Elevation & Shimmer Tag

> A modern AI prompt template card grid featuring category filter pills, animated gradient shimmer borders on hover, highlighted variable tags (`{var_name}`), and an interactive prompt customizer modal with live preview and copy-to-clipboard functionality.

## Features

- **Category Filter Pills** — Filter templates by category (**All**, **Writing & Content**, **Coding & Engineering**, **Marketing & Growth**, **Design & Creative**) with smooth card grid fade transitions.
- **Hover Card Elevation & Shimmer Border** — Prompt cards elevate (`translateY(-6px)`) on hover accompanied by a moving animated linear gradient border (`@keyframes shimmerBorder`).
- **Prompt Variable Badges** — Placeholder variable tokens inside prompt previews (e.g. `{code_block}`, `{target_audience}`) render with styled violet badge pills.
- **Interactive Prompt Customizer Modal** — Clicking **Use Template** opens a dialog (`role="dialog"`) that dynamically generates form input fields for every prompt variable, providing real-time live preview updates as you type.
- **Copy-to-Clipboard & Toast Feedback** — One-click copying of the fully customized prompt with animated green toast notification feedback (`#toast`).
- **Responsive Layout** — Auto-fitting CSS grid (`grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))`) adapting seamlessly from mobile screens to ultrawide displays.

---

## Directory Structure

```
submissions/examples/ai-prompt-template-grid-yl/
├── index.html    — Semantic grid layout with 8 prompt cards and customizer modal
├── style.css    — Glassmorphism cards, animated shimmer border keyframes, hover lift, modal backdrop
├── script.js    — Category filter logic, prompt template parser, dynamic modal form generator, copy toast
└── README.md    — Component documentation
```

---

## Component Customization

Each prompt card specifies a `data-category` and `data-id`:

```html
<article class="prompt-card" data-category="code" data-id="code-reviewer">
  <div class="card-shimmer" aria-hidden="true"></div>
  <div class="card-header">
    <span class="badge badge-code">Coding</span>
    <span class="shimmer-tag">Popular</span>
  </div>
  <h2 class="card-title">Senior Code Reviewer</h2>
  <div class="prompt-preview-box">
    <code>Review this <span class="var-pill">{language}</span> snippet: <span class="var-pill">{code_block}</span></code>
  </div>
  <button class="use-template-btn" data-id="code-reviewer">Use Template</button>
</article>
```

---

## Acceptance Criteria Checklist ✅

- [x] Self-contained in `submissions/examples/ai-prompt-template-grid-yl/`.
- [x] Category filter pills filter card grid with smooth fade-scale transition.
- [x] Cards display sleek hover elevation with subtle animated gradient border highlight.
- [x] Variable tokens inside prompt text (e.g. `{code_language}`) render with distinct pill styling.
- [x] Clicking "Use Template" opens a prompt preview box with copy functionality.

---

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
