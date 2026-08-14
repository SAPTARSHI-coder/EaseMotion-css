# LiveRegion — announcement channel

> Issue: [#63572](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63572)

An announcement primitive for async state changes that would otherwise be silent to screen readers.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `message` | `string` | `''` | Message to announce. Re-announces even if identical to the previous one. |
| `politeness` | `'polite' \| 'assertive'` | `'polite'` | `assertive` interrupts; `polite` waits for a pause. |
| `visible` | `boolean` | `false` | Render the text visibly as well as announcing it. |
| `clearAfter` | `number` | — | Auto-clear after N ms. |
| `className` | `string` | `''` | Merged onto the root. |

## `useAnnounce()`

Imperative helper for code that is not rendering a component:

```jsx
const [message, announce] = useAnnounce();

async function save() {
  await api.save();
  announce('Changes saved');
}

return <><LiveRegion message={message} /> …</>;
```

## Usage

```jsx
import LiveRegion, { useAnnounce } from './LiveRegion';
import './style.css';

<LiveRegion message={status} politeness="polite" clearAfter={5000} />
<LiveRegion message={error} politeness="assertive" />
```

## Why it fits EaseMotion

Live regions look trivial and have two failure modes that make them silently useless.

**Identical consecutive messages are not re-announced.** Screen readers diff the region's content, so setting "Saved" twice in a row speaks once — a user saving repeatedly hears nothing after the first time, and reasonably concludes the action failed. This clears the region first, then writes the message on a later tick so the diff registers as a real change.

The clear/set cycle uses a **double** `requestAnimationFrame`. A single frame can be batched into one paint, leaving the empty state never actually committed to the DOM — so the diff is missed and the fix does nothing. Two frames guarantee the empty state lands before the message.

**A region mounted at the same time as its message is often missed entirely.** The element has to already exist in the accessibility tree when the content changes. The wrapper is therefore always rendered and only its text content varies — never conditionally mounted.

Two supporting details. The hidden style is the 1px clip pattern, **not `display: none`** — a `display: none` live region is removed from the accessibility tree and never announces anything at all, which is the most common way these are broken. And `aria-atomic="true"` makes the whole message read as a unit rather than only the changed words, which otherwise produces fragments like "saved" instead of "Changes saved".

`role` and `aria-live` are both set, since some older assistive-tech combinations honour only one.
