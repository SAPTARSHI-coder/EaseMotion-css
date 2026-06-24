# Safe-Area Sticky Utility

## What does this do?

Extends `position: sticky` to account for iOS notch and Android gesture-navigation safe areas using `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)` — no JavaScript.

---

## How is it used?

Add `viewport-fit=cover` to your viewport meta tag (required for `env()` insets to work), then apply the classes:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

<!-- Sticky header — clears notch / status bar -->
<header class="em-sticky-safe-top">
  Navigation
</header>

<!-- Sticky footer — clears home indicator bar -->
<footer class="em-sticky-safe-bottom">
  Tab Bar
</footer>
```

The two utility classes:

| Class | Behaviour |
|---|---|
| `em-sticky-safe-top` | `position: sticky; top: 0;` + `padding-top: env(safe-area-inset-top)` |
| `em-sticky-safe-bottom` | `position: sticky; bottom: 0;` + `padding-bottom: env(safe-area-inset-bottom)` |

Browsers without `env()` support silently ignore the inset padding and fall back to plain sticky — the layout still works, just without the inset offset.

---

## Why is it useful?

The existing `ease-sticky-top` utility works perfectly on desktop but silently overlaps the status bar on notched iPhones and devices with gesture navigation bars. Adding `env(safe-area-inset-*)` is a two-line CSS fix that makes sticky elements truly device-safe. It fits EaseMotion CSS's philosophy of solving real layout problems with pure CSS and no JavaScript.
