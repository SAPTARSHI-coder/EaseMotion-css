# blob-sk — Morphing Blob Utility

## 1. What does this do?

Provides CSS-only morphing blob shapes that animate fluidly between organic `border-radius` forms, useful as decorative background elements in hero sections, feature cards, or anywhere a soft, living shape adds visual depth.

## 2. How is it used?

**Minimal blob:**
```html
<div class="blob"></div>
```

**Color variants:**
```html
<div class="blob blob-purple"></div>
<div class="blob blob-pink"></div>
<div class="blob blob-blue"></div>
<div class="blob blob-green"></div>
<div class="blob blob-gradient"></div>
```

**Speed variants:**
```html
<div class="blob blob-fast"></div>   <!-- 3s cycle -->
<div class="blob"></div>             <!-- 6s cycle (default) -->
<div class="blob blob-slow"></div>   <!-- 8s cycle -->
```

**Effect modifiers:**
```html
<div class="blob blob-blur"></div>          <!-- soft diffuse glow -->
<div class="blob blob-glow"></div>          <!-- box-shadow halo -->
<div class="blob blob-outline"></div>       <!-- transparent, colored border -->
<div class="blob blob-pause-hover"></div>   <!-- freezes on hover -->
```

**Decorative background (most common real-world use):**
```html
<section style="position: relative; overflow: hidden;">
  <!-- blob sits behind content -->
  <div class="blob blob-blue blob-blur blob-decorative blob-slow"
       style="position: absolute; top: -60px; right: -60px;
              width: 300px; height: 300px; opacity: 0.3;">
  </div>

  <div style="position: relative; z-index: 1;">
    <h1>Hero Content</h1>
    <p>Content sits above the blob.</p>
  </div>
</section>
```

### Class reference

| Class | Effect |
|-------|--------|
| `blob` | Base morphing blob (300 × 300 px, purple, 6 s) |
| `blob-fast` | 3 s animation cycle |
| `blob-slow` | 8 s animation cycle |
| `blob-sm` | 150 × 150 px |
| `blob-lg` | 500 × 500 px |
| `blob-primary` | Uses `--ease-color-primary` |
| `blob-purple` | Uses `--ease-color-secondary-dark` |
| `blob-pink` | Hot pink (#ec4899) |
| `blob-blue` | Uses `--ease-color-info` |
| `blob-green` | Uses `--ease-color-success` |
| `blob-orange` | Uses `--ease-color-warning` |
| `blob-danger` | Uses `--ease-color-danger` |
| `blob-gradient` | Primary → pink linear gradient |
| `blob-blur` | `filter: blur(40px)` + reduced opacity |
| `blob-glow` | `box-shadow` halo in blob color |
| `blob-outline` | Transparent fill, colored border |
| `blob-decorative` | `position: absolute; pointer-events: none; z-index: 0` |
| `blob-pause-hover` | Pauses animation on `:hover` |

## 3. Why is it useful?

Blob shapes have become a mainstream decorative pattern across modern product UIs — they add organic warmth to otherwise geometric layouts without any image assets or JavaScript. This submission gives EaseMotion CSS a natural fit alongside its existing `ease-hover-*` and `ease-float` animation utilities:

- **Zero JavaScript** — pure `border-radius` keyframe animation.
- **Composable** — mix speed, color, size, and effect classes freely.
- **Framework-integrated** — color classes reference existing `--ease-color-*` tokens, so blobs inherit any future theme changes automatically.
- **Accessible** — `prefers-reduced-motion` collapses animation and sets a static circle; `pointer-events: none` on `.blob-decorative` keeps interactive elements fully accessible.
- **Maintainer-ready** — class names are plain English (`blob`, `blob-fast`, `blob-blur`), making the maintainer's rename to `ease-blob-*` straightforward with no logic changes required.
