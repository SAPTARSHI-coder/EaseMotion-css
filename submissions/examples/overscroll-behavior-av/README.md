# `overscroll-behavior` (Scroll Chaining) Refactor

## What does this do?
Proposes a vital structural UX refactor to natively prevent "scroll chaining" and accidental mobile pull-to-refresh triggers by aggressively implementing the `overscroll-behavior: contain` CSS property across all scrolling components within the framework.

## How is it used?
Maintainers and core contributors must systematically audit all framework components that feature internal scrolling axes—specifically targeting `components/sidebar.css`, `components/modals.css`, and `components/ease-marquee.css`. 

Any container that utilizes `overflow-y: auto`, `overflow-y: scroll`, or `overflow-x: scroll` must immediately be paired with the `overscroll-behavior` property:

```css
/* ✅ GOOD: Perfect native scroll trapping */
.ease-sidebar {
  overflow-y: auto;
  overscroll-behavior: contain;
}
```

## Why is it useful?
Currently, the entire framework completely lacks `overscroll-behavior` declarations. This architectural oversight causes a massive, highly destructive UX bug on mobile devices known as "Scroll Chaining." 

If a user opens an EaseMotion sidebar or modal on their iPhone and attempts to scroll to the bottom of the sidebar's content, the exact millisecond they hit the bottom, the browser transfers the scroll momentum directly to the `<body>` element. This causes the entire page underneath the modal to violently scroll out of view. Even worse, if the user scrolls to the *top* of the sidebar, the browser transfers the momentum and accidentally triggers the browser's native "Pull-to-Refresh" action, completely wiping out any unsaved form data on the page. By integrating `overscroll-behavior: contain` directly into the core scrolling components, EaseMotion safely traps the scroll momentum natively, fixing the pull-to-refresh bug entirely without requiring complex JavaScript scroll-locking libraries.
