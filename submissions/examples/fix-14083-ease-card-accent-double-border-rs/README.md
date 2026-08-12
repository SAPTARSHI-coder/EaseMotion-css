# Fix for Issue #14083: ease-card-accent double border

## The Bug
The `.ease-card-accent` variants create a colored vertical stripe on the left side of the card by applying `border-left: 4px solid`. Because the base `.ease-card` has a `border: 1px solid` and a `1rem` `border-radius`, replacing the left border with a 4px thickness causes the browser to render an awkward diagonal seam at the top-left and bottom-left corners. Visually, this creates a clipping artifact often referred to as a "double border" effect, where the thick and thin borders clash awkwardly at the curve.

## The Fix
This fix removes the `border-left: 4px solid` property, allowing the card to maintain a continuous, smooth `1px` border around all four sides. Instead, the 4px accent stripe is rendered using an absolute `::before` pseudo-element. 

Because the base `.ease-card` already has `position: relative` and `overflow: hidden`, the pseudo-element sits cleanly against the left edge and perfectly conforms to the inner curve of the border-radius without distorting the actual borders.

## How to Verify Locally
1. Open `demo.html` in your web browser.
2. Under the **Before (Broken)** section, inspect the left corners of the cards. You will notice the thick 4px border joining the 1px border at a sharp angle.
3. Under the **After (Fixed)** section, inspect the same corners. The 1px border now perfectly wraps the card, and the accent color sits cleanly inside without creating any visual artifacts.
