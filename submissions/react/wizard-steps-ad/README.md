# WizardSteps — multi-step progress indicator

> Issue: [#63820](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63820)

A step indicator where state is carried by shape as well as colour, and exposed structurally rather than only visually.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `steps` | `Array<{ id, label, description? }>` | `[]` | Steps. Renders `null` if empty. |
| `current` | `number` | `0` | Zero-based active index. Clamped to range. |
| `onStepClick` | `(index, step) => void` | — | Enables navigation back to completed steps. |
| `allowBackNav` | `boolean` | `true` | Whether completed steps are clickable. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | |
| `label` | `string` | `'Progress'` | Accessible nav name. |
| `className` | `string` | `''` | Merged onto the root. |

## State markers

| State | Marker | Colour |
|---|---|---|
| Complete | `✓` | green |
| Current | `●` | accent |
| Upcoming | step number | muted |

## Usage

```jsx
import WizardSteps from './WizardSteps';
import './style.css';

<WizardSteps
  current={step}
  onStepClick={(i) => setStep(i)}
  steps={[
    { id: 'details', label: 'Details' },
    { id: 'payment', label: 'Payment', description: 'Card or transfer' },
    { id: 'review', label: 'Review' },
  ]}
/>
```

## Why it fits EaseMotion

**State is carried by shape, not only colour.** A green circle and a grey circle are the same circle to a user with deuteranopia. Completed steps show a check, the current step a filled dot, upcoming steps their number — so the progression is legible in greyscale and in print.

**Progress is exposed structurally.** `aria-current="step"` marks the active step, and each step's accessible name includes its position and state: "Step 2 of 4, Payment, current" rather than just "Payment". Styling alone tells assistive tech nothing at all.

**Only navigable steps are buttons.** Rendering every step as a button and ignoring clicks on future ones is the usual shortcut, and it means a keyboard user tabs through controls that do nothing when activated — which is worse than not being able to reach them. Non-navigable steps are plain elements and are not tab stops.

For those non-navigable steps the accessible name is a **visually-hidden text node**, not an `aria-label` on a span. `aria-label` is only reliably honoured on elements with a widget or landmark role; on a generic span, support varies. An initial draft used `role="text"` for this, which is a Safari-only quirk rather than a real ARIA role.

The connector line is drawn per step and skipped on the last one, so it does not trail off the end of the track — and a completed step's outgoing connector is filled, which makes the line read as a progress track rather than a static divider.
