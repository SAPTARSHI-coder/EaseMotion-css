# Pagination Component

**Submitted by:** [Your Name](https://github.com/YOUR-USERNAME)  
**Issue:** GSSoC Contribution #11  
**Status:** Pending Review

---

## Overview

A comprehensive pagination component with 3 sizes, 3 styles, 4 color variants, ellipsis truncation, info text, jump input, and staggered entrance animations. Pure CSS, semantic HTML.

## Classes

### Base
| Class | Description |
|-------|-------------|
| `.ease-pagination` | Base pagination container |
| `.ease-pagination-item` | Individual page item |
| `.ease-pagination-link` | Clickable link/button |
| `.ease-pagination-active` | Active/current page |
| `.ease-pagination-disabled` | Disabled prev/next |
| `.ease-pagination-prev` | Previous button |
| `.ease-pagination-next` | Next button |
| `.ease-pagination-icon` | SVG arrow icon |

### Size Variants
| Class | Description |
|-------|-------------|
| `.ease-pagination-sm` | Small (0.75rem) |
| `.ease-pagination-lg` | Large (1rem) |

### Style Variants
| Class | Description |
|-------|-------------|
| `.ease-pagination-bordered` | Bordered links |
| `.ease-pagination-rounded` | Pill-shaped buttons |
| `.ease-pagination-squared` | No border radius |

### Color Variants
| Class | Description |
|-------|-------------|
| `.ease-pagination-success` | Green active state |
| `.ease-pagination-danger` | Red active state |
| `.ease-pagination-dark` | Dark active state |

### Special Features
| Class | Description |
|-------|-------------|
| `.ease-pagination-ellipsis` | `...` truncation indicator |
| `.ease-pagination-info` | Results count text |
| `.ease-pagination-jump` | Go to input wrapper |
| `.ease-pagination-jump-input` | Direct page input |
| `.ease-pagination-simple` | Prev/next only |
| `.ease-pagination-animate` | Staggered entrance |

## Usage

### Basic Pagination
```html
&lt;nav aria-label="Pagination"&gt;
  &lt;ul class="ease-pagination"&gt;
    &lt;li class="ease-pagination-item ease-pagination-prev"&gt;
      &lt;a href="#" class="ease-pagination-link"&gt;Prev&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="ease-pagination-item"&gt;
      &lt;a href="#" class="ease-pagination-link"&gt;1&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="ease-pagination-item ease-pagination-active"&gt;
      &lt;a href="#" class="ease-pagination-link" aria-current="page"&gt;2&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="ease-pagination-item"&gt;
      &lt;a href="#" class="ease-pagination-link"&gt;3&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="ease-pagination-item ease-pagination-next"&gt;
      &lt;a href="#" class="ease-pagination-link"&gt;Next&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;