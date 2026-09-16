# CSS-only Card

Documentation showcase for EaseMotion CSS issue #78652. This example demonstrates a reusable content card built with semantic HTML and CSS only.

## Files

- `demo.html` — article content, category, heading, description, and navigation link.
- `style.css` — card layout, spacing, border treatment, hover/focus states, and responsive behavior.

## Structure

The card uses an `<article>` because its content can stand independently from the surrounding page. The category is supplementary text, while the heading provides the main content title and the link provides the primary navigation action.

No JavaScript is required. The card can therefore be rendered in static sites, documentation pages, dashboards, or server-rendered applications without an additional runtime.

## Usage

Replace the sample category, title, description, and destination with application content. Additional metadata can be added inside the article without changing the basic layout.

## Accessibility

- Uses a semantic article element.
- Heading hierarchy is preserved.
- The primary action is a native anchor.
- Focus-visible styling is provided for keyboard navigation.
- Text remains readable at narrow widths.
- Decorative effects are not required for comprehension.

## Responsive Behavior

The card uses a fluid width with a readable maximum. Internal spacing and typography adapt at smaller viewports without clipping content or creating horizontal overflow.

## Customization

Change the card width, radius, border, shadow, typography, and accent values in `style.css`. The same structure can represent articles, products, profiles, release notes, or dashboard summaries.

## Preview

Open `demo.html`, activate the Read article link, and resize the browser window to inspect the responsive card layout.
