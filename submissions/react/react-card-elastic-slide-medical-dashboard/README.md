# React Elastic Slide Card (Sample)

A sample React card component demonstrating an elastic-style hover animation for a medical dashboard.

## Features

- React functional component
- Responsive card layout
- Elastic hover animation
- Reusable props
- Simple styling

## Props

| Prop | Type | Description |
|------|------|-------------|
| title | string | Card heading |
| value | string | Main value |
| children | ReactNode | Additional content |

## Example

```jsx
<ElasticSlideCard
  title="Heart Rate"
  value="78 BPM"
>
  Patient vitals are within the normal range.
</ElasticSlideCard>
```

## Customize

Modify `style.css` to change:

- Colors
- Border radius
- Animation timing
- Shadows
- Spacing