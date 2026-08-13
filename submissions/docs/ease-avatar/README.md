# EaseMotion CSS-Only Avatar

A lightweight, high-performance, pure HTML/CSS avatar component designed for modern web applications. Featuring zero-JS fallback initials, responsive sizing options, and real-time status indicators.

---

## Overview

Avatars are essential UI components for identifying users, contacts, and entities in web interfaces. The **EaseMotion CSS-Only Avatar** delivers a robust visual system built entirely without JavaScript execution overhead.

### Key Features
- **Zero JavaScript Overhead**: Uses modern CSS pseudo-elements and the `attr()` CSS function for dynamic initials display.
- **Smart Image Fallback**: Automatically hides fallback text when image rendering succeeds using CSS `:has()` pseudo-classes.
- **Flexible Sizing**: Standardized size modifiers (`sm`, `md`, `lg`) for consistent grid and navigation layouts.
- **Status Indicators**: Seamlessly attach online, busy, or offline status badges without extra DOM wrapper elements.

---

## Base Usage

The fundamental avatar component requires only the base `.ease-avatar` class containing a standard `<img>` element. The container enforces a circular clip, background fallback color, and centered flex alignment.

### Basic HTML

```html
<!-- Standard Image Avatar (Medium size by default) -->
<div class="ease-avatar ease-avatar--md">
  <img src="https://i.pravatar.cc/150?img=1" alt="User Profile">
</div>
```

### CSS Implementation

```css
.ease-avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #334155;
  color: #f8fafc;
  font-weight: 600;
  overflow: hidden;
  user-select: none;
}

.ease-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## Fallback Initials (Zero JS)

When a user image is not available or fails to render, the avatar seamlessly falls back to user initials using the HTML `data-initials` data attribute combined with the CSS `::before` pseudo-element and `attr()` function.

### How the Technique Works

1. **HTML Attribute**: User initials are stored directly in the `data-initials` attribute (e.g., `data-initials="JD"`).
2. **Pseudo-element Injection**: CSS uses `content: attr(data-initials)` on `.ease-avatar[data-initials]::before` to project the text inside the avatar container.
3. **Automatic Hiding via `:has()` Selector**: When an `<img>` tag is present inside `.ease-avatar`, modern CSS `:has()` rules automatically remove background fills and set `display: none` on the `::before` pseudo-element.

### Copy-Pasteable HTML Examples

```html
<!-- Initials Fallback Only (No image child) -->
<div class="ease-avatar ease-avatar--md" data-initials="JD"></div>

<!-- Image Avatar with Automatic Initials Fallback -->
<div class="ease-avatar ease-avatar--md" data-initials="JD">
  <img src="path/to/user-photo.jpg" alt="Jane Doe">
</div>
```

### CSS Fallback Code

```css
/* CSS Initials Fallback Hack */
.ease-avatar[data-initials]::before {
  content: attr(data-initials);
  position: absolute;
  font-size: 0.4em;
}

.ease-avatar:has(img) {
  background: transparent;
} /* Remove background if image exists */

.ease-avatar:has(img)::before {
  display: none;
} /* Hide initials if image exists */
```

---

## Size Modifiers

EaseMotion provides three standard size modifiers to fit diversas UI contexts, from dense table cells to prominent profile headers.

| Class Modifier | Width / Height | Base Font Size | Recommended Context |
| :--- | :--- | :--- | :--- |
| `.ease-avatar--sm` | `32px` × `32px` | `32px` | Comment threads, navigation bars, dense tables |
| `.ease-avatar--md` | `48px` × `48px` | `48px` | Standard cards, messaging lists, drop-down menus |
| `.ease-avatar--lg` | `64px` × `64px` | `64px` | User profile pages, modal headers, settings |

### Copy-Pasteable HTML Code Blocks

```html
<!-- Small Avatar (32px) -->
<div class="ease-avatar ease-avatar--sm">
  <img src="https://i.pravatar.cc/150?img=1" alt="Small Avatar">
</div>
<div class="ease-avatar ease-avatar--sm" data-initials="SM"></div>

<!-- Medium Avatar (48px) -->
<div class="ease-avatar ease-avatar--md">
  <img src="https://i.pravatar.cc/150?img=2" alt="Medium Avatar">
</div>
<div class="ease-avatar ease-avatar--md" data-initials="MD"></div>

<!-- Large Avatar (64px) -->
<div class="ease-avatar ease-avatar--lg">
  <img src="https://i.pravatar.cc/150?img=3" alt="Large Avatar">
</div>
<div class="ease-avatar ease-avatar--lg" data-initials="LG"></div>
```

### CSS Size Rules

```css
.ease-avatar--sm {
  width: 32px;
  height: 32px;
  font-size: 32px;
}

.ease-avatar--md {
  width: 48px;
  height: 48px;
  font-size: 48px;
}

.ease-avatar--lg {
  width: 64px;
  height: 64px;
  font-size: 64px;
}
```

---

## Status Indicators

Display user availability with status badge overlays. The `.ease-avatar--status` class overrides container clipping (`overflow: visible`) to allow the indicator badge rendered via `::after` to rest on the avatar boundary.

### Status Variants

- **Online (`.ease-avatar--online`)**: Vibrant green (`#10b981`)
- **Busy (`.ease-avatar--busy`)**: Crimson red (`#ef4444`)
- **Offline (`.ease-avatar--offline`)**: Muted slate (`#64748b`)

### Copy-Pasteable HTML Code Blocks

```html
<!-- Online Status Avatar -->
<div class="ease-avatar ease-avatar--md ease-avatar--status ease-avatar--online" data-initials="ON">
  <img src="https://i.pravatar.cc/150?img=4" alt="Online User">
</div>

<!-- Busy Status Avatar -->
<div class="ease-avatar ease-avatar--md ease-avatar--status ease-avatar--busy" data-initials="BU">
  <img src="https://i.pravatar.cc/150?img=5" alt="Busy User">
</div>

<!-- Offline Status Avatar -->
<div class="ease-avatar ease-avatar--md ease-avatar--status ease-avatar--offline" data-initials="OFF">
  <img src="https://i.pravatar.cc/150?img=6" alt="Offline User">
</div>
```

### CSS Status Indicator Implementation

```css
/* Status Indicators (Using ::after) */
.ease-avatar--status {
  overflow: visible; /* Must be visible to allow badge outside boundary */
}

.ease-avatar--status::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 25%;
  height: 25%;
  border-radius: 50%;
  border: 2px solid #0f172a;
  z-index: 10;
}

.ease-avatar--online::after {
  background-color: #10b981;
}

.ease-avatar--busy::after {
  background-color: #ef4444;
}

.ease-avatar--offline::after {
  background-color: #64748b;
}
```
