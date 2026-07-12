# ease-double-click-heart

**Issue #36606** — A double-click like button with a heart icon and particle burst animation.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--heart-color` | `#ff4757` | Color of the heart icon |
| `--burst-color` | `#ff6b81` | Color of burst particles |
| `--burst-duration` | `0.6s` | Duration of the particle burst |
| `--heart-size` | `4rem` | Font size of the heart icon |

## Usage

```html
<div class="ease-double-heart" id="heart">
  <span class="ease-double-heart__icon">♡</span>
  <div class="ease-double-heart__burst" id="burst"></div>
</div>
```

Handle double-click via a timer in JS: toggle `.liked` on the icon, replace `♡`/`♥`, and inject particle `<div>` elements into `.ease-double-heart__burst`.
