# Customer Testimonial Wall (EaseMotion)

A CSS-only testimonial showcase for SaaS landing pages and product sites.

Purpose

- Present multiple customer testimonials in a masonry-style wall that is easy to scan and visually appealing.

Use cases

- Marketing landing pages
- Customer stories and case studies sections
- Homepage social proof blocks

Structure

- `section.masonry` — CSS columns-based masonry container
- `article.testimonial` — individual testimonial card (focusable)
- `.avatar` — initials or customer photo
- `.rating` — star rating (text-based for simplicity)

Customization

- Tweak colors, radii, and shadows via CSS variables in `style.css` (`:root`).
- Replace initials with `<img>` in `.avatar` for real photos.
- Adjust column width by changing `.masonry { column-width: ... }`.

Accessibility

- Cards are keyboard-focusable and provide visible focus outlines.
- Ratings include `aria-label` for screen readers.

Why it fits EaseMotion CSS

- Lightweight and composable: pairs with EaseMotion utilities (`em-container`, `em-text-*`) and remains framework-agnostic.
- Production-ready: subtle elevation, smooth hover transitions, and responsive behavior.

Files

- `demo.html` — demo page showing example testimonials.
- `style.css` — component styling (pure CSS).

Preview
Open `submissions/examples/customer-testimonial-wall-zt/demo.html` in a browser to view the testimonial wall.
