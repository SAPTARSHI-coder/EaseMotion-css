# Testimonial / Quote Card Component — `testimonial-card-pr`

> Submission for **GitHub Issue #12665** — CSS-only Testimonial / Quote Card Component.

---

## 1. What does this do?

A fully CSS-only, responsive Testimonial / Quote Card component that displays a customer quote, optional 5-star rating, author avatar (with CSS-initials fallback), author name, and author role/title — with a smooth hover lift animation and multiple style variants (default, featured, compact, horizontal, dark, glassmorphism).

---

## 2. How is it used?

Link `style.css` into your page and add the following HTML structure:

**Minimal card:**

```html
<link rel="stylesheet" href="style.css" />

<article class="tc-card">
  <span class="tc-quote-mark" aria-hidden="true">&ldquo;</span>

  <!-- Optional: 5-star rating -->
  <div class="tc-stars" role="img" aria-label="5 out of 5 stars">
    <span class="tc-star tc-star--filled" aria-hidden="true">★</span>
    <span class="tc-star tc-star--filled" aria-hidden="true">★</span>
    <span class="tc-star tc-star--filled" aria-hidden="true">★</span>
    <span class="tc-star tc-star--filled" aria-hidden="true">★</span>
    <span class="tc-star tc-star--filled" aria-hidden="true">★</span>
  </div>

  <blockquote class="tc-body">
    Your customer quote text goes here.
  </blockquote>

  <footer class="tc-author">
    <!-- CSS initials avatar (no image required) -->
    <div class="tc-avatar tc-avatar--initials" aria-hidden="true">AB</div>

    <div class="tc-author-info">
      <span class="tc-author-name">Author Name</span>
      <span class="tc-author-role">Role · Company</span>
    </div>
  </footer>
</article>
```

**Responsive grid of cards:**

```html
<div class="tc-grid">
  <article class="tc-card"> … </article>
  <article class="tc-card"> … </article>
  <article class="tc-card"> … </article>
</div>
```

**Available modifier classes:**

| Class | Effect |
|---|---|
| `tc-card--featured` | Soft accent background, spans full grid width |
| `tc-card--dark` | Dark surface, light text |
| `tc-card--glass` | Glassmorphism (`backdrop-filter: blur`) |
| `tc-card--compact` | Reduced padding and font sizes |
| `tc-card--horizontal` | Avatar left, content right (inline layout) |
| `tc-star--filled` | Fills a star with amber colour |
| `tc-avatar--initials` | CSS-only initials avatar, no `<img>` needed |
| `tc-grid--two` | 2-column grid instead of 3 |

**Using a real avatar image:**

```html
<div class="tc-avatar">
  <img src="avatar.jpg" alt="Sarah Johnson" />
</div>
```

---

## 3. Why is it useful?

Testimonials and social-proof quotes are one of the most common UI patterns on marketing pages, landing pages, and product sites. EaseMotion CSS currently has no dedicated, self-contained testimonial card utility — this submission fills that gap directly.

The component aligns with EaseMotion's philosophy in three ways:

1. **Animation-first** — the hover lift, accent-line reveal, avatar scale, and quote-mark opacity fade are all driven purely by CSS transitions and `transform`. Zero JavaScript.
2. **Composable and token-based** — all colours, sizes, shadows, and timing values are controlled through CSS custom properties (`--tc-*`), making it trivially easy for the maintainer to remap them to the existing `ease-*` token system during integration.
3. **Accessible by default** — decorative quote marks carry `aria-hidden="true"`, star ratings use `role="img"` with descriptive `aria-label`, hover transforms are suppressed under `prefers-reduced-motion: reduce`, and the component works with keyboard focus (`focus-within`) as well as mouse hover.

The submission is entirely self-contained: open `demo.html` in any browser, no server required.