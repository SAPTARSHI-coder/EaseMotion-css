# ease-scroll-fade-slide

Scroll-driven fade + slide animations for EaseMotion CSS.

## Usage

```html
<div class="fade-up">I animate up</div>
<div class="fade-left" style="--anim-delay: 0.3s">Delayed</div>
```

```js
const observer = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: 0.12 });
document.querySelectorAll('.fade-up, .fade-left').forEach(el => observer.observe(el));
```
