# AnimatedTabs

Tabs implementing the full WAI-ARIA tabs keyboard pattern, with a sliding
indicator that needs no measurement.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `tabs` | `Array<{ id?, label, content }>` | `[]` | Tab definitions. |
| `defaultIndex` | `number` | `0` | Initially selected tab. |
| `className` | `string` | `''` | Extra classes. |

## Usage

```jsx
import AnimatedTabs from './AnimatedTabs';
import './style.css';

<AnimatedTabs
  tabs={[
    { label: 'Overview', content: <p>Overview content</p> },
    { label: 'Engine', content: <p>Engine content</p> },
  ]}
/>
```

## Why it fits EaseMotion CSS

`core/tabs.js` manages tab state imperatively. This is the React equivalent, but
the part worth reusing is the keyboard implementation, which most tab components
get wrong.

The ARIA tabs pattern requires a *roving tabindex*: the tablist is one stop in the
page tab order, and arrow keys move between tabs within it. Components that leave
every tab at `tabIndex={0}` force a keyboard user to tab through all of them to
reach the panel, and screen readers announce the group incorrectly. Here only the
active tab has `tabIndex={0}`; the rest are `-1`, and Arrow, Home and End handle
movement.

The panel is `tabIndex={0}` so keyboard users can reach and scroll its content
after selecting a tab, and `useId` wires `aria-controls` and `aria-labelledby`
without the caller supplying ids.

The ink bar is positioned from `calc(var(--atb-i) * 100%)` against a grid of equal
columns, so it never calls `getBoundingClientRect` and stays aligned when the
container resizes or fonts load late.
