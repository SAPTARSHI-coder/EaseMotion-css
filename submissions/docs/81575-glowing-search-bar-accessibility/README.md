# Glowing Search Bar — Accessibility Integration

## Overview

This guide documents accessibility integration for the Glowing Search Bar.

The component keeps a native search input while using glow styling for visual emphasis.

The accessibility scope covers labels, keyboard access, focus, contrast, and responsive behavior.

No JavaScript is required for the presentation layer.

## Markup

```html
<form class="search" role="search">
  <label class="search__label" for="site-search">Search the documentation</label>
  <div class="search__field">
    <span class="search__icon" aria-hidden="true">⌕</span>
    <input class="search__input" id="site-search" name="q" type="search" placeholder="Search topics">
    <button class="search__button" type="submit">Search</button>
  </div>
</form>
```

## Accessible Naming

The visible label provides the input's accessible name.

Do not use placeholder text as the only label.

The decorative icon is hidden from assistive technology.

The submit button uses a text label that communicates its action.

## Keyboard Interaction

Users can tab directly to the search field.

The native search input supports standard text editing and keyboard behavior.

The submit button remains a native button.

Keep focus indicators visible around the interactive controls.

## Focus Styling

Use `:focus-visible` to strengthen the glow around the focused input.

The focus ring must remain visible against the surrounding surface.

Do not make the glow so bright that it reduces text readability.

## CSS Variables

```css
.search {
  --search-surface: #101827;
  --search-border: #4ee7ff;
  --search-accent: #8b5cf6;
  --search-radius: 0.9rem;
}
```

Variables allow the component to match a host theme.

## Class Naming

`search` is the component block.

`search__label`, `__field`, `__input`, and `__button` are component elements.

Use modifiers only for documented visual variants.

## Glow Treatment

Use box shadows for the decorative glow.

Keep the actual input surface opaque enough for readable text.

Reserve stronger glow intensity for focus rather than constant decoration.

Avoid animation that communicates essential search state.

## Responsive Behavior

The search field should fill the available width.

The action button may stack or remain adjacent depending on available space.

Do not allow the search control to cause horizontal scrolling.

## Reduced Motion

Any optional glow transition should respect `prefers-reduced-motion`.

The search field must remain fully usable when motion is reduced.

## Testing Checklist

- Test the visible label.
- Test keyboard navigation.
- Test focus visibility.
- Test text entry.
- Test form submission.
- Test narrow screens.
- Test browser zoom.
- Test contrast.

## Usage

Copy the form markup into the documentation or application page.

Connect the form action to the project's search endpoint.

Replace the sample label and placeholder with product-specific text.

## Documentation Integration

Place the guide under `submissions/docs/`.

Link it from the documentation index or cheatsheet index.

## Files

`README.md` contains accessibility guidance.

`demo.html` contains the standalone example.

`style.css` contains the presentation layer.

## Summary

The Glowing Search Bar can provide a strong visual treatment without sacrificing native search semantics or keyboard access.
