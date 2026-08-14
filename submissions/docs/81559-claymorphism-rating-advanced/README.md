# Claymorphism Rating — Advanced Styling

## Overview

This guide documents advanced styling for the Claymorphism Rating component.

The component presents a familiar rating control using soft raised surfaces and layered shadows.

The underlying control remains semantic and can be used without JavaScript.

The advanced scope focuses on reusable visual customization.

## Markup

Use a labeled rating group with native radio inputs.

```html
<fieldset class="rating">
  <legend class="rating__label">Rate this experience</legend>
  <div class="rating__options">
    <label class="rating__option"><input name="rating" type="radio" value="1"><span>1</span></label>
    <label class="rating__option"><input name="rating" type="radio" value="2"><span>2</span></label>
    <label class="rating__option"><input name="rating" type="radio" value="3"><span>3</span></label>
    <label class="rating__option"><input name="rating" type="radio" value="4"><span>4</span></label>
    <label class="rating__option"><input name="rating" type="radio" value="5"><span>5</span></label>
  </div>
</fieldset>
```

## Class Naming

`rating` is the component block.

`rating__label` identifies the legend.

`rating__options` contains the choices.

`rating__option` is the individual labeled control.

Use modifiers such as `rating--compact` for documented variants.

## CSS Variables

The component exposes variables for surface, shadow, accent, and radius.

```css
.rating {
  --rating-surface: #e9edf4;
  --rating-shadow: -0.45rem -0.45rem 1rem #ffffff, 0.45rem 0.45rem 1rem #c7ced9;
  --rating-accent: #6d5dfc;
  --rating-radius: 1rem;
}
```

Override variables at the component or theme scope.

Avoid hard-coding the same values into every modifier.

## Advanced Styling

Use paired inset and outer shadows to create the clay-like surface.

Keep the selected state visually distinct from the resting state.

Use `:focus-visible` to provide a strong keyboard focus treatment.

Avoid overly deep shadows that reduce text or icon contrast.

Keep transitions subtle and optional.

## Accessibility

A `fieldset` and `legend` provide a clear group name.

Each radio must have a label.

Do not hide the input in a way that removes keyboard access.

The selected state must not rely on color alone.

Focus must remain visible against the raised surface.

## Keyboard Interaction

Native radio controls provide predictable arrow-key behavior.

Users should be able to tab to the group and move between choices.

Do not replace radio inputs with non-semantic clickable spans.

Test the component without a mouse.

## Responsive Behavior

Keep the rating choices flexible when the viewport narrows.

Use wrapping rather than forcing horizontal overflow.

Preserve comfortable touch targets on mobile layouts.

## Usage

Copy the fieldset markup into the consuming page.

Load the stylesheet after the base styles.

Replace the numeric values with application-specific rating labels if required.

Keep the form control names consistent with the host form.

## Testing Checklist

- Test all rating values.
- Test keyboard navigation.
- Test focus visibility.
- Test selected-state contrast.
- Test narrow screens.
- Test browser zoom.
- Test touch targets.
- Test reduced-motion preferences.

## Documentation Integration

Link this guide from the documentation index or component cheatsheet.

Keep the link title explicit about the advanced styling scope.

## Files

`README.md` contains this advanced guide.

`demo.html` contains the standalone example.

`style.css` contains the presentation layer.

## Summary

Claymorphism styling can be added without sacrificing native radio semantics.

CSS variables keep the visual treatment reusable and easy to theme.
