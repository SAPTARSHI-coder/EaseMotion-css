# Lock Unlock Toggle
A responsive, dependency-free security toggle for the EaseMotion CSS
gallery.

## Features
* Pure HTML and CSS.
* No JavaScript or external dependencies.
* Snaps between locked and unlocked states.
* Animated lock shackle.
* Purple locked state and green unlocked state.
* Animated toggle thumb.
* Status text updates with the current state.
* Responsive layout.
* Keyboard accessible.
* Visible `:focus-visible` state.
* `prefers-reduced-motion` support.
* EaseMotion-style CSS custom properties.

## Files
* `demo.html` — self-contained interactive demonstration.
* `style.css` — component styling, state transitions, and responsive
  behavior.

## Usage
Keep `demo.html` and `style.css` in the same directory and open
`demo.html` in a browser.

The component requires no build step, framework, library, or
JavaScript dependency.

## How It Works
The component uses a native checkbox as its state controller:
```html
<input
  class="lock-toggle"
  type="checkbox"
  id="lock-state"
  aria-label="Toggle lock state"
>
```
CSS sibling selectors respond to the checked state:

```css
.lock-toggle:checked + .lock-control {
  border-color: rgba(72, 215, 160, 0.2);
}
```
The checkbox is visually hidden while the associated label remains
fully interactive.

## Customization
The primary colors are defined in `:root`:
* `--em-bg`
* `--em-surface`
* `--em-surface-hover`
* `--em-border`
* `--em-text`
* `--em-muted`
* `--em-locked`
* `--em-locked-soft`
* `--em-unlocked`
* `--em-unlocked-soft`
* `--em-ease`

Change `--em-locked` to customize the locked-state accent and
`--em-unlocked` to customize the unlocked-state accent.

## Accessibility
* Uses a native checkbox for state management.
* The checkbox has an accessible label.
* The visible control is connected using a `<label>`.
* Keyboard interaction is supported.
* `:focus-visible` provides a clear focus indicator.
* Status text communicates the current state.
* Motion is reduced when `prefers-reduced-motion: reduce` is enabled.


