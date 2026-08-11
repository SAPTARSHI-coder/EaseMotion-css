# Ease Thumb Drive Status

An animated USB thumb drive status indicator, cycling through connect, transfer, and safe-to-eject states.

## What does this do?
Displays a USB icon that changes color and animation based on drive status: Disconnected, Connected, Transferring (with a pulsing ring), and Safe to Eject.

## How is it used?
Open `demo.html` and click the button to step through each state — the icon color, pulse animation, and status text update accordingly.

```html
<div class="ease-thumb-icon ease-thumb-transferring">
  <svg>...</svg>
  <span class="ease-thumb-pulse-ring"></span>
</div>
```

## Why is it useful?
A common UI pattern for file transfer / device status indicators, using lightweight CSS-only animation (pulse ring) to convey activity — fitting EaseMotion's animation-first philosophy.
