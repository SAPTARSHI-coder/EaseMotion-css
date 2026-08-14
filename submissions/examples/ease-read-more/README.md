# Ease Read More Component

A CSS-only expandable "Read More" / "Show More" text component built with **EaseMotion CSS**. This component provides an accessible and elegant way to manage long text content using semantic HTML elements.

## Key Features
- **Pure CSS Logic**: Uses the native `<details>` and `<summary>` elements—no JavaScript required for the toggle behavior.
- **Smooth Animations**: Leverages CSS transitions (and `interpolate-size` for modern browsers) to provide a fluid expanding/collapsing experience.
- **Visual Feedback**: A gradient fade-out overlay in the collapsed state subtly indicates that more content is available.
- **Interactive Icon**: A rotating chevron icon provides clear visual state feedback.
- **A11y First**: Keyboard-accessible by default and respects `prefers-reduced-motion` settings.
- **Dark Mode Ready**: Automatically adjusts the gradient overlay for dark backgrounds using framework tokens.

## How to Use
1. Include `easemotion.css` in your project.
2. Structure your HTML using the `.ease-read-more` wrapper.
3. Wrap your text content inside `.ease-read-more-content`.
4. Define your toggle labels using `.ease-read-more-show` and `.ease-read-more-hide`.

```html
<div class="ease-read-more">
    <details>
        <div class="ease-read-more-content">
            <!-- Your long text content here -->
        </div>
        <summary>
            <span class="ease-read-more-show">Read More</span>
            <span class="ease-read-more-hide">Show Less</span>
        </summary>
    </details>
</div>
```

## Directory Structure
- `demo.html`: Interactive showcase of the component with various text lengths.
- `style.css`: The modular styles for the layout, overlay, and animations.
