# Modal / Dialog Component

**Submitted by:** [Your Name](https://github.com/YOUR-USERNAME)  
**Issue:** GSSoC Contribution #9  
**Status:** Pending Review

---

## Overview

A pure CSS modal/dialog component with backdrop blur, bounce animation, 4 sizes, centered icon variants, and scrollable content. Uses hidden checkbox hack — zero JavaScript required.

## Classes

### Container
| Class | Description |
|-------|-------------|
| `.ease-modal-input` | Hidden checkbox trigger |
| `.ease-modal-overlay` | Backdrop overlay |
| `.ease-modal-overlay-label` | Click-to-close overlay area |

### Modal
| Class | Description |
|-------|-------------|
| `.ease-modal` | Base modal dialog |
| `.ease-modal-sm` | Small (20rem max) |
| `.ease-modal-lg` | Large (36rem max) |
| `.ease-modal-xl` | Extra large (42rem max) |
| `.ease-modal-full` | Full viewport |

### Layout
| Class | Description |
|-------|-------------|
| `.ease-modal-centered` | Centered icon + title layout |
| `.ease-modal-header` | Header section |
| `.ease-modal-title` | Title text |
| `.ease-modal-subtitle` | Subtitle/description |
| `.ease-modal-body` | Scrollable content area |
| `.ease-modal-footer` | Footer actions |
| `.ease-modal-footer-between` | Actions spread apart |
| `.ease-modal-divider` | Horizontal divider line |

### Elements
| Class | Description |
|-------|-------------|
| `.ease-modal-close` | Close button |
| `.ease-modal-icon` | Centered icon circle |
| `.ease-modal-trigger` | Open trigger button |

### Icon Variants
| Class | Description |
|-------|-------------|
| `.ease-modal-icon-success` | Green success icon |
| `.ease-modal-icon-error` | Red error icon |
| `.ease-modal-icon-warning` | Amber warning icon |
| `.ease-modal-icon-info` | Blue info icon |

### Button Styles
| Class | Description |
|-------|-------------|
| `.ease-modal-trigger-secondary` | Outlined/secondary button |
| `.ease-modal-trigger-danger` | Red destructive button |

## Usage

### Basic Modal
```html
&lt;!-- Trigger --&gt;
&lt;label for="modal-1" class="ease-modal-trigger"&gt;Open Modal&lt;/label&gt;

&lt;!-- Modal --&gt;
&lt;input type="checkbox" id="modal-1" class="ease-modal-input"&gt;
&lt;div class="ease-modal-overlay"&gt;
  &lt;label for="modal-1" class="ease-modal-overlay-label"&gt;&lt;/label&gt;
  &lt;div class="ease-modal"&gt;
    &lt;div class="ease-modal-header"&gt;
      &lt;div&gt;
        &lt;h3 class="ease-modal-title"&gt;Title&lt;/h3&gt;
        &lt;p class="ease-modal-subtitle"&gt;Subtitle&lt;/p&gt;
      &lt;/div&gt;
      &lt;label for="modal-1" class="ease-modal-close"&gt;×&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class="ease-modal-body"&gt;
      &lt;p&gt;Modal content here...&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="ease-modal-footer"&gt;
      &lt;label for="modal-1" class="ease-modal-trigger ease-modal-trigger-secondary"&gt;Cancel&lt;/label&gt;
      &lt;label for="modal-1" class="ease-modal-trigger"&gt;Confirm&lt;/label&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;