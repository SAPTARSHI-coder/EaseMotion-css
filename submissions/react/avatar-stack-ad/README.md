# AvatarStack — overlapping avatar group

> Issue: [#61725](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/61725)

A React component rendering an overlapping avatar group that fans out on hover or focus, collapsing past a `max` count into a `+N` chip.

## Description

Shows up to `max` avatars with a consistent overlap and separating ring. Members without an image get generated initials in a deterministic colour. Hovering or focusing the row spreads the stack so individual avatars become distinguishable.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `members` | `Array<{ id?, name, src? }>` | `[]` | Member list. Renders `null` if empty. |
| `max` | `number` | `4` | Avatars shown before collapsing. Clamped to a minimum of 1. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Avatar diameter and overlap. |
| `fan` | `boolean` | `true` | Fan the stack out on hover/focus. |
| `label` | `string` | `'Team members'` | Accessible group label, prefixed to the spoken roster. |
| `className` | `string` | `''` | Merged onto the root. |

Any other props are spread onto the root element.

## Usage

```jsx
import AvatarStack from './AvatarStack';
import './style.css';

const team = [
  { id: 1, name: 'Priya Raghavan', src: '/avatars/priya.jpg' },
  { id: 2, name: 'Daniel Osei' },                    // renders "DO"
  { id: 3, name: 'Mara Lindqvist', src: '/avatars/mara.jpg' },
  { id: 4, name: 'Tomás Herrera' },
  { id: 5, name: 'Ana Silva' },
];

<AvatarStack members={team} max={4} size="md" label="Project members" />
// → four avatars + a "+1" chip
```

## Why it fits EaseMotion

**The accessibility problem this exists to solve:** an avatar stack that collapses to "+7" gives a screen reader user the number and nothing else. The seven people are visually present but semantically absent. Here the entire roster — including collapsed members — is always exposed as readable text, and the visual row (chip included) is `aria-hidden`. Avatar images carry `alt=""` because the name is already announced; duplicating it would read every member twice.

**Tone selection is deterministic**, hashed from the member's name rather than random. A given person keeps the same colour across renders and across pages. `Math.random()` would reshuffle on every render and make the list feel unstable.

**The fan is index-driven.** Each avatar translates by `--av-fan-ad × --av-index-ad`, so the stack genuinely spreads rather than every avatar sliding the same distance. It is transform-only, so it never triggers layout.

`z-index: calc(10 - var(--av-index-ad))` is required, not cosmetic — without it, DOM order makes later avatars stack *above* earlier ones, inverting the overlap direction and making the fan read backwards.

A `@media (hover: none)` guard disables the fan on touch devices, where there is no hover-out event and the spread would latch open on first tap. `prefers-reduced-motion` removes the fan entirely, and `forced-colors: active` swaps the ring shadow for a real border, since `box-shadow` is dropped in high-contrast mode.
