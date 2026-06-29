# ease-toast-pr

Notification toast component with slide-in animation and auto-dismiss progress bar.

## Features

- Slide-in animation from right with bounce easing
- Auto-dismiss progress bar countdown
- 4 color variants: success, error, warning, info
- Close button with hover effect
- Stacked multiple toasts with gap
- Exit animation on dismiss

## Files

- `style.css` — the toast styles
- `demo.html` — interactive demo with trigger buttons
- `README.md` — usage documentation

## Usage

```html
&lt;div class="toast-pr-container"&gt;
  &lt;div class="toast-pr toast-pr-success"&gt;
    &lt;div class="toast-pr-icon"&gt;✓&lt;/div&gt;
    &lt;div class="toast-pr-content"&gt;
      &lt;div class="toast-pr-title"&gt;Success!&lt;/div&gt;
      &lt;div class="toast-pr-message"&gt;Your changes have been saved.&lt;/div&gt;
    &lt;/div&gt;
    &lt;button class="toast-pr-close"&gt;×&lt;/button&gt;
    &lt;div class="toast-pr-progress"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;