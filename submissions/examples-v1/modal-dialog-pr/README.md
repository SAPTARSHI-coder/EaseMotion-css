# modal-dialog-pr

A **CSS-only modal dialog** with backdrop blur using the `:target` pseudo-class. No JavaScript required.

## Preview

Open `demo.html` in your browser. No build step required.

## How It Works

| Step | Action | CSS Mechanism |
|------|--------|---------------|
| 1 | Click trigger link | `&lt;a href="#modal-id"&gt;` sets target |
| 2 | Modal appears | `.modal-pr:target` activates visibility |
| 3 | Content scales in | `.modal-pr:target .modal-content-pr` transform |
| 4 | Click close/backdrop | `&lt;a href="#modal-hide-pr"&gt;` removes target |
| 5 | Modal fades out | Target removed, opacity goes to 0 |

## Usage

```html
&lt;!-- Trigger --&gt;
&lt;a href="#modal-confirm"&gt;Open Modal&lt;/a&gt;

&lt;!-- Modal --&gt;
&lt;div id="modal-confirm" class="modal-pr"&gt;
  &lt;div class="modal-content-pr"&gt;
    &lt;div class="modal-header-pr"&gt;
      &lt;h3 class="modal-title-pr"&gt;Title&lt;/h3&gt;
      &lt;a href="#modal-hide-pr" class="modal-close-pr"&gt;×&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="modal-body-pr"&gt;Content here...&lt;/div&gt;
    &lt;div class="modal-footer-pr"&gt;
      &lt;a href="#modal-hide-pr" class="ease-btn ease-btn-ghost"&gt;Cancel&lt;/a&gt;
      &lt;a href="#modal-hide-pr" class="ease-btn ease-btn-primary"&gt;Confirm&lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Hidden anchor for closing --&gt;
&lt;div id="modal-hide-pr" style="display: none;"&gt;&lt;/div&gt;