# Inline-Flex Utilities CSS Demo — EaseMotion CSS

A beautiful, interactive demonstration of `inline-flex` layout models, vertical alignment baseline parameters, and custom chip designs.

## What does this do?
This demo highlights the visual and structural characteristics of `display: inline-flex` compared to standard `display: flex`. It features:
- **Block vs. Inline Comparison**: Clear box-model outlines explaining parent width layout breaks.
- **Alignment Sandbox**: A live playground to test combinations of:
  - `vertical-align` (e.g. `baseline`, `middle`, `top`, `bottom` to align the inline-flex box inside flow text).
  - `align-items` (e.g. `baseline`, `center`, `stretch` to align children inside the inline-flex box).
  - `gap` utilities.
  - A visual baseline guide overlay.
- **Embedded Components**: Inline icon buttons, pulse loading dots, and user collaborator avatars that sit cleanly within prose.

## How is it used?

To declare an inline-flex element that aligns correctly alongside text, combine the core helper class with an alignment rule:

```html
<p>
  Check the project status: 
  <span class="status-badge">
    <span class="dot"></span>
    <span>Production Online</span>
  </span>.
</p>
```

```css
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  vertical-align: middle; /* Aligns the container box relative to text baseline */
}
```

## Why is it useful?
- **Text Alignment Precision**: Solves common vertical misalignments when mixing icons, images, and text.
- **Micro-Layout Isolation**: Keeps button components, tags, and chips from snapping to new lines.
- **Clean Baselines**: Using `vertical-align: baseline` forces text inside inline-flex boxes to match the baseline of surrounding text.

## Tech Stack
- HTML5 (semantic elements)
- CSS3 (transitions, flexbox, inline-flex layouts, custom properties)
- JavaScript (interactive playground modifiers & dismiss animations)

## Preview
Open `demo.html` in your web browser to play with the layout alignment handles.
