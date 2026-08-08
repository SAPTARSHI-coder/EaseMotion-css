# ease-scroll-reveal

Utility class + a tiny `IntersectionObserver` snippet that reveals any element as it enters the viewport.

## Usage

```html
<div class="ease-reveal">Content to reveal on scroll</div>
```

```js
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.ease-reveal').forEach(el => observer.observe(el));
```

## Notes

- Apply `.ease-reveal` to as many elements as you like — one observer handles them all.
- Threshold of `0.2` means 20% of the element must be visible to trigger.

## Browser support

All modern browsers with `IntersectionObserver` support.