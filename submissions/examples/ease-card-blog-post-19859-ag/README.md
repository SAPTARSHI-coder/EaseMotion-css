# CSS Blog Post Card Placeholder

This submission details the `.ease-card-blog-post` component, optimized for blog layouts, article listings, and preview grids.

---

## Acceptance Criteria Handled

- **Food/Feature Image Zoom:** The blog header thumbnail scales up by `8%` inside its container on card hover.
- **Category Badge:** Displayed at the top-left of the image to categorize articles.
- **Metadata Details:** Includes date and estimated reading time.
- **Hover Underline Link:** The article title utilizes a CSS transition that scales a thin line underneath (`.ease-hover-underline`) from 0 to 1 scaling upon card hover.
- **Excerpt & Read More Links:** Displayed in the body and footer segments.

---

## Verification Steps

1. Open `demo.html` in a web browser.
2. Hover over the blog post card. Verify:
   - The card raises vertically by `4px` with a cyan edge glow outline.
   - The banner image scales up smoothly.
   - A cyan underline draws underneath the title text.
3. Test layout sizing responsiveness.
