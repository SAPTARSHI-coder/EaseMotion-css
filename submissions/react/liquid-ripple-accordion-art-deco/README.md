# LiquidRippleAccordion — Art Deco (React + EaseMotion CSS)

A React accordion component with a **Liquid Ripple** click transition and an **Art Deco** visual theme. Each header spawns a ripple wave at the exact click position on open/close. The panel collapse uses the CSS `grid-template-rows` technique — no JS `height` measurement required.

## Preview

Open `demo.html` directly in any browser. It uses React 18 via CDN + Babel in-browser transpilation — no `npm install` needed for the demo.

## File Structure

```
submissions/react/liquid-ripple-accordion-art-deco/
├── LiquidRippleAccordion.jsx   ← The React component
├── LiquidRippleAccordion.css   ← Component styles (import alongside the JSX)
├── demo.html                   ← Self-contained browser demo
└── README.md                   ← This file
```

## Installation (in your React project)

Copy `LiquidRippleAccordion.jsx` and `LiquidRippleAccordion.css` into your project, then import:

```jsx
import LiquidRippleAccordion from './LiquidRippleAccordion';
// The CSS is imported inside the JSX file automatically via:
// import './LiquidRippleAccordion.css';
```

## Usage

```jsx
import LiquidRippleAccordion from './LiquidRippleAccordion';

const items = [
  {
    id: 'section-1',
    title: 'Origins of Art Deco',
    icon: '⬟',               // any React node
    content: (
      <p>
        Art Deco emerged in France in the 1910s, characterised by bold
        geometric forms and lavish ornamentation.
      </p>
    ),
  },
  {
    id: 'section-2',
    title: 'Design Principles',
    content: <p>Symmetry, angular geometry, and luxurious materials.</p>,
  },
  {
    id: 'section-3',
    title: 'Restricted Section',
    disabled: true,           // prevents interaction
    content: <p>This panel is locked.</p>,
  },
];

function App() {
  return (
    <LiquidRippleAccordion
      items={items}
      allowMultiple={false}
      theme="light"
    />
  );
}
```

## Props

### `LiquidRippleAccordion`

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `AccordionItem[]` | `[]` | Array of item definitions (see below) |
| `allowMultiple` | `boolean` | `false` | When `true`, multiple panels can be open simultaneously |
| `theme` | `'light' \| 'dark'` | `'light'` | Color palette preset |
| `className` | `string` | `''` | Extra class(es) added to the root element |

### `AccordionItem` shape

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string \| number` | ✅ | Unique key; used to generate ARIA IDs |
| `title` | `string` | ✅ | Panel header text (rendered uppercase) |
| `content` | `React.ReactNode` | ✅ | Panel body — any JSX |
| `icon` | `React.ReactNode` | ❌ | Decorative icon to the left of the title |
| `disabled` | `boolean` | ❌ | When `true`, the panel cannot be toggled |

## Customization via CSS Custom Properties

Override these on `:root` or any ancestor element to theme the component without touching the JSX:

| Property | Default (light) | Description |
|---|---|---|
| `--ease-lra-accent` | `#9b7d3a` | Gold accent color (bar, icon, ripple) |
| `--ease-lra-ripple` | `rgba(155,125,58,0.35)` | Ripple fill color |
| `--ease-lra-ripple-duration` | `0.65s` | Duration of the liquid ripple spread |
| `--ease-lra-ripple-size` | `600px` | Diameter of the ripple element |
| `--ease-lra-collapse-duration` | `0.38s` | Panel expand/collapse duration |
| `--ease-lra-collapse-easing` | `cubic-bezier(0.4,0,0.2,1)` | Panel easing curve |
| `--ease-lra-item-border` | `#c9b89a` | Card border and body divider color |
| `--ease-lra-header-bg` | `#f5efe3` | Closed-state header background |
| `--ease-lra-header-hover-bg` | `#ede5d5` | Header background on hover |
| `--ease-lra-font` | `'Georgia', serif` | Font family for all text |
| `--ease-lra-bar-width` | `4px` | Width of the Art Deco left accent pillar |
| `--ease-lra-max-width` | `720px` | Maximum width of the accordion container |

**Example — custom indigo theme:**
```css
.my-accordion {
  --ease-lra-accent: #4f46e5;
  --ease-lra-ripple: rgba(79, 70, 229, 0.3);
  --ease-lra-header-bg: #f5f3ff;
  --ease-lra-header-hover-bg: #ede9fe;
  --ease-lra-item-border: #c4b5fd;
}
```

```jsx
<LiquidRippleAccordion items={items} className="my-accordion" />
```

## Accessibility

- Every header is a native `<button>` — fully keyboard navigable with `Tab`.
- `aria-expanded` toggles on the header button to announce open/closed state to screen readers.
- `aria-controls` / `aria-labelledby` link each header to its body panel.
- `disabled` items receive `aria-disabled` and the native `disabled` attribute.
- `prefers-reduced-motion: reduce` disables all transitions and hides the ripple animation, keeping the component fully functional as a static accordion.

## Why it fits EaseMotion CSS

EaseMotion CSS is animation-first. The Liquid Ripple effect is a direct implementation of that philosophy: the click spawns a CSS `@keyframes` animation (`ease-lra-ripple-spread`) at the exact pointer coordinates, creating a fluid, physical feedback loop between user and interface. The accordion collapse itself relies on a pure CSS `grid-template-rows: 0fr → 1fr` transition — no JS animation, no layout thrashing. Every timing, color, and sizing value is exposed as a CSS custom property, making this fully composable within any EaseMotion design system.
