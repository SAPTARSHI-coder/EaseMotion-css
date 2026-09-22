# EaseRatingStars

A React star-rating component with support for full, half, and empty stars.

## Usage

```jsx
<EaseRatingStars value={3.5} />

## Props
| Prop       | Type                      | Default | Description                           |
| ---------- | ------------------------- | ------- | ------------------------------------- |
| `count`    | `number`                  | `5`     | Number of stars                       |
| `value`    | `number`                  | `0`     | Current rating, including half values |
| `onChange` | `(value: number) => void` | —       | Called when a star is clicked         |
| `readOnly` | `boolean`                 | `false` | Disables interaction                  |


## EaseMotion

This component uses EaseMotion CSS utilities for subtle hover animation.

- `ease-hover-lift` — lifts the star slightly on hover.