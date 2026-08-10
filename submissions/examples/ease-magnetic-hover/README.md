cat > submissions/examples/ease-magnetic-hover/README.md <<'EOF'
# Ease Magnetic Hover

## What does this add?

A lightweight magnetic hover interaction that gently pulls an element toward the user's cursor.

The effect is implemented with CSS transforms and a small amount of JavaScript to calculate the cursor's distance from the element's center.

## How does it work?

The cursor position is compared with the center of the element. The resulting X and Y offsets are multiplied by a configurable magnetic strength and applied using CSS custom properties.

```css
transform: translate3d(
  var(--magnetic-x),
  var(--magnetic-y),
  0
);