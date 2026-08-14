# ease-back-to-top

A floating "back to top" button for **EaseMotion CSS** that fades/scales in past a scroll threshold and smoothly scrolls the page to top on click.

## Usage

```html
<button class="back-to-top" aria-label="Back to top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
  ↑
</button>

<script>
  window.addEventListener('scroll', () => {
    document.querySelector('.back-to-top')
      .classList.toggle('visible', window.scrollY > 300);
  });
</script>