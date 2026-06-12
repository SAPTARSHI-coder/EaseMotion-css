## ease-magnetic

**What does this do?**
A cursor-aware hover effect where elements smoothly shift toward the cursor
position — creating a satisfying magnetic pull feeling that makes UI
elements feel alive and responsive.

**How is it used?**
Add the class `magnetic` to any element:

```html
<button class="magnetic">Hover Me</button>
<div class="magnetic">🧲</div>
<a class="magnetic" href="#">Get Started</a>
```

Add a color variant for matching glow:

```html
<button class="magnetic magnetic-purple">✨ Get Started</button>
<button class="magnetic magnetic-pink">💖 Subscribe</button>
<button class="magnetic magnetic-green">🚀 Launch</button>
<button class="magnetic magnetic-gold">⚡ Try Free</button>
```

Control strength:

```html
<button class="magnetic magnetic-weak">Subtle Pull</button>
<button class="magnetic magnetic-strong">Strong Pull</button>
```

Customize with CSS variables:

```css
.my-element {
  --magnetic-strength: 0.4;
  --magnetic-duration: 0.3s;
  --magnetic-glow: rgba(124, 110, 247, 0.6);
}
```

Add the JavaScript to activate:

```js
const magnets = document.querySelectorAll(".magnetic");

magnets.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const strength = parseFloat(
      getComputedStyle(el).getPropertyValue("--magnetic-strength") || 0.3
    );
    el.classList.add("is-active");
    el.classList.remove("is-leaving");
    el.style.transform = `translate(${deltaX * strength}px, ${deltaY * strength}px)`;
  });

  el.addEventListener("mouseleave", () => {
    el.classList.remove("is-active");
    el.classList.add("is-leaving");
    el.style.transform = "translate(0px, 0px)";
  });
});
```

**Why is it useful?**
Unlike static hover effects, `ease-magnetic` responds to cursor position
in real time — creating a premium tactile interaction seen on high-end
portfolios and landing pages. Uses CSS variables for full customization
of strength, speed, and glow color. Includes smooth snap-back on mouse
leave with a slower transition for a natural spring feel. Supports
`prefers-reduced-motion` for accessibility.

Perfect for:

- ✨ CTA buttons on landing pages
- 🔔 Navigation icons and links
- 🃏 Feature and profile cards
- 🎯 Any interactive element that needs premium feel
