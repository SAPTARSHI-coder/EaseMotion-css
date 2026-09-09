# CSS Glassmorphism Breadcrumb

A premium, hardware-accelerated navigation trail featuring pristine backdrop-filter blurring and a minimalist pill-shaped aesthetic. This component demonstrates how to leverage native CSS compositing to build an elegant, OS-theme-aware interface element without any JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a structural breadcrumb navigation bar that visually floats above the rest of the application. The viewport includes ambient, slowly drifting background color orbs. As these vibrant orbs move behind the `.glass-breadcrumb` container, their colors are seamlessly blurred and diffused through the translucent acrylic material of the breadcrumb. The component supports native CSS hover highlights for links and adapts automatically to Light or Dark modes.

### 2. How is it used?

The breadcrumb is structured using semantic HTML navigation tags (`<nav>`, `<ol>`, `<li>`), ensuring full compatibility with screen readers via `aria-label` and `aria-current="page"`. 

**The Glassmorphism Engine:**
The frosted glass effect is applied to the main wrapper container using the `backdrop-filter` property, which hooks directly into the browser's hardware compositor:
```css
.glass-breadcrumb {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(24px); /* Natively blurs the background pixels */
  border-top: 1px solid rgba(255, 255, 255, 0.9); /* Frosty 3D edge */
}
```

**The Separators:**
To maintain clean HTML markup without polluting the DOM with structural visual elements, the chevron separators (`›`) are dynamically injected between list items using the CSS adjacent sibling combinator (`+`) and the `::before` pseudo-element:
```css
.breadcrumb-item + .breadcrumb-item::before {
  content: '›';
  margin: 0 4px;
  color: var(--theme-muted);
}
```

### 3. Why is it useful?

Historically, achieving complex blur effects over dynamic backgrounds required heavy WebGL implementations or Canvas drawing loops. By utilizing native CSS `backdrop-filter`, this component offloads all pixel-blurring calculations to the device's GPU compositor. This ensures flawless 60fps animations (as seen with the drifting background orbs) with absolutely zero JavaScript execution overhead, drastically preserving mobile battery life. Furthermore, the component guarantees accessibility by freezing the background orb animations via `@media (prefers-reduced-motion: reduce)` for users with motion sensitivities.
