# Elastic Tooltip — Sci-Fi Console Style

A React tooltip component with a smooth **elastic slide** show/hide
transition, styled for Sci-Fi Console interfaces (glowing edges, angular
HUD-style corner brackets, monospace readout text).

Addresses issue **#38629 — "React: Add React Tooltip Component with Elastic
Slide for Sci-Fi Console Layouts."**

## Built with EaseMotion CSS

This component composes existing EaseMotion CSS utility classes rather than
introducing new core framework behavior:

| EaseMotion class      | Role in this component                                   |
|------------------------|-----------------------------------------------------------|
| `ease-fade-in`          | Base entrance opacity transition on the tooltip bubble   |
| `ease-hover-grow`       | Subtle scale feedback on the trigger element on hover     |
| `ease-duration-fast`    | Snappy base timing for the show/hide transition           |

The "elastic slide" motion (the bounce-back overshoot as the tooltip
appears/disappears) is implemented with an inline `cubic-bezier(0.34, 1.56,
0.64, 1)` transform timing function layered on top of these classes, since
EaseMotion's stock entrance classes are opacity/translate based rather than
spring/elastic based. No core EaseMotion files were modified.

## Files

| File | Purpose |
|---|---|
| `Tooltip.jsx` | The React component. |
| `style.css` | Sci-Fi console visual treatment (glow, corner brackets, monospace). Optional — the component works without it, just without the HUD styling. |
| `README.md` | This file. |

## Usage

```jsx
import Tooltip from './Tooltip';
import './style.css'; // optional, for the sci-fi console visual treatment

export default function ConsolePanel() {
  return (
    <Tooltip content="Reactor output: 87%" position="top">
      <button className="ease-btn ease-btn-primary">Reactor Status</button>
    </Tooltip>
  );
}
```

### Multiple positions

```jsx
<Tooltip content="Shield integrity: 42%" position="right">
  <span className="ease-badge">SHIELD</span>
</Tooltip>
```

## Props

| Prop        | Type                                          | Default   | Description                                                                 |
|-------------|------------------------------------------------|-----------|-------------------------------------------------------------------------------|
| `content`   | `React.ReactNode`                              | —         | The tooltip's content. **Required.**                                         |
| `children`  | `React.ReactNode`                              | —         | The trigger element the tooltip is attached to. **Required.**               |
| `position`  | `'top' \| 'bottom' \| 'left' \| 'right'`        | `'top'`   | Which side of the trigger the tooltip appears on.                            |
| `delay`     | `number` (ms)                                  | `120`     | Duration of the elastic slide transition in milliseconds.                    |
| `offset`    | `number` (px)                                  | `10`      | Gap in pixels between the trigger element and the tooltip bubble.            |
| `className` | `string`                                       | `''`      | Additional class names applied to the tooltip bubble for further styling.    |

## Accessibility

- The tooltip bubble uses `role="tooltip"` and is linked to the trigger via
  `aria-describedby`.
- Visibility is toggled on both mouse (`onMouseEnter` / `onMouseLeave`) and
  keyboard focus (`onFocus` / `onBlur`) events, so keyboard-only users can
  reach tooltip content.

## Notes for reviewer

- Folder placed under `submissions/react/elastic-tooltip-sci-fi/` per the
  React track rules in the issue.
- No files outside `submissions/react/` were modified.
- `style.css` is optional/decorative; the component is functional and
  accessible without it.
