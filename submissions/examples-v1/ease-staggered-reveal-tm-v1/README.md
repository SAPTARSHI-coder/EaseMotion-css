# ease-staggered-reveal

Staggered child fade-in for EaseMotion CSS.

## Usage

```html
<div class="stagger-list stagger-up">
  <div class="stagger-item stagger-1">Item 1</div>
  <div class="stagger-item stagger-2">Item 2</div>
</div>
```

```js
const observer = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: 0.15 });
document.querySelectorAll('.stagger-list').forEach(el => observer.observe(el));
```
