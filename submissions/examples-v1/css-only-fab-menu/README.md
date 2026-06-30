# CSS-Only FAB (Floating Action Button) Menu

A mobile-friendly, expanding speed dial menu triggered by a floating action button, built purely with HTML and CSS.

## How it works

This component relies on the highly versatile **Checkbox Hack**.

1.  **The Trigger Mechanism:** We use a visually hidden `<input type="checkbox">`. The main FAB button is actually a `<label>` linked to this checkbox via the `for` attribute. Clicking the FAB toggles the checkbox state.
2.  **State Styles:** We use the `:checked` pseudo-class and the general sibling combinator (`~`) to style the menu based on the checkbox's state.
3.  **The Animation:**
    - **Main Icon:** When `:checked`, the main '+' icon is rotated 135 degrees to form an 'X' (close icon).
    - **Menu Items:** Initially, the sub-action buttons are hidden (`opacity: 0`, `transform: translateY(20px) scale(0.5)`). When `:checked`, they animate into view.
    - **Staggering:** We use `:nth-child()` selectors with `transition-delay` to create a pleasing staggered pop-out effect, making the menu feel dynamic.

## Features

- **Zero JS Dependency**: No JavaScript is required for the toggling logic or animations.
- **Staggered Animations**: Sub-items pop out one by one.
- **Tooltips**: Includes CSS-only hover tooltips for the sub-actions using `::before` pseudo-elements and the `data-tooltip` attribute.

## Usage

Open `demo.html` in your browser. All presentation and state logic is contained in `style.css`.
