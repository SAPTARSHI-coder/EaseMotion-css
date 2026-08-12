# React Animated Stepper / Progress Wizard (#22931)

This submission fulfills Issue **#22931** by delivering a polished 4-step progress wizard that leverages EaseMotion CSS for every state transition.

## Animation Inventory

| Element | EaseMotion / CSS Technique | When |
|---------|---------------------------|------|
| Progress bar fill | CSS `width` transition with `cubic-bezier` | Every step navigation |
| Step node completion | `.ease-pulse` temporary class | When a step is completed |
| Active step ring | `.ease-fade-in` + `box-shadow` glow | On step activation |
| Step panel (forward) | `.ease-slide-up .ease-fade-in` | Navigating Next → |
| Step panel (backward) | `.ease-fade-in .ease-duration-normal` | Navigating ← Back |
| Success screen | `.ease-slide-up .ease-fade-in .ease-duration-slow` | After Submit |

## Architecture Highlights

### Animated Progress Rail (`<StepRail>`)
A gradient `div` underneath all step nodes grows its `width` via a CSS transition each time `current` changes: `width = (current / (total-1)) × 100%`. No JavaScript timers or animation loops — pure React state → CSS transition.

### Direction-Aware Panel Slide
`direction` is set to `'forward'` or `'backward'` before each navigation. The panel re-mounts via a `panelKey` increment (forcing React to create a fresh DOM node), which guarantees the entry animation fires cleanly regardless of direction.

### Step Node Pulse
When a step is completed, `completedPulse` is set to that step index, briefly applying `.ease-pulse` to the node. A `setTimeout` clears it 700 ms later, letting it settle into the ✔ state.

### Review Step
Step 4 renders a live summary of all form data entered in previous steps, demonstrating state lifting into the wizard root.

## How to View
Double-click `demo.html` — React 18 + Babel via CDN, **no build step required**.

**Tip:** Navigate forward through all 4 steps then click "Submit" to see the full success animation burst.
