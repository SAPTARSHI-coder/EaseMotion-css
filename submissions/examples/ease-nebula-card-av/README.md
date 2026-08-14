# 🌌 Nebula Card – Cosmic Nebula Clouds Swirl Within

> A space-themed card where six coloured nebula clouds swirl within on hover, turning a plain surface into a pocket of deep space.

> **Note:** This is a parallel implementation of the nebula idea from #55905, kept in its own `-av` folder alongside the existing `ease-nebula-card`. It takes a different approach: a dark cosmic page rather than a light one, clouds that stay faintly visible at rest instead of fully hidden, a twinkling star layer, animations that stay paused until hover, and keyboard plus reduced-motion support.

---

## 📖 Description

The **Nebula Card** is a space-themed UI component whose interior comes alive on hover. At rest the card reads as a still, dim patch of sky. The moment the pointer enters — or the card receives keyboard focus — six coloured nebula clouds brighten and begin to swirl, drifting, rotating and breathing across the surface like celestial gas clouds photographed by the Hubble Telescope.

Each cloud is a blurred radial gradient with its own colour, size, anchor point, drift path and speed (3.5s through 5s). Because the speeds never divide evenly into one another, the clouds continuously fall in and out of phase, so the pattern never visibly loops — it feels organic rather than mechanical. A slow 24s rotation of the whole cloud layer adds the overall swirl, five stars twinkle in the background, and a vignette fades everything into darkness at the edges.

All the motion is pure CSS. The animations sit paused while the card is idle, so an unhovered card costs nothing, and they resume from exactly where they stopped — there is no jump when the swirl starts.

Perfect for space-themed interfaces, astronomy sites, sci-fi projects, and anywhere a card should feel like a window onto the universe.

---

## 🎯 Perfect For

- ✅ **Space-themed interfaces** (cosmic, celestial, astronomical)
- ✅ **Astronomy websites** (nebulae, stars, space exploration)
- ✅ **Sci-fi projects** (futuristic, interstellar)
- ✅ **Creative portfolios** (unique, memorable showcases)
- ✅ **Science and planetarium sites** (space visualisation)
- ✅ **Gaming interfaces** (cosmic, sci-fi HUDs)
- ✅ **Music apps** (ambient, atmospheric)
- ✅ **Interactive art** (generative, expressive visuals)
- ✅ **Personal websites** (creative branding)

---

## ✨ Key Highlights

| Feature | Description |
|---------|-------------|
| **Nebula Clouds** | 6 colour-graded clouds swirl on hover |
| **Organic Drift** | 3 drift paths × 6 speeds (3.5s–5s) never re-sync |
| **Twinkling Stars** | 5 stars pulse on their own timings |
| **Cosmic Palette** | Violet, blue, pink, cyan over deep space |
| **Smooth Motion** | `cubic-bezier` easing on every transition |
| **Idle-Cheap** | Cloud animations stay paused until hover |
| **Accessible** | `:focus-visible`, keyboard toggle, `prefers-reduced-motion` |
| **Responsive** | Three breakpoints down to 380px |
| **Zero Dependencies** | No CDN, no framework, no build step |

---

## 🔧 How It Is Used

Drop the markup in and the card animates itself — the only JavaScript is a small optional handler that lets keyboard users toggle the swirl.

```html
<div class="nebula-card" tabindex="0" role="button" aria-label="Nebula card">
  <div class="nebula-field" aria-hidden="true">
    <span class="nebula-cloud cloud-1"></span>
    <span class="nebula-cloud cloud-2"></span>
    <span class="nebula-cloud cloud-3"></span>
    <span class="nebula-cloud cloud-4"></span>
    <span class="nebula-cloud cloud-5"></span>
    <span class="nebula-cloud cloud-6"></span>
  </div>

  <div class="star-field" aria-hidden="true">
    <span class="star star-1"></span>
    <span class="star star-2"></span>
    <span class="star star-3"></span>
    <span class="star star-4"></span>
    <span class="star star-5"></span>
  </div>

  <div class="nebula-content">
    <span class="nebula-glyph" aria-hidden="true">✦</span>
    <h2>Nebula</h2>
    <p>Hover to wake the cosmic clouds</p>
    <span class="nebula-tag">Deep Space</span>
  </div>
</div>
```

| Class | Role |
|-------|------|
| `.nebula-card` | The card shell — owns hover, focus and lift |
| `.nebula-field` | Rotating layer that holds the clouds |
| `.nebula-cloud` + `.cloud-1` … `.cloud-6` | One cloud each: colour, size, path, speed |
| `.star-field` / `.star-1` … `.star-5` | Background twinkle layer |
| `.nebula-content` | Foreground text, sits above the vignette |
| `.is-active` | Applied by JS so keyboard users get the hover state |

---

## 🎨 Customising

- **Cloud colours** — edit the `radial-gradient` colour stop in each `.cloud-N` rule.
- **Swirl speed** — change `animation-duration` on `.cloud-N` (keep the values uneven so the loop stays hidden).
- **Overall swirl** — change the `24s` on `.nebula-field`'s `nebula-spin`.
- **Intensity** — adjust the hover `opacity` (`0.85`) and `filter: blur()` on `.nebula-cloud`.
- **Density** — add or remove `.nebula-cloud` / `.star` elements; each just needs a position and a duration.

---

## 💡 Why It Fits EaseMotion

EaseMotion is about motion that is declarative, cheap and readable. This card is a good example of all three: the whole effect is keyframes plus `animation-play-state`, with no per-frame JavaScript and nothing to initialise. The clouds compose their colours with `mix-blend-mode: screen` instead of stacked opacity hacks, the drift durations are the only knob needed to change the character of the effect, and `prefers-reduced-motion` turns the animation off while keeping the visual design intact.

---

## ♿ Accessibility

- The card is reachable with <kbd>Tab</kbd> and shows a visible `:focus-visible` ring.
- <kbd>Enter</kbd> or <kbd>Space</kbd> toggles the swirl, so keyboard users see the same effect as pointer users.
- Decorative cloud and star layers are marked `aria-hidden="true"`.
- `@media (prefers-reduced-motion: reduce)` disables all drifting, twinkling and rotation.

---

## 🚀 Quick Start

1. Place `demo.html` and `style.css` in the same folder
2. Open `demo.html` in your browser
3. Hover over the card to watch the nebula swirl

```bash
/ease-nebula-card-av/
├── demo.html       # HTML structure + small keyboard helper
├── style.css       # All styles + animations
└── README.md       # Documentation (this file)
```

---

## 🌍 Browser Support

Chrome, Edge, Firefox, Safari and Opera (current versions). Uses only `transform`, `filter`, `mix-blend-mode` and `@keyframes` — all widely supported.
