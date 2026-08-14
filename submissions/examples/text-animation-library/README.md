# Text Animation Library

## Overview

Text Animation Library provides a curated collection of CSS animations specifically designed for typography, hero sections, landing pages, and marketing content. Each animation is optimized for readability, accessibility, and visual impact while maintaining semantic HTML and pure CSS implementation.

## Problem Statement

Typography animations require specialized techniques and careful consideration:
- Most generic animations distract from text readability
- Complex multi-stage animations need careful CSS coordination
- Text-specific effects (typewriter, wave, gradient) are challenging in pure CSS
- Animations must respect accessibility preferences and maintain semantic markup
- Different text contexts need different animation approaches

These challenges often result in developers either skipping text animations entirely or creating inconsistent, hard-to-maintain animation code.

## Proposed Solution

Text Animation Library provides six purpose-built animations, each optimized for specific text contexts and use cases. Every animation is:
- **Semantic:** Class names describe the visual effect clearly
- **Accessible:** Respects `prefers-reduced-motion` and maintains readability
- **Pure CSS:** No JavaScript or DOM manipulation required
- **Composable:** Can be combined with stagger delays and custom timing

## Available Text Animations

### `.text-reveal`
**Purpose:** Gentle fade-in and slide-up entrance for text.

**Stages:**
1. Opacity: 0 → 1
2. Transform: translateY(30px) → translateY(0)

**Duration:** 0.8s | **Easing:** Smooth curve (cubic-bezier(0.34, 1.56, 0.64, 1))

**Best for:** Hero headings, section titles, introductory text, initial page load

**Example:**
```html
<h1 class="text-reveal">Welcome to Motion</h1>
```

**With stagger:**
```html
<p class="text-reveal">First paragraph</p>
<p class="text-reveal" style="animation-delay: 100ms;">Second paragraph</p>
<p class="text-reveal" style="animation-delay: 200ms;">Third paragraph</p>
```

---

### `.text-glow`
**Purpose:** Animated glow effect for emphasis (works best on dark backgrounds).

**Effect:**
- Continuous pulsing text-shadow glow
- Color: Blue (rgb(59, 130, 246))
- Creates luminous, attention-grabbing text

**Duration:** 2s (infinite) | **Easing:** Ease in-out

**Best for:** Callouts, highlights, special messages, dark theme headings, emphasis

**Example:**
```html
<h2 class="text-glow">Important Notice</h2>
```

**On dark background:**
```html
<div style="background: #1f2937; padding: 2rem;">
  <h2 class="text-glow">Premium Feature</h2>
</div>
```

---

### `.text-gradient`
**Purpose:** Modern animated gradient moving through text.

**Effect:**
- Multi-color gradient: #667eea → #764ba2 → #f093fb → #4facfe
- Gradient shifts position continuously
- Uses `background-clip: text` for text-only coloring

**Duration:** 3s (infinite) | **Easing:** Linear

**Best for:** Marketing headlines, modern branding, product taglines, eye-catching text

**Example:**
```html
<h1 class="text-gradient">Unlock Your Potential</h1>
```

---

### `.typewriter`
**Purpose:** Simulates typewriter effect with progressive character reveal and cursor.

**Effect:**
- Characters appear progressively from left to right
- Animated cursor blinking
- Uses `steps()` timing for character-by-character reveal
- `white-space: nowrap` maintains single-line formatting

**Duration:** 3s (steps) | **Cursor blink:** 0.5s

**Best for:** Hero statements, code snippets, dramatic reveals, tech/startup aesthetic

**Example:**
```html
<h1 class="typewriter">Build Amazing Products</h1>
```

**For code:**
```html
<code class="typewriter">$ npm install ease-motion</code>
```

---

### `.text-wave`
**Purpose:** Sequential character-by-character wave motion.

**Effect:**
- Individual characters bounce up and down in sequence
- Each character has incremental delay (0.1s between each)
- Creates flowing, attention-grabbing wave effect

**Duration:** 1.5s (infinite) | **Easing:** Ease in-out

**Best for:** CTAs, emphasis text, attention-grabbers, interactive headings, playful text

**Important:** Must wrap individual characters in `<span>` elements

**Example:**
```html
<h2>
  <span class="text-wave">G</span>
  <span class="text-wave">e</span>
  <span class="text-wave">t</span>
  <span class="text-wave"> </span>
  <span class="text-wave">S</span>
  <span class="text-wave">t</span>
  <span class="text-wave">a</span>
  <span class="text-wave">r</span>
  <span class="text-wave">t</span>
  <span class="text-wave">e</span>
  <span class="text-wave">d</span>
</h2>
```

---

### `.text-slide`
**Purpose:** Smooth horizontal slide entrance from left.

**Stages:**
1. Opacity: 0 → 1
2. Transform: translateX(-50px) → translateX(0)

**Duration:** 0.7s | **Easing:** Soft curve (cubic-bezier(0.25, 0.46, 0.45, 0.94))

**Best for:** Smooth page transitions, sidebar text, supporting copy, secondary headings

**Example:**
```html
<h3 class="text-slide">Powerful Features</h3>
```

---

## Usage Examples

### Hero Section with Multiple Animations

```html
<section class="hero">
  <h1 class="text-reveal">Welcome</h1>
  <p class="text-reveal" style="animation-delay: 100ms;">
    Discover amazing possibilities
  </p>
  <button class="btn">
    <span class="text-wave">
      G<span class="text-wave">e</span>t Started
    </span>
  </button>
</section>
```

### Marketing Headline with Gradient

```html
<div class="hero-section">
  <h1 class="text-gradient">
    Transform Your Business Today
  </h1>
</div>
```

### Documentation with Varied Headers

```html
<h2 class="text-reveal">Getting Started</h2>
<p>Follow these steps...</p>

<h3 class="text-slide">Installation</h3>
<p>Install the package...</p>

<h3 class="text-gradient">Advanced Usage</h3>
<p>Explore advanced features...</p>
```

### Loading State with Typewriter

```html
<div class="loading">
  <h2 class="typewriter">Loading your content...</h2>
</div>
```

### Emphasis with Glow (Dark Background)

```html
<div style="background: #1f2937;">
  <h2 class="text-glow">Premium Features</h2>
</div>
```

---

## Customization

### Override Global Timings

```css
:root {
  --text-duration-reveal: 1s;
  --text-duration-glow: 1.5s;
  --text-duration-gradient: 2s;
  --text-duration-typewriter: 2s;
  --text-duration-wave: 1s;
  --text-duration-slide: 0.5s;
}
```

### Per-Element Custom Timing

```html
<h1 class="text-reveal" style="animation-duration: 1.2s;">
  Custom Duration
</h1>

<p class="text-slide" style="animation-duration: 0.5s; animation-delay: 200ms;">
  Faster entrance with delay
</p>
```

### Combine with Other Classes

```html
<h1 class="text-reveal text-gradient">
  Animated heading
</h1>

<p class="text-slide" style="animation-delay: 100ms;">
  Supporting copy
</p>
```

---

## Accessibility Considerations

### Built-in Support for `prefers-reduced-motion`

All text animations automatically respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  .text-reveal,
  .text-glow,
  .text-gradient,
  .typewriter,
  .text-wave,
  .text-slide {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

Users who have enabled "Reduce motion" in their OS settings will see static text with no animations.

### Best Practices

- **Don't animate too much text.** Animate key phrases, headings, and CTAs. Long paragraphs lose readability.
- **Maintain semantic HTML.** Use proper heading levels (`<h1>`, `<h2>`, etc.), not styled `<div>` elements.
- **Test with screen readers.** Animations don't affect screen reader announcements; heading structure remains intact.
- **Combine with adequate contrast.** Ensure text color contrasts well with background per WCAG standards.
- **Limit infinite animations.** Use `.text-glow` and `.text-wave` sparingly to avoid cognitive overload.

---

## Performance Tips

- **Text animations are lightweight.** Most animations use CSS `@keyframes` with minimal GPU overhead.
- **Optimize on mobile.** Consider shorter durations or fewer animations on mobile devices.
- **Avoid animating paragraphs.** Best results when animating single headings or short phrases.
- **Test in production.** Monitor real-world performance impact on target devices.

---

## Benefits

- **Readable:** Animations enhance typography without distracting from content.
- **Semantic:** Class names describe visual effects clearly (English-friendly).
- **Accessible:** Respects motion preferences and maintains semantic HTML structure.
- **Lightweight:** Pure CSS with no JavaScript overhead.
- **Flexible:** Easy to combine, stagger, and customize.
- **Consistent:** Unified motion language across project.

---

## Browser Support

All text animations use standard CSS `@keyframes` and `animation` properties. Supported in all modern browsers:
- Chrome/Edge 43+
- Firefox 16+
- Safari 9+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Future Improvements

- Add character-by-character stagger utilities (auto-wrapping).
- Create text animation variants (fast, slow, slow-bounce, etc.).
- Add scroll-triggered text animations.
- Develop integration with design token systems.
- Add text shadow/outline animation effects.
- Provide JavaScript helper for dynamic text animation generation.
- Create Figma plugin for motion preview.

---

## Alignment with EaseMotion Philosophy

"If you can describe the effect, you should be able to use it as a class."

Text Animation Library embodies this philosophy by:
1. Using semantic, English-like class names (`.text-wave`, `.typewriter`).
2. Making sophisticated animations accessible with simple classes.
3. Prioritizing accessibility and readability over flashiness.
4. Providing pure CSS solutions that remain lightweight and maintainable.
5. Treating animation as a first-class concern in typography design.

---

Built with EaseMotion CSS philosophy. Great typography deserves thoughtful motion.