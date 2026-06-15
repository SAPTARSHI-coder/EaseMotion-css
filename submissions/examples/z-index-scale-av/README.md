# Global Z-Index Token Scale Architecture

## What does this do?
Proposes a massive, framework-wide UI stability refactor to aggressively eradicate incredibly brittle "magic numbers" violently hardcoded into `z-index` declarations. By explicitly replacing randomly chosen fixed integer values with a strictly managed, mathematically bulletproof global `--ease-z-*` token scale, we mathematically guarantee completely consistent layer rendering across deeply nested enterprise layouts.

## How is it used?
Maintainers and core contributors must systematically audit all CSS `z-index` declarations across the entire repository—specifically targeting `components/modals.css`, `components/tooltips.css`, and `components/navbar.css` (spanning 10+ core files).

Currently, developers are violently hardcoding incredibly arbitrary magic numbers directly into the component files:
```css
/* ❌ BAD: Brittle magic numbers cause completely broken UI overlaps */
.ease-navbar { z-index: 999; }
.ease-modal { z-index: 100; }  /* Modal violently renders UNDER the navbar! Catastrophic! */
```

This incredibly toxic legacy approach must be entirely ripped out. The core `variables.css` file must formally and strictly define a mathematical global `z-index` scale, and all components must universally utilize these incredibly robust fluid tokens:
```css
/* ✅ GOOD: Perfect mathematical rendering hierarchy */
:root {
  --ease-z-dropdown: 1000;
  --ease-z-sticky: 1100;
  --ease-z-overlay: 1200;
  --ease-z-modal: 1300;
  --ease-z-tooltip: 1400;
}

.ease-navbar { z-index: var(--ease-z-sticky); }
.ease-modal { z-index: var(--ease-z-modal); } /* Perfect! Flawlessly renders above everything! */
```

## Why is it useful?
Currently, EaseMotion's overlay rendering architecture feels incredibly broken, violently disjointed, and completely amateurish when deployed natively in complex enterprise applications. Because the framework dangerously hardcodes arbitrary values like `z-index: 999`, when an enterprise developer attempts to naturally open an `.ease-modal` containing a complex `.ease-tooltip`, the tooltip violently renders *underneath* the modal's backdrop, or the entire modal violently renders *underneath* the sticky `.ease-navbar`. This completely destroys the user interface natively, aggressively forcing downstream enterprise developers to write hundreds of lines of extremely messy, hyper-specific `!important` CSS overrides just to keep the basic UI layers functional.

By aggressively forcing every single overlay component across all 10+ framework files to strictly utilize the global `--ease-z-*` CSS token scale natively, we completely eradicate this architectural UI blocker natively. The layer hierarchy immediately becomes mathematically bulletproof; tooltips *always* perfectly render above modals, and modals *always* perfectly render above sticky navbars. This instantly secures a mathematically flawless, highly polished, deeply robust rendering layer architecture for all downstream enterprise applications without requiring developers to ever write a single `z-index` override manually.
