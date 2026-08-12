# Fix for Issue #14085: Tabs Nav Border Layer Cascade

## The Bug
The `.ease-tabs-nav` class uses `border-bottom: 2px solid var(--ease-color-neutral-200);` to create the horizontal track line for the tabs. Because EaseMotion CSS properly encapsulates its styles inside cascade layers (e.g., `@layer easemotion-components`), these styles have a lower specificity priority than unlayered styles. 

When users apply a global unlayered CSS reset—such as Tailwind CSS's Preflight, which applies `* { border-width: 0; }`—the unlayered reset overrides the layered `.ease-tabs-nav` border, causing the visual track line to disappear.

## The Fix
This fix replaces the `border-bottom` property with an equivalent `box-shadow` property:
`box-shadow: inset 0 -2px 0 0 var(--ease-color-neutral-200);`

Since global CSS resets typically reset `border` properties but leave `box-shadow` alone, this change ensures the tabs navigation track remains visible regardless of whether the user includes unlayered resets like Tailwind's Preflight.

The same fix logic is also applied to the fallback active tab indicator for `ease-tabs-auto`.

## How to Verify
1. Open `demo.html` in your browser.
2. The "Before" section demonstrates the bug: an injected global `* { border-width: 0; }` reset removes the border, making the tab track invisible.
3. The "After" section demonstrates the fix: by using `box-shadow`, the track is restored and the design intent is preserved despite the unlayered reset.
