# Print-Friendly Chip Component

A standard CSS-only select chip component optimized for paper printouts, stripping away heavy background colors and box-shadows to conserve printer ink.

## What does this do?

This component provides a lightweight select chip group that functions identically to standard checkboxes/pills on screen, but automatically formats itself for printing:

- **Backgrounds & Gradients**: Stripped to `transparent` to avoid waste.
- **Colors**: Forced to pure black (`#000000`) for high contrast on white paper.
- **Shadows & Transitions**: Disabled entirely to prevent muddy halftone dots.
- **State Recognition**: Checked inputs get a solid black border, bold typography, and a distinct black checkmark (`✓`) to maintain readability on paper.
- **Disabled States**: Set to a dashed border and reduced opacity to show they are inactive.

## How is it used?

Structure the chip elements within a label and input wrapper:

```html
<div class="ease-chip-group-ag">
  <!-- Checked State -->
  <label>
    <input type="checkbox" name="skills" value="html" checked />
    <span class="ease-chip-ag">HTML</span>
  </label>

  <!-- Unchecked State -->
  <label>
    <input type="checkbox" name="skills" value="js" />
    <span class="ease-chip-ag">JavaScript</span>
  </label>

  <!-- Disabled State -->
  <label>
    <input type="checkbox" name="skills" value="css" disabled />
    <span class="ease-chip-ag">CSS</span>
  </label>
</div>
```

### Size Modifiers

- **Small**: `.ease-chip-sm-ag`
- **Large**: `.ease-chip-lg-ag`

## Why is it useful?

Forms, resumes, search filters, and data summaries are frequently printed or exported to PDF by users. Standard styled chips contain heavy solid backgrounds (like indigo or grey) and drop shadows that look unprofessional and consume excessive ink when printed. The print-friendly version solves this by ensuring clean, black-and-white grid lines.

## Print Overrides Code Reference

The following `@media print` block is incorporated to handle the conversions:

```css
@media print {
  .ease-chip-ag {
    background: transparent !important;
    color: #000000 !important;
    border: 1.5px solid #000000 !important;
    box-shadow: none !important;
    transition: none !important;
  }

  .ease-chip-group-ag input[type="checkbox"]:checked + .ease-chip-ag {
    border-color: #000000 !important;
    color: #000000 !important;
    font-weight: 700 !important;
  }
}
```
