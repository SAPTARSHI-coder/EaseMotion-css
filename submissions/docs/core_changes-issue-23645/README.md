# Avatar Group Component — Issue #23645

## What does this do?

This submission adds a flexible, overlapping avatar stack component (`.ease-avatar-group`) featuring customizable overlap margins via CSS variables (`--ease-avatar-overlap`), lift-on-hover micro-animations, and styled overflow counter badges (`.ease-avatar-overflow`).

## How is it used?

Wrap multiple `.ease-avatar` elements and an optional `.ease-avatar-overflow` counter badge inside an `.ease-avatar-group` container:

```html
<div class="ease-avatar-group">
  <div class="ease-avatar">JD</div>
  <div class="ease-avatar">AM</div>
  <div class="ease-avatar">SR</div>
  <span class="ease-avatar-overflow">+4</span>
</div>
```

Size variations are supported by adding `.ease-avatar-group-sm`, `.ease-avatar-group-lg`, or `.ease-avatar-group-xl` to the container wrapper.

## Why is it useful?

It completes the avatar component set by providing a common Dashboard and Social UI stack primitive that requires no JavaScript, supports hardware-accelerated micro-interactions (hover translations), and supports easy customization of stacking distances dynamically.

---

## Proposed Changes in Core Code

To integrate these improvements, the following additions are proposed for `components/avatar.css`:

### File: `components/avatar.css`

Append these selectors:

```css
/* ── Avatar Group / Stack ── */
.ease-avatar-group {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.ease-avatar-group .ease-avatar {
  --ease-avatar-overlap: -0.75rem;
  margin-left: var(--ease-avatar-overlap);
  border: 2px solid var(--ease-color-bg, #09090b);
  transition:
    transform 0.2s var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1)),
    z-index 0.1s;
  position: relative;
  cursor: pointer;
}

.ease-avatar-group .ease-avatar:first-child {
  margin-left: 0;
}

/* sequential z-index stacking */
.ease-avatar-group .ease-avatar:nth-child(1) {
  z-index: 10;
}
.ease-avatar-group .ease-avatar:nth-child(2) {
  z-index: 9;
}
.ease-avatar-group .ease-avatar:nth-child(3) {
  z-index: 8;
}
.ease-avatar-group .ease-avatar:nth-child(4) {
  z-index: 7;
}
.ease-avatar-group .ease-avatar:nth-child(5) {
  z-index: 6;
}
.ease-avatar-group .ease-avatar:nth-child(6) {
  z-index: 5;
}
.ease-avatar-group .ease-avatar:nth-child(7) {
  z-index: 4;
}
.ease-avatar-group .ease-avatar:nth-child(8) {
  z-index: 3;
}
.ease-avatar-group .ease-avatar:nth-child(9) {
  z-index: 2;
}
.ease-avatar-group .ease-avatar:nth-child(10) {
  z-index: 1;
}

.ease-avatar-group .ease-avatar:hover {
  transform: translateY(-4px) scale(1.08);
  z-index: 12 !important;
}

.ease-avatar-overflow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--ease-color-surface, #1e1e24);
  color: var(--text-secondary, #a1a1aa);
  border: 2px solid var(--ease-color-bg, #09090b);
  font-size: 0.75rem;
  font-weight: 600;
  margin-left: var(--ease-avatar-overlap, -0.75rem);
  z-index: 0;
  user-select: none;
  flex-shrink: 0;
}

/* Sizing variations for Overflow Badge */
.ease-avatar-group-sm .ease-avatar-overflow {
  width: 2rem;
  height: 2rem;
  font-size: 0.7rem;
}

.ease-avatar-group-lg .ease-avatar-overflow {
  width: 3rem;
  height: 3rem;
  font-size: 0.85rem;
}

.ease-avatar-group-xl .ease-avatar-overflow {
  width: 4rem;
  height: 4rem;
  font-size: 1rem;
}
```

Fixes #23645
