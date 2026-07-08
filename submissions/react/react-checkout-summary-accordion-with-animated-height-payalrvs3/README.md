# React Checkout Summary Accordion with Animated Height

A collapsible order-summary panel for checkout pages. The header always shows the total, and expands to reveal the itemized breakdown with a smooth, JS-free height animation.

## Features

- **CSS-driven height animation** - uses `grid-template-rows: 0fr → 1fr` instead of measuring `scrollHeight`, so there's no layout-thrashing re-render and the animation stays correct even if `items` changes while the panel is open.
- **EaseMotion CSS utility classes** - `ease-fade-in` on mount, `ease-hover-lift` on the toggle, `ease-hover-glow` on the checkout button.
- **Total is always derived from `items`** unless you pass an explicit `total` override, so the header and footer can never disagree with the line items.
- **Accessible by default** - real `<button>` toggle, `aria-expanded`, `aria-controls` linked via `useId()` (unique per instance, so multiple accordions on one page never collide), `aria-hidden` on the collapsed panel.
- **Scoped class names** (`csa-*`) so it won't collide with other copy-pasted components in the same app.
- Zero external dependencies - just React.

## Props

| Prop          | Type                                  | Default                      | Description                                                                                                                             |
| ------------- | -------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`       | `string`                               | `"Order Summary"`             | Header label.                                                                                                                             |
| `items`       | `{ label: string, value: number }[]`   | 4 example rows                | Line items. A negative `value` is treated as a discount and styled with the success color.                                                |
| `total`       | `number`                               | *(derived from `items`)*      | Optional override for the total. Use this if the total is calculated server-side and shouldn't be re-derived from the visible line items. |
| `currency`    | `string`                               | `"$"`                          | Prefix applied to every formatted amount.                                                                                                |
| `defaultOpen` | `boolean`                              | `false`                        | Whether the panel starts expanded.                                                                                                       |
| `onCheckout`  | `() => void`                           | `undefined`                    | If provided, a "Proceed to Checkout" button renders inside the panel and calls this on click. Omit it to use the component as a pure summary display. |

## Usage

\`\`\`jsx
import CheckoutSummaryAccordion from "./CheckoutSummaryAccordion";

function App() {
  return (
    <CheckoutSummaryAccordion
      items={[
        { label: "Subtotal", value: 84.5 },
        { label: "Shipping", value: 6.0 },
        { label: "Tax", value: 7.24 },
        { label: "Promo code", value: -10 },
      ]}
      currency="$"
      onCheckout={() => console.log("proceeding to payment...")}
    />
  );
}

export default App;
\`\`\`

Used with no props at all, `<CheckoutSummaryAccordion />` renders a self-contained demo with example line items, which is convenient for previewing it in isolation.

## Dependencies

`ease-fade-in`, `ease-hover-lift`, and `ease-hover-glow` are provided by EaseMotion CSS's core stylesheet. Everything else in `style.css` is scoped to this component and has no external requirements.

## Component Structure

\`\`\`
react-checkout-summary-accordion-with-animated-height-payalrvs3/
├── CheckoutSummaryAccordion.jsx
├── style.css
└── README.md
\`\`\`

## Browser Support

Built on CSS Grid (`grid-template-rows`) and the `useId` hook (React 18+), both fully supported in current Chrome, Firefox, Edge, and Safari.

## License

MIT