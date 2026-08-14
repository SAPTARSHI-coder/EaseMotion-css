# 3D Minimalist Accordion

A pure CSS, highly polished accordion component featuring a minimalist design and a smooth 3D perspective folding effect. Built for Issue #79604.

## Features
- **Pure CSS (No JS):** Utilizes the hidden checkbox hack for state management.
- **3D Transitions:** Employs `perspective`, `transform-style: preserve-3d`, and `rotateX` to create a realistic folding down effect.
- **Minimalist Aesthetic:** Clean lines, ample white space, and subtle shadow interactions.
- **Smooth Animation:** Uses CSS Grid (`grid-template-rows`) for flawless height animation combined with the 3D rotation.
- **Fully Responsive:** Adapts seamlessly to mobile and desktop screens without horizontal overflow.
- **Accessible:** Semantic HTML, keyboard navigable (via `focus-visible`), and compatible with screen readers.
- **Motion Safe:** Fully respects `@media (prefers-reduced-motion: reduce)` by falling back to instant layout toggles.

## Folder Structure
- `demo.html` - The showcase layout and HTML structure.
- `style.css` - The core styling and 3D transition logic.
- `README.md` - Documentation.

## How to Use

### 1. HTML Structure
Copy the `.accordion-item` structure from `demo.html`. Ensure every `input` has a unique `id` that matches the `for` attribute on its corresponding `label`.

```html
<div class="ease-3d-accordion">
    <div class="accordion-item">
        <input type="checkbox" id="acc-unique-1" class="acc-toggle sr-only">
        <label for="acc-unique-1" class="acc-header">
            <span>Section Title</span>
            <div class="acc-icon" aria-hidden="true">▼</div>
        </label>
        <div class="acc-content-wrapper">
            <div class="acc-content">
                <div class="acc-inner-pad">
                    <p>Your content goes here.</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

### 2. Include CSS
Link the provided `style.css` in your document head.

## Accessibility Notes
The visual hiding of the checkbox uses the standard `.sr-only` clipping technique. This ensures it remains in the DOM focus order, allowing users to tab through the accordion headers and toggle them with the Space bar. Outlines are explicitly defined for `focus-visible` to aid keyboard navigation.
