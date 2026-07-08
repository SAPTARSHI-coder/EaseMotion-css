# Navbar/Navigation Component

**Submitted by:** [Your Name](https://github.com/YOUR-USERNAME)  
**Issue:** GSSoC Contribution #13  
**Status:** Pending Review

---

## Overview

A responsive navbar/navigation component with logo, links, search, actions, dropdowns, dark theme, transparent overlay, and mobile hamburger menu. Pure CSS checkbox hack for mobile toggle — zero JavaScript.

## Classes

### Base
| Class | Description |
|-------|-------------|
| `.ease-navbar` | Base navbar container |
| `.ease-navbar-brand` | Logo/brand link |
| `.ease-navbar-brand-icon` | Brand icon/badge |
| `.ease-navbar-nav` | Navigation links container |
| `.ease-navbar-item` | Nav item wrapper |
| `.ease-navbar-link` | Nav link |
| `.ease-navbar-link-active` | Active/current link |
| `.ease-navbar-link-icon` | Link SVG icon |
| `.ease-navbar-badge` | Notification badge |

### Actions
| Class | Description |
|-------|-------------|
| `.ease-navbar-actions` | Right-side actions container |
| `.ease-navbar-btn` | Navbar button |
| `.ease-navbar-btn-primary` | Primary CTA button |
| `.ease-navbar-btn-secondary` | Outlined button |
| `.ease-navbar-btn-ghost` | Transparent button |

### Search
| Class | Description |
|-------|-------------|
| `.ease-navbar-search` | Search wrapper |
| `.ease-navbar-search-input` | Search input |
| `.ease-navbar-search-icon` | Search icon |

### Mobile
| Class | Description |
|-------|-------------|
| `.ease-navbar-input` | Hidden checkbox toggle |
| `.ease-navbar-toggle` | Hamburger button |
| `.ease-navbar-toggle-icon` | Hamburger icon |
| `.ease-navbar-mobile` | Mobile menu container |

### Dropdown
| Class | Description |
|-------|-------------|
| `.ease-navbar-dropdown` | Dropdown wrapper |
| `.ease-navbar-dropdown-menu` | Dropdown menu |
| `.ease-navbar-dropdown-item` | Dropdown item |

### Variants
| Class | Description |
|-------|-------------|
| `.ease-navbar-dark` | Dark theme |
| `.ease-navbar-transparent` | Transparent overlay |
| `.ease-navbar-sticky` | Sticky position |
| `.ease-navbar-fixed` | Fixed position |
| `.ease-navbar-center` | Centered nav links |
| `.ease-navbar-left` | Left-aligned nav links |

## Usage

### Basic Navbar
```html
&lt;nav class="ease-navbar"&gt;
  &lt;a href="#" class="ease-navbar-brand"&gt;
    &lt;span class="ease-navbar-brand-icon"&gt;⚡&lt;/span&gt;
    Brand
  &lt;/a&gt;
  
  &lt;ul class="ease-navbar-nav"&gt;
    &lt;li class="ease-navbar-item"&gt;
      &lt;a href="#" class="ease-navbar-link ease-navbar-link-active"&gt;Home&lt;/a&gt;
    &lt;/li&gt;
    &lt;li class="ease-navbar-item"&gt;
      &lt;a href="#" class="ease-navbar-link"&gt;About&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
  
  &lt;div class="ease-navbar-actions"&gt;
    &lt;button class="ease-navbar-btn ease-navbar-btn-ghost"&gt;Sign In&lt;/button&gt;
    &lt;button class="ease-navbar-btn ease-navbar-btn-primary"&gt;Get Started&lt;/button&gt;
  &lt;/div&gt;
  
  &lt;!-- Mobile toggle --&gt;
  &lt;input type="checkbox" id="nav-toggle" class="ease-navbar-input"&gt;
  &lt;label for="nav-toggle" class="ease-navbar-toggle"&gt;
    &lt;svg class="ease-navbar-toggle-icon"&gt;...&lt;/svg&gt;
  &lt;/label&gt;
  
  &lt;!-- Mobile menu --&gt;
  &lt;div class="ease-navbar-mobile"&gt;
    &lt;a href="#" class="ease-navbar-link"&gt;Home&lt;/a&gt;
    &lt;a href="#" class="ease-navbar-link"&gt;About&lt;/a&gt;
    &lt;div class="ease-navbar-actions"&gt;
      &lt;button class="ease-navbar-btn ease-navbar-btn-ghost"&gt;Sign In&lt;/button&gt;
      &lt;button class="ease-navbar-btn ease-navbar-btn-primary"&gt;Get Started&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;