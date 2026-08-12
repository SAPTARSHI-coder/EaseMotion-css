# Scroll To Top Button (`ease-scroll-top-ksk`)

1. What does this do?  
A smooth floating scroll-to-top utility button. As the user scrolls down a long page, the button automatically fades in and rises into place at the bottom-right corner once scroll depth exceeds 300px, utilizing modern CSS Scroll-driven animations. Clicking the button smoothly scrolls the page back to the top.

2. How is it used?  
Include the `.ease-scroll-top` button with an inline smooth scroll click listener:

```html
<button class="ease-scroll-top" aria-label="Scroll to top" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">
  ↑
</button>
```

Configure parameters using CSS variables:
```css
:root {
  --ease-scroll-bg:       #6366f1;          /* button color */
  --ease-scroll-size:     46px;             /* button dimensions */
}
```

3. Why is it useful?  
Provides clean vertical navigation for deep pages. Uses native CSS `animation-timeline: scroll()` to track scroll depth rather than expensive JS scroll event listeners, reducing main-thread CPU load to 0%. Includes full screen responsiveness, keyboard focusability, prefers-reduced-motion safety overrides, and backward compatibility fallbacks.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #60638.*
