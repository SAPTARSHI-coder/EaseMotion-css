# CSS Theme Color Variants / Skin System (data-theme)

1. **What does this do?** Adds a theme skin system using the `data-theme` attribute and CSS custom properties. Includes 6 built-in themes: dark (default), forest, ocean, sunset, monochrome, and high-contrast — each defining `--primary`, `--primary-light`, `--bg`, `--surface`, `--surface-alt`, `--text`, `--text-muted`, `--border`, `--shadow`, `--success`, `--warning`, `--error`, and `--info` tokens.

2. **How is it used?** Set `data-theme` on any container element — all children inherit theme colors via CSS custom properties. The demo includes a theme switcher with `localStorage` persistence. No build step or JavaScript library required.

```html
<!-- Apply to document -->
<html data-theme="ocean">
<!-- or any container -->
<div data-theme="forest">
  <button style="background: var(--primary)">Themed</button>
</div>
```

```js
// Switch theme programmatically
document.documentElement.setAttribute('data-theme', 'ocean');
localStorage.setItem('ease-theme', 'ocean');
```

3. **Why is it useful?** Existing light/dark mode support only handles two states — this system adds multiple branded color palettes (forest, ocean, sunset), an accessible high-contrast mode, and a grayscale monochrome option. Using `data-theme` attribute selectors means zero class name conflicts, no specificity battles, and instant switching with no layout shift. All theme tokens cascade automatically to any component using `var(--primary)`, `var(--bg)`, etc.

### Available Themes

| Theme | data-theme | Vibe |
|---|---|---|
| Dark | `dark` | Default dark mode |
| Forest | `forest` | Green earthy tones |
| Ocean | `ocean` | Blue aquatic palette |
| Sunset | `sunset` | Warm orange/amber |
| Monochrome | `monochrome` | Grayscale |
| High Contrast | `high-contrast` | Maximum accessibility |

### CSS Custom Properties

`--primary`, `--primary-light`, `--primary-dark`, `--bg`, `--surface`, `--surface-alt`, `--text`, `--text-muted`, `--border`, `--shadow`, `--success`, `--warning`, `--error`, `--info`

Fixes #16391
