# Animated Dark Mode Toggle with Sun and Moon Icons

## What does this do?
A dark mode toggle button where the sun and moon icons animate between
each other — one slides up while the other slides in from below. Toggling
sets `data-theme="dark"` on the root element.

## How is it used?

```html
<button class="ease-theme-toggle">
  <span class="ease-theme-icon-light">☀️</span>
  <span class="ease-theme-icon-dark">🌙</span>
</button>

<script>
  const root = document.documentElement;
  const btn = document.querySelector('.ease-theme-toggle');
  btn.onclick = () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
  };
</script>
```

## Why is it useful?
Dark mode toggles are a near-universal UI pattern. This component provides
a polished, animated sun/moon transition driven by CSS transforms and
opacity, with the actual theme state managed via the `data-theme` attribute
on `<html>`. Minimal JS handles the attribute toggle as proposed in the
issue; the morph animation is pure CSS with `prefers-reduced-motion` support.