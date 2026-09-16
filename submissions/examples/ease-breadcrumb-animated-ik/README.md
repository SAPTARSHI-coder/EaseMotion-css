# EaseMotion CSS — Animated Breadcrumb Navigation (`ease-breadcrumb-animated-ik`)

Accessible navigation breadcrumbs (`ease-breadcrumb-container`) featuring animated chevron dividers, hover link underline draws, and active page pill badges.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides an animated navigation breadcrumb component (`ease-breadcrumb-container`) that applies smooth underline draw transitions (`scaleX(1)`) on link hover and highlights current page state.

---

## 2. How is it used?

Apply the breadcrumb structure inside an HTML `<nav aria-label="Breadcrumb">` container:

```html
<nav aria-label="Breadcrumb" class="ease-breadcrumb-container">
  <ol class="ease-breadcrumb-list">
    <li class="breadcrumb-item">
      <a href="#" class="breadcrumb-link">Home</a>
      <span class="breadcrumb-divider">&rsaquo;</span>
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      <span class="breadcrumb-current">Breadcrumbs</span>
    </li>
  </ol>
</nav>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS prioritizes accessible, responsive navigation controls. The Animated Breadcrumb component delivers smooth 60fps GPU compositor underline draws (`scaleX`) while retaining WCAG-compliant ARIA breadcrumb semantics.
