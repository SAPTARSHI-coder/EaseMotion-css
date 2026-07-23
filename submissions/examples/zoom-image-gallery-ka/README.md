# Zoom Image Gallery

A responsive glassmorphism-inspired image gallery component built for **EaseMotion CSS**.
The component provides smooth image zoom interactions, glass card styling, and responsive layouts using pure CSS.

# Preview

A modern gallery layout with:

- Glassmorphism cards
- Smooth image zoom on hover
- Responsive grid layout
- Keyboard accessibility
- EaseMotion animation utilities

## Folder Structure
submissions/
└── examples/
    └── zoom-image-gallery-ka/
        ├── demo.html
        ├── style.css
        └── README.md


# Features

-  Pure CSS implementation (no JavaScript)
-  Responsive design for desktop, tablet, and mobile
-  Smooth zoom animation on image hover
-  Glassmorphism card design
-  Uses EaseMotion CSS animation utilities
-  Accessible keyboard focus states

# Usage

Include EaseMotion CSS in your HTML:

html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css"
/>
Add the gallery structure:
<article class="gallery-card ease-hover-lift">
  <div class="image-wrapper">
    <img
      src="image-url"
      alt="Gallery image"
    />
  </div>

  <div class="card-content">
    <h2>Image Title</h2>
    <p>Image description.</p>
  </div>
</article>


# EaseMotion Classes Used

This component uses built-in EaseMotion utilities:

ease-fade-in - fade entrance animation
ease-slide-up - slide entrance animation
ease-delay-100 - animation delay
ease-hover-lift - hover lift interaction


# Responsive Behavior

The gallery automatically adapts:

Desktop: multiple columns
Tablet: reduced columns
Mobile: single-column layout