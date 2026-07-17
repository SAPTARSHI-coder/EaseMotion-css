# React Accordion with Liquid Ripple (Monochrome Neo)

A React accordion component with a liquid ripple click transition, styled for Monochrome Neo interfaces.

## Props

| Prop            | Type      | Default | Description                                          |
|------------------|-----------|---------|-------------------------------------------------------|
| `items`          | `array`   | `[]`    | List of `{ title: string, content: node }` panel items |
| `allowMultiple`  | `boolean` | `false` | Allow multiple panels to stay open at once             |

## Usage

```jsx
import Accordion from "./Accordion";
import "./style.css";

const faqItems = [
  { title: "What is EaseMotion CSS?", content: "A curated animation framework." },
  { title: "Is it free to use?", content: "Yes, fully open source." },
];

function FAQ() {
  return <Accordion items={faqItems} allowMultiple={false} />;
}
```

## Why is this useful?

Accordions are a staple UI pattern for FAQs, settings panels, and docs. This component pairs a smooth height-based expand/collapse with a liquid ripple effect on click, giving Monochrome Neo interfaces a tactile, premium feel using only React state and CSS animations.
