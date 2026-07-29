# Social Share Buttons — `social-share-buttons-ar`

A comprehensive, **CSS-first** social share button component with brand-accurate colors, smooth hover transitions, and multiple flexbox layout styles — horizontal, vertical, icon-only, pill, outline, and ghost variants.

---

## 1 · What does this do?

Provides ready-to-use social share buttons for 11+ platforms (X/Twitter, Facebook, LinkedIn, WhatsApp, Instagram, Pinterest, Reddit, Telegram, GitHub, Email, Copy-link) with **brand-accurate colors**, a **shimmer sweep on hover**, a **lift + glow transition**, and configurable layouts powered entirely by CSS flexbox.

---

## 2 · How is it used?

### Minimal markup

```html
<div class="social-share-buttons">
  <a href="..." class="ssb-btn ssb-btn--twitter">
    <!-- SVG icon -->
    Tweet
  </a>
  <a href="..." class="ssb-btn ssb-btn--whatsapp">
    <!-- SVG icon -->
    WhatsApp
  </a>
</div>
```

### Platform color variants (CSS color tokens)

```css
:root {
  --ssb-twitter:   #1da1f2;
  --ssb-facebook:  #1877f2;
  --ssb-linkedin:  #0a66c2;
  --ssb-whatsapp:  #25d366;
  --ssb-instagram: #e1306c;  /* gradient in CSS */
  --ssb-reddit:    #ff4500;
  --ssb-telegram:  #229ed9;
  /* … */
}

.ssb-btn--twitter  { --ssb-color: var(--ssb-twitter);  }
.ssb-btn--facebook { --ssb-color: var(--ssb-facebook); }
/* etc. */
```

### Hover effect (CSS transition)

```css
.ssb-btn {
  transition:
    transform  0.22s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.22s cubic-bezier(0.4, 0, 0.2, 1),
    filter     0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

.ssb-btn:hover {
  transform: translateY(-2px) scale(1.03);
  filter:    brightness(1.1);
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
}
```

### Layout styles (CSS flexbox)

```css
/* Horizontal — default */
.social-share-buttons { display: flex; flex-direction: row; flex-wrap: wrap; gap: 0.6rem; }

/* Vertical */
.social-share-buttons--vertical { flex-direction: column; align-items: stretch; }

/* Centered */
.social-share-buttons--center { justify-content: center; }

/* Spread */
.social-share-buttons--spread { justify-content: space-between; }
```

### Button modifier classes

| Class | Effect |
|---|---|
| `.ssb-btn--[platform]` | Brand color (twitter, facebook, linkedin, whatsapp, instagram, pinterest, reddit, telegram, github, email, copy) |
| `.ssb-btn--outline` | Transparent bg + colored border; fills on hover |
| `.ssb-btn--ghost` | Subtle tinted bg; fills on hover |
| `.ssb-btn--pill` | Fully rounded (`border-radius: 100px`) |
| `.ssb-btn--icon-only` | Square aspect ratio, no label |
| `.ssb-btn--sm` | Small padding + font |
| `.ssb-btn--lg` | Large padding + font |

---

## 3 · Why is it useful?

Social share buttons are **ubiquitous** across blogs, news sites, product pages, and portfolios. This component demonstrates several EaseMotion principles:

- **CSS transitions over JavaScript**: all hover lift, shimmer sweep, outline→fill, and ghost→fill effects are pure CSS — zero JS for animation.
- **CSS custom properties for brand colors**: each platform color lives in a `:root` token, making it trivial to override or theme the entire button set from a single CSS variable.
- **Flexbox for layout versatility**: swapping between horizontal, vertical, centered, or spread layouts requires only a single modifier class, leveraging flexbox's declarative power.
- **Content discoverability**: well-styled share buttons reduce friction for users wanting to share content, directly improving reach and engagement.
- **Accessible by default**: buttons use `<a>` with `aria-label`, focus-visible outlines, and SVG `aria-hidden` so screen readers read only the text label.
- **`prefers-reduced-motion` support**: all transitions are disabled for users who prefer reduced motion, following WCAG 2.1 guidelines.
