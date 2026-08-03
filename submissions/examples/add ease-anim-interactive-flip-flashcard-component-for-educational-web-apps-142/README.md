# Interactive Flip Flashcard Component (Vibrant Gradient Version)

A high-quality, modern interactive flashcard component built with HTML and CSS. Perfect for educational web apps, this component features a state-of-the-art 3D flip effect powered by CSS transforms and vibrant gradient styling.

## Features

- **Smooth 3D Flip Animation**: Utilizes `perspective` and `transform: rotateY(180deg)` with a custom cubic-bezier spring easing for a delightful physical feel.
- **Vibrant Gradients**: Features bold, stunning gradient backgrounds paired with a glassmorphism overlay for the front faces.
- **Accessible Design**: Supports both `:hover` and `:focus` states. Flashcard wrappers have `tabindex="0"` allowing keyboard users to interact with them.
- **Modern Typography**: Beautiful font pairing using 'Space Grotesk' for display and 'Outfit' for readable text.
- **Responsive Layout**: Adapts gracefully to different screen sizes using CSS Grid layout.

## Files Included

- `demo.html`: The markup containing a set of sample flashcards.
- `style.css`: The styling including CSS variables, 3D transform logic, and responsive breakpoints.

## Usage Guide

1. Ensure the `style.css` is linked in your HTML file.
2. Structure your flashcards using the provided HTML boilerplate:

```html
<div class="flashcard-wrapper" tabindex="0">
    <div class="flashcard">
        <!-- Front Face -->
        <div class="flashcard-face flashcard-front">
            <div class="card-content">
                <h2>Question?</h2>
            </div>
        </div>
        <!-- Back Face -->
        <div class="flashcard-face flashcard-back">
            <div class="card-content">
                <p>Answer.</p>
            </div>
        </div>
    </div>
</div>
```

3. Customize the gradients and colors by modifying the CSS variables in the `:root` pseudo-class in `style.css`.
