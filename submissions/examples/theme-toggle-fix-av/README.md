# Theme Toggle Fix — EaseMotion CSS Submission

## 1. What does this do?
Fixes the visual glitch/flash when switching themes by suppressing competing CSS transitions during the View Transitions API circular sweep reveal.

## 2. How is it used?

**HTML — toggle button:**
```html
<button id="themeToggle">🌙</button>
```

**JS — fixed toggle function:**
```js
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";

  if (document.startViewTransition) {
    // Suppress CSS transitions during the sweep
    document.documentElement.setAttribute("data-transitioning", "");

    const transition = document.startViewTransition(() => {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("em-theme", next);
    });

    // Remove flag after sweep completes
    transition.finished.then(() => {
      document.documentElement.removeAttribute("data-transitioning");
    });

  } else {
    // Fallback for unsupported browsers
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("em-theme", next);
  }
}
```

**CSS — suppress transitions during sweep:**
```css
:root[data-transitioning] *,
:root[data-transitioning] *::before,
:root[data-transitioning] *::after {
  transition: none !important;
  animation: none !important;
}
```

## 3. Why is it useful?

The existing theme toggle had two transition systems firing simultaneously:

- **View Transitions API** — handles the circular sweep reveal (`0.6s`)
- **CSS transitions** — also firing on `body`, `.docs-header`, `.docs-sidebar`, etc.

When the toggle fired, the View Transitions API captured a snapshot of the old page and animated the sweep over it — but the CSS transitions on individual elements were also running underneath at their own duration, causing elements to flicker mid-sweep as both systems competed.

This fix introduces a `data-transitioning` attribute that disables all CSS transitions precisely during the View Transition sweep, then removes it immediately after `.finished` resolves. CSS transitions remain fully intact for all other interactions (hover, focus, etc.) — only theme switching is affected.

This fits EaseMotion CSS's philosophy of smooth, intentional motion — ensuring the signature circular sweep reveal works cleanly without any visual noise.