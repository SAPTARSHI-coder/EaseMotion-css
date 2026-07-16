# Fade-In Sticky Header

A responsive sticky navigation header for EaseMotion CSS that starts fully transparent over a hero section and smoothly fades in a solid, blurred background as the page is scrolled — built with pure HTML and CSS, no JavaScript.

## ✨ Features

- Sticky header (`position: sticky`) that stays pinned to the top of the viewport
- Starts fully transparent so it blends into the hero section beneath it
- Fades in a solid background, backdrop blur, and drop shadow as the user scrolls, driven entirely by native CSS scroll-linked animation
- Graceful `@supports` fallback: browsers without scroll-driven animation support get a permanently legible, semi-transparent blurred header instead of a transparent one
- Respects `prefers-reduced-motion` by skipping the animated fade and showing the solid header state immediately
- Accessible markup: skip link, semantic `<nav aria-label="Primary">`, `aria-current="page"` on the active link, and visible `:focus-visible` outlines
- Fully responsive across desktop, tablet, and mobile
- Uses EaseMotion CSS-style design tokens (custom properties) and a `fade-in` keyframe animation consistent with the rest of the library's naming conventions

## 📁 Folder Structure

submissions/examples/fade-in-sticky-header-santoshi/
├── demo.html   # Header, hero, and long-form content used to demonstrate scrolling
├── style.css   # Design tokens, sticky header, scroll-driven fade, responsive rules
└── README.md   # This file

## 🚀 How to Run

1. Make sure `demo.html` and `style.css` are in the same folder.
2. Open `demo.html` in a modern browser (Chrome or Edge recommended for the full scroll-driven effect).
3. Scroll down the page and watch the header fade from transparent into a solid, blurred bar within the first ~220px of scrolling.

## 🎞 Animation Used

The fade relies on `animation-timeline: scroll()`, a native CSS feature that ties an animation's progress directly to the page's scroll position instead of to time:

```css
@keyframes headerScrollFade {
  from {
    background-color: transparent;
    box-shadow: none;
    backdrop-filter: blur(0);
  }
  to {
    background-color: var(--header-bg-solid);
    box-shadow: var(--header-shadow);
    backdrop-filter: blur(var(--header-blur));
  }
}

@supports (animation-timeline: scroll()) {
  .site-header {
    animation: headerScrollFade linear forwards;
    animation-timeline: scroll(root);
    animation-range: 0px 220px;
  }
}
```

Because scroll-driven animations are a newer CSS feature (currently supported in Chromium-based browsers, with support landing elsewhere), the whole effect is wrapped in `@supports (animation-timeline: scroll())`. Browsers that don't support it fall into a separate `@supports not (...)` block that keeps the header permanently semi-transparent and blurred, so it is never left transparent-and-unreadable in production.

A second, simpler `fadeIn` keyframe animation (opacity + a small upward translate) is also used on the hero content itself, following the same naming pattern as other EaseMotion CSS animation utilities.

## 📱 Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| 🖥 Desktop (> 768px) | Full-width header with generous spacing; hero at full size |
| 📟 Tablet (≤ 768px) | Tighter header padding and nav gap; slightly smaller hero heading |
| 📱 Mobile (≤ 480px) | Smaller header height, brand, and nav-link text so all four nav links still fit on one row without needing a JavaScript hamburger menu; hero and content padding reduced |

## 🤝 Contributing

This component was built as an example page for the EaseMotion CSS repository, addressing the issue "Add Fade In Sticky Header Component," as part of a GSSoC contribution. Suggestions and improvements are welcome via Pull Request.