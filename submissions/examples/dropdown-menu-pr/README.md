# Ease Dropdown — Pure CSS Dropdown Menu

A CSS-only dropdown menu component using `:focus-within` for activation, with smooth open/close animations, nested submenu support, and full `prefers-reduced-motion` respect.

## How It Works

### The `:focus-within` Trick

Unlike the checkbox hack (which requires an invisible `&lt;input&gt;` and a `&lt;label&gt;` trigger), this component uses `:focus-within` on the dropdown container:

```css
.dropdown {
  position: relative;
}

.dropdown__menu {
  position: absolute;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.dropdown:focus-within .dropdown__menu {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
```
