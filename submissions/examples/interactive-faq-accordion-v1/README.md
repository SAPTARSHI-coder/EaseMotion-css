# Interactive FAQ Accordion Grid

A keyboard-accessible, zero-dependency FAQ grid showcasing modern CSS Grid height transitions and rotating indicator icons.

---

## 📷 Screenshots

> [!NOTE]
> *Screenshots Placeholder: Insert demo preview screenshots showing FAQ accordion list items with expanded and collapsed states.*

---

## ❓ Questions & Answers

### 1. What does this do?
Provides a premium, accessible FAQ accordion block utilizing modern CSS Grid `grid-template-rows` transitions to smoothly expand/collapse panel heights without layout jumps or javascript calculations.

### 2. How is it used?
Create accordion blocks utilizing button triggers and grid content wrappers, adding the `.accordion-item` class and `.is-open` to expand:

```html
<div class="accordion-item">
  <button class="accordion-header" aria-expanded="false" aria-controls="faq-panel-id">
    <span class="header-title">FAQ Question Text</span>
    <svg class="accordion-icon" ...></svg>
  </button>
  <div id="faq-panel-id" class="accordion-content" role="region">
    <div class="accordion-content-inner">
      <p>FAQ Answer text...</p>
    </div>
  </div>
</div>
```

Toggle the item's state dynamically by adding `.is-open` to `.accordion-item` and updating `aria-expanded="true/false"`.

### 3. Why is it useful?
Natively solves the height transition limitation in CSS (`height: 0` to `height: auto` does not transition). Using `grid-template-rows: 0fr/1fr` transitions the wrapper smoothly, ensuring an elegant user experience.

---

## 🏆 Why It Fits EaseMotion CSS Philosophy

1. **Modern CSS Technique**: Solves content folding using layout grids rather than forcing pixel dimensions or JavaScript intervals.
2. **Natively Accessible**: Uses semantic HTML `<button>` triggers for focus outline support, keyboard navigation support, and correct screen reader announcement variables.
3. **Motion-Reduced Safe**: Halts all layout transitions and rotation variables immediately when `prefers-reduced-motion: reduce` matches user setup.
