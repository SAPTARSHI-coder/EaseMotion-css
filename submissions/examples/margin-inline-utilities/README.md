# Spacing: Margin-Inline Utilities

Logical margin-inline spacing utilities mapping horizontal margins relative to reading direction.

## What does this do?

It implements logical horizontal margin utility classes (`.mi-0` through `.mi-5` and `.mi-auto`) that dynamically map margin-left and margin-right relative to document block direction.

## How is it used?

Add any `.mi-*` class to apply horizontal margin spacing:

```html
<div class="element mi-3">Spaced Content</div>
```

To automatically center an inline-block or block level element horizontally, use `.mi-auto`:

```html
<div class="card mi-auto">Centered Card</div>
```

## Why is it useful?

It aligns with modern CSS design best practices by moving away from hardcoded physical direction mapping (`margin-left`/`margin-right`) to writing-mode independent logical property layouts. This fits perfectly with EaseMotion CSS's accessibility-driven, flexible, framework-agnostic mission.

---

## Overview

Logical properties ensure pages layout correctly regardless of localization scripts. By using `margin-inline` instead of physical `margin-left` and `margin-right`, the spacing flips automatically in right-to-left (RTL) reading directions (e.g., Arabic or Hebrew) without requiring override styles.

## Utility Table

| Class      | CSS Rules Applied         | Spacing (Rem) | Spacing (Pixels) |
| :--------- | :------------------------ | :------------ | :--------------- |
| `.mi-0`    | `margin-inline: 0;`       | `0rem`        | `0px`            |
| `.mi-1`    | `margin-inline: 0.25rem;` | `0.25rem`     | `4px`            |
| `.mi-2`    | `margin-inline: 0.5rem;`  | `0.5rem`      | `8px`            |
| `.mi-3`    | `margin-inline: 1rem;`    | `1rem`        | `16px`           |
| `.mi-4`    | `margin-inline: 1.5rem;`  | `1.5rem`      | `24px`           |
| `.mi-5`    | `margin-inline: 2rem;`    | `2rem`        | `32px`           |
| `.mi-auto` | `margin-inline: auto;`    | Auto          | Centered         |

## Usage Examples

### 1. Element Centering

```html
<div class="container">
  <div class="card mi-auto">
    <h3>Centered Element</h3>
  </div>
</div>
```

### 2. Spacing Badge Components

```html
<div class="badge-wrapper">
  <span>Tag A</span>
  <span class="mi-2">Tag B (Spaced)</span>
  <span>Tag C</span>
</div>
```

## Why Logical Properties are Useful

Traditional physical properties are locked to the screen boundaries (`left`, `right`, `top`, `bottom`). If text direction flows vertically or right-to-left, physical margins fail to align properly with the text. Logical properties adjust automatically to the active writing mode, ensuring high-quality, internationalization-friendly interfaces.

## Browser Support Notes

`margin-inline` has full support across all modern web browsers (Chrome, Safari, Firefox, Edge, Opera) since 2019. For legacy systems, standard physical property fallbacks can be added, but are rarely required in modern CSS development.

## Common Use Cases

- Navigation bar auto-centered container items.
- Side-by-side button alignments inside modal footers.
- Spacing badge items or text labels inside grids or cards.
- Bidirectional list items spacing.
