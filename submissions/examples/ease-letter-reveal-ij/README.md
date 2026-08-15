# Letter Reveal Demo Component

A pure CSS kinetic typography component featuring per-character staggered entrance physics, 3D flip rotation, wave bounce oscillations, and tactile hover wiggles.

## 🚀 Features

- **100% Pure CSS & HTML**: Zero JavaScript dependencies required.
- **Staggered Variable Delays**: Employs inline CSS variables (`--i: index`) to dynamically calculate staggered keyframe delays (`calc(var(--i) * 0.06s)`).
- **Tactile Hover Wiggle**: Per-character elastic spring transforms and glowing neon text-shadow reflections on hover.
- **Zero-JS Mode Switcher**: Radio input controllers enabling live switching between Blur Stagger, 3D Flip Reveal, and Wave Bounce animation modes.
- **Responsive Typography**: Uses CSS `clamp()` for fluid font scaling across mobile, tablet, and desktop viewports.
- **Accessibility & Motion Safety**: Accessible parent `aria-label` markup and complete motion disablement under `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Include `style.css` in your project and format letter spans with `--i` custom properties:

```html
<link rel="stylesheet" href="submissions/examples/ease-letter-reveal-ij/style.css">

<h2 class="reveal-headline" aria-label="EASEMOTION">
    <span class="char" style="--i: 1">E</span>
    <span class="char" style="--i: 2">A</span>
    <span class="char" style="--i: 3">S</span>
    <span class="char" style="--i: 4">E</span>
</h2>
```

## 🎨 CSS Custom Properties

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--stagger-delay` | Delay multiplier per character | `0.06s` |
| `--primary-accent` | Neon purple theme accent | `#8b5cf6` |
| `--font-display` | Kinetic display typography font family | `'Space Grotesk'` |

## 📦 Submission Details

- **Submission Directory**: `submissions/examples/ease-letter-reveal-ij/`
- **Issue Reference**: `#75683`
- **Files Included**: `demo.html`, `style.css`, `README.md`
