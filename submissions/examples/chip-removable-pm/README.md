# Chip/Tag Component with Removable Animation

A chip/tag component for displaying labels, filters, skills, and categories — with color variants, sizes, outline mode, and a removable animation.

## Features

- **`.ease-chip`** — inline-flex, pill-shaped, small font, background color
- **Color variants** — default, `.ease-chip-primary`, `.ease-chip-success`, `.ease-chip-danger`, `.ease-chip-warning`, `.ease-chip-info`
- **`.ease-chip-outline`** — border-only variant with transparent background
- **`.ease-chip-sm`** — small size variant
- **`.ease-chip-removable`** — adds right padding to accommodate the close button
- **`.ease-chip-close`** — circular close button with hover effect
- **`.ease-chip.removing`** — triggers `scale(0.8)` + `opacity(0)` animation before DOM removal
- **`@keyframes ease-chip-remove`** — the removal animation at 0.25s ease

## Files

- `style.css` — all chip styles and demo layout
- `demo.html` — working demo with removable examples
- `README.md` — this file

## Usage

```html
<!-- Basic chip -->
<span class="ease-chip ease-chip-primary">Label</span>

<!-- Removable chip -->
<span class="ease-chip ease-chip-danger ease-chip-removable">
  Tag
  <button class="ease-chip-close" aria-label="Remove">✕</button>
</span>

<!-- Outline variant -->
<span class="ease-chip ease-chip-outline ease-chip-primary">Outline</span>

<!-- Small -->
<span class="ease-chip ease-chip-sm">Small</span>

<script>
  document.querySelectorAll('.ease-chip-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const chip = e.currentTarget.closest('.ease-chip');
      chip.classList.add('removing');
      setTimeout(() => chip.remove(), 300);
    });
  });
</script>
```
