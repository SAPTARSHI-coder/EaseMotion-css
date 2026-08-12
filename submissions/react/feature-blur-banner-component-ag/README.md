# Blur Banner Component

## Description
The `BlurBanner` is an interactive React component that obscures its children with a blur filter and an overlay message. When the user hovers or focuses the banner, the blur smoothly transitions away to reveal the content. This pattern is excellent for "spoiler" content, premium gated features, or simply adding a layer of interactivity to static banners.

## Installation
Copy `BlurBanner.jsx` and `style.css` into your project directory.

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `children` | ReactNode | Yes | - | The content to be hidden behind the blur effect. |
| `overlayText` | String | No | `"Hover to reveal"` | Text displayed on the blurred overlay. |
| `className`| String | No | `""` | Additional CSS classes for custom styling on the wrapper. |

## Usage Example

```jsx
import React from 'react';
import BlurBanner from './BlurBanner';

function App() {
    return (
        <div style={{ padding: '2rem', maxWidth: '600px' }}>
            <BlurBanner overlayText="Hover to view spoiler">
                <div style={{ padding: '1rem', background: '#fff' }}>
                    <h2>Spoiler Alert!</h2>
                    <p>The main character was a ghost the entire time.</p>
                </div>
            </BlurBanner>
        </div>
    );
}

export default App;
```

## Accessibility Considerations
- **Keyboard Navigation:** The wrapper is given `tabIndex="0"` and listens for `onFocus` and `onBlur`. This ensures keyboard users navigating via `Tab` can reveal the content just as easily as mouse users.
- **Screen Readers:** Screen readers generally ignore visual CSS filters like `blur()`. However, you can manage the visibility of the inner content with `aria-hidden` if necessary depending on the strictness of your spoiler requirement.
- **Reduced Motion:** If a user prefers reduced motion, the CSS transition duration is skipped. Hovering or focusing the banner will reveal the content instantly without the fading blur animation.
