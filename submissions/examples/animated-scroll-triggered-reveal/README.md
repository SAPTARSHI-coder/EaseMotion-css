# ease-reveal-on-scroll

A scroll-triggered reveal utility for **EaseMotion CSS**. Pairs with any existing entrance animation class (`ease-fade-in`, `ease-slide-up`, etc.) to defer it until the element scrolls into view.

## Usage

```html
<div class="ease-reveal-on-scroll ease-fade-in">
  Content
</div>

<script>
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ease-in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.ease-reveal-on-scroll')
    .forEach(el => observer.observe(el));
</script>