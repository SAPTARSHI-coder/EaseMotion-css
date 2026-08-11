# Morphing Blob Button Hover Effect

## What does this do?
A CSS-only button that features a continuously morphing blob background with a soft glowing halo and gentle scale animation on hover — all built with pure HTML and CSS, no JavaScript required.

## How is it used?
Wrap a button inside a container and apply the provided classes:

```html
<div class="blob-container">
    <button class="blob-btn">
        Hover Me
    </button>
</div>
```

Then include the `style.css` file in your HTML:

```html
<link rel="stylesheet" href="style.css">
```

## Why is it useful?
This effect showcases advanced yet readable CSS animation techniques while remaining completely self-contained. It aligns with EaseMotion CSS's animation-first philosophy and provides contributors with another modern UI micro-interaction that developers can easily study, customize, and integrate into their own projects.

Key highlights:

- **Pure CSS** — zero JavaScript dependencies
- **Smooth liquid morphing** using animated `border-radius`
- **Layered pseudo-elements** (`::before` and `::after`) for a fluid, glowing appearance
- **Soft glow and subtle scaling** on hover for tactile feedback
- **Responsive centered layout** that works on any screen size
- **Lightweight & performant** — GPU-accelerated transforms