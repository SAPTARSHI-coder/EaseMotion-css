# Breadcrumb Component

**Submitted by:** [Your Name](https://github.com/YOUR-USERNAME)  
**Issue:** GSSoC Contribution #10  
**Status:** Pending Review

---

## Overview

A navigation breadcrumb component with 6 separator styles, 3 sizes, hover variants, icon support, collapsed paths, back button style, and staggered entrance animations. Pure CSS, semantic HTML.

## Classes

### Base

| Class                        | Description                |
| ---------------------------- | -------------------------- |
| `.ease-breadcrumb`           | Base breadcrumb container  |
| `.ease-breadcrumb-item`      | Individual breadcrumb item |
| `.ease-breadcrumb-link`      | Clickable link             |
| `.ease-breadcrumb-current`   | Current page (non-link)    |
| `.ease-breadcrumb-separator` | Separator between items    |

### Separator Variants

| Class                      | Description             |
| -------------------------- | ----------------------- |
| `.ease-breadcrumb-slash`   | `/` separator (default) |
| `.ease-breadcrumb-arrow`   | `›` separator           |
| `.ease-breadcrumb-chevron` | `››` separator          |
| `.ease-breadcrumb-bullet`  | `•` separator           |
| `.ease-breadcrumb-pipe`    | `\|` separator          |
| `.ease-breadcrumb-dash`    | `—` separator           |

### Size Variants

| Class                 | Description     |
| --------------------- | --------------- |
| `.ease-breadcrumb-sm` | Small (0.75rem) |
| `.ease-breadcrumb-lg` | Large (1rem)    |

### Style Variants

| Class                        | Description                |
| ---------------------------- | -------------------------- |
| `.ease-breadcrumb-underline` | Underline on hover         |
| `.ease-breadcrumb-minimal`   | No background hover        |
| `.ease-breadcrumb-contained` | Background box with border |
| `.ease-breadcrumb-rich`      | Icon support               |

### Special Features

| Class                             | Description                      |
| --------------------------------- | -------------------------------- |
| `.ease-breadcrumb-collapsed`      | Truncated middle items           |
| `.ease-breadcrumb-ellipsis`       | `...` trigger for collapsed menu |
| `.ease-breadcrumb-collapsed-menu` | Hidden dropdown menu             |
| `.ease-breadcrumb-back`           | Single back button style         |
| `.ease-breadcrumb-back-icon`      | Animated back arrow              |
| `.ease-breadcrumb-animate`        | Staggered entrance animation     |
| `.ease-breadcrumb-icon`           | SVG icon in breadcrumb           |

## Usage

### Basic Breadcrumb

```html
&lt;nav aria-label="Breadcrumb"&gt; &lt;ol class="ease-breadcrumb
ease-breadcrumb-arrow"&gt; &lt;li class="ease-breadcrumb-item"&gt; &lt;a
href="#" class="ease-breadcrumb-link"&gt;Home&lt;/a&gt; &lt;/li&gt; &lt;li
class="ease-breadcrumb-item"&gt; &lt;span
class="ease-breadcrumb-separator"&gt;&lt;/span&gt; &lt;/li&gt; &lt;li
class="ease-breadcrumb-item"&gt; &lt;a href="#"
class="ease-breadcrumb-link"&gt;Products&lt;/a&gt; &lt;/li&gt; &lt;li
class="ease-breadcrumb-item"&gt; &lt;span
class="ease-breadcrumb-separator"&gt;&lt;/span&gt; &lt;/li&gt; &lt;li
class="ease-breadcrumb-item"&gt; &lt;span
class="ease-breadcrumb-current"&gt;Laptops&lt;/span&gt; &lt;/li&gt; &lt;/ol&gt;
&lt;/nav&gt;
```
