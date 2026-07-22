# Form Field Focus Choreography

A cohesive frontend-only demo showcasing coordinated form micro-interactions using HTML, CSS, and JavaScript.

## Features

- Floating labels on field focus
- Helper text slide-in animation
- Validation error shake feedback
- Success checkmark draw animation
- Client-side validation (no backend)
- Responsive layout
- Supports `prefers-reduced-motion`

## Folder Structure

```text
feature-form-field-focus-choreography-sum/
├── demo.html
├── style.css
└── README.md
```

## How to Run

1. Clone the repository.
2. Navigate to:

```bash
submissions/examples/feature-form-field-focus-choreography-sum
```

3. Open `demo.html` in your browser.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- EaseMotion CSS utilities / local styles

## Included Micro-Interactions

| Interaction | Description |
|------------|------------|
| Floating Labels | Labels move upward on focus or input. |
| Helper Text | Slides into view when a field receives focus. |
| Error State | Empty fields shake on submission. |
| Success State | Animated SVG checkmark appears after successful submission. |

## Accessibility

- Keyboard friendly.
- Motion can be disabled through `prefers-reduced-motion`.
- Semantic form elements are used throughout.

## Preview

- Focus any input to observe floating labels.
- Helper text appears beneath active fields.
- Submit with empty fields to trigger error shake.
- Fill all fields correctly and submit to see the success animation.