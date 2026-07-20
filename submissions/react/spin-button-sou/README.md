# Spin Button (React Component)

A reusable React `Button` component that leverages the EaseMotion CSS `ease-spin` utility class to display a spinning loader icon during asynchronous actions. Fully controlled, accessibility-aware, and framework-native.

---

## File

`Button.jsx`

---

## What It Does

`SpinButton` is a lightweight React wrapper around the native `<button>` element that:

- Renders an inline SVG spinner using the EaseMotion `ease-spin` utility class when `loading` is true.
- Automatically disables the button while loading (prevents duplicate submissions).
- Swaps the button label with a "Loading..." message for clear user feedback.
- Applies `ease-hover-lift` and `ease-transition` utility classes for a smooth idle interaction.
- Supports `variant`, `size`, and any native `<button>` attribute via prop spreading.

No custom CSS is required — all animations and transitions come from EaseMotion utility classes.

---

## Props Reference

| Prop        | Type                                       | Default      | Description                                                    |
| ----------- | ------------------------------------------ | ------------ | -------------------------------------------------------------- |
| `children`  | ReactNode                                  | `"Click Me"` | The button label content.                                      |
| `loading`   | boolean                                    | `false`      | When true, shows the spinner and disables the button.          |
| `variant`   | `"primary"` \| `"secondary"` \| `"ghost"`  | `"primary"`  | Visual style variant.                                          |
| `size`      | `"sm"` \| `"md"` \| `"lg"`                 | `"md"`       | Button size token.                                             |
| `type`      | `"button"` \| `"submit"` \| `"reset"`      | `"button"`   | Native HTML button type.                                       |
| `className` | string                                     | `""`         | Extra classes appended to the button.                          |
| `onClick`   | function                                   | `undefined`  | Click handler (ignored while `loading` or `disabled`).         |
| `disabled`  | boolean                                    | `false`      | Force the disabled state independently of `loading`.           |
| `...rest`   | any                                        | —            | Any additional native `<button>` attributes (aria-*, id, etc). |

---

## EaseMotion Utility Classes Used

- `ease-btn` — Base button class.
- `ease-btn-{variant}` — Variant modifier (primary, secondary, ghost).
- `ease-btn-{size}` — Size modifier (sm, md, lg).
- `ease-btn-loading` — Applied while loading.
- `ease-btn-icon` — Wrapper for the spinner icon.
- `ease-btn-label` — Wrapper for the text label.
- `ease-spin` — Rotates the child element continuously (the core utility this issue targets).
- `ease-hover-lift` — Subtle lift on hover.
- `ease-transition` — Smooth transitions for all animatable properties.

---

## Usage

Import the component and use it like any other React button:

    import React, { useState } from "react";
    import SpinButton from "./Button";

    export default function SaveForm() {
      const [saving, setSaving] = useState(false);

      const handleSave = async () => {
        setSaving(true);
        try {
          await fetch("/api/save", { method: "POST" });
        } finally {
          setSaving(false);
        }
      };

      return (
        <SpinButton
          loading={saving}
          variant="primary"
          size="lg"
          onClick={handleSave}
        >
          Save Changes
        </SpinButton>
      );
    }

### Additional Examples

    // Ghost variant, small size
    <SpinButton variant="ghost" size="sm" onClick={handleCancel}>
      Cancel
    </SpinButton>

    // Submit button in a form
    <SpinButton type="submit" loading={isSubmitting}>
      Submit
    </SpinButton>

    // Force-disabled without loading
    <SpinButton disabled>
      Not Available
    </SpinButton>

---

## Accessibility

- Sets `aria-busy={loading}` so assistive tech announces the loading state.
- Uses `aria-live="polite"` so status updates are announced without interrupting the user.
- The spinner has `role="status"` and `aria-label="Loading"` for screen reader clarity.
- The SVG spinner is marked `aria-hidden="true"` to avoid duplicate announcements.
- Disables click events while loading to prevent duplicate submissions.

---

## Why It Fits EaseMotion CSS

- **Utility-first:** Uses only EaseMotion utility classes — no custom CSS, no inline styles, no external animation libraries.
- **Composable:** Combines `ease-spin`, `ease-hover-lift`, and `ease-transition` cleanly to show how utilities layer together.
- **Framework-native:** Demonstrates the recommended pattern for wrapping EaseMotion utilities into a reusable React component.
- **Human-readable:** Class names describe intent (`ease-spin`, `ease-btn-loading`), matching EaseMotion's readability-first philosophy.

---

## Author

**soumyasekharshee265-ux**
