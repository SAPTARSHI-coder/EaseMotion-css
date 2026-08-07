# ease-scroll-progress

A fixed top-of-page scroll progress bar for **EaseMotion CSS** — the "reading progress" indicator common on blogs and docs sites.

## Usage

```html
<div class="scroll-progress"></div>

<script>
  document.addEventListener('scroll', () => {
    const h = document.documentElement;
    const percent = h.scrollTop / (h.scrollHeight - h.clientHeight);
    document.querySelector('.scroll-progress').style.setProperty('--scroll-percent', percent);
  });
</script>