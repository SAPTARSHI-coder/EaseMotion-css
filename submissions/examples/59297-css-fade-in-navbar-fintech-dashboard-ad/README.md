# CSS Fade-In Navbar for Fintech Dashboard Layouts

> Issue: [#59297](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59297)

A sticky glass navbar that fades down on load with staggered links, plus a pure CSS burger menu below 860px. No JavaScript.

## What it does

The bar animates in from `translateY(-10px)` while its nav links stagger in behind it. It sticks to the top on scroll with a blurred, saturated backdrop. At mobile widths the links collapse into a checkbox-driven panel and the burger morphs into a close cross.

## How it is used

```html
<input class="nv-toggle-ad" type="checkbox" id="nv-menu-toggle-ad">

<header class="nv-bar-ad">
    <div class="nv-bar-ad__inner">
        <a class="nv-brand-ad" href="#">…</a>
        <nav><ul class="nv-links-ad">
            <li class="nv-links-ad__item"><a class="nv-link-ad" href="#">Overview</a></li>
        </ul></nav>
        <div class="nv-tail-ad">
            <label class="nv-burger-ad" for="nv-menu-toggle-ad">
                <span class="nv-burger-ad__line"></span> ×3
            </label>
        </div>
    </div>
    <nav class="nv-panel-ad">…</nav>
</header>
```

The checkbox **must precede** `.nv-bar-ad` — the panel and burger are matched through `.nv-toggle-ad:checked ~ .nv-bar-ad …`.

## Key CSS custom properties

```css
--nv-fade-duration: 520ms;  /* bar entrance */
--nv-item-step:      70ms;  /* per-link stagger */
--nv-menu-duration: 280ms;  /* mobile panel */
--nv-bar-h:          64px;  /* also positions the panel */
--nv-accent:      #60a5fa;
```

## Why it fits EaseMotion

Link stagger starts at `step × 2` rather than `× 1`, so the links trail the bar's own entrance instead of racing it — the two animations read as one gesture.

The mobile panel is `display: none` at desktop widths and only becomes `display: block` inside the 860px media query. That matters: it means the panel is genuinely absent from the desktop layout and tab order, rather than merely transparent, so a stale `:checked` state after a resize cannot leak an invisible focus trap onto the desktop view.

Entrance animations use `animation-fill-mode: both` and are therefore *shortened* to 1ms under `prefers-reduced-motion`, never removed — removing them would leave `both` fill holding the bar and every link at `opacity: 0`. `backdrop-filter` is `@supports`-guarded and degrades to a solid translucent bar.
