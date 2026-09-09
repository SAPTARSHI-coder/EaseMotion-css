# Parallax Breadcrumb (SaaS Modern)

## Abstract
The **Parallax Breadcrumb** is a modern SaaS navigation component built purely with CSS 3D transforms and glassmorphism styling. By leveraging standard browser perspective and hardware-accelerated transforms, it delivers a high-performance 3D parallax depth effect on user interaction without requiring any JavaScript listeners.

## 3D Stacking & Context
The component establishes a 3D rendering context to achieve multi-layer spatial depth:

- **Perspective Host (`.ease-breadcrumb-wrapper`)**: Sets `perspective: 1000px;` on the parent wrapper container to define the distance between the user's viewport and the z=0 plane.
- **Preserving 3D Space (`transform-style: preserve-3d`)**: Applied recursively to `.ease-breadcrumb-nav`, `.ease-breadcrumb-list`, and `.ease-breadcrumb-item`. This ensures nested child elements share the 3D space of the parent rather than flattening into a 2D plane.
- **Interactive Parallax Math**:
  - Upon hovering `.ease-breadcrumb-nav`, the container rotates along the X and Y axes via `rotateX(10deg) rotateY(-5deg)`.
  - Foreground elements (`.ease-breadcrumb-link`) advance along the Z-axis with `transform: translateZ(10px)` by default, popping up to `translateZ(30px) scale(1.05)` when individually hovered.
  - Background elements (`.ease-breadcrumb-separator`) recede along the Z-axis to `translateZ(-20px)` with reduced opacity (`opacity: 0.2`) on nav hover, creating visible dynamic depth separation between interactive links and static separators.

## Semantic Accessibility
The markup adheres strictly to WCAG and HTML5 semantic specifications:

- **Landmark Navigation**: Wrapped inside a `<nav aria-label="Breadcrumb">` landmark so screen readers identify the navigation context.
- **Ordered Sequence**: Uses an `<ol>` (ordered list) structure to logically represent hierarchy and step sequence.
- **Decorative Separators**: Visual delimiter slashes (`/`) use `aria-hidden="true"` so assistive technologies ignore non-essential visual tokens.
- **Current Page State**: The terminal active breadcrumb item carries `aria-current="page"` and disables pointer events to clearly denote the active page location.
