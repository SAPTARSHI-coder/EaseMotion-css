# Toast / Notification Component

**Submitted by:** [Your Name](https://github.com/YOUR-USERNAME)  
**Issue:** GSSoC Contribution #7  
**Status:** Pending Review

---

## Overview

A versatile toast/notification component with 6 positions, 4 color variants, 3 styles (light, solid, dark), auto-dismiss progress bar, and directional bounce animations. Pure CSS with optional JS for dynamic spawning.

## Classes

### Container (Positioning)
| Class | Description |
|-------|-------------|
| `.ease-toast-container` | Fixed position wrapper |
| `.ease-toast-container-top-right` | Top right corner |
| `.ease-toast-container-top-left` | Top left corner |
| `.ease-toast-container-bottom-right` | Bottom right corner |
| `.ease-toast-container-bottom-left` | Bottom left corner |
| `.ease-toast-container-top-center` | Top center |
| `.ease-toast-container-bottom-center` | Bottom center |

### Toast
| Class | Description |
|-------|-------------|
| `.ease-toast` | Base toast card |
| `.ease-toast-success` | Green accent |
| `.ease-toast-error` | Red accent |
| `.ease-toast-warning` | Amber accent |
| `.ease-toast-info` | Blue accent |

### Styles
| Class | Description |
|-------|-------------|
| `.ease-toast-solid` | Full colored background |
| `.ease-toast-dark` | Dark background |

### Elements
| Class | Description |
|-------|-------------|
| `.ease-toast-icon` | Icon/badge area |
| `.ease-toast-content` | Text content wrapper |
| `.ease-toast-title` | Bold title text |
| `.ease-toast-message` | Description text |
| `.ease-toast-close` | Close button |
| `.ease-toast-progress` | Auto-dismiss timer bar |

### States
| Class | Description |
|-------|-------------|
| `.ease-toast-exit` | Exit animation trigger |

## Usage

### Static Toast
```html
&lt;div class="ease-toast ease-toast-success"&gt;
  &lt;div class="ease-toast-icon"&gt;✓&lt;/div&gt;
  &lt;div class="ease-toast-content"&gt;
    &lt;div class="ease-toast-title"&gt;Success!&lt;/div&gt;
    &lt;div class="ease-toast-message"&gt;Your changes have been saved.&lt;/div&gt;
  &lt;/div&gt;
  &lt;button class="ease-toast-close"&gt;×&lt;/button&gt;
&lt;/div&gt;