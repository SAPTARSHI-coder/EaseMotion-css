# Callout/Alert Component with Color Variants and Dismiss Animation

A contextual message component for displaying info, success, warning, and error notifications — with border-left accent stripe, icon slot, and slide-out dismiss animation.

## Features

- **`.ease-callout`** — base class with padding, border-radius, border-left accent, flex layout
- **Color variants** — `.ease-callout-info` (blue), `.ease-callout-success` (green), `.ease-callout-warning` (yellow), `.ease-callout-danger` (red)
- **CSS custom properties** — `--ease-callout-border`, `--ease-callout-bg`, `--ease-callout-text`
- **`.ease-callout-icon`** — icon slot aligned to the left
- **`.ease-callout-title`** — optional bold title within the body
- **`.ease-callout-dismiss`** — close button with hover effect
- **`.ease-callout.hiding`** — triggers `@keyframes ease-slide-out-right` (slides right + fades out)
- **Callout body** — `.ease-callout-body` wraps content text

## Files

- `style.css` — all callout styles and demo layout
- `demo.html` — working demo with all 4 variants in dismissible and non-dismissible modes
- `README.md` — this file

## Usage

```html
<div class="ease-callout ease-callout-info">
  <span class="ease-callout-icon">ℹ</span>
  <div class="ease-callout-body">
    <div class="ease-callout-title">Info</div>
    Message text here.
  </div>
  <button class="ease-callout-dismiss">&times;</button>
</div>

<script>
  document.querySelectorAll(".ease-callout-dismiss").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const callout = e.currentTarget.closest(".ease-callout");
      callout.classList.add("hiding");
      setTimeout(() => callout.remove(), 350);
    });
  });
</script>
```
