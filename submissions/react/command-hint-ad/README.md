# CommandHint — command palette hint rows

> Issue: [#63565](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63565)

Hint rows pairing an action label with its keyboard shortcut, for command palettes, empty states and help footers.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array<{ label, keys }>` | `[]` | Hint rows. Entries without a `label` are skipped. Renders `null` if none remain. |
| `heading` | `string` | — | Optional group heading, wired to the list via `aria-labelledby`. |
| `size` | `'sm' \| 'md'` | `'md'` | Label and cap size. |
| `isApple` | `boolean` | auto-detected | Override platform detection. Pass when server-rendering. |
| `className` | `string` | `''` | Merged onto the root. |

Recognised key tokens: `mod` · `shift` · `alt` · `ctrl` · `enter` · `esc` · `tab` · `up` · `down`. Anything else is a literal key.

## Usage

```jsx
import CommandHint from './CommandHint';
import './style.css';

<CommandHint
  heading="Shortcuts"
  items={[
    { label: 'Open command palette', keys: ['mod', 'k'] },
    { label: 'Search', keys: ['mod', 'shift', 'f'] },
    { label: 'Dismiss', keys: ['esc'] },
  ]}
/>
```

## Why it fits EaseMotion

**The markup is a description list, and that is the whole point.** The obvious choice is a grid of divs or a `<table>`, but a hint list is semantically `<dl>`: each shortcut *describes* an action. With `<dt>`/`<dd>` a screen reader announces the pairing — "Search, Command plus Shift plus F" — whereas a div grid is read as two unrelated columns top to bottom, leaving the listener to reassemble which key belongs to which action.

Shortcut glyphs sit inside the `<dd>` with an accessible text form alongside, because the symbol characters (⌘, ⇧, ⌥) are frequently announced as nothing at all. The visual caps are `aria-hidden`; the spoken form carries the meaning.

`mod` resolves to ⌘ on Apple platforms and Ctrl elsewhere, so one definition is correct on both. Detection prefers `navigator.userAgentData.platform` over the deprecated `navigator.platform`, is guarded for `navigator` being undefined under SSR, and `isApple` is exposed so server-rendered output can match the client.

Labels truncate with an ellipsis rather than wrapping. A wrapped label pushes its keys onto a second line and visually breaks the pairing the `<dl>` is there to express.
