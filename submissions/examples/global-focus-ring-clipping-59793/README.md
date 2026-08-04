# Global Focus Ring Clipping Prevention (#59793)

An accessibility solution and design pattern for EaseMotion CSS components that prevents keyboard focus rings (`:focus-visible`) from being clipped when placed inside containers with `overflow: hidden` or `overflow: auto`.

## 🎯 Problem Overview

Default browser outlines (`outline: 2px solid <color>`) and positive outline offsets (`outline-offset: 2px`) draw the focus indicator outside an element's bounding box. When interactive elements (buttons, inputs, cards, drawers, tabs) are nested inside containers that use `overflow: hidden` or `overflow: auto` for layout clipping and animations, the focus ring gets partially or entirely cut off, reducing visual accessibility.

## 💡 Solution

By using an **inset box-shadow** (`box-shadow: inset 0 0 0 2px <color>`) paired with `outline: none`, the focus ring is rendered entirely *within* the element's bounding box.

### Key Benefits
- **No Clipping**: Guaranteed 100% focus indicator visibility inside any container, regardless of `overflow` settings.
- **High Contrast**: Dual-layer inset shadow for crisp contrast in both dark and light modes.
- **Reduced Motion Ready**: Full support for `prefers-reduced-motion`.

## 🛠️ Usage

Apply the following utility rule or focus pattern to interactive elements across EaseMotion CSS components:

```css
/* Prevent focus ring clipping in overflow containers */
.your-element:focus-visible,
:focus-visible {
    outline: none !important;
    box-shadow: inset 0 0 0 2px #38bdf8, inset 0 0 0 4px rgba(56, 189, 248, 0.2) !important;
}
```

## 📁 File Structure

```
submissions/examples/global-focus-ring-clipping-59793/
├── demo.html    # Interactive showcase with overflow: hidden containers
├── style.css    # Raw CSS design system & inset focus ring implementation
└── README.md    # Documentation and usage guide
```
