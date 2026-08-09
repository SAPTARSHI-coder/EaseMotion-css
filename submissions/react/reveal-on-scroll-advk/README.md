# RevealOnScroll

A wrapper component that applies an EaseMotion entrance class when its content
scrolls into view.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Content to reveal. |
| `animation` | `string` | `'ease-slide-up'` | EaseMotion entrance class applied on reveal. |
| `threshold` | `number` | `0.2` | Fraction of the element visible before revealing. |
| `once` | `boolean` | `true` | Reveal once, or re-hide when scrolled back out. |
| `delay` | `number` | `0` | `animation-delay` in ms, for staggering siblings. |
| `as` | `elementType` | `'div'` | Element or component to render. |
| `className` | `string` | `''` | Extra classes. |

## Usage

```jsx
import RevealOnScroll from './RevealOnScroll';

<RevealOnScroll animation="ease-fade-in">
  <h2>Zero dependencies</h2>
</RevealOnScroll>

{items.map((item, i) => (
  <RevealOnScroll key={item.id} as="li" delay={i * 80}>
    {item.label}
  </RevealOnScroll>
))}
```

## Why it fits EaseMotion CSS

This is the React binding for a pattern EaseMotion already ships as
`core/reveal.js`, but expressed as a component so the animation choice becomes a
prop instead of a data attribute. It applies the framework's own `ease-*` classes
rather than inventing new animation CSS, so any entrance utility works as a value.

The important detail is the fallback. Reveal-on-scroll patterns hide content up
front and only show it once an observer fires, which means a browser or
environment without `IntersectionObserver` leaves the content permanently
invisible — a total content failure rather than a missing flourish. Here, absent
observer support the component sets its shown state immediately, so the content
is always reachable.

`delay` exists so a list can stagger without each item needing its own animation
class, mirroring the `--i` custom-property approach used elsewhere in the
framework's submissions.
