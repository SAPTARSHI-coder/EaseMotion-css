# Accordion Component

A pure CSS accordion using the native HTML `&lt;details&gt;` / `&lt;summary&gt;` elements with smooth height animation via CSS `grid-template-rows`.

## Files

- `demo.html` — Live preview with default and glassmorphism variants
- `style.css` — All accordion styles, variants, and demo layout

## Variants Included

| Class                | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| `.accordion`         | Base container with default light theme                    |
| `.accordion-item`    | Individual collapsible section (`&lt;details&gt;`)         |
| `.accordion-header`  | Clickable header (`&lt;summary&gt;`) with animated chevron |
| `.accordion-content` | Smooth reveal wrapper using grid transition                |
| `.accordion-glass`   | Glassmorphism variant with backdrop blur                   |

## How It Works

The smooth animation is achieved with the **CSS grid trick**:

```css
.accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s ease;
}

.accordion-item[open] &gt; .accordion-content {
  grid-template-rows: 1fr;
}
```
