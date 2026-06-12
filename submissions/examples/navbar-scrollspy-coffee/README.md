# Navbar ScrollSpy Coffee Demo

## Description

This submission builds a documentation-style coffee brewing page with a fixed navbar, smooth anchor navigation, accurate section offsets, and IntersectionObserver-based ScrollSpy.

## Features

- Fixed top navbar with links for Brew Basics, Coffee Beans, and Brewing Methods
- Smooth scrolling with `scroll-behavior` and `scroll-margin-top` so headings stay visible below the navbar
- One-active-item ScrollSpy state with subtle glow highlighting
- Prominent `Live Demo` call-to-action in both the navbar and hero section
- Responsive documentation layout for desktop, tablet, and mobile screens
- Semantic HTML, keyboard-friendly focus states, and no external dependencies

## Files

- `demo.html` - self-contained documentation demo that imports local EaseMotion framework files and includes the ScrollSpy script
- `style.css` - custom layout, navbar, section shell, offset handling, active-state styling, and responsive rules
- `README.md` - submission summary and EaseMotion usage notes

## Implementation Notes

- The fixed navbar updates a shared `--nav-offset` variable so both section spacing and anchor destinations stay accurate as the navbar height changes across breakpoints.
- ScrollSpy is implemented with `IntersectionObserver`, keeping exactly one navigation item active at a time with smooth visual transitions.
- The page keeps the custom CSS focused on layout, positioning, navbar behavior, ScrollSpy state, responsiveness, and theme-level styling adjustments.
- This fits EaseMotion CSS by pairing framework motion classes with a practical documentation-style layout rather than recreating a separate animation system.

## EaseMotion Usage Notes

```html
<h1 class="ease-fade-in">Coffee brewing documentation</h1>
<p class="ease-slide-up ease-delay-100">
  Accurate anchors and active-section tracking.
</p>
<a
  class="ease-btn ease-btn-primary ease-btn-pill ease-btn-hover"
  href="#coffee-beans"
>
  Live Demo
</a>

<article
  class="ease-card ease-card-shadow ease-card-hover ease-slide-up ease-delay-200"
>
  <h3 class="ease-card-title">Arabica</h3>
  <p>Layered coffee bean reference content.</p>
</article>
```

The demo relies on EaseMotion classes for entrance motion, button polish, card structure, and utility spacing while the local stylesheet handles the docs layout and ScrollSpy-specific behavior.
