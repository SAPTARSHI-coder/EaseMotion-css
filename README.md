<div align="center">

# ⚡ Flow CSS

**Human-readable. Animation-first. Zero dependencies.**

Designed and curated by **Saptarshi Sadhu**

[![License: MIT](https://img.shields.io/badge/License-MIT-6c63ff.svg)](./LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-22c55e.svg)](./CONTRIBUTING.md)
[![GitHub Stars](https://img.shields.io/github/stars/SAPTARSHI-coder/flow-css?style=flat&color=6c63ff)](https://github.com/SAPTARSHI-coder/flow-css/stargazers)
[![Maintainer](https://img.shields.io/badge/Maintainer-Saptarshi%20Sadhu-a78bfa.svg)](https://github.com/SAPTARSHI-coder)

</div>

---

Flow CSS is a curated, animation-first CSS framework where class names read like plain English. No memorizing shorthand. No build steps. Just write HTML and it works.

```html
<div class="flow-center flow-fade-in">
  <button class="flow-btn flow-btn-primary flow-hover-grow">Get Started</button>
</div>
```

---

## 👤 Maintainer

Flow CSS is designed, curated, and actively maintained by:

**Saptarshi Sadhu** · [@SAPTARSHI-coder](https://github.com/SAPTARSHI-coder)

This is a controlled framework — all contributions are reviewed and standardized before integration. The framework does not accept unreviewed direct edits. See [Contribution Policy](#️-contribution-policy) and [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

---

## 🚀 Quick Start

**Option 1 — Single import (recommended)**

```html
<link rel="stylesheet" href="flow.css" />
```

**Option 2 — Import only what you need**

```html
<!-- Core: always required, load in this order -->
<link rel="stylesheet" href="core/variables.css" />
<link rel="stylesheet" href="core/base.css" />
<link rel="stylesheet" href="core/animations.css" />
<link rel="stylesheet" href="core/utilities.css" />

<!-- Components: add only what you use -->
<link rel="stylesheet" href="components/buttons.css" />
<link rel="stylesheet" href="components/cards.css" />
```

> ⚠️ **`variables.css` must always load first.** Every other file depends on the CSS custom properties it defines.

No build step. No Node. No npm. Open your HTML file and it works.

---

## 🧠 Philosophy

Flow CSS is not just a CSS library — it is a design language.

Most frameworks force a trade-off between readability and speed. Flow CSS argues you should not have to choose.

| | Vanilla CSS | Tailwind | **Flow CSS** |
|---|---|---|---|
| Setup | Write from scratch | Build step + config | **Link one file** |
| Readability | High | Low (`px-4 flex gap-x-2`) | **High** (`flow-center`) |
| Animations | Manual | Minimal | **First-class** |
| Quality control | You | You | **Curated by maintainer** |

**Write UI like you describe it in English:**

```html
<!-- Center this -->
<div class="flow-center">

<!-- Fade this in -->
<h1 class="flow-fade-in">

<!-- Make it grow on hover -->
<button class="flow-hover-grow">
```

No documentation lookup required. The class name **is** the documentation.

**Four principles that never get broken:**

| Principle | What it means |
|-----------|--------------|
| **Human-readable** | Class names describe behavior in plain English |
| **Animation-first** | Motion is a first-class feature, not an add-on |
| **Composable** | Stack classes freely with no specificity wars |
| **Curated** | Every class is maintainer-reviewed before release |

---

## ⚙️ How Flow CSS Works

Flow CSS uses a structured pipeline from raw idea to released class:

```
1. Contributors submit raw HTML + CSS
         ↓
2. Maintainer reviews and evaluates fit
         ↓
3. Code is converted into Flow CSS format
   (flow-* naming, CSS variables, comments)
         ↓
4. Integrated into core/ or components/
         ↓
5. Released and documented
```

Every class in the framework has passed through this process. The curation is what makes Flow CSS consistent.

---

## 📦 Usage Examples

### Layout

```html
<!-- Center — the most-used utility -->
<div class="flow-center">Centered</div>

<!-- Responsive auto-fit grid -->
<div class="flow-grid flow-grid-auto flow-gap-6">
  <div>Card 1</div><div>Card 2</div><div>Card 3</div>
</div>

<!-- Flex row: space between -->
<div class="flow-flex flow-justify-between flow-items-center flow-padding-4">
  <span>Left</span><span>Right</span>
</div>
```

### Animations

```html
<!-- Entrance (fires on load) -->
<h1 class="flow-fade-in">Hello</h1>
<p  class="flow-slide-up flow-delay-200">Subtitle</p>

<!-- Staggered sequence -->
<div class="flow-slide-up flow-delay-100">First</div>
<div class="flow-slide-up flow-delay-200">Second</div>
<div class="flow-slide-up flow-delay-300">Third</div>

<!-- Hover effects -->
<button class="flow-hover-grow">Grows on hover</button>
<div    class="flow-hover-glow">Glows on hover</div>
<div    class="flow-hover-shimmer">Shimmer sweep</div>
<div    class="flow-card-lift">Lifts on hover</div>
```

### Buttons

```html
<button class="flow-btn flow-btn-primary">Primary</button>
<button class="flow-btn flow-btn-success">Success</button>
<button class="flow-btn flow-btn-danger">Danger</button>
<button class="flow-btn flow-btn-outline">Outline</button>

<!-- With hover animation -->
<button class="flow-btn flow-btn-primary flow-btn-hover">Animated</button>

<!-- Sizes + pill -->
<button class="flow-btn flow-btn-primary flow-btn-sm">Small</button>
<button class="flow-btn flow-btn-primary flow-btn-lg flow-btn-pill">Large Pill</button>
```

### Cards

```html
<div class="flow-card flow-card-shadow flow-card-hover">
  <div class="flow-card-header">
    <h3 class="flow-card-title">Title</h3>
  </div>
  <div class="flow-card-body"><p>Content</p></div>
  <div class="flow-card-footer">
    <button class="flow-btn flow-btn-primary flow-btn-sm">Action</button>
  </div>
</div>
```

---

## ⚙️ Customization

Override any CSS variable to theme the entire framework in one block:

```css
:root {
  --flow-color-primary: #f97316;   /* orange */
  --flow-speed-medium:  500ms;     /* slower */
  --flow-radius-md:     1rem;      /* rounder */
}
```

---

## 📂 File Structure

```
flow-css/
├── flow.css                    ← SINGLE IMPORT ENTRY POINT
│
├── core/                       ← MAINTAINER-ONLY
│   ├── variables.css           ← design tokens
│   ├── base.css                ← reset + typography
│   ├── animations.css          ← animation library
│   └── utilities.css           ← layout utilities
│
├── components/                 ← MAINTAINER-ONLY
│   ├── buttons.css
│   └── cards.css
│
├── submissions/                ← CONTRIBUTOR AREA
│   ├── README.md               ← submission workflow
│   └── examples/
│       ├── hover-grow/         ← [INTEGRATED] → flow-hover-grow
│       ├── hover-shimmer/      ← [INTEGRATED] → flow-hover-shimmer
│       ├── card-lift/          ← [INTEGRATED] → flow-card-lift
│       └── button-glow/        ← pending review
│
├── examples/demo.html          ← live showcase
├── docs/index.html             ← documentation site
│
├── .github/
│   ├── CODEOWNERS
│   ├── ISSUE_TEMPLATE/feature_request.md
│   └── PULL_REQUEST_TEMPLATE.md
│
├── VISION.md                   ← project direction
├── CHANGELOG.md                ← release history
├── CONTRIBUTING.md
├── LICENSE                     ← MIT © 2026 Saptarshi Sadhu
└── README.md
```

---

## 🏷️ Issue Labels

| Label | Used for |
|-------|----------|
| `good first issue` | Easy submissions, ideal for first contributions |
| `animation` | Hover effects, entrance animations, keyframe ideas |
| `component` | New UI components (tooltips, modals, badges, etc.) |
| `enhancement` | Improvements to existing classes |
| `documentation` | README, docs site, submission guide updates |

---

## ⚠️ Contribution Policy

Flow CSS is a **curated, maintainer-reviewed framework**. It is not an open-edit project.

### What contributors do

```
✅ Add a folder to submissions/examples/your-feature/
✅ Include: demo.html, style.css, README.md
✅ Use any class naming — no flow- prefix required
✅ One feature per PR
```

### What contributors do NOT do

```
❌ Edit core/           → PR closed without review
❌ Edit components/     → PR closed without review
❌ Merge their own PRs  → Maintainer-only
```

### How submissions become framework classes

```
Your raw CSS     →     Maintainer standardizes     →     flow-* class ships
.hover-grow           flow-hover-grow                    core/animations.css
```

### 🌟 Why contribute?

- **Beginner-friendly** — write raw CSS, no conventions to memorize
- **Learn real system design** — see how raw ideas become a coherent API
- **Your idea ships** — accepted submissions become real framework classes, credited in the changelog
- **Build in public** — your submission folder stays in the repo permanently as a contribution record

See [submissions/README.md](./submissions/README.md) for the full workflow.

---

## 🌐 Official Maintainer

**Saptarshi Sadhu**  
GitHub: [@SAPTARSHI-coder](https://github.com/SAPTARSHI-coder)

> Only the maintainer merges pull requests. This is enforced via [CODEOWNERS](./.github/CODEOWNERS).

---

## License

MIT © 2026 Saptarshi Sadhu — see [LICENSE](./LICENSE).

---

<div align="center">
Built with care &nbsp;·&nbsp; Zero dependencies &nbsp;·&nbsp; Animation-first
</div>
