# Scrollbar Width Utilities

Provide standard and Webkit-fallback CSS classes to configure the width and visibility of scrollbars on overflow elements.

This utility module bridges the gap between Firefox's implementation of the CSS Scrollbars Module Level 1 specification and the Webkit/Blink-based engine implementation (Chrome, Edge, Safari, Opera).

---

## Table of Contents

1. [What does this do?](#what-does-this-do)
2. [Utility Class Reference](#utility-class-reference)
3. [Why is it useful?](#why-is-it-useful)
4. [How is it used?](#how-is-it-used)
   - [Basic Usage](#basic-usage)
   - [Horizontal Layouts](#horizontal-layouts)
5. [Cross-Browser Implementation details](#cross-browser-implementation-details)
   - [Standard Properties (Firefox/Gecko)](#standard-properties-firefoxgecko)
   - [Non-Standard Properties (WebKit/Blink)](#non-standard-properties-webkitblink)
6. [Best Practices & Layout Shifts](#best-practices--layout-shifts)
   - [Avoiding Layout Shifting](#avoiding-layout-shifting)
   - [Accessibility (a11y) Considerations](#accessibility-a11y-considerations)
7. [Tech Stack](#tech-stack)
8. [Contribution Notes](#contribution-notes)

---

## What does this do?

Configure the display dimensions of scrollbars on HTML container elements that have overflow content. It defines three key states:

1. **Auto**: Uses the user agent's default scrollbar width.
2. **Thin**: Renders a compact scrollbar, ideal for nested side panels, code viewers, and side sheets.
3. **None**: Completely hides the visual scrollbar tracks while preserving native touch, trackpad, and keyboard scrolling capabilities.

---

## Utility Class Reference

| Utility Class    | Standard CSS Property    | Webkit Selector Override                             | Behavior                              |
| :--------------- | :----------------------- | :--------------------------------------------------- | :------------------------------------ |
| `scrollbar-none` | `scrollbar-width: none;` | `::-webkit-scrollbar { display: none; }`             | Completely hides scrollbar rails.     |
| `scrollbar-thin` | `scrollbar-width: thin;` | `::-webkit-scrollbar { width: 6px; height: 6px; }`   | compact vertical and horizontal bars. |
| `scrollbar-auto` | `scrollbar-width: auto;` | `::-webkit-scrollbar { width: 12px; height: 12px; }` | Default platform-dependent scrollbar. |

---

## Why is it useful?

1. **Visual Polish**: Standard OS-specific scrollbars are often thick, gray, and contrast poorly with custom dark modes or premium glassmorphic cards. These utilities allow scrollbars to match your layout design.
2. **Space Constraints**: In nested dashboard layouts, side sheets, chat boxes, and code snippet cards, default scrollbars (often 12px to 17px wide) consume excessive horizontal space. A thin scrollbar (6px) maximizes readable space.
3. **Clean Sliders**: For horizontal carousels, swipeable image galleries, and tab navigation menus, scrollbar rails are visually distracting. Hiding the scrollbar (`scrollbar-none`) creates a native app-like experience.
4. **Cross-Browser Consistency**: Developers often struggle to make scrollbar styles look identical on Chrome and Firefox. These utilities combine standard specifications with Webkit fallbacks under a single class.

---

## How is it used?

### Basic Usage

To configure a container to use a thin scrollbar:

```html
<div class="scrollbar-thin" style="overflow-y: scroll; height: 200px;">
  <p>Your scrolling content goes here...</p>
  <p>Another paragraph to trigger overflow...</p>
</div>
```

To hide the scrollbar track on a sidebar nav list:

```html
<aside class="scrollbar-none" style="overflow-y: auto; height: 100vh;">
  <nav>
    <a href="#home">Home</a>
    <a href="#dashboard">Dashboard</a>
    <a href="#settings">Settings</a>
  </nav>
</aside>
```

### Horizontal Layouts

These classes work seamlessly on horizontal overflow elements:

```html
<div
  class="scrollbar-thin"
  style="display: flex; overflow-x: scroll; gap: 1rem; width: 100%;"
>
  <div style="flex-shrink: 0; width: 250px;">Card 1</div>
  <div style="flex-shrink: 0; width: 250px;">Card 2</div>
  <div style="flex-shrink: 0; width: 250px;">Card 3</div>
</div>
```

---

## Cross-Browser Implementation Details

### Standard Properties (Firefox/Gecko)

Firefox supports the standard W3C CSS Scrollbars Module:

- `scrollbar-width`: Controls the thickness. Allowed values are `auto`, `thin`, and `none`.
- `scrollbar-color`: Defines custom colors for the thumb (first value) and track (second value).

```css
.scrollbar-thin {
  scrollbar-width: thin !important;
  scrollbar-color: var(--color-border-hover) var(--color-bg-base) !important;
}
```

### Non-Standard Properties (WebKit/Blink)

Chrome, Safari, Edge, and Opera do not support standard properties yet. Instead, they use vendor-prefixed pseudo-elements:

- `::-webkit-scrollbar`: Targets the entire scrollbar container. We set `width` for vertical scrolling and `height` for horizontal scrolling.
- `::-webkit-scrollbar-track`: Targets the background track rail.
- `::-webkit-scrollbar-thumb`: Targets the draggable scroll bar handle.

```css
.scrollbar-thin::-webkit-scrollbar {
  width: 6px !important;
  height: 6px !important;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: var(--color-bg-base) !important;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: var(--color-border-hover) !important;
  border-radius: 999px !important;
}
```

---

## Best Practices & Layout Shifts

### Avoiding Layout Shifting

When page content changes dynamically, containers can go from no-overflow to overflow. The sudden appearance of the scrollbar will push content horizontally, causing an unpleasant layout shift.

To prevent this, combine these utilities with `scrollbar-gutter`:

```css
.scroll-container {
  scrollbar-gutter: stable; /* Reserves space for scrollbar beforehand */
}
```

Or reserve space on both sides to maintain centering:

```css
.scroll-container {
  scrollbar-gutter: stable both-edges;
}
```

### Accessibility (a11y) Considerations

- **Keyboard Focus**: Any scrollable container must be focusable by keyboard users so they can scroll using arrow keys. Always add `tabindex="0"` to scrollable elements that do not contain focusable children.
- **Scroll Indicators**: When using `scrollbar-none`, ensure there is a clear visual cue (such as gradient fades or edge shadows) indicating that the container has hidden, scrollable content. Users on desktop screens with standard mice may not realize scrolling is possible.
- **Touch Targets**: Compact scrollbars (`scrollbar-thin`) can be harder to tap or drag. Maintain trackpad gestures and swipe support so users don't have to rely solely on clicking the 6px thumb.

---

## Tech Stack

- **HTML**: Semantic structures for accessibility.
- **CSS**: Modern layout styles, custom properties, and cross-browser pseudo-classes.
- **Zero Dependencies**: Pure, buildless CSS implementation that integrates directly into EaseMotion.

---

## Contribution Notes

- The classes have been added in a clean, isolated directory structure to ensure backward compatibility.
- Standardized vendor fallbacks guarantee a unified layout appearance across modern desktop and mobile browsers.
- Final styling conventions will be adapted by the main repository maintainers prior to publishing.
