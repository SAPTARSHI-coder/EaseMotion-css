# Dropdown / Select Menu Component

**Submitted by:** [Your Name](https://github.com/YOUR-USERNAME)  
**Issue:** GSSoC Contribution #12  
**Status:** Pending Review

---

## Overview

A pure CSS dropdown/select menu component with 4 positions, 3 sizes, 3 styles, icons, headers, dividers, search, avatars, descriptions, badges, and multi-select checkboxes. Uses checkbox hack — zero JavaScript.

## Classes

### Container

| Class                    | Description              |
| ------------------------ | ------------------------ |
| `.ease-dropdown`         | Base dropdown container  |
| `.ease-dropdown-right`   | Right-aligned menu       |
| `.ease-dropdown-center`  | Center-aligned menu      |
| `.ease-dropdown-top`     | Menu opens above trigger |
| `.ease-dropdown-sm`      | Small size               |
| `.ease-dropdown-lg`      | Large size               |
| `.ease-dropdown-ghost`   | Transparent trigger      |
| `.ease-dropdown-primary` | Filled primary trigger   |
| `.ease-dropdown-full`    | Full width trigger       |

### Trigger

| Class                    | Description              |
| ------------------------ | ------------------------ |
| `.ease-dropdown-trigger` | Clickable trigger button |
| `.ease-dropdown-input`   | Hidden checkbox          |
| `.ease-dropdown-chevron` | Animated arrow icon      |

### Menu

| Class                 | Description             |
| --------------------- | ----------------------- |
| `.ease-dropdown-menu` | Dropdown menu container |

### Items

| Class                          | Description          |
| ------------------------------ | -------------------- |
| `.ease-dropdown-item`          | Menu item/link       |
| `.ease-dropdown-item-active`   | Selected/active item |
| `.ease-dropdown-item-icon`     | SVG icon             |
| `.ease-dropdown-item-text`     | Text label           |
| `.ease-dropdown-item-shortcut` | Keyboard shortcut    |
| `.ease-dropdown-item-desc`     | Description/subtitle |

### Special Elements

| Class                         | Description           |
| ----------------------------- | --------------------- |
| `.ease-dropdown-header`       | Section header        |
| `.ease-dropdown-divider`      | Horizontal divider    |
| `.ease-dropdown-search`       | Search input wrapper  |
| `.ease-dropdown-search-input` | Search field          |
| `.ease-dropdown-badge`        | Count badge           |
| `.ease-dropdown-avatar`       | Avatar image          |
| `.ease-dropdown-checkbox`     | Multi-select checkbox |

## Usage

### Basic Dropdown

```html
&lt;div class="ease-dropdown"&gt; &lt;input type="checkbox" id="dd-1"
class="ease-dropdown-input"&gt; &lt;label for="dd-1"
class="ease-dropdown-trigger"&gt; Options &lt;svg
class="ease-dropdown-chevron"&gt;...&lt;/svg&gt; &lt;/label&gt; &lt;div
class="ease-dropdown-menu"&gt; &lt;a href="#" class="ease-dropdown-item"&gt;Item
1&lt;/a&gt; &lt;a href="#" class="ease-dropdown-item"&gt;Item 2&lt;/a&gt;
&lt;div class="ease-dropdown-divider"&gt;&lt;/div&gt; &lt;a href="#"
class="ease-dropdown-item"&gt;Item 3&lt;/a&gt; &lt;/div&gt; &lt;/div&gt;
```
