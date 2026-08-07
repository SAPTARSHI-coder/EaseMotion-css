# ease-sticky-header

A sticky page header that shrinks and gains a shadow once scrolled, for **EaseMotion CSS**.

## Usage

```html
<header class="sticky-header">
  <div class="sticky-header-logo">Brand</div>
  <nav>Nav links</nav>
</header>

<script>
  window.addEventListener('scroll', () => {
    document.querySelector('.sticky-header')
      .classList.toggle('scrolled', window.scrollY > 40);
  });
</script>