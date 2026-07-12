# EaseMotion Modular CSS Import Size Calculator

An interactive documentation demo that lets developers **pick only the EaseMotion CSS modules they need**, see the estimated bundle size impact, and copy import tags in the correct load order.

> Submission track: `submissions/docs/ease-bundle-picker-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43360

---

## What does this do?

The EaseMotion README promotes granular modular imports to reduce bundle size, but beginners have no interactive tool to explore module choices. This submission provides:

1. **Checkbox selector** for core, animation, and component CSS modules
2. **Estimated bundle size** based on real file sizes from the repository
3. **Comparison view** against the full `easemotion.min.css` bundle (178 KB)
4. **Auto-generated import tags** in correct load order (HTML CDN + npm/bundler)
5. **Copy-to-clipboard** output for pasting into projects

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Interactive module picker with size calculator |
| `style.css` | Playground layout styles |
| `README.md` | This document |

---

## Quick start

Open `demo.html` in any modern browser. No build step required.

---

## Module categories

### Core (required foundation)

| Module | Size | Description |
|--------|------|-------------|
| `core/variables.css` | 11.5 KB | Design tokens & CSS custom properties (**required**) |
| `core/base.css` | 4.9 KB | Reset, typography, base element styles |
| `core/utilities.css` | 62.9 KB | Spacing, layout, color utility classes |

### Animations (pick one strategy)

**Option A — Monolithic:**

| Module | Size | Description |
|--------|------|-------------|
| `core/animations.css` | 33.2 KB | All keyframes & animation utilities |

**Option B — Granular (`easemotion/*.css`):**

| Module | Size | Description |
|--------|------|-------------|
| `easemotion/timing.css` | 392 B | Duration, delay, easing utilities |
| `easemotion/fade.css` | 1.0 KB | Fade in/out keyframes |
| `easemotion/slide.css` | 4.5 KB | Slide up/down/left/right |
| `easemotion/zoom.css` | 1.1 KB | Zoom in/out scale |
| `easemotion/bounce.css` | 1.2 KB | Bounce & spring effects |
| `easemotion/rotate.css` | 1.3 KB | Spin & rotate |
| `easemotion/hover.css` | 5.8 KB | Hover lift, glow, shimmer |
| `easemotion/misc.css` | 7.0 KB | Shake, pulse, ping, misc |

> Do not import `animations.css` alongside granular files — they overlap.

### Components (optional)

| Module | Size | Description |
|--------|------|-------------|
| `components/buttons.css` | 10.3 KB | Button variants & states |
| `components/cards.css` | 11.0 KB | Card layouts |
| `components/navbar.css` | 3.8 KB | Navigation bar |
| `components/modals.css` | 7.3 KB | Modal dialogs |
| `components/tooltips.css` | 11.8 KB | Tooltips |
| `components/tabs.css` | 11.8 KB | Tab navigation |
| `components/forms.css` | 12.3 KB | Form inputs & validation |
| `components/footer.css` | 21.6 KB | Footer layout |
| `components/sidebar.css` | 4.3 KB | Sidebar panel |
| `components/loaders.css` | 1.7 KB | Spinners & skeletons |
| `components/badges.css` | 2.3 KB | Status badges |
| `components/toast.css` | 2.1 KB | Toast notifications |
| `components/chip.css` | 5.3 KB | Chip / tag pills |
| `components/ease-marquee.css` | 3.4 KB | Scrolling marquee |

---

## Recommended load order

1. `core/variables.css` — always first
2. `core/base.css` — base styles
3. Animation layer — `core/animations.css` **or** granular `easemotion/*.css` (timing → fade → slide → zoom → bounce → rotate → hover → misc)
4. `core/utilities.css` — utility classes
5. Component files — alphabetical or by layout dependency

---

## Example outputs

### Minimal starter (fade + buttons)

**Estimated size:** ~17.3 KB vs 178 KB full bundle (~90% reduction)

**HTML (CDN):**

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/core/variables.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/core/base.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion/fade.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/components/buttons.css" />
```

**npm / Vite / webpack:**

```js
import 'easemotion-css/core/variables.css';
import 'easemotion-css/core/base.css';
import 'easemotion-css/easemotion/fade.css';
import 'easemotion-css/components/buttons.css';
```

### Landing page preset

Includes fade, slide, hover, buttons, cards, navbar, and footer — typically **~40 KB** uncompressed vs the full 178 KB minified bundle.

### Full bundle (when you need everything)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css" />
```

---

## Presets in the demo

| Preset | Modules included | Use case |
|--------|------------------|----------|
| **Minimal** | variables, base, fade, buttons | Smallest useful starter |
| **Landing page** | + slide, hover, cards, navbar, footer | Marketing site |
| **Dashboard** | animations-all, utilities, sidebar, tabs, forms, loaders, toast | Admin UI |
| **Animations only** | All granular animation files | Motion-only integration |

---

## Size methodology

- Sizes are measured from **uncompressed source files** in the EaseMotion repository.
- The full bundle reference uses `easemotion.min.css` (178,272 bytes).
- Production sizes after minification + gzip will be smaller.
- The calculator helps compare **relative** savings between import strategies.

---

## Tree-shaking without core edits

This tool teaches modular imports that work today:

- **CDN:** Link individual CSS files via jsDelivr
- **npm:** `import 'easemotion-css/core/variables.css'` in Vite/webpack
- **No build scripts:** No changes to `core/` or `components/` required

---

## Compliance notes

- Only **new files** inside `submissions/docs/`.
- Uses official EaseMotion CDN — no core edits.
- Folder name carries unique contributor suffix `-sp`.
