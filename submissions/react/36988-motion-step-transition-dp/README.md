# MotionStepTransition

## Overview

MotionStepTransition is a lightweight React component that coordinates
directional transitions between an ordered set of steps, such as a
multi-step wizard or form. It compares the newly active step against
the previously active one, determines whether navigation moved forward
or backward, and applies the corresponding existing EaseMotion CSS
animation class to the step being shown.

The problem it solves is the repetitive comparison logic that
multi-step interfaces almost always need: knowing whether the user
just clicked "Next" or "Previous" so the transition direction matches
their action, rather than always playing the same animation regardless
of navigation direction. Implementing this correctly usually means
tracking previous step state and computing the direction by hand in
every wizard-like component that needs it.

MotionStepTransition coordinates existing EaseMotion CSS animation
classes only — it never defines, generates, or inspects keyframes
itself. It simply decides whether `forwardClass` or `backwardClass`
should be applied to the currently active step, keeping the whole
approach CSS-first and leaving all actual motion to CSS.

## Props

| Prop            | Type       | Default | Description                                                                |
| --------------- | ---------- | ------- | -------------------------------------------------------------------------- |
| `children`      | `node`     | —       | An ordered list of step elements.                                          |
| `activeStep`    | `number`   | —       | Index of the currently active step.                                        |
| `forwardClass`  | `string`   | —       | CSS animation class applied when moving to a higher step index.            |
| `backwardClass` | `string`   | —       | CSS animation class applied when moving to a lower step index.             |
| `className`     | `string`   | `""`    | Additional class name(s) applied to the wrapper element.                   |
| `as`            | `string`   | `"div"` | Element type used for the wrapper.                                         |
| `keepMounted`   | `bool`     | `false` | If `true`, keeps inactive steps mounted (hidden) instead of removing them. |
| `onStepChange`  | `function` | —       | Called with `(activeStep, previousStep)` whenever the active step changes. |

## Example Usage

```jsx
import { useState } from "react";
import MotionStepTransition from "./component";
import "./style.css";

export default function Wizard() {
  const [step, setStep] = useState(0);
  const totalSteps = 3;

  return (
    <div className="motion-step-transition-page">
      <div className="motion-step-transition-wizard">
        <MotionStepTransition
          activeStep={step}
          forwardClass="slide-left"
          backwardClass="slide-right"
          keepMounted
        >
          <div className="motion-step-transition-card">
            <h3 className="motion-step-transition-card__title">Step One</h3>
            <p className="motion-step-transition-card__description">
              Basic information.
            </p>
          </div>
          <div className="motion-step-transition-card">
            <h3 className="motion-step-transition-card__title">Step Two</h3>
            <p className="motion-step-transition-card__description">
              Preferences.
            </p>
          </div>
          <div className="motion-step-transition-card">
            <h3 className="motion-step-transition-card__title">Step Three</h3>
            <p className="motion-step-transition-card__description">
              Confirmation.
            </p>
          </div>
        </MotionStepTransition>

        <div className="motion-step-transition-progress">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <span
              key={index}
              className={`motion-step-transition-progress__dot ${
                index === step
                  ? "motion-step-transition-progress__dot--active"
                  : ""
              }`}
            />
          ))}
        </div>

        <div className="motion-step-transition-controls">
          <button
            className="motion-step-transition-button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
          >
            Previous
          </button>
          <button
            className="motion-step-transition-button"
            onClick={() => setStep((s) => Math.min(totalSteps - 1, s + 1))}
            disabled={step === totalSteps - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
```

## Why MotionStepTransition?

Multi-step interfaces — onboarding flows, checkout forms, setup
wizards — almost always need directional motion: moving forward should
feel like progressing, and moving backward should feel like retreating,
using opposite transition directions. Every wizard-like component ends
up needing the same piece of logic to detect which direction the user
just navigated, yet this comparison is rarely extracted into something
reusable.

Manually comparing the previous step to the current one, storing that
comparison in state, and re-deriving it on every step change is
boilerplate that gets copy-pasted between forms, tours, and carousels
throughout a codebase. It is also easy to get subtly wrong — for
example, forgetting to update the "previous step" reference at the
right time, causing the direction to be calculated incorrectly on
rapid navigation.

MotionStepTransition centralizes this comparison in one place: it
tracks the previous step with a ref, calculates direction on every
`activeStep` change, and applies the correct animation class
automatically, while optionally keeping inactive steps mounted (but
hidden) for cases where remounting would lose internal state. Any
step-based component can adopt this behavior without re-implementing
the same forward/backward detection logic each time.

MotionStepTransition fits EaseMotion CSS's philosophy directly: it
introduces no animation engine, no keyframe generation, and no
stylesheet inspection. It only decides which of two existing CSS
animation classes should be applied based on navigation direction,
leaving all actual motion defined in CSS and keeping the whole system
CSS-first.
