# React Animated Hamburger Menu — Mobile Navbar (#22928)

This submission fulfills Issue **#22928** by delivering a polished, fully animated mobile navbar with a hamburger button that morphs into an ✕, a bottom-sheet drawer, staggered link entry, and perfectly choreographed exit animations — all powered by EaseMotion CSS.

## Key Animation Techniques

### 1. Pure-CSS Hamburger → ✕ Morphing
`<HamburgerIcon>` renders three `<span>` bars. When `isOpen` flips:
- **Bar 1** — `translateY(7px) rotate(45deg)` to form the "/" stroke
- **Bar 2** — `opacity: 0` + `scaleX(0)` to disappear
- **Bar 3** — `translateY(-7px) rotate(-45deg)` to form the "\" stroke

All driven by CSS `transition: transform 0.35s cubic-bezier(…)` with zero JavaScript animation loops.

### 2. Bottom-Sheet Drawer with EaseMotion
`<MobileDrawer>` applies `.ease-slide-up .ease-duration-normal` on entry and `.ease-fade-out .ease-duration-fast` on exit. The component stays mounted during the exit animation by tracking a `mounted` + `isExiting` two-state pattern and only fully removing itself after `onAnimationEnd` fires.

### 3. Staggered Nav Links
Each link inside the drawer receives `animationDelay: index × 80ms` on its own `.ease-slide-up` class. Links cascade in one after another after the drawer opens.

### 4. Keyboard & Backdrop Accessibility
- `Escape` key closes the menu via a `window` keydown listener.
- Clicking the semi-transparent backdrop also closes the menu.
- `aria-label` and `aria-expanded` are set on the hamburger button.

## How to View
Double-click `demo.html` — React 18 + Babel are loaded via CDN, **no build step required**.
