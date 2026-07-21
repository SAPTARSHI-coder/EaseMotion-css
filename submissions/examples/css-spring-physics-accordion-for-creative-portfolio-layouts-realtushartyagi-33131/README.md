# CSS Spring Physics Accordion for Creative Portfolios

A pure CSS accordion component built on native `<details>` and `<summary>` HTML elements. It features a sophisticated "Spring Physics" interaction pattern: when the accordion expands, the content reveals itself using a bouncy, custom `cubic-bezier` timing function. This creates a tactile, physical sensation that perfectly complements modern, high-end creative portfolio and agency aesthetics.

## Files
- `demo.html` – A standalone demonstration page featuring a mocked creative portfolio layout with three interactive project case studies.
- `style.css` – The heavily-commented stylesheet containing the custom `cubic-bezier` spring logic, the CSS Grid trick for height transitions, and the animated plus/minus indicator.

## How it works
1. **Semantic Foundation**: Relies entirely on the native HTML5 `<details>` and `<summary>` tags, providing built-in accessibility and keyboard navigation out of the box.
2. **Spring Physics via CSS Grid**: Native `<details>` elements do not animate their height by default. This stylesheet uses the modern CSS Grid trick (`grid-template-rows: 0fr` to `1fr`) on the `.ease-spring-content` wrapper. The secret sauce is the `--ease-spring-easing` variable (`cubic-bezier(0.34, 1.15, 0.64, 1)`), which deliberately overshoots the target height and settles back into place, mimicking physical tension.
3. **Cascading Content Animation**: To amplify the effect, the inner `.project-details` block features a secondary `transform: translateY(20px)` and opacity fade. When the accordion opens, this content springs up into place slightly behind the main height transition, creating a fluid, multi-layered "cascade" effect.
4. **Animated Plus/Minus**: The toggle indicator is built from two absolute `<span>` lines. When opened, the vertical line rotates `90deg` to form a minus sign, utilizing the exact same spring bezier curve.

## Usage

You can copy the HTML structure and CSS variables directly into your portfolio layouts.

```html
<details class="ease-spring-accordion" name="portfolio-projects">
    <summary class="ease-spring-summary">
        <h2 class="project-title">Your Project Title</h2>
        <div class="ease-spring-indicator">
            <span class="indicator-line horizontal"></span>
            <span class="indicator-line vertical"></span>
        </div>
    </summary>
    <div class="ease-spring-content">
        <div class="ease-content-inner">
            <div class="project-details">
                <p>Your portfolio case study content goes here.</p>
            </div>
        </div>
    </div>
</details>
```

### Customizing the Spring Physics
The physics are governed by standard CSS Custom Properties defined in `:root`, making it trivial to adjust the "bounciness" for your brand:

```css
:root {
  --ease-spring-transition-time: 0.6s; /* Duration of the spring */
  
  /* 
    The Y-value of 1.15 is what causes the "overshoot". 
    Increase it for more bounce, decrease towards 1.0 for less.
  */
  --ease-spring-easing: cubic-bezier(0.34, 1.15, 0.64, 1);
}
```

## Accessibility (prefers-reduced-motion)
Because it uses `<details>` and `<summary>`, screen readers naturally understand the expanded/collapsed state without needing manual `aria-expanded` ARIA attributes. A strict `@media (prefers-reduced-motion: reduce)` block is included to instantly strip away the spring bezier transforms, grid animations, and content fades for users who are sensitive to motion.

## Why it fits EaseMotion CSS
EaseMotion advocates for zero-JavaScript UI patterns whenever possible. High-end portfolio animations are typically built using bloated WebGL libraries or heavy JS physics engines (like React Spring) just to achieve bouncy accordion transitions. By combining the native `<details>` element with modern CSS Grid height transitions and a custom overshoot cubic-bezier, this component delivers a deeply interactive, 60fps physics-based experience entirely within the browser's CSS rendering engine.
