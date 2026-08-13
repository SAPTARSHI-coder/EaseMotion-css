# Fix: animation-fill-mode FOUC on entrance animations

**Fixes issue [#3479](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/3479)**

## 1. What does this do?

Adds `animation-fill-mode: both` to all entrance animation classes (`ease-fade-in`, `ease-slide-up`, `ease-slide-down`, `ease-slide-left`, `ease-slide-right`) so that elements stay invisible before their animation begins — eliminating a one-frame flash of unanimated content (FOUC).

## 2. How is it used?

No usage change for end users. The fix is internal to the animation class definition:

```html
<!-- Before fix: element flashes at full opacity then fades in -->
<div class="ease-fade-in">Hello</div>

<!-- After fix: element starts invisible and fades in cleanly -->
<div class="ease-fade-in">Hello</div>

<!-- Most impactful case — delayed or conditional reveal -->
<div id="modal-content" style="display:none;" class="ease-fade-in ease-slide-up ease-delay-200">
  Modal content
</div>
<script>
  setTimeout(() => document.getElementById('modal-content').style.display = 'block', 800);
</script>
```

## 3. Why is it useful?

Without `animation-fill-mode: backwards` (or `both`), the browser renders an element at its natural computed style — `opacity: 1` — for one or more frames before the CSS animation clock starts. This is especially visible on:

- **Elements revealed after a delay** (modals, tab panels, accordions)
- **Elements with an `animation-delay`** — the delay period is the worst window for the flash
- **Slower devices** where paint and animation scheduling have more variance

The fix (`animation-fill-mode: both`) tells the browser to hold the `from` keyframe state before the animation begins, and hold the `to` state after it ends. It is a one-line change per class and has zero side effects for existing usage.

This aligns with EaseMotion CSS's philosophy of **animation-first** — entrance animations should always behave predictably, whether fired on load or after a conditional reveal.

### Change summary

| Class | Property added |
|---|---|
| `ease-fade-in` | `animation-fill-mode: both` |
| `ease-slide-up` | `animation-fill-mode: both` |
| `ease-slide-down` | `animation-fill-mode: both` |
| `ease-slide-left` | `animation-fill-mode: both` |
| `ease-slide-right` | `animation-fill-mode: both` |