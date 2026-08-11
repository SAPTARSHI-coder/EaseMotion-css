# Badge / Tag Component

**Submitted by:** [Your Name](https://github.com/YOUR-USERNAME)  
**Issue:** GSSoC Contribution #5  
**Status:** Pending Review

---

## Overview

A highly versatile badge/tag component with 8 solid colors, 5 outline styles, 5 soft styles, 3 sizes, multiple shapes, dots, pulses, counters, and hover effects. Pure CSS, zero JavaScript.

## Classes

### Base
| Class | Description |
|-------|-------------|
| `.ease-badge` | Base badge container |

### Solid Colors
| Class | Description |
|-------|-------------|
| `.ease-badge-primary` | Indigo background |
| `.ease-badge-secondary` | Gray background |
| `.ease-badge-success` | Green background |
| `.ease-badge-danger` | Red background |
| `.ease-badge-warning` | Amber background |
| `.ease-badge-info` | Blue background |
| `.ease-badge-dark` | Dark gray background |
| `.ease-badge-light` | Light gray with border |

### Outline Styles
| Class | Description |
|-------|-------------|
| `.ease-badge-outline-primary` | Indigo border |
| `.ease-badge-outline-success` | Green border |
| `.ease-badge-outline-danger` | Red border |
| `.ease-badge-outline-warning` | Amber border |
| `.ease-badge-outline-info` | Blue border |

### Soft Styles
| Class | Description |
|-------|-------------|
| `.ease-badge-soft-primary` | Light indigo bg + dark text |
| `.ease-badge-soft-success` | Light green bg + dark text |
| `.ease-badge-soft-danger` | Light red bg + dark text |
| `.ease-badge-soft-warning` | Light amber bg + dark text |
| `.ease-badge-soft-info` | Light blue bg + dark text |

### Sizes
| Class | Description |
|-------|-------------|
| `.ease-badge-sm` | Small (0.625rem) |
| `.ease-badge-lg` | Large (0.875rem) |

### Shapes
| Class | Description |
|-------|-------------|
| `.ease-badge-pill` | Fully rounded (default) |
| `.ease-badge-square` | Small border radius |

### Special Features
| Class | Description |
|-------|-------------|
| `.ease-badge-dot` | Colored status dot prefix |
| `.ease-badge-pulse` | Animated notification pulse |
| `.ease-badge-counter` | Numeric counter (use `data-count`) |
| `.ease-badge-hover` | Lift on hover |
| `.ease-badge-hover-scale` | Scale on hover |
| `.ease-badge-removable` | Clickable with × icon |

## Usage

```html
&lt;!-- Solid --&gt;
&lt;span class="ease-badge ease-badge-primary"&gt;New&lt;/span&gt;

&lt;!-- Outline --&gt;
&lt;span class="ease-badge ease-badge-outline-success"&gt;Active&lt;/span&gt;

&lt;!-- Soft --&gt;
&lt;span class="ease-badge ease-badge-soft-danger"&gt;Urgent&lt;/span&gt;

&lt;!-- With dot --&gt;
&lt;span class="ease-badge ease-badge-dot ease-badge-soft-success"&gt;Online&lt;/span&gt;

&lt;!-- With pulse --&gt;
&lt;span class="ease-badge ease-badge-primary ease-badge-pulse"&gt;Live&lt;/span&gt;

&lt;!-- With counter --&gt;
&lt;span class="ease-badge ease-badge-primary ease-badge-counter" data-count="3"&gt;Inbox&lt;/span&gt;

&lt;!-- Removable --&gt;
&lt;span class="ease-badge ease-badge-soft-primary ease-badge-removable"&gt;
  Tag
  &lt;span class="ease-badge-close"&gt;×&lt;/span&gt;
&lt;/span&gt;