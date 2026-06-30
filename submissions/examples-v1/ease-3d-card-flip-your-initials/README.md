# ease-3d-card-flip

Pure CSS 3D flip card component for EaseMotion CSS. No JavaScript required for the flip animation — works on hover, click/tap, and keyboard navigation.

## Features

- **Horizontal flip** — `rotateY(180deg)` classic left-to-right flip
- **Vertical flip** — `rotateX(180deg)` top-to-bottom flip
- **Diagonal flip** — `rotateY(180deg) rotateZ(180deg)` dramatic spin effect
- **Checkbox hack** — Click/tap and keyboard accessible (Tab + Enter/Space)
- **Hover fallback** — Desktop hover automatically flips
- **Mobile optimization** — `@media (hover: none)` disables hover-only flip
- **Glassmorphism back face** — Frosted glass variant with `backdrop-filter`
- **Size modifiers** — Small (240×300px), Default (300×380px), Large (360×460px)
- **Speed modifiers** — Fast (0.4s), Default (0.7s), Slow (1.2s)
- **Perspective modifiers** — Shallow (500px), Default (1000px), Deep (2000px)
- **Back face colors** — Primary, Success, Info, Danger, Dark
- **Shadow enhancement** — Deeper shadow on flip for depth perception
- **Flip hint indicator** — Visual cue that card is interactive
- **Accessible** — `focus-visible`, keyboard navigation, `aria-label`, `prefers-reduced-motion`
- **Zero JavaScript** — Pure CSS 3D transforms

## Usage

### Basic Horizontal Flip

```html
&lt;div class="ease-card-flip"&gt; &lt;input type="checkbox"
class="ease-card-flip-input" aria-label="Flip card to see details"&gt; &lt;div
class="ease-card-flip-inner"&gt; &lt;div class="ease-card-flip-front"&gt;
&lt;!-- Front content --&gt; &lt;/div&gt; &lt;div
class="ease-card-flip-back"&gt; &lt;!-- Back content --&gt; &lt;/div&gt;
&lt;/div&gt; &lt;/div&gt;
```
