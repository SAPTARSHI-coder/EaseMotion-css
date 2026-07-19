# CSS Dynamic Viewport Utilities

Relates to feature request **#41318**.

## 1. What does this do?

Adds responsive utility classes utilizing the new viewport units (`svh`, `lvh`, and `dvh`) to improve layouts on mobile browsers where traditional `100vh` causes unwanted jumps as browser chrome appears or disappears. Includes `@supports` fallbacks for older browsers.

## 2. Why is this useful for EaseMotion CSS?

Modern mobile browsers expose multiple viewport definitions to solve long-standing sizing issues. Built-in utilities would allow developers to create more reliable full-screen layouts across Android and iOS devices without custom workarounds.

## 3. The `100vh` Problem

On mobile browsers, the URL bar and bottom toolbar appear and hide as you scroll. `100vh` always equals the **largest** possible viewport (toolbar hidden). When the toolbar is visible, `100vh` elements overflow the visible area, hiding content behind browser chrome.

## 4. The New Viewport Units

| Unit | Meaning | Use When |
|---|---|---|
| `dvh` | **Dynamic** — current real-time viewport height | Default choice for most layouts ✅ |
| `svh` | **Small** — toolbar always visible (smallest) | Content that must never be obscured |
| `lvh` | **Large** — toolbar always hidden (largest) | Intentionally matching classic `100vh` behavior |

## 5. Utilities Provided

| Class | Property | Description |
|---|---|---|
| `.ease-fullscreen` | `min-height: 100dvh` | Full-screen hero section |
| `.ease-h-screen` | `height: 100dvh` | Exact viewport height |
| `.ease-min-screen` | `min-height: 100svh` | At least small viewport |
| `.ease-max-screen` | `max-height: 100lvh` | At most large viewport |
| `.ease-half-screen` | `min-height: 50dvh` | Half viewport height |
| `.ease-w-screen` | `width: 100dvw` | Full dynamic viewport width |

## 6. How is it used?

**HTML** (matching the issue's snippet exactly)
```html
<section class="ease-fullscreen">
  <h1>Dynamic Viewport</h1>
</section>
```

**CSS** (matching the issue's snippet exactly)
```css
.ease-fullscreen {
  min-height: 100dvh;
  display: grid;
  place-items: center;
}

@supports not (height: 100dvh) {
  .ease-fullscreen {
    min-height: 100vh;
  }
}
```

## 7. Browser Support

| Browser | dvh / svh / lvh |
|---|---|
| Chrome | 108+ ✅ |
| Firefox | 101+ ✅ |
| Safari | 15.4+ ✅ |
| Edge | 108+ ✅ |

> **Tip**: Always include the `@supports not (height: 100dvh)` fallback to gracefully degrade to `100vh` on older browsers. The fallback is safe — older browsers simply get the classic behavior.
