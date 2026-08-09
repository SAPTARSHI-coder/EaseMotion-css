# Kbd — keyboard shortcut hint

> Issue: [#61723](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/61723)

A React component that renders keyboard shortcuts as styled key caps, with platform-aware modifiers and a screen-reader-readable label.

## Description

Takes a list of key tokens and renders one `<kbd>` cap per key. The `mod` token resolves to ⌘ on Apple platforms and Ctrl elsewhere, so a single shortcut definition is correct on both without branching at the call site.

The visual caps are `aria-hidden`, and the full shortcut is exposed separately as one readable string. A row of bare `<kbd>` elements is otherwise announced as disconnected glyphs — and symbol characters like ⌘ or ⇧ frequently read as nothing at all.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `keys` | `string[]` | `[]` | Key tokens, e.g. `['mod', 'shift', 'p']`. Renders `null` if empty. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Cap size. |
| `separator` | `boolean` | `false` | Render a `+` between caps. |
| `isApple` | `boolean` | auto-detected | Override platform detection. Pass explicitly when server-rendering. |
| `className` | `string` | `''` | Additional classes, merged onto the root. |

Any other props are spread onto the root element.

## Recognised tokens

`mod` · `cmd` · `ctrl` · `alt` · `shift` · `enter` · `esc` · `tab` · `space` · `backspace` · `up` · `down` · `left` · `right`

Anything else is treated as a literal key — single characters are uppercased for display.

## Usage

```jsx
import Kbd from './Kbd';
import './style.css';

function CommandPalette() {
  return (
    <div>
      <button type="button">
        Open palette <Kbd keys={['mod', 'k']} size="sm" />
      </button>

      <p>Save the document with <Kbd keys={['mod', 's']} separator /></p>
      <p>Dismiss with <Kbd keys={['esc']} /></p>
    </div>
  );
}
```

### Server-side rendering

Platform detection reads `navigator`, which does not exist on the server. The component guards for this and defaults to the non-Apple glyphs, but that means the server and client can render different markup and React will warn about a hydration mismatch. Pass `isApple` explicitly if you render on a server:

```jsx
<Kbd keys={['mod', 'k']} isApple={userAgentIsApple} />
```

## Why it fits EaseMotion

Styling is entirely class-based — no CSS-in-JS and no runtime style injection — so it composes with the rest of the framework and can be restyled through the `--kbd-*` custom properties without touching the component.

The press affordance is driven by `button:active .ease-kbd-ad__cap` rather than component state. The caps depress when the button documenting them is pressed, which is the behaviour you actually want, and it costs no re-renders.

Platform detection prefers `navigator.userAgentData.platform` over the deprecated and increasingly frozen `navigator.platform`, falling back only when the modern API is unavailable. `prefers-reduced-motion` removes the press translation, and `forced-colors: active` gives caps system colours.
