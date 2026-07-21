# Elastic Slide Crypto Card

A React card component built for cryptocurrency exchange layouts. On hover, the front face (coin name + icon) performs an elastic slide-out transition while the back face (price + % change) slides in, using an overshoot `cubic-bezier` curve for a springy, elastic feel.

## Preview

- **Front face:** coin icon, name, symbol
- **Back face:** current price, % change (green for gains, red for losses)
- **Interaction:** hover triggers an elastic horizontal slide transition between faces

## Usage

```jsx
import ElasticSlideCard from "./ElasticSlideCard";

function App() {
  return (
    <ElasticSlideCard
      coinName="Ethereum"
      coinSymbol="ETH"
      price="$3,482.10"
      change="+4.12%"
      isPositive={true}
      icon="⟠"
    />
  );
}

export default App;
```

## Props

| Prop         | Type      | Default        | Description                                      |
|--------------|-----------|----------------|---------------------------------------------------|
| `coinName`   | `string`  | `"Bitcoin"`    | Full name of the cryptocurrency                   |
| `coinSymbol` | `string`  | `"BTC"`        | Ticker symbol shown on the front face             |
| `price`      | `string`  | `"$67,240.55"` | Current price displayed on the back face          |
| `change`     | `string`  | `"+2.34%"`     | Price change percentage displayed on the back face|
| `isPositive` | `boolean` | `true`         | Controls green/red styling of the change value    |
| `icon`       | `string`  | `"🪙"`         | Emoji or icon rendered on the front face          |

## EaseMotion Classes Used

- `ease-fade-in` — fades and slides the card in on mount
- `ease-hover-lift` — lifts the card with a shadow on hover

## Notes

- Fully self-contained; only depends on `style.css` in the same folder.
- Colors and sizing can be adjusted directly in `style.css` to match a project's theme.