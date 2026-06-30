# ease-modal-pr

CSS-only modal/dialog using the `:target` pseudo-class. No JavaScript required.

## Features

- Opens with anchor link (`#modal-id`)
- Closes with close button or backdrop click (links to `#`)
- Backdrop blur and dim effect
- Slide-up + scale entrance animation
- Accessible close button with aria-label

## Files

- `style.css` — the modal styles
- `demo.html` — working demo with trigger and modal
- `README.md` — usage documentation

## Usage

```html
&lt;!-- Trigger button --&gt; &lt;a href="#my-modal" class="trigger-btn"&gt;Open
Modal&lt;/a&gt; &lt;!-- Modal --&gt; &lt;div id="my-modal"
class="modal-pr-overlay"&gt; &lt;div class="modal-pr"&gt; &lt;div
class="modal-pr-header"&gt; &lt;h3 class="modal-pr-title"&gt;Modal
Title&lt;/h3&gt; &lt;a href="#" class="modal-pr-close" aria-label="Close
modal"&gt;✕&lt;/a&gt; &lt;/div&gt; &lt;div class="modal-pr-body"&gt;
&lt;p&gt;Modal content goes here...&lt;/p&gt; &lt;/div&gt; &lt;div
class="modal-pr-footer"&gt; &lt;a href="#" class="modal-pr-btn
modal-pr-btn-secondary"&gt;Cancel&lt;/a&gt; &lt;a href="#" class="modal-pr-btn
modal-pr-btn-primary"&gt;Confirm&lt;/a&gt; &lt;/div&gt; &lt;/div&gt;
&lt;/div&gt;
```
