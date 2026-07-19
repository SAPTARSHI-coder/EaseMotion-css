# Fix for Invisible Loading Spinner

Resolves Issue #8402.

## Description
This submission fixes a bug in `components/buttons.css` where the `.ease-btn-loading` state causes the loading spinner to be completely invisible. 

The parent `.ease-btn-loading` class hides the button text using `color: transparent !important`. Because the spinner pseudo-element (`::after`) relies on `border: 2px solid currentColor`, the border color evaluates to `transparent`, making the spinner completely invisible.

This fix sets an explicit `border-color` on the spinner, overriding the transparent `currentColor`, so the loading state is visible again.

## How to Apply
Maintainers should update `components/buttons.css` line 161 to use an explicit border color variable or fallback instead of `currentColor`.
```css
.ease-btn-loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.625rem;
  margin-left: -0.625rem;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-right-color: transparent;
  animation: ease-kf-btn-spin 0.7s linear infinite;
}
```
