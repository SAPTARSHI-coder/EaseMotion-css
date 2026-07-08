# Accordion Component

**Submitted by:** [Your Name](https://github.com/YOUR-USERNAME)  
**Issue:** GSSoC Contribution #4  
**Status:** Pending Review

---

## Overview

A pure CSS accordion with smooth expand/collapse animations. Two methods included: CSS `:has()` with checkbox (modern browsers) and native `&lt;details&gt;`/`&lt;summary&gt;` (best accessibility).

## Classes

| Class | Description |
|-------|-------------|
| `.ease-accordion` | Base accordion container |
| `.ease-accordion-item` | Individual accordion item |
| `.ease-accordion-header` | Clickable header/trigger |
| `.ease-accordion-icon` | Chevron icon (rotates on open) |
| `.ease-accordion-content` | Collapsible content panel |
| `.ease-accordion-input` | Hidden checkbox (for :has method) |
| `.ease-accordion-native` | Wrapper for details/summary method |
| `.ease-accordion-separated` | Gap between items (card style) |
| `.ease-accordion-bordered` | Border around entire accordion |

## Usage

### Method 1: Checkbox + :has() (Modern Browsers)

```html
&lt;div class="ease-accordion"&gt;
  &lt;div class="ease-accordion-item"&gt;
    &lt;label class="ease-accordion-header" for="acc-1"&gt;
      Click to expand
      &lt;svg class="ease-accordion-icon"&gt;...&lt;/svg&gt;
    &lt;/label&gt;
    &lt;input type="checkbox" id="acc-1" class="ease-accordion-input"&gt;
    &lt;div class="ease-accordion-content"&gt;
      &lt;div&gt;
        &lt;p&gt;Hidden content here...&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;