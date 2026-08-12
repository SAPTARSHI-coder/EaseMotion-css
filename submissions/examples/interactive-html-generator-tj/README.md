# Interactive Component Generator

This submission provides an interactive tool for configuring and previewing EaseMotion CSS utility classes on components like buttons and cards, instantly producing clean HTML snippets.

---

## 1. What does this do?

This interactive component generator allows developers to visually customize component variants, sizes, states, hover effects, and entrance animations in real-time, instantly producing copy-ready, semantic HTML markup.

---

## 2. How is it used?

Developers select options in the generator interface, copy the generated code, and apply these utility classes directly to their HTML elements:

### Button Example
```html
<button class="button button-primary button-md hover-lift slide-up delay-100" type="button">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
  </svg>
  Get Started
</button>
```

### Card Example
```html
<div class="card card-shadow hover-grow zoom-in">
  <span class="card-pill">Interactive</span>
  <h3 class="card-title">EaseMotion CSS</h3>
  <p class="card-desc">Leverage standard, composable CSS utility classes to design high-performance layouts.</p>
</div>
```

---

## 3. Why is it useful?

This generator highlights EaseMotion's core philosophy of composable, human-readable utility classes. Instead of writing heavy, monolithic CSS rules for every component state, developers assemble independent utilities—combining base layouts (`button`, `card`), size scales (`button-md`), visual variants (`card-shadow`), entrance effects (`slide-up`), animation delays (`delay-100`), and interactive animations (`hover-lift`). This demonstration shows how modular framework utilities easily combine without regressions, making component prototyping fast, predictable, and clean.
