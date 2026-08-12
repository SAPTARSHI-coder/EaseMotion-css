# CSS Spotlight Button

A button component featuring a dynamic, interactive spotlight glow that follows the user's cursor across its surface. Unlike typical implementations of this effect, this component relies entirely on pure CSS and native HTML layout hacks, requiring absolutely no JavaScript to track mouse coordinates.

## 📋 Mandatory Questions

### 1. What does this do?

When a user hovers over the button (or the immediate area surrounding it), a soft blue spotlight fades in. As the user moves their mouse across the button, the spotlight dynamically glides to follow the cursor's exact position. This effect provides premium, app-like micro-interaction feedback.

### 2. How is it used?

Achieving cursor tracking without JavaScript requires the "CSS Grid Tracking Hack". The HTML structure places a grid of 25 invisible `<div>` elements (a 5x5 grid) absolutely positioned over the button wrapper. 

```html
<div class="spotlight-wrapper">
  <!-- Invisible Tracking Grid -->
  <div class="track tr-1 tc-1"></div>
  <div class="track tr-1 tc-2"></div>
  <!-- ... 25 total divs ... -->
  
  <!-- The Target Button -->
  <button class="spotlight-btn">Hover Me</button>
</div>
```

The glow itself is a `radial-gradient` applied to the `.spotlight-btn::before` pseudo-element. The CSS utilizes the general sibling combinator (`~`) to detect which invisible grid cell is currently being hovered, and updates the `background-position` of the gradient accordingly. A CSS `transition` ensures the gradient glides smoothly between grid coordinates.

```css
/* Example of the mapping logic */
.tr-1.tc-1:hover ~ .spotlight-btn::before { background-position: 0% 0%; }
.tr-1.tc-2:hover ~ .spotlight-btn::before { background-position: 25% 0%; }
.tr-3.tc-3:hover ~ .spotlight-btn::before { background-position: 50% 50%; } /* Center */
```

**Customization via CSS Properties:**
You can easily adjust the color and size of the spotlight glow:

```css
:root {
  --spotlight-color: rgba(59, 130, 246, 0.5); /* The blue glow */
  --btn-bg: #0f172a; 
}
```

### 3. Why is it useful?

Dynamic cursor tracking is highly sought after in modern web design (popularized by Vercel and Linear). Historically, this required binding a `mousemove` event listener via JavaScript to constantly update `--x` and `--y` CSS custom properties. This continuous JS execution can cause layout thrashing or block the main thread on low-end devices. 

By mapping mouse regions to CSS state changes, we can offload the entire tracking and animation logic directly to the CSS engine. It proves that with clever HTML layering and CSS combinators, complex interactive physics can be achieved completely natively. Additionally, this component includes `@media (prefers-reduced-motion: reduce)` to disable the moving tracker, falling back to a stationary, accessible center glow.
