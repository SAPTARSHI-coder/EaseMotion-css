# Testimonial Quote Card

### What does this do?

It shows a single large testimonial card with a decorative quote mark, a quote, and the author with an initials avatar, that fades and rises in on load.

### How is it used?

```html
<figure class="quote-card">
  <blockquote>EaseMotion made our animations effortless.</blockquote>
  <figcaption>
    <span class="quote-avatar" aria-hidden="true">JD</span>
    <span class="quote-author"><strong>Jane Doe</strong><span>CTO, TechCorp</span></span>
  </figcaption>
</figure>
```

It uses semantic `figure`, `blockquote`, and `figcaption` elements, with the large quote mark drawn as a pseudo element.

### Why is it useful?

A featured quote adds social proof to landing and about pages. This presents the quote with a decorative mark and a gentle entrance, using only CSS and an initials avatar so it is self contained. The entrance is disabled under `prefers-reduced-motion: reduce`.
