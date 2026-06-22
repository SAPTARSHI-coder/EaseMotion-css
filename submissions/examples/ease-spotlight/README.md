## ease-spotlight

**What does this do?**
A cursor-aware radial spotlight effect that follows the mouse over dark 
elements — revealing content with a dramatic light beam that fades in 
on hover and disappears on mouse leave.

**How is it used?**
Add the class `spotlight` to any dark element:

```html
<div class="spotlight">
  <h2>Hover over me</h2>
  <p>The light follows your cursor</p>
</div>
```

Add a color variant:

```html
<div class="spotlight spotlight-purple">Purple glow</div>
<div class="spotlight spotlight-blue">Blue glow</div>
<div class="spotlight spotlight-gold">Gold glow</div>
<div class="spotlight spotlight-pink">Pink glow</div>
<div class="spotlight spotlight-white">White glow</div>
```

Control spotlight size:

```html
<div class="spotlight spotlight-sm">Small spotlight</div>
<div class="spotlight spotlight-lg">Large spotlight</div>
```

Customize with CSS variables:

```css
.my-element {
  --spotlight-size: 400px;
  --spotlight-color: rgba(124, 110, 247, 0.25);
  --spotlight-duration: 0.2s;
}
```

Add the JavaScript to activate cursor tracking:

```js
const spotlights = document.querySelectorAll('.spotlight');

spotlights.forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--spotlight-x', `${x}px`);
    el.style.setProperty('--spotlight-y', `${y}px`);
  });

  el.addEventListener('mouseleave', () => {
    el.style.setProperty('--spotlight-x', '-999px');
    el.style.setProperty('--spotlight-y', '-999px');
  });
});
```

**Why is it useful?**
Unlike static hover effects, `ease-spotlight` tracks cursor position in 
real time using CSS custom properties updated via JavaScript — the radial 
gradient moves fluidly with the cursor. The `::before` pseudo-element 
handles the light with zero extra HTML. Border color subtly brightens on 
hover for extra polish. Supports `prefers-reduced-motion` for accessibility.

Perfect for:
- 🃏 Feature and pricing cards on landing pages
- 🦸 Hero sections and banners
- 🎨 Portfolio project showcases
- 🌑 Any dark UI that needs depth and interactivity
- ✨ Premium SaaS and product pages