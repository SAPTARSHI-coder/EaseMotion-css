# CSS Elastic Bounce Tabs — E-Commerce Checkout Layouts

**Implements enhancement [#50141](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50141)**

---

## 1. What does this do?

A pure CSS tab component with an elastic-bounce active indicator styled for E-Commerce Checkout interfaces — featuring a numbered step-indicator pill that mirrors a checkout progress bar, a clean product-detail underline variant, trust badge rows, integrated form fields, and green/blue/violet brand colour themes. Zero JavaScript required.

---

## 2. How is it used?

### Variant 1 — Checkout stepper pill (numbered steps)

```html
<div class="ec-tabs ec-tabs-pill" role="tablist" aria-label="Checkout steps">

  <!-- Hidden radio inputs -->
  <input class="ec-tab-input" type="radio" name="checkout" id="step-1" checked />
  <input class="ec-tab-input" type="radio" name="checkout" id="step-2" />
  <input class="ec-tab-input" type="radio" name="checkout" id="step-3" />

  <!-- Nav bar with bouncing numbered pill -->
  <div class="ec-tabs-nav">
    <div class="ec-tab-pill" aria-hidden="true"></div>

    <label for="step-1" class="ec-tab-label" role="tab">
      <span class="ec-step-num" aria-hidden="true">1</span>
      <span class="ec-step-text">Cart</span>
    </label>
    <label for="step-2" class="ec-tab-label" role="tab">
      <span class="ec-step-num" aria-hidden="true">2</span>
      <span class="ec-step-text">Shipping</span>
    </label>
    <label for="step-3" class="ec-tab-label" role="tab">
      <span class="ec-step-num" aria-hidden="true">3</span>
      <span class="ec-step-text">Payment</span>
    </label>
  </div>

  <!-- Panels -->
  <div class="ec-tabs-content">
    <div class="ec-tab-panel" role="tabpanel">Cart content…</div>
    <div class="ec-tab-panel" role="tabpanel">Shipping form…</div>
    <div class="ec-tab-panel" role="tabpanel">Payment form…</div>
  </div>

</div>
```

### Variant 2 — Product detail tabs (underline)

```html
<div class="ec-tabs ec-tabs-line" aria-label="Product details">
  <!-- same radio inputs -->
  <div class="ec-tabs-nav">
    <div class="ec-tab-line" aria-hidden="true"></div>
    <label for="tab-1" class="ec-tab-label">Reviews (142)</label>
    <label for="tab-2" class="ec-tab-label">Description</label>
    <label for="tab-3" class="ec-tab-label">Specs</label>
  </div>
  <!-- panels -->
</div>
```

### Brand colour themes

```html
<!-- Default: green (trust/progress) -->
<div class="ec-tabs ec-tabs-pill"> … </div>

<div class="ec-tabs ec-tabs-pill ec-blue">   … </div>  <!-- #2563eb — SaaS blue  -->
<div class="ec-tabs ec-tabs-pill ec-violet"> … </div>  <!-- #7c3aed — D2C purple -->
<div class="ec-tabs ec-tabs-pill ec-rose">   … </div>  <!-- #e11d48 — Fashion red -->
```

### 4-step layout

```html
<div class="ec-tabs ec-tabs-pill tabs-4"> … </div>
```

### Speed modifiers

```html
<div class="ec-tabs ec-tabs-pill tabs-slow"> … </div>  <!-- 650 ms -->
<div class="ec-tabs ec-tabs-pill">           … </div>  <!-- 380 ms (default) -->
<div class="ec-tabs ec-tabs-pill tabs-fast"> … </div>  <!-- 200 ms -->
```

### CSS custom properties

```css
.my-ec-tabs {
  --ec-accent:       #16a34a;            /* indicator + step circle colour */
  --ec-accent-light: rgba(22,163,74,.08); /* pill background fill */
  --ec-accent-ring:  rgba(22,163,74,.25); /* focus ring / pill glow */
  --ec-surface:      #ffffff;
  --ec-border:       #e5e7eb;
  --ec-text:         #6b7280;
  --ec-text-active:  #111827;
  --ec-bounce-dur:   380ms;
  --ec-bounce-ease:  cubic-bezier(0.34, 1.56, 0.64, 1);
  --ec-radius:       0.75rem;
}
```

---

## 3. Why is it useful?

### E-Commerce Checkout aesthetic principles

Checkout UI is the highest-stakes surface in e-commerce. Visual design choices are constrained by conversion goals:

- **White backgrounds** — no distraction from the purchase flow
- **Green accent** — universally associated with trust, progress, and "go" actions
- **Numbered steps** — clear sense of progress reduces cart abandonment
- **Generous padding + readable font** — removes friction at the moment of purchase
- **Trust badges** — 🔒 SSL, ↩ returns, ✅ guarantee — keep anxiety low
- **The elastic bounce is the ONLY animation** — it adds perceived responsiveness without distracting from the form

### What makes the step indicator unique

The `.ec-step-num` circle badge inside each label changes colour on `:checked`:

```css
/* Default: grey circle with number */
.ec-step-num {
  background: #e5e7eb;
  color: #6b7280;
}

/* Active: green circle (same as active pill border) */
.ec-tab-input:nth-of-type(N):checked ~ .nav .ec-tab-label:nth-of-type(N) .ec-step-num {
  background: var(--ec-accent);
  color: #ffffff;
}
```

This creates a mini progress indicator inside the nav — familiar from Shopify, Stripe, and other major checkout flows.

### Companion connector line

A thin `::before` pseudo-element on the nav creates a horizontal progress track behind the pills — just like a linear stepper component:

```css
.ec-tabs-pill .ec-tabs-nav::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 1rem; right: 1rem;
  height: 2px;
  background: #e5e7eb;
  transform: translateY(-50%);
}
```

### Two use cases covered

| Variant | Use case | Key property |
|---|---|---|
| **Stepper pill** | Checkout flow (Cart → Shipping → Payment) | Numbered `.ec-step-num` badge + connector line |
| **Underline** | Product detail page (Reviews / Description / Specs) | Clean 2 px line, generous padding |

### How it differs from the previous tab variants

| Property | Glassmorphism | Minimalist | Cyberpunk | **E-Commerce** |
|---|---|---|---|---|
| Background | Dark gradient | Near-white | Near-black | **White #ffffff** |
| Key decoration | `backdrop-filter` blur | None | Neon glow | **Numbered step badge + trust badges** |
| Accent default | Violet | Near-black | Cyan | **Green #16a34a** |
| Panel content | Stats | Settings | System data | **Checkout forms + order summary** |
| Unique element | Frosted glass | Hairline border | Scanlines | **`.ec-step-num` progress indicator** |

### Feature checklist

| Requirement | Implementation |
|---|---|
| Elastic bounce | `cubic-bezier(0.34, 1.56, 0.64, 1)` on pill `translateX()` |
| E-Commerce aesthetics | White surface, green trust accent, numbered steps, trust badges |
| 2 layout variants | Numbered stepper pill, product-detail underline |
| Responsive | Step text hidden on ≤ 400 px (numbers only); form rows stack |
| Keyboard accessible | Radio inputs + `:focus-visible` ring |
| CSS custom properties | 12 tuneable variables |
| `prefers-reduced-motion` | All animation disabled; states preserved |
| Zero JavaScript | CSS radio input + sibling selector pattern |
