# animation-composition: accumulate

Three-column comparison of `replace`, `add`, and `accumulate` composition modes showing how they interact with a base floating animation when a hover animation is applied to the same property.

## Classes

| Class                  | Composition                         |
| ---------------------- | ----------------------------------- |
| `ease-comp-replace`    | Default — hover replaces float      |
| `ease-comp-add`        | Hover adds to underlying base value |
| `ease-comp-accumulate` | Hover stacks on current live value  |

## Usage

```css
.my-card {
  animation: float 3s ease-in-out infinite;
}

.my-card:hover {
  animation: hover-lift 0.3s ease forwards;
  animation-composition: accumulate;
}
```

## The problem this solves

When two animations target the same CSS property (`transform`), the default `replace` mode means the hover animation **overwrites** the float. The card snaps to a fixed position when hovered. With `accumulate`, both animations compose — the float continues while the hover lift adds on top.

Requires Chrome 112+ / Safari 16+ / Firefox 119+.

Closes #9615
