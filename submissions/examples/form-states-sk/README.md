# Form Input States (Disabled & Read-only)

This submission addresses a bug in `forms.css` where `:disabled` and `[readonly]` visual states were either incomplete or missing. 

## Improvements
- **Enhanced Disabled State**: Includes `[disabled]` attribute support, reduced opacity (0.6), and `cursor: not-allowed`. It also prevents pointer events and removes focus box-shadows.
- **New Read-only State**: Added support for `:read-only` and `[readonly]`. These fields have a subtler background color (`neutral-50`) to indicate they are not editable while remaining focusable for text selection.
- **Accessibility**: Improves WCAG compliance by providing clear visual cues for non-editable fields.

## How to Use
1. Copy the CSS rules into your `forms.css` or include `style.css` in your project.
2. Apply the `disabled` or `readonly` attributes to any `.ease-input`, `.ease-textarea`, or `.ease-select`.

```html
<input class="ease-input" disabled value="Disabled Input">
<input class="ease-input" readonly value="Read-only Input">
```

## Directory Structure
- `demo.html`: Comparison between enabled, disabled, and read-only states.
- `style.css`: The proposed CSS fixes for form states.
