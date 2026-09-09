# Basic Plan Entitlement Row

## What it does

This submission adds a CSS-only plan entitlement row for pricing pages, billing
dashboards, upgrade screens, and SaaS admin panels.

It shows a feature marker, feature name, helper text, plan tier, usage
allowance, and entitlement state in one compact reusable row.

## How to use it

Add the base row class with a feature marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-plan-entitlement-row">
  <span class="entitlement-mark is-included" aria-hidden="true">OK</span>
  <div class="entitlement-copy">
    <strong>Team workspaces</strong>
    <p>Included in the current plan with unlimited project members.</p>
  </div>
  <span class="entitlement-tier">Pro</span>
  <span class="entitlement-limit">Unlimited</span>
  <span class="entitlement-state is-included">Included</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
SaaS billing and product interfaces. Developers can reuse the same row pattern
in pricing tables, upgrade pages, billing settings, and plan comparison screens
while keeping the implementation lightweight and CSS-only.

## Included features

- Included, limited, and locked entitlement examples
- Feature marker badges
- Plan tier metadata
- Usage allowance metadata
- Entitlement state styling
- Long text truncation for compact billing panels
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the plan entitlement row
- `README.md` - usage and contribution context
