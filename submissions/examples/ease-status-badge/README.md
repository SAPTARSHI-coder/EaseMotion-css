# Status Badge (`ease-status-badge`)

Small, animated status indicator badges used to represent user availability states (Online, Away, Busy, Offline). Built for the EaseMotion-css framework.

## 🚀 Features

- **Four Distinct Personalities**:
  - `ease-status-online`: Green with a gentle `ease-ping` ripple effect.
  - `ease-status-away`: Yellow with a slow, breathing pulse.
  - `ease-status-busy`: Red with a fast, urgent pulse.
  - `ease-status-offline`: Gray with no animation.
- **Customizable Size**: Control the size of the badge using the `--ease-status-size` CSS variable.
- **Avatar Cutout**: Built-in box-shadow matches the background to provide a seamless "cutout" effect when placed overlapping an avatar.

## 🛠️ Usage

To use the component, create an empty `<div>` or `<span>` and apply the base class `.ease-status-badge` alongside the desired status class.

```html
<!-- Online -->
<div class="ease-status-badge ease-status-online"></div>

<!-- Away -->
<div class="ease-status-badge ease-status-away"></div>

<!-- Busy (Do Not Disturb) -->
<div class="ease-status-badge ease-status-busy"></div>

<!-- Offline -->
<div class="ease-status-badge ease-status-offline"></div>
