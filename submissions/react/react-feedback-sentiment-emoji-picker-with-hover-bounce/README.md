# FeedbackSentimentEmojiPicker

A production-quality, accessible, and premium React component for collecting user feedback sentiments. It features staggered spring-like entrance kinetics, interactive hover bounces, sibling dimming visual focus, and full keyboard navigation.

---

## Overview

`FeedbackSentimentEmojiPicker` is built for modern React applications. It encapsulates advanced interactive dynamics utilizing standard **EaseMotion CSS** design tokens.

Key features include:

- **タクタイル Physics (TACTILE Physics)**: Compound spring-like scale and translation on hover using cubic-bezier curves.
- **Roving Focus & Accessibility (WCAG AA)**: Fully compliant keyboard navigation (Arrows, Home, End), focus outlines, and semantic radio configurations.
- **Sibling Dimming**: Dimming and grayscaling of unselected emojis when a choice is made to emphasize user selection.
- **Self-contained CSS**: Styles are embedded directly within the component for single-file copy-paste ease.

---

## Installation

Simply copy `FeedbackSentimentEmojiPicker.jsx` into your component folder (e.g. `components/FeedbackSentimentEmojiPicker.jsx`) and ensure EaseMotion variables are imported or defined in your CSS build.

```javascript
import FeedbackSentimentEmojiPicker from "./FeedbackSentimentEmojiPicker";
```

---

## Usage

Here is a quick startup example utilizing the component as a rating widget:

```jsx
import React from "react";
import FeedbackSentimentEmojiPicker from "./FeedbackSentimentEmojiPicker";

function App() {
  const handleFeedback = (sentimentId) => {
    console.log("Selected feedback ID:", sentimentId);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h3>How would you rate your experience today?</h3>
      <FeedbackSentimentEmojiPicker onChange={handleFeedback} />
    </div>
  );
}

export default App;
```

---

## Props Table

| Prop Name        | Type                   | Default               | Description                                                            |
| :--------------- | :--------------------- | :-------------------- | :--------------------------------------------------------------------- |
| `selected`       | `string`               | `undefined`           | Controlled value of the selected option. Activates controlled mode.    |
| `defaultValue`   | `string`               | `null`                | Uncontrolled initial value.                                            |
| `onChange`       | `(id: string) => void` | `undefined`           | Callback function fired when selection changes.                        |
| `disabled`       | `boolean`              | `false`               | Disables interaction and animations for all buttons.                   |
| `size`           | `"sm" \| "md" \| "lg"` | `"md"`                | Sizing variant. Controls padding, button dimensions, and text size.    |
| `showLabels`     | `boolean`              | `true`                | Toggles whether textual labels are shown under the emojis.             |
| `className`      | `string`               | `""`                  | Additional CSS class names to apply to the container.                  |
| `style`          | `object`               | `{}`                  | Inline CSS styles for custom container positioning.                    |
| `animationClass` | `string`               | `"ease-hover-bounce"` | CSS class that triggers the hover bounce. Defaults to built-in styles. |

---

## Examples

### Controlled Component

Manage the sentiment state inside the parent component.

```jsx
import React, { useState } from "react";
import FeedbackSentimentEmojiPicker from "./FeedbackSentimentEmojiPicker";

function ControlledExample() {
  const [value, setValue] = useState("satisfied");

  return (
    <div>
      <p>
        Current Sentiment: <strong>{value}</strong>
      </p>
      <FeedbackSentimentEmojiPicker
        selected={value}
        onChange={(id) => setValue(id)}
      />
    </div>
  );
}
```

### Uncontrolled Component

Let the component manage its own selection state, using `defaultValue` for hydration.

```jsx
import React from "react";
import FeedbackSentimentEmojiPicker from "./FeedbackSentimentEmojiPicker";

function UncontrolledExample() {
  return (
    <FeedbackSentimentEmojiPicker
      defaultValue="neutral"
      onChange={(id) => console.log("Selected:", id)}
    />
  );
}
```

### Disabled State

Locks all options, grayscales them, and disables hover transformations.

```jsx
import React from "react";
import FeedbackSentimentEmojiPicker from "./FeedbackSentimentEmojiPicker";

function DisabledExample() {
  return (
    <FeedbackSentimentEmojiPicker
      defaultValue="very-satisfied"
      disabled={true}
    />
  );
}
```

### Custom Size

Available in three distinct sizing options: `"sm"`, `"md"`, and `"lg"`.

```jsx
import React from "react";
import FeedbackSentimentEmojiPicker from "./FeedbackSentimentEmojiPicker";

function SizeExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <FeedbackSentimentEmojiPicker size="sm" defaultValue="neutral" />
      <FeedbackSentimentEmojiPicker size="md" defaultValue="neutral" />
      <FeedbackSentimentEmojiPicker size="lg" defaultValue="neutral" />
    </div>
  );
}
```

### Hidden Labels

For a cleaner, visual-only aesthetic while maintaining accessibility tags for screen readers.

```jsx
import React from "react";
import FeedbackSentimentEmojiPicker from "./FeedbackSentimentEmojiPicker";

function NoLabelExample() {
  return (
    <FeedbackSentimentEmojiPicker showLabels={false} defaultValue="satisfied" />
  );
}
```

---

## Accessibility

`FeedbackSentimentEmojiPicker` is fully optimized to provide premium accessibility conforming to WCAG AA guidelines:

1. **Semantic DOM markup**:
   - The wrapper is defined as `role="radiogroup"` with a descriptive `aria-label`.
   - Each option behaves as a native `<button>` element with `role="radio"` and standard `aria-checked` and `aria-pressed` states.
2. **Keyboard Navigation Rules**:
   - `Tab` focuses the selected option (or the first option if none is selected).
   - `ArrowRight` / `ArrowDown` selects and focuses the next option, looping around.
   - `ArrowLeft` / `ArrowUp` selects and focuses the previous option, looping around.
   - `Home` / `End` focuses and selects the first/last options respectively.
3. **Screen Reader Support**:
   - Textual labels remain fully linked to the buttons via `aria-label` even if `showLabels` is set to `false`.
   - Visual labels use `aria-hidden="true"` when labels are visible to avoid redundant announcements.
4. **Focus ring visibility**:
   - Employs focus-visible ring styles (`:focus-visible`) to outline elements exclusively on keyboard tab navigations.

---

## Browser Support

Works on all modern evergreen browsers.

- **Chrome / Edge / Firefox**: Native support for all transitions and sibling dimming using `:has()`.
- **Safari (15.4+)**: Full support. Incorporates custom fallback class `.has-selection` to enable sibling dimming even if `:has()` features are not fully supported or in older environments.

---

## Customization

The styling integrates directly with **EaseMotion CSS** design variables:

- `--ease-color-primary` (Defaults to `#6c63ff`): Primary boundary and selected accent color.
- `--ease-color-neutral-*`: Used to color default button backgrounds and disabled states.
- `--ease-speed-fast` / `--ease-speed-medium` (150ms / 300ms): Control transitions.
- `--ease-ease-bounce` (`cubic-bezier(0.34, 1.56, 0.64, 1)`): Powers the signature hover bounce and pulse effects.

You can customize the animation classes by passing `animationClass` or override styles inside your local stylesheet targeting `.ease-sentiment-picker`.

---

## License

MIT License. Feel free to copy and use in personal or commercial projects.
