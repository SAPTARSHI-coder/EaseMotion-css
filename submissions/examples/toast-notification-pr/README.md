# toast-notification-pr

A **CSS-only slide-in toast notification** using the `:target` pseudo-class. No JavaScript required.

## Preview

Open `demo.html` in your browser. No build step required.

## How It Works

| Step | Action | CSS Mechanism |
|------|--------|---------------|
| 1 | Click trigger button | `&lt;a href="#toast-success"&gt;` sets target |
| 2 | Toast appears | `.toast-pr:target` activates slide-in |
| 3 | Progress bar runs | `animation: toast-progress-pr 5s` visual timer |
| 4 | Click close button | `&lt;a href="#hide"&gt;` removes target |
| 5 | Toast disappears | Target removed, toast slides out |

## Variants

| Type | Class | Color | Icon |
|------|-------|-------|------|
| Success | `.toast-success-pr` | Green | ✓ |
| Error | `.toast-error-pr` | Red | ! |
| Warning | `.toast-warning-pr` | Amber | ⚠ |
| Info | `.toast-info-pr` | Blue | i |

## Usage

```html
&lt;!-- Trigger --&gt;
&lt;a href="#toast-success" class="toast-trigger-pr toast-trigger-success-pr"&gt;
  Show Success
&lt;/a&gt;

&lt;!-- Toast --&gt;
&lt;div id="toast-success" class="toast-pr toast-success-pr"&gt;
  &lt;div class="toast-icon-pr"&gt;✓&lt;/div&gt;
  &lt;div class="toast-content-pr"&gt;
    &lt;div class="toast-title-pr"&gt;Success!&lt;/div&gt;
    &lt;div class="toast-message-pr"&gt;Your changes have been saved.&lt;/div&gt;
  &lt;/div&gt;
  &lt;a href="#hide" class="toast-close-pr"&gt;×&lt;/a&gt;
  &lt;div class="toast-progress-pr"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Hidden anchor for closing --&gt;
&lt;div id="hide" style="display: none;"&gt;&lt;/div&gt;