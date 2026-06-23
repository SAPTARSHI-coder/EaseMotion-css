# Tooltip Hover Delay Utilities

An isolated utility package delivering timing pacing tokens (`.ease-delay-*`) designed to prevent layout clutter and excessive structural repaints caused by quick cursor passes over active UI elements.

## Utility Roster API

- `.ease-delay-short`: Introduces a `150ms` delay gate. Perfect for actionable control buttons where prompt feedback is necessary but stray cursor glances should be muted.
- `.ease-delay-normal`: Introduces a standard `300ms` delay gate. Suited for general navigation headers and list icons.
- `.ease-delay-long`: Introduces a prominent `700ms` delay gate. Designed for data charts or complex dashboards where information tooltips should only trigger when a user deliberately halts their cursor.

## Technical Advantage
By constraining the delay exclusively to the `:hover` layer state, the tooltips fade away instantly (`transition-delay: 0s`) the moment the user moves their cursor off the element, keeping the interaction snap-responsive.

## Usage Layout Structure
```html

<div class="ease-tooltip-wrapper ease-delay-normal">
  <button>Hover Action Target</button>
  <div class="ease-tooltip-content">Informative string summary here.</div>
</div>
```

Closes #13256
