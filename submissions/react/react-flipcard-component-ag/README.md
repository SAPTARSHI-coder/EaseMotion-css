# React FlipCard Component

## Description
The `FlipCard` component is a reusable React wrapper that provides a smooth, interactive 3D flip animation. It reveals its back face when a user hovers over it with a mouse or focuses on it using keyboard navigation. This pattern is widely used in modern UIs for flashcards, pricing tiers, product previews, and feature highlights.

## Installation
Since this is a lightweight utility component, you can simply copy the `FlipCard.jsx` and `style.css` files directly into your project's component directory.

Ensure the CSS file is imported within the component:
```javascript
import "./style.css";
```

## Props

| Prop | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `front` | ReactNode | Yes | - | Content to display on the front face of the card. |
| `back` | ReactNode | Yes | - | Content to display on the back face of the card. |
| `className` | String | No | `""` | Additional custom CSS classes applied to the outermost wrapper. |
| `duration` | String | No | `"0.6s"` | Custom animation transition duration (e.g., `"1s"`, `"400ms"`). |
| `perspective` | String | No | `"1000px"` | Custom 3D perspective depth (e.g., `"800px"`, `"1200px"`). |

## Usage Example

```jsx
import React from "react";
import FlipCard from "./FlipCard"; // Adjust path as necessary

function App() {
    return (
        <div style={{ padding: "4rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            
            {/* Basic usage */}
            <FlipCard
                front={
                    <div>
                        <h2>Basic Plan</h2>
                        <p>Hover to see details</p>
                    </div>
                }
                back={
                    <div>
                        <h3>$9.99 / month</h3>
                        <ul>
                            <li>Feature A</li>
                            <li>Feature B</li>
                        </ul>
                        <button style={{ marginTop: "1rem" }}>Get Started</button>
                    </div>
                }
            />
            
            {/* Custom Animation Duration and Perspective */}
            <FlipCard
                duration="0.4s"
                perspective="800px"
                front={
                    <div>
                        <h2>Flashcard</h2>
                        <p>What is the capital of France?</p>
                    </div>
                }
                back={
                    <div>
                        <h2>Paris</h2>
                    </div>
                }
            />

        </div>
    );
}

export default App;
```

## Customization Notes
- The card establishes its 3D space on the outer `.ease-flip-card` container using the `perspective` property.
- The actual rotation (`transform: rotateY(180deg)`) happens on the `.ease-flip-inner` container when the outer container is hovered (`:hover`) or focused (`:focus`).
- The front and back faces are positioned absolutely within the inner container. The back face is pre-rotated by 180 degrees so that it appears correctly oriented when the entire inner container flips.
- The `backface-visibility: hidden` property is crucial; it hides the reverse side of each face during the rotation.

## Accessibility Considerations
- **Keyboard Navigation:** The outer wrapper is given `tabIndex={0}`, making the card focusable via the `Tab` key. The CSS `:focus` pseudo-class triggers the flip animation, ensuring keyboard users can access the content on the back face just like mouse users.
- **Focus Rings:** A customized `:focus-visible` ring is applied to assist keyboard users in identifying which card is currently active without interfering with mouse click outlines.
- **Reduced Motion:** The accompanying `style.css` includes a `@media (prefers-reduced-motion: reduce)` block. If a user has motion sensitivities enabled at the OS level, the transition duration is completely removed (`transition: none !important`). The card will still instantly swap from front to back on hover/focus, preserving full access to the content without the dizzying 3D rotation effect.
