# CSS Browser Mockup Frame

A pristine, fully responsive macOS-inspired browser window mockup built entirely with HTML and CSS. This component is designed for showcasing web designs, screenshots, or live HTML components in a beautiful, presentation-ready frame without relying on static image assets.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders an interactive browser frame featuring accurate macOS window controls (Close, Minimize, Maximize) that reveal inner icons upon hover. Internally, the `.browser-content` area acts as a fixed-height viewport. For demonstration purposes, this specific implementation includes a complete "Fake Webpage" built using CSS skeleton blocks, which automatically and seamlessly scrolls from top to bottom on an infinite, hardware-accelerated loop. 

### 2. How is it used?

The outer `.browser-mockup` container manages the overarching structural styling (border-radius, shadow, and clipping), while the `.browser-header` uses standard Flexbox to perfectly balance the left window controls with the central URL bar and right action buttons.

**The Automated Scroll Engine:**
To simulate a user actively scrolling through a webpage design, the `.scroll-wrapper` container (which holds the inner webpage content) is animated along the Y-axis using a `transform: translateY()` `@keyframes` block.

```css
.scroll-wrapper {
  /* Animate over 12 seconds, utilizing hardware acceleration */
  animation: autoscroll 12s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
}

@keyframes autoscroll {
  0%, 15% { transform: translateY(0); }
  /* 
    Scrolls the content UP by its total height (-100%), 
    but offsets by the exact height of the viewport (+440px) 
    so the bottom of the content rests perfectly at the bottom of the frame.
  */
  85%, 100% { transform: translateY(calc(-100% + 440px)); }
}
```

### 3. Why is it useful?

Presenting portfolio pieces or website screenshots often requires opening Sketch or Figma and manually framing static JPEGs inside mockup SVGs. This process is tedious and results in un-interactive, heavy image files. 

By building the mockup frame directly into the DOM using pure CSS, developers can insert live HTML structures, GIFs, or embedded `<iframe>` elements directly into the viewport. The automated scroll animation provides an incredible, dynamic presentation layer without requiring any JavaScript interval timers. The component natively respects `@media (prefers-reduced-motion: reduce)`, instantly halting the scroll animation for users with motion sensitivities to ensure a fully accessible presentation.
