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