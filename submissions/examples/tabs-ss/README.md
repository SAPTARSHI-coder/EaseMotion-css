# Tabs Component

**Submitted by:** [Your Name](https://github.com/YOUR-USERNAME)  
**Issue:** GSSoC Contribution #8  
**Status:** Pending Review

---

## Overview

A pure CSS tabs component with 4 styles (default, pill, box, underline), 4 color variants, vertical layout, badges, and disabled states. Uses radio buttons for accessibility — no JavaScript required.

## Classes

### Container
| Class | Description |
|-------|-------------|
| `.ease-tabs` | Base tabs container |
| `.ease-tabs-pill` | Rounded pill/segmented style |
| `.ease-tabs-box` | Button/box style with fill |
| `.ease-tabs-underline` | Animated expanding underline |
| `.ease-tabs-vertical` | Side navigation layout |

### Color Variants
| Class | Description |
|-------|-------------|
| `.ease-tabs-success` | Green active indicator |
| `.ease-tabs-danger` | Red active indicator |
| `.ease-tabs-warning` | Amber active indicator |
| `.ease-tabs-info` | Blue active indicator |

### Elements
| Class | Description |
|-------|-------------|
| `.ease-tab-nav` | Navigation wrapper |
| `.ease-tab-input` | Hidden radio input |
| `.ease-tab-label` | Clickable tab trigger |
| `.ease-tab-panel` | Content panel |
| `.ease-tab-panel-content` | Content wrapper |
| `.ease-tab-badge` | Notification count badge |
| `.ease-tab-icon` | Icon in tab label |

### States
| Class | Description |
|-------|-------------|
| `.ease-tab-input:disabled` | Disabled tab |

## Usage

### Default Tabs
```html
&lt;div class="ease-tabs"&gt;
  &lt;div class="ease-tab-nav"&gt;
    &lt;input type="radio" name="tab-group" id="tab1" class="ease-tab-input" checked&gt;
    &lt;label for="tab1" class="ease-tab-label"&gt;Tab 1&lt;/label&gt;
    &lt;div class="ease-tab-panel"&gt;
      &lt;div class="ease-tab-panel-content"&gt;Content 1&lt;/div&gt;
    &lt;/div&gt;

    &lt;input type="radio" name="tab-group" id="tab2" class="ease-tab-input"&gt;
    &lt;label for="tab2" class="ease-tab-label"&gt;Tab 2&lt;/label&gt;
    &lt;div class="ease-tab-panel"&gt;
      &lt;div class="ease-tab-panel-content"&gt;Content 2&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;