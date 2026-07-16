# Elastic Slide Card (Fitness Tracker)

A sleek React card component that leverages a smooth, elastic slide transition to reveal detailed activity statistics on hover or focus. Designed specifically for modern fitness tracker interfaces with a dark, high-contrast aesthetic and neon accents.

## Features
- ✨ **Elastic Slide Transition:** The stats panel uses a custom `cubic-bezier` timing function to slide up with a natural bouncy, elastic feel.
- 🎯 **Accessible Focus State:** Fully keyboard navigable using `:focus-within` and `:focus-visible`.
- ⚡ **Zero JS Animation:** The elastic effect is entirely CSS-driven for maximum performance (60fps).
- 🧩 **Flexible Props:** Easily inject custom icons, titles, and stat arrays.
- 🎨 **EaseMotion Tokens:** Customizable via CSS variables.

## Usage

```jsx
import ElasticSlideCard from './ElasticSlideCard';
import { ActivityIcon } from 'lucide-react';

const myStats = [
  { label: 'Duration', value: '45', unit: 'm' },
  { label: 'Avg HR', value: '142', unit: 'bpm' },
  { label: 'Calories', value: '450', unit: 'kcal' },
  { label: 'Distance', value: '5.2', unit: 'km' }
];

function App() {
  return (
    <ElasticSlideCard 
      icon={<ActivityIcon size={24} />}
      title="Morning Run"
      subtitle="Today, 06:30 AM"
      stats={myStats}
      // Note: Make sure ease-fade-in and ease-hover-lift-shadow are available via core CSS
      className="ease-fade-in ease-hover-lift-shadow"
      style={{ backgroundImage: 'url(/path-to-map-bg.png)', backgroundSize: 'cover' }}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ReactNode` | Required | Icon element rendered in the header. |
| `title` | `string` | Required | Main heading text. |
| `subtitle` | `string` | Required | Secondary subheading text (e.g., date). |
| `stats` | `Array` | `[]` | Array of objects: `{ label: string, value: string\|number, unit?: string }`. |
| `isActive` | `boolean` | `false` | Force the panel to stay open (useful for touch devices or external state management). |
| `className` | `string` | `''` | Additional CSS classes for the wrapper. |
| `style` | `object` | `{}` | Inline styles for the wrapper element. |

## CSS Custom Properties

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--ease-esc-bg-color` | `#121212` | Main page background color |
| `--ease-esc-surface-color` | `#1e1e1e` | Card surface color |
| `--ease-esc-accent-color` | `#00ff88` | Accent color (neon green by default) |
| `--ease-esc-border-radius` | `24px` | Border radius of the card |
| `--ease-esc-transition-elastic` | `0.6s cubic-bezier(0.34, 1.56, 0.64, 1)` | The bouncy easing curve |

## Reduced Motion
The component fully supports `prefers-reduced-motion: reduce`. The elastic `cubic-bezier` timing is replaced with a flat `0.3s ease` linear transition, and the icon scale-and-rotate effect is disabled.
