# Pure CSS Wobble-Focus Tabs Engine (`ease-wobble-focus-tabs`)

An accessible, highly responsive marketing tab layout built to display 
feature content using clean CSS animations. This component balances 
aesthetic appeal with strong performance, using no JavaScript dependencies to control its layout logic.

---

## Overview

The `ease-wobble-focus-tabs` engine uses HTML5 form states 
(`input[type="radio"]`) combined with sibling structural 
selectors (`~`) to handle state changes directly natively 
in the browser. When an option is active, it runs an elastic, 
non-linear CSS keyframe animation sequence that tilts and 
shifts the tab item—the "wobble-focus" effect—without 
changing the width or shifting the layout of surrounding elements.

---

## Features

*   **Zero JS Core Performance Architecture:** State processing runs 
completely on the browser's style engine, keeping execution fast.
*   **Production-Safe Wobble Motion:** Built with a subtle, professional 
tilt sequence that draws attention effectively without feeling distracting.
*   **Modern SaaS Branding Aesthetic:** Designed with rounded cards, soft 
layered gradients, clear calls-to-action, and smooth alpha shadows.
*   **Layout Shift Prevention:** Uses strict positioning layouts to ensure 
switching cards never causes content jumps down the page.

---

## Accessibility

*   **Native Keyboard Focus Routing:** Supports standard keyboard controls 
(`Tab` to navigate, `Space` to activate options) right out of the box.
*   **Distinct Focus Layouts:** Active selections display a clear outline
 using `:focus-visible` selectors to ensure clean visibility.
*   **Screen Reader Friendly Structure:** Connects layout tabs to text 
blocks using explicit `aria-controls` properties to accurately announce panel changes.
*   **Defensive Motion Safety:** Includes an automatic safety guard that
 removes motion animations if the user has `prefers-reduced-motion` enabled on their device.

---

## Responsive Behavior

*   **Desktop Displays (Greater than 820px):** Arranges four tab labels 
side-by-side in a clean navigation row over the central display deck.
*   **Tablets & Foldables (Less than 820px):** Adjusts the layout into 
a 2x2 grid, changing panels to static display blocks to fit mid-sized viewports.
*   **Mobile Screens (Less than 480px):** Stacks navigation labels 
into a single vertical column, scaling call-to-action buttons to full width for comfortable mobile tapping.

---

## CSS Variables

Quickly modify the component style tokens within your primary context sheets using these parameters:

| CSS Custom Variable | Target Control Element Functionality | Default Setup Value |
|--- |--- |--- |
| `--tab-duration` | The duration of the elastic wobble sequence | `0.62s` |
| `--tab-easing` | The elastic timing curve mapping the movement | `cubic-bezier(0.25, 1.25, 0.5, 1)` |
| `--wobble-angle` | The rotation angle along the coordinate axes | `3deg` |
| `--wobble-distance` | The horizontal shift length value | `6px` |
| `--tab-scale` | Active scale expansion score during hover states | `1.025` |
| `--surface-color` | Glass substrate card color profile tokens | `rgba(20, 24, 39, 0.6)` |
| `--accent-color` | The main indigo brand identity color channel variable | `#6366f1` |
| `--secondary-color` | The purple accent highlight color channel variable | `#a855f7` |

---

## Browser Support

*   Google Chrome 98+
*   Mozilla Firefox 96+
*   Apple Safari 15.4+
*   Microsoft Edge 98+

---

## Folder Structure

The structural layout blueprint of this folder submission is organized as follows:

```text
submissions/examples/wobble-focus-tabs-50215/
├── demo.html    # Standalone HTML structure declaration file
├── style.css    # Interactive rules and animation variables stylesheet
└── README.md    # System design parameter overview documentation file
