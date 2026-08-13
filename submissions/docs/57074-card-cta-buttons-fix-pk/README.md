# Fix: Card Section CTA Buttons Are Non-Functional (Issue #57074)

## 1. What does this do?

This fix resolves **Issue #57074**, where the three CTA buttons in the Cards section of
`examples/demo.html` — **Explore**, **Learn More**, and **Get Started** — appeared fully
clickable but performed no action when clicked.

The buttons have been converted from inert `<button>` elements into properly linked `<a>`
anchor elements that smoothly scroll to their semantically matching sections.

---

## 2. Root Cause

The buttons were implemented as bare `<button>` tags with no `onclick`, `href`, or any
JavaScript event handler attached:

```html
<!-- Before (broken) — does nothing on click -->
<button class="ease-btn ease-btn-primary ease-btn-sm">Explore</button>
<button class="ease-btn ease-btn-success ease-btn-sm">Learn More</button>
<button class="ease-btn ease-btn-danger ease-btn-sm">Get Started</button>
```

A `<button>` element is a form control for submitting data or triggering in-page actions via
JavaScript. Without any handler, it is completely inert. Since the intended behaviour is
**navigation to another section**, the semantically correct element is `<a>` (anchor/link).

---

## 3. Exact file location

**File:** `examples/demo.html`

| Line | Button label | Card title | Broken code |
|------|-------------|-----------|-------------|
| 797  | `Explore`    | Animation First | `<button class="ease-btn ease-btn-primary ease-btn-sm">Explore</button>` |
| 812  | `Learn More` | Human Readable  | `<button class="ease-btn ease-btn-success ease-btn-sm">Learn More</button>` |
| 826  | `Get Started`| Zero Config     | `<button class="ease-btn ease-btn-danger ease-btn-sm">Get Started</button>` |
| 844–846 | `Explore` | Neumorphic Card | `<button class="ease-btn ease-btn-primary ease-btn-sm">Explore</button>` |

---

## 4. Fix Applied

Each `<button>` is replaced by an `<a>` element with the matching section `href`, a
descriptive `aria-label`, and a unique `id` for testability. The visual appearance is
**identical** — the same `ease-btn` modifier classes are preserved.

```html
<!-- BEFORE: inert button, does nothing on click -->
<button class="ease-btn ease-btn-primary ease-btn-sm">Explore</button>

<!-- AFTER: anchor scrolls to the #animations section -->
<a href="#animations"
   class="ease-btn ease-btn-primary ease-btn-sm"
   id="cta-explore-animation-first"
   aria-label="Explore the Animations section">
  Explore
</a>
```

### Button → Target Mapping

| Button label | Card | Target section in `examples/demo.html` | Rationale |
|---|---|---|---|
| **Explore** | Animation First | `#animations` | "Animation First" card promotes the animation-first philosophy → the Animations demo section is the natural destination |
| **Learn More** | Human Readable | `#buttons` | "Human Readable" card explains class naming → the Buttons Matrix section demonstrates readable class names in action |
| **Get Started** | Zero Config | `../docs/index.html#installation` | "Zero Config" card explains zero-setup → the Installation section of the docs is the definitive getting-started resource |
| **Explore** | Neumorphic Card | `#cards` | This card is itself inside the Cards section → scrolling to the top of the Cards section lets users explore more card variants shown below |

---

## 5. Complete modified code for `examples/demo.html`

### Line 796–798 (Animation First card footer)

```html
<!-- BEFORE -->
<div class="ease-card-footer">
  <button class="ease-btn ease-btn-primary ease-btn-sm">Explore</button>
</div>

<!-- AFTER -->
<div class="ease-card-footer">
  <a href="#animations"
     class="ease-btn ease-btn-primary ease-btn-sm"
     id="cta-explore-animation-first"
     aria-label="Explore the Animations section">
    Explore
  </a>
</div>
```

### Line 811–813 (Human Readable card footer)

```html
<!-- BEFORE -->
<div class="ease-card-footer">
  <button class="ease-btn ease-btn-success ease-btn-sm">Learn More</button>
</div>

<!-- AFTER -->
<div class="ease-card-footer">
  <a href="#buttons"
     class="ease-btn ease-btn-success ease-btn-sm"
     id="cta-learn-more-human-readable"
     aria-label="Learn more about Buttons and class naming">
    Learn More
  </a>
</div>
```

### Line 825–827 (Zero Config card footer)

```html
<!-- BEFORE -->
<div class="ease-card-footer">
  <button class="ease-btn ease-btn-danger ease-btn-sm">Get Started</button>
</div>

<!-- AFTER -->
<div class="ease-card-footer">
  <a href="../docs/index.html#installation"
     class="ease-btn ease-btn-danger ease-btn-sm"
     id="cta-get-started-zero-config"
     aria-label="Get started with installation">
    Get Started
  </a>
</div>
```

### Line 843–847 (Neumorphic Card footer)

```html
<!-- BEFORE -->
<div class="ease-card-footer">
  <button class="ease-btn ease-btn-primary ease-btn-sm">
    Explore
  </button>
</div>

<!-- AFTER -->
<div class="ease-card-footer">
  <a href="#cards"
     class="ease-btn ease-btn-primary ease-btn-sm"
     id="cta-explore-neumorphic"
     aria-label="Explore more Card variants">
    Explore
  </a>
</div>
```

---

## 6. CSS / JavaScript required

**No additional CSS or JavaScript is required.**

- Smooth scrolling is already globally enabled in `examples/demo.html` via the
  `html { scroll-behavior: smooth; }` rule defined in the inline `<style>` block.
- `<a>` with an `href` is a native HTML feature that requires no JavaScript.
- The `ease-btn` classes continue to apply identical visual styling to both `<button>` and `<a>`.

---

## 7. Why this is useful

> EaseMotion CSS is a demo-first framework. The demo page is the primary way new users
> discover and evaluate the library. Non-functional CTA buttons break trust and make the
> demo feel unpolished. This fix ensures every interactive element on the demo page
> behaves exactly as users expect.

---

## 8. Verification checklist

- [x] Clicking **Explore** on the "Animation First" card scrolls to the `#animations` section
- [x] Clicking **Learn More** on the "Human Readable" card scrolls to the `#buttons` section
- [x] Clicking **Get Started** on the "Zero Config" card navigates to the Installation docs
- [x] Clicking **Explore** on the "Neumorphic Card" scrolls to the `#cards` section
- [x] Visual appearance is identical to before — same `ease-btn` classes, same colours
- [x] `aria-label` attributes provide screen reader context
- [x] Unique `id` attributes allow automated browser testing to locate each button
- [x] No other sections, styles, or scripts are modified
- [x] Smooth scroll works without any JavaScript (CSS `scroll-behavior: smooth`)

---

## 9. Commit message

```
fix: add functionality to Cards CTA buttons (issue #57074)

The Explore, Learn More, and Get Started buttons in the Cards section
of examples/demo.html were <button> elements with no action attached.
Converted them to <a> anchors with appropriate href targets:

- Explore (Animation First)  → #animations
- Learn More (Human Readable) → #buttons
- Get Started (Zero Config)  → ../docs/index.html#installation
- Explore (Neumorphic Card)  → #cards

Added aria-label and id attributes for accessibility and testability.
No visual changes. No CSS or JS additions required.
```
