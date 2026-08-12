# EaseMotion React `<Animate>` Props Playground

An interactive React component submission that lets developers **experiment with all `<Animate>` wrapper props visually** — type, duration, delay, hover, tag, and className — with live preview and copy-ready JSX output.

> Submission track: `submissions/react/ease-animate-playground-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43350

---

## What does this do?

EaseMotion CSS ships a React `<Animate>` wrapper pattern in `examples/react-vite/`. This submission provides:

1. A production-ready **`Animate` component** that maps props to `ease-*` classes
2. An interactive **`AnimatePlayground`** UI to explore every prop combination
3. **Copy-ready JSX** for pasting into your own React projects

## Files

| File | Purpose |
|------|---------|
| `AnimatePlayground.jsx` | `Animate` wrapper + interactive playground (default export) |
| `style.css` | Playground layout styles |
| `README.md` | This document |

---

## Installation

```bash
npm install easemotion-css
```

Copy `AnimatePlayground.jsx` and `style.css` into your React project.

In your entry file:

```jsx
import 'easemotion-css/easemotion.min.css';
import './style.css'; /* playground styles, optional */
```

---

## Usage

### Use the playground component directly

```jsx
import AnimatePlayground from './AnimatePlayground';

function App() {
  return <AnimatePlayground />;
}
```

### Use only the Animate wrapper

```jsx
import { Animate } from './AnimatePlayground';

function Hero() {
  return (
    <Animate type="fade-in" delay={200} hover="grow">
      <div className="ease-card">Hello World</div>
    </Animate>
  );
}
```

### Staggered list (from README pattern)

```jsx
{['A', 'B', 'C'].map((item, i) => (
  <Animate key={item} type="slide-up" delay={i * 100} hover="lift">
    <div className="ease-card">{item}</div>
  </Animate>
))}
```

### Re-mount to replay animation

```jsx
<Animate key={isOpen ? 'open' : 'closed'} type="zoom-in" duration={300}>
  {isOpen && <Modal />}
</Animate>
```

---

## Props reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | — | Animation name (`fade-in`, `slide-up`, `zoom-in`, `bounce`, `spin`…) |
| `duration` | `'fast' \| 'medium' \| 'slow' \| number` | `'medium'` | Duration keyword or custom ms |
| `delay` | `number` | `0` | Delay in ms before animation starts |
| `hover` | `string` | — | Hover effect (`grow`, `lift`, `glow`, `shimmer`) |
| `tag` | `string` | `'div'` | HTML element to render |
| `className` | `string` | `''` | Additional CSS classes |

### Animation type mapping

| `type` prop | EaseMotion class |
|-------------|------------------|
| `fade-in` | `ease-fade-in` |
| `slide-up` | `ease-slide-up` |
| `zoom-in` | `ease-zoom-in` |
| `bounce` | `ease-bounce` |
| `spin` | `ease-rotate` |
| `pulse` | `ease-pulse` |
| `shake` | `ease-shake` |

---

## Playground features

- Interactive controls for all 6 props
- 4 quick presets (Hero, Staggered card, CTA button, Attention shake)
- Live animation preview with replay button
- Generated JSX with copy-to-clipboard
- Built-in props reference table

---

## Try with Vite (quick start)

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install easemotion-css
```

Replace `src/App.jsx` content:

```jsx
import 'easemotion-css/easemotion.min.css';
import AnimatePlayground from './AnimatePlayground';
import './style.css';

export default function App() {
  return <AnimatePlayground />;
}
```

Copy `AnimatePlayground.jsx` and `style.css` into `src/`, then:

```bash
npm run dev
```

---

## Compliance notes

- Only **new files** inside `submissions/react/`.
- Uses official `easemotion-css` package — no core edits.
- Folder name carries unique contributor suffix `-sp`.
