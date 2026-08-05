# ease-container-adapt-card

> **Issue #61749** — CSS `@container` query adaptive card · Zero JavaScript · Zero dependencies

---

## What does this do?

`ease-container-adapt-card` is a **pure-CSS adaptive card component** that uses the CSS [`@container`](https://developer.mozilla.org/en-US/docs/Web/CSS/@container) at-rule to change its layout based on the **width of its parent element**, not the global browser viewport.

**The core problem it solves:**

Traditional responsive cards use `@media` queries, which measure the *viewport* width. This creates a fundamental mismatch in modern component-based development: a card inside a narrow sidebar and the same card inside a wide hero section both see the same viewport width — so they always render identically, regardless of their actual available space.

`@container` queries fix this by letting a component observe and react to its *own container's* dimensions.

**How the layout shift works:**

- The card's **default layout** is `flex-direction: row` — image on the left, content on the right. This is the "wide" state.
- When the `.ease-card-wrapper` container's **inline size drops below `500px`**, the `@container` rule fires and switches the card to `flex-direction: column` — image stacked above the content. The image also stretches to `width: 100%` for a clean full-bleed look.
- **This threshold is measured against the container, not the viewport.** A 320px sidebar column on a 1440px desktop monitor will correctly display the stacked layout, while the main content column — on the very same page — shows the horizontal layout.
- **No JavaScript is involved at any step.** No `ResizeObserver`, no class toggling, no conditional rendering.

---

## How is it used?

### 1. Add the containment wrapper

Wrap any instance of the card in `.ease-card-wrapper`. This is the element the browser will measure to evaluate `@container` rules.

```html
<div class="ease-card-wrapper">
  <!-- card goes here -->
</div>
```

The wrapper CSS establishes the container context:

```css
.ease-card-wrapper {
  container-type: inline-size;
  container-name: adaptCard;
  width: 100%;
}
```

### 2. Add the card markup inside the wrapper

```html
<div class="ease-card-wrapper">
  <article class="ease-adapt-card">

    <!-- Image block -->
    <div class="ease-card-image">
      <span class="ease-card-image-icon">🚀</span>
    </div>

    <!-- Content -->
    <div class="ease-card-content">
      <div>
        <div class="ease-card-meta">
          <span class="ease-card-tag">New</span>
          <span class="ease-card-rating">★★★★★ 4.9</span>
        </div>
        <h2 class="ease-card-title">Your Card Title</h2>
        <p class="ease-card-desc">Your card description goes here.</p>
      </div>
      <div class="ease-card-footer">
        <div class="ease-card-price">$29 <span>/ month</span></div>
        <button class="ease-card-btn" type="button">Get Started →</button>
      </div>
    </div>

  </article>
</div>
```

### 3. Link the stylesheet

```html
<link rel="stylesheet" href="style.css" />
```

The `@container` rule in `style.css` handles everything automatically:

```css
@container adaptCard (max-width: 500px) {
  .ease-adapt-card {
    flex-direction: column;
  }

  .ease-card-image {
    width: 100%;
    height: 200px;
  }

  .ease-card-btn {
    width: 100%;
    justify-content: center;
  }
}
```

No extra classes, no modifier variants, no JavaScript — just **drop the wrapper + card anywhere** and the layout is automatically correct.

---

## Why is it useful?

### The massive benefit for component-driven frameworks (React, Vue, Svelte…)

In a component-based architecture, you write a single `<Card />` component and drop it into many different layout contexts: a wide product listing grid, a narrow sidebar, a full-width hero, a compact recommendation strip. Each context provides a different amount of horizontal space.

**With `@media` queries (the old way):**

You have to write separate CSS classes for each context, or pass props to the component that conditionally apply layout classes:

```jsx
// ❌ Brittle — viewport width doesn't tell you how much space the card has
<Card layout="horizontal" />   {/* in the hero */}
<Card layout="vertical" />     {/* in the sidebar */}
```

This forces business logic (layout decisions) into your component's JavaScript API and creates duplicate CSS rules that are hard to maintain.

**With `@container` queries (the new way):**

```jsx
// ✅ One component — it figures out its own layout from its container
<Card />   {/* works perfectly whether placed in a hero or a sidebar */}
<Card />
```

The card observes its own container's width and adapts automatically. The component's JavaScript API stays clean. There is no duplicate CSS. A new layout context — say, a 3-column dashboard grid — requires zero changes to the card's code; it just works.

### Summary of benefits

| Traditional `@media` cards | `ease-container-adapt-card` with `@container` |
|---|---|
| Layout is tied to the global viewport width | Layout is tied to the parent container's width |
| Requires duplicate CSS classes per context | One stylesheet, one set of rules |
| Requires JS props or conditional class names | Zero JavaScript, zero class toggling |
| Adding a new layout context breaks existing logic | Drop it anywhere — it adapts automatically |
| Component is not truly reusable | Fully self-contained and portable |

### Browser support

| Browser | `@container` support |
|---|---|
| Chrome | 105+ |
| Edge | 105+ |
| Safari | 16+ |
| Firefox | 110+ |

For unsupported browsers, the card gracefully falls back to the default horizontal layout at all times — still fully functional and readable.

---

## Files

| File | Description |
|---|---|
| [`demo.html`](./demo.html) | Self-contained demo showing the same card HTML in a wide column (horizontal) and a 320px sidebar (vertical) simultaneously |
| [`style.css`](./style.css) | Component stylesheet — containment context, card styles, and the `@container` breakpoint |
| [`README.md`](./README.md) | This document |

---

## Related Resources

- [MDN: CSS `@container`](https://developer.mozilla.org/en-US/docs/Web/CSS/@container)
- [MDN: `container-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/container-type)
- [MDN: `container-name`](https://developer.mozilla.org/en-US/docs/Web/CSS/container-name)
- [web.dev: Container queries land in stable browsers](https://web.dev/blog/cq-stable)
- [Chrome Developers: Container queries](https://developer.chrome.com/docs/css-ui/container-queries)
