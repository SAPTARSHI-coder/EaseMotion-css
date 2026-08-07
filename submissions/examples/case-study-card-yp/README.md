# Animated Case Study Card

An interactive, dark-mode **Case Study Card** featuring a custom dot-matrix grid canvas background, coral title typography, category header, bottom brand logo pill, and a dynamic green `"CLICK TO READ"` back card that fans out on hover linking to any custom URL.

![Case Study Card Demo](demo.html)

## 🌟 Key Features

- **Dot Matrix Grid Background**: Canvas wrapper with clean radial dot pattern matching modern UI design systems (like Animata Design).
- **Stacked Card Hover Fan-Out**: Secondary green (`#10b981`) card layered behind the main card that fans out to the right on hover, revealing the vertical `"CLICK TO READ"` text label.
- **Dynamic Redirect Link**: Fully customizable target URL bound to both the green card and main card click events (`target="_blank"`).
- **Live Props Customizer**: Interactive control panel enabling real-time live editing of:
  - `category` (e.g. `BOOKS`)
  - `title` (e.g. Case study description)
  - `link` (Dynamic destination URL)
  - `background image` (URL or background image presets)
  - `logo` (Custom brand logo or fallback gradient icon)
- **High Performance CSS Animations**: Hardware-accelerated GPU 3D transform transitions (`cubic-bezier(0.34, 1.56, 0.64, 1)`) ensuring 60 FPS smooth interactions.

---

## 🚀 Quick Start

### HTML Structure

```html
<div class="card-wrapper">
  <!-- Back Green "CLICK TO READ" Card -->
  <a href="https://github.com/SAPTARSHI-coder/EaseMotion-css" target="_blank" rel="noopener noreferrer" class="read-link-card">
    <div class="card-back-text">
      CLICK TO READ
      <svg class="card-back-icon" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </a>

  <!-- Front Main Case Study Card -->
  <div class="case-study-card" style="background-image: url('YOUR_IMAGE_URL');">
    <div class="card-overlay"></div>
    <div class="card-content">
      <div class="card-header-info">
        <span class="card-category">BOOKS</span>
        <h2 class="card-title">How Delivery Hero streamlines marketing reports across all their brands with Clarisights</h2>
      </div>
      <div class="card-footer">
        <div class="logo-pill">
          <!-- Logo Image or SVG -->
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## 🎨 CSS Variables & Customization

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-canvas` | `#f8fafc` | Outer container canvas background color |
| `--dot-color` | `#cbd5e1` | Dot matrix pattern color |
| `--card-bg` | `#0f172a` | Card fallback base background |
| `--card-title-color` | `#ff8b8b` | Card headline text color |
| `--card-category-color` | `#94a3b8` | Uppercase category tag color |
| `--accent-green` | `#10b981` | Slide-out ribbon primary gradient color |

---

## 📁 File Structure

```
case-study-card-yp/
├── demo.html     # Interactive showcase page with live props customizer
├── style.css     # Clean vanilla CSS animations and responsive design system
└── README.md     # Documentation and usage guide
```
