# Native `color-scheme` Dark Mode Architecture

## What does this do?
Proposes a vital visual immersion refactor across the entire framework to aggressively eliminate glaringly white native browser UI elements (like scrollbars, checkboxes, and dropdowns) when the framework is switched to Dark Mode, completely replacing them with native dark UI using the modern CSS `color-scheme` directive.

## How is it used?
Maintainers and core contributors must systematically audit the root `core/variables.css` file alongside any global theme togglers used in the documentation and submissions.

Currently, developers are manually changing the background color to dark gray, but violently failing to explicitly tell the browser engine that the operating context is actually dark:
```css
/* ❌ BAD: Leaves scrollbars and checkboxes glaringly white */
.ease-theme-dark {
  --ease-bg: #0f172a;
  --ease-text: #ffffff;
}
```

This must be completely ripped out and refactored. The `color-scheme` property must be aggressively injected into the root CSS variables and all dark mode classes:
```css
/* ✅ GOOD: Perfect native browser UI immersion */
:root {
  color-scheme: light dark; /* Tells the browser the framework natively supports both */
}

.ease-theme-dark {
  color-scheme: dark; /* Forces scrollbars, inputs, and dropdowns to natively render in dark mode */
  --ease-bg: #0f172a;
  --ease-text: #ffffff;
}
```

## Why is it useful?
Currently, EaseMotion's dark mode feels incredibly cheap, broken, and incomplete. When an enterprise developer successfully builds a beautiful dark-themed dashboard using the framework, the actual web page background is dark, but the browser's native scrollbar on the right side of the screen remains a glaring, bright white rectangle. Furthermore, native HTML form elements like checkboxes, radio buttons, and `<select>` dropdowns violently render in their default light mode colors, completely destroying the visual immersion and causing severe contrast accessibility failures.

By explicitly injecting the native CSS `color-scheme: dark;` property into the framework's theme classes, we forcefully instruct the user's browser engine (Chrome, Safari, Firefox) to natively render all operating system UI elements in dark mode. This instantly secures flawless dark scrollbars and dark form controls without ever requiring downstream developers to write hundreds of lines of complex, hacky `::-webkit-scrollbar` pseudo-selectors.
