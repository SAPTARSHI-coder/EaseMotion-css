# What does this do?
This component provides a premium, responsive, glassmorphic scroll-to-top button that fades in as the user scrolls down, displaying a gradient circular scroll progress ring and smoothly scrolling the viewport back to the top when clicked.

# How is it used?
Add the markup for the button (incorporating the SVG progress ring and arrow chevrons), reference the styles, and configure the scroll listener:

```html
<button class="ease-scroll-top-jy" id="scrollTopBtn" aria-label="Scroll to top" type="button">
  <svg class="scroll-ring" viewBox="0 0 48 48">
    <circle class="ring-track" cx="24" cy="24" r="21"></circle>
    <circle class="ring-fill" cx="24" cy="24" r="21" style="--circumference: 132"></circle>
  </svg>
  <svg class="arrow-icon" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
</button>
```

Add the JavaScript logic to toggle the `is-visible` class and update the SVG path offset based on scroll progress:

```javascript
const btn = document.getElementById('scrollTopBtn');
const ringFill = document.querySelector('.ring-fill');
const circumference = 132;

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? scrollTop / docHeight : 0;

  if (scrollTop > 300) {
    btn.classList.add('is-visible');
  } else {
    btn.classList.remove('is-visible');
  }

  ringFill.style.strokeDashoffset = circumference * (1 - progress);
}

window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

# Why is it useful?
It offers a highly tactile, visual feedback mechanism that enhances navigation inside long pages, aligning with EaseMotion CSS's philosophy of premium aesthetics, micro-interactions, accessibility compliance, and smooth transitions.
