# 🌟 EaseMotion CSS Component Contribution Guide & Showcase Template

> The canonical, official benchmark showcase template and contribution guide for community submissions to **EaseMotion CSS**.

---

## 📖 Overview

Welcome open-source contributor! This directory (`submissions/examples/component-showcase-template-docs/`) serves as the **Gold Standard Reference Benchmark** for creating, documenting, and submitting interactive CSS components to `submissions/examples/`.

When submitting a new component to the repository, your submission should clone, inspect, and model its folder structure, HTML semantics, CSS tokens, and README layout after this template.

---

## 🚀 Quick Start for Contributors

Follow these steps to contribute a new component example:

1. **Create your component directory**:
   ```bash
   mkdir submissions/examples/<your-component-name-initials>
   # Example: submissions/examples/glowing-border-card-ag
   ```

2. **Copy the boilerplate files**:
   Copy `index.html`, `style.css`, `script.js`, and `README.md` from this template directory into your new folder.

3. **Develop & Inspect**:
   Open `index.html` in your browser. Use the top **Environment Inspector Bar** to verify:
   - 🌙 **Dark Mode (Default)** & ☀️ **Light Mode** rendering
   - 👁️ **High Contrast Mode** compliance
   - ⇄ **RTL (Right-to-Left)** text direction alignment
   - ⚡ **Reduced Motion** keyframe safety
   - 📱 **Mobile (375px)**, **Tablet (768px)**, and **Desktop (1200px)** responsiveness

4. **Document**:
   Fill out your component's `README.md` using the copy-paste template provided below.

5. **Submit a Pull Request**:
   Branch off `main`, commit your changes, push to your fork, and submit a PR to `SAPTARSHI-coder/EaseMotion-css`.

---

## 📁 Standard Directory & File Naming Conventions

All submissions under `submissions/examples/` MUST strictly follow this folder and file structure:

```
submissions/examples/<component-name-author-initials>/
├── index.html   (or demo.html - standalone, self-contained HTML page)
├── style.css    (vanilla CSS containing design tokens, animations, and responsive styles)
├── script.js    (vanilla JS for interactive behaviors and keyboard nav; optional for static CSS)
└── README.md    (standardized component documentation and usage guide)
```

> [!IMPORTANT]
> - Do **NOT** use external CSS frameworks like Tailwind CSS or Bootstrap unless explicitly requested.
> - Do **NOT** use external JS libraries (like React, jQuery, or GSAP). All scripts must be zero-dependency Vanilla JS.
> - Keep asset references local or use standard Google Fonts URLs.

---

## 🎨 Design Token Architecture (`style.css`)

All colors, elevations, radii, font families, and animation timings **MUST** be declared as CSS custom properties in the `:root` scope.

### Mandatory Token Structure
```css
:root {
  /* Surface & Background Tokens */
  --em-bg-app:                #090b10;
  --em-bg-surface:            #171b26;
  --em-bg-surface-elevated:   #1f2434;

  /* Border Tokens */
  --em-border-subtle:         rgba(255 255 255 / 0.08);
  --em-border-mid:            rgba(255 255 255 / 0.16);

  /* Primary Accent & Status Tokens */
  --em-clr-primary:           #6366f1;
  --em-clr-primary-glow:      rgba(99 102 241 / 0.25);
  --em-clr-accent:            #a855f7;

  /* Typography Colors */
  --em-text-primary:          #f8fafc;
  --em-text-secondary:        #94a3b8;

  /* Motion & Easing Curves */
  --em-ease-spring:           cubic-bezier(0.34, 1.56, 0.64, 1);
  --em-ease-normal:           cubic-bezier(0.16, 1, 0.3, 1);
  --em-dur-fast:              150ms;
  --em-dur-normal:            280ms;
}

/* Light Theme Overrides */
[data-theme="light"] {
  --em-bg-app:                #f1f5f9;
  --em-bg-surface:            #ffffff;
  --em-bg-surface-elevated:   #f8fafc;
  --em-text-primary:          #0f172a;
  --em-text-secondary:        #475569;
}
```

### RTL (Right-To-Left) Rule
Always use **CSS Logical Properties** instead of physical direction properties:
- Use `margin-inline-start` / `margin-inline-end` instead of `margin-left` / `margin-right`.
- Use `padding-block` / `padding-inline` instead of `padding-top` / `padding-left`.
- Use `border-inline-start` instead of `border-left`.
- Use `inset-inline-start` / `inset-inline-end` instead of `left` / `right`.

### Reduced Motion Requirement
Always include a reduced motion override block:
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## ♿ Accessibility (A11y) Benchmark Matrix

Every component submitted must satisfy WAI-ARIA guidelines:

| Criteria | Standard |
|----------|----------|
| **HTML Semantics** | Use `<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<button>`, `<figure>` |
| **ARIA Roles** | Add explicit `role="region"`, `role="dialog"`, `role="switch"`, or `role="toolbar"` where applicable |
| **ARIA States** | Manage `aria-expanded`, `aria-checked`, `aria-hidden`, and `aria-controls` dynamically in JS |
| **Keyboard Focus** | Provide high-contrast dual outlines for `:focus-visible` |
| **Keyboard Traps** | Modal dialogs must trap focus (`Tab` / `Shift+Tab`) and close on `Escape` |
| **Screen Readers** | Provide visually hidden screen reader text using `.em-sr-only` class |

---

## 📝 Master Copy-Paste README Template for Contributors

Copy the markdown block below when creating your component's `README.md`:

```markdown
# 📦 [Component Name]

> A short 1-2 sentence overview describing what this EaseMotion CSS component does and its target use cases.

---

## 📖 What does this do?

[Explain the component's interactive behaviors, design concepts, and visual state transitions in detail.]

---

## 🎯 How is it used?

### 1. HTML Structure

\`\`\`html
<article class="em-card" role="region" aria-labelledby="component-title">
  <header class="em-card__header">
    <h2 id="component-title" class="em-card__title">Component Title</h2>
  </header>
  <div class="em-card__body">
    <!-- Component content goes here -->
  </div>
</article>
\`\`\`

### 2. CSS Custom Properties

\`\`\`css
:root {
  --em-bg-surface: #171b26;
  --em-clr-primary: #6366f1;
  --em-radius-md: 12px;
}
\`\`\`

---

## ✨ Key Highlights

| Feature | Implementation |
|---------|----------------|
| **HTML5 Semantics** | Built using semantic HTML tags and WAI-ARIA landmarks |
| **Theme Switching** | Fully responsive under Light, Dark, and High-Contrast modes |
| **RTL Compatibility** | Layout alignment built with CSS Logical Properties |
| **Reduced Motion** | Compliant with \`prefers-reduced-motion: reduce\` |
| **Zero Dependencies** | Pure Vanilla HTML, CSS, and lightweight JS |

---

## ⌨️ Keyboard Interactions

| Key | Action |
|-----|--------|
| \`Tab\` / \`Shift+Tab\` | Move focus across interactive elements |
| \`Space\` / \`Enter\` | Toggle buttons, switches, and accordion panels |
| \`Escape\` | Close active dialog / popup overlay |

---

## ♿ Accessibility Notes

- Includes clear \`role\` attributes and dynamic \`aria-*\` state management.
- Meets WCAG AAA color contrast ratios.
- Provides accessible focus rings via \`:focus-visible\`.
```

---

## 📋 Pull Request Submission Checklist

Before opening your Pull Request, double check:

- [ ] Folder created under `submissions/examples/<component-name-author-initials>/`
- [ ] Folder contains `index.html` (or `demo.html`), `style.css`, `script.js` (if applicable), and `README.md`
- [ ] Tested with Light, Dark, High Contrast, RTL, and Reduced Motion in the Showcase Inspector
- [ ] Verified keyboard navigation (`Tab`, `Space`, `Enter`, `Escape`)
- [ ] `git status` clean with no extraneous build files or temporary scratch files
- [ ] PR title formatted as: `feat: add <component-name> example component`
