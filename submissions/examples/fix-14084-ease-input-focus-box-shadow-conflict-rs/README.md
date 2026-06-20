# Fix for Issue #14084: ease-input focus box-shadow conflict

## The Bug
In `forms.css`, a broad `.ease-input:focus` selector was accidentally introduced to resolve an issue with file inputs (#10869). Because this rule uses the `:focus` pseudo-class (which triggers on both mouse and keyboard focus) instead of `:focus-visible` (which triggers only on keyboard navigation), it broke the framework's design intent for all standard inputs.

Additionally, this new rule defined a `box-shadow` opacity of `0.1`. Since it appeared lower in the file than the intended `:focus-visible` rule, it overrode the stronger `0.18` opacity shadow intended for keyboard navigation, creating a visual conflict.

## The Fix
This fix reverts the erroneous global mouse-click focus styling by applying `box-shadow: none` and restoring the default `border-color` when `:focus:not(:focus-visible)` is active. It also explicitly restores the correct `0.18` opacity box-shadow for `:focus-visible`, ensuring that keyboard navigation works exactly as originally designed.

## How to Verify
1. Open `demo.html` in your browser.
2. Under "Before (Broken)", click the text input. Notice that a focus ring appears (which it shouldn't on mouse click), and if you navigate to it via the `Tab` key, the shadow is noticeably weak (0.1 opacity).
3. Under "After (Fixed)", click the text input. Notice that no focus ring appears, respecting the framework's design intent. When you `Tab` to it, the correct, stronger focus ring (0.18 opacity) is displayed.
