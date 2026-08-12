# EaseMotion - Advanced Nonprofit Animal Shelter

A fully responsive, production-ready landing page tailored for animal welfare nonprofits. Submitted for GSSoC 26 (#21044).

## Architecture & Compliance
This submission is 100% compliant with the EaseMotion standard:
- **Zero JS Dependency:** Operates flawlessly on `file:///` natively in any modern browser.
- **Pure Utility Driven:** The layout is constructed entirely using `ease-*` mapped CSS classes acting as a local polyfill.
- **Inclusive Content:** Avoids "lorem ipsum" by implementing professional, empathetic placeholder copy.

## Component Breakdown

### 1. `ease-animate-*` (Entrance Framework)
We handle initial load animations structurally via staggered timing without scroll-sniffing JS:
- `ease-animate-fade-in`: Smooth opacity transition for background elements.
- `ease-animate-slide-up`: Directional entrance.
- `ease-animate-float`: A continuous loop applied to the donation image to maintain visual interest.

### 2. `ease-hover-*` (Interactive Feedback)
- `ease-hover-scale-sm`: Micro-interaction for the animal grid cards.
- `ease-hover-lift`: Combined Y-axis translation and shadow expansion for primary Call-To-Action buttons.
- `ease-hover-slide-right`: A custom directional hover applied to the "Adoption Process" timeline numbers to indicate forward momentum.

### 3. Responsive Layout
Utilizes `.ease-responsive-grid` and `.ease-responsive-flex` to intelligently collapse 3-column and 2-column structures into mobile-friendly single columns seamlessly.

## Testing
Open `demo.html` in Chrome, Firefox, or Safari. Vendor prefixes (`-webkit-`, `-moz-`) have been included in the `style.css` file to guarantee cross-browser linting passes within the upstream repo.