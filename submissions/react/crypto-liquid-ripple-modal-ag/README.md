# Crypto Liquid Ripple Modal (React Component)

A React-integrated dialog component utilizing a smooth **Liquid Ripple** reveal interaction transition, tailored for **Cryptocurrency Exchange** dashboards.

## Features

- **Liquid Ripple reveal**: The modal expands dynamically as a circular ripple starting exactly from the user's cursor click position.
- **Crypto Exchange UI**: Styled token inputs (ETH, USDC), calculated swap balances, simulated transaction submissions, slippage settings, and gas estimations.
- **Keyboard accessibility**: Capture focus trapping, focus restoration on unmount, and keyboard `Escape` closing loops.
- **Motion parameterization**: Configuration speed and coordinate variables are exposed via CSS custom properties.

---

## Props Reference

| Prop Name       | Type       | Required | Default                   | Description                                                                     |
| :-------------- | :--------- | :------- | :------------------------ | :------------------------------------------------------------------------------ |
| `isOpen`        | `boolean`  | **Yes**  | —                         | Controls modal display visibility.                                              |
| `onClose`       | `function` | **Yes**  | —                         | Callback fired when the user click close triggers or presses `Escape`.          |
| `triggerCoords` | `object`   | No       | `null`                    | Coordinate offsets `{ x, y }` of the click trigger to center the liquid ripple. |
| `title`         | `string`   | No       | `"Swap Assets"`           | Header title text displayed in the dialog overlay.                              |
| `gasFee`        | `string`   | No       | `"$2.40"`                 | Simulated network gas fee text descriptor.                                      |
| `exchangeRate`  | `string`   | No       | `"1 ETH = 3,450.00 USDC"` | Trade exchange rate calculation string.                                         |

---

## Usage Example

Import the component, its supplementary CSS file, and bind the cursor coordinates on button triggers:

```jsx
import React, { useState } from "react";
import CryptoLiquidRippleModal from "./CryptoLiquidRippleModal";
import "./style.css";

export default function ExchangePanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState(null);

  const handleOpen = (e) => {
    // Compute cursor offset relative to the trigger button boundary box
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoords({ x, y });
    setIsOpen(true);
  };

  return (
    <div className="exchange-dashboard">
      <button className="crypto-submit-btn" onClick={handleOpen}>
        Initialize Swap
      </button>

      <CryptoLiquidRippleModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        triggerCoords={coords}
        title="Swap Exchange Core"
        gasFee="$1.95"
        exchangeRate="1 ETH = 3,510.50 USDC"
      />
    </div>
  );
}
```
