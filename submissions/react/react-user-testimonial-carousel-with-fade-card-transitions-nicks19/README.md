# User Testimonial Carousel with Fade Card Transitions

A sleek React component for displaying user testimonials or reviews. It features automatic playback, manual navigation controls, and utilizes EaseMotion CSS for smooth, cross-fading card transitions.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `testimonials` | `Array<Object>` | `[]` | **Required.** Array of testimonial objects (see structure below) |
| `autoPlay` | `boolean` | `true` | Automatically cycles through slides if true |
| `interval` | `number` | `5000` | Duration (in ms) each slide is shown when `autoPlay` is true |

### Testimonial Object Structure
```typescript
{
  id?: string | number,
  text: string,
  name: string,
  role: string,
  avatar?: string
}
```

## Installation

1. Copy `TestimonialCarousel.jsx` and `style.css` into your project components directory.
2. Ensure you have React installed. No other dependencies are required.

## Usage Example

```jsx
import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

function App() {
  const reviews = [
    {
      id: 1,
      text: "EaseMotion has completely transformed the way we handle animations in our web apps. It's incredibly intuitive.",
      name: "Sarah Jenkins",
      role: "Frontend Lead at TechCorp",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    },
    {
      id: 2,
      text: "The copy-paste nature of these components saves me hours of development time. Highly recommended!",
      name: "David Chen",
      role: "Freelance Developer",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <TestimonialCarousel testimonials={reviews} autoPlay={true} />
    </div>
  );
}

export default App;
```

## Why it fits EaseMotion CSS

- **Fade Transitions**: The incoming card utilizes `.ease-fade-in-active` (a `cubic-bezier(0.34, 1.56, 0.64, 1)` animation combining opacity, scale, and a slight Y-translation) to create a gentle "pop" into view. The outgoing card uses `.ease-fade-out-inactive` for a smooth, subtle exit.
- **Micro-interactions**: Navigation controls (next/prev buttons) implement the `.ease-squish-button` utility, providing tactile feedback on click. The indicator dots scale dynamically using EaseMotion curves when active.
