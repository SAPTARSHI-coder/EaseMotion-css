# Toast Notification — EaseMotion (CSS-only)

Feature: pure CSS toast notification component with shimmer, smooth slide-in/out, fade, auto-dismiss timing and hover-pause.

Files
- demo.html — Demonstrates all variants and positions.
- style.css — Component styles, variables, animations.
- README.md — This documentation.

Overview
--------
This component provides an accessible, responsive toast notification UI using only HTML and CSS. It supports four semantic variants, multiple screen positions, a subtle shimmer background, smooth slide/fade animations, and auto-dismiss behavior driven by CSS animation timing.

Usage
-----
1. Copy or include the stylesheet `style.css` in your project.
2. Add a toast element with the base class `ease-toast` plus a position and optionally a variant.

Example:

<div class="ease-toast ease-toast-top-right ease-toast-success" role="status" aria-live="polite" style="--toast-offset:1rem;">
  <div class="ease-toast__icon">✓</div>
  <div class="ease-toast__body">
    <div class="ease-toast__title">Saved</div>
    <div class="ease-toast__message">Your changes were saved.</div>
  </div>
  <button class="ease-toast__close">✕</button>
</div>

Customization (CSS Custom Properties)
------------------------------------
- `--ease-toast-duration` — Total time for the toast lifecycle (auto-dismiss), default `3s`.
- `--ease-toast-bg` — Toast background color.
- `--ease-toast-text` — Text color inside the toast.
- `--ease-toast-radius` — Border radius.
- `--ease-toast-width` — Width of the toast; responsive rules shrink on small screens.
- `--toast-offset` — Per-toast inline variable used in the demo to stack multiple toasts without overlap. Set this on the element: `style="--toast-offset: 4rem"`.

Variants
--------
Apply one of the following classes to change the accent and icon background:
- `.ease-toast-success` — Green accent (success)
- `.ease-toast-error` — Red accent (error)
- `.ease-toast-warning` — Yellow accent (warning)
- `.ease-toast-info` — Blue accent (information)

Positions
---------
Positioning modifier classes are applied directly to the toast element:
- `.ease-toast-top-right`
- `.ease-toast-top-left`
- `.ease-toast-bottom-right`
- `.ease-toast-bottom-left`
- `.ease-toast-top-center`
- `.ease-toast-bottom-center`

Notes on stacking in the demo
-----------------------------
The demo stacks multiple toasts at the same position by giving each toast an inline `--toast-offset` value. In a JS-driven implementation you would manage stacking and offsets dynamically.

Animations
----------
The toast lifecycle is driven by a single `@keyframes` animation `ease-toast-anim` which contains three phases:
- entry (0% → 10%): slide-in + fade-in
- visible hold (10% → 85%): stays visible
- exit (85% → 100%): fade-out + slide-out

Shimmer
-------
A subtle shimmer overlay is implemented with `::before` and a separate `ease-toast-shimmer` animation. Both the lifecycle and shimmer pause while the user hovers over the toast (using `animation-play-state: paused`).

Accessibility
-------------
Include `role="status"` and `aria-live="polite"` on toasts that announce informational updates. This demo uses semantic markup for visual purposes; for production you would control when to insert and remove toasts using JS.

Browser compatibility
---------------------
Works in modern evergreen browsers (Chrome, Edge, Firefox, Safari iOS/ macOS). The component relies on CSS variables and `animation-play-state`, so older browsers (IE11) are not supported.

Limitations
-----------
- This implementation is CSS-only and demonstrates auto-dismiss via animation timing. For production use you will likely pair this with minimal JS to manage insertion, stacking, and manual dismissal.

License
-------
Follow the project's license for submissions.
# Toast Notification Component

Styled toast notifications with slide-in animation and variants for success, error, warning, and info.

## Demo

Open `demo.html` in your browser and click the buttons to trigger different toast types.

## Usage

```html
&lt;!-- Toast container (fixed position) --&gt;
&lt;div class="toast-container" id="toastContainer"&gt;&lt;/div&gt;

&lt;!-- Success toast --&gt;
&lt;div class="toast toast-success"&gt;
  &lt;div class="toast-icon"&gt;✓&lt;/div&gt;
  &lt;div class="toast-content"&gt;
    &lt;div class="toast-title"&gt;Success&lt;/div&gt;
    &lt;div class="toast-message"&gt;Your changes have been saved.&lt;/div&gt;
  &lt;/div&gt;
  &lt;button class="toast-close"&gt;✕&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Error toast --&gt;
&lt;div class="toast toast-error"&gt;
  &lt;div class="toast-icon"&gt;✕&lt;/div&gt;
  &lt;div class="toast-content"&gt;
    &lt;div class="toast-title"&gt;Error&lt;/div&gt;
    &lt;div class="toast-message"&gt;Something went wrong.&lt;/div&gt;
  &lt;/div&gt;
  &lt;button class="toast-close"&gt;✕&lt;/button&gt;
&lt;/div&gt;