# CSS Slide-Up Tabs (Cyberpunk Neon)

A pure CSS interactive tabs component designed for Cyberpunk Neon Layouts. It features a heavy sci-fi aesthetic, distinct neon color-coding per tab, and a bouncy "Slide-Up" entrance animation for the content panels.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **Cyberpunk Aesthetic**: Utilizes raw technical fonts (`Share Tech Mono` and `Rajdhani`), a CRT scanline overlay, absolute-positioned cut corners, and intense neon color tokens (`--neon-pink`, `--neon-blue`, `--neon-yellow`) set against a dark grid background.
- **State Management**: The switching of tabs is handled entirely via the hidden radio button hack (`<input type="radio">`). The tab navigation headers are `<label>` elements wired to these hidden inputs.
- **The Slide-Up Effect**: 
- The `.tabs-content-wrapper` uses `overflow: hidden` to mask the content panels before they arrive.
- By default, all `.tab-content` panels are hidden (`opacity: 0`, `visibility: hidden`) and pushed downward (`transform: translateY(40px)`).
- When a tab's radio button is checked, its corresponding content panel becomes visible and translates to `translateY(0)`.
- The transition utilizes a custom cubic-bezier easing (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`) which creates a satisfying, physical "bounce" as the panel slides up into place. A slight `0.1s` transition delay ensures the navigation indicator moves *before* the new content arrives.
- **Dynamic Indicator**: An absolutely positioned `.tab-indicator` line sits below the navigation. As the user switches tabs, CSS sibling selectors (`~`) update its `translateX` position, background color, and neon box-shadow to match the active tab's specific color theme.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the bouncy slide-up translation, the continuous CRT scanline, and the smooth indicator sliding are completely disabled, safely falling back to immediate opacity cross-fades.

## Usage
Open `demo.html` in your browser. You will see a mock SYSTEM_ARCHIVE interface. Click between the [DATA], [LOGS], and [SYS] tabs in the navigation header. Observe how the neon indicator line zips to the active tab, changing its color, while the corresponding content panel bounces up from below into view.

## Files
- `demo.html`: The HTML structure for the layout, detailing the complex `<input type="radio">` setup required for JS-free tab state management.
- `style.css`: The styling, cyberpunk design tokens, CRT animations, and the complex sibling CSS selector (`~`) logic driving the dynamic colored indicator and bouncy slide-up mechanics.
