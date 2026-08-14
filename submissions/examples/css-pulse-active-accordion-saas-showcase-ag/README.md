# CSS Pulse-Active Accordion (SaaS Showcase)

A pricing-comparison accordion designed for SaaS Showcase layouts. Uses a pulsing gradient border on the "recommended" plan to draw attention, with a built-in feature comparison table inside each expandable section.

## Features
- **Recommended Plan Pulse:** The recommended/popular plan pulses with a gradient border animation to draw conversion focus.
- **Feature Comparison Table:** Content sections contain a structured comparison grid showing included/excluded features per tier.
- **Gradient Top Border:** Each pricing tier has a distinct gradient top-border color that identifies the plan level.
- **Pricing Display:** Headers include formatted price values with period labels.
- **Pure CSS:** No JavaScript needed. Built on `<details>`/`<summary>`.

## Usage
Wrap items in `.saas-pulse-accordion`. Each `<details>` gets `.saas-pulse-item`. Add `.saas-pulse-item--recommended` to highlight the primary tier.

## Files
- `demo.html`: A pricing page preview with 3 tiers.
- `style.css`: Gradient pulse, comparison table, and pricing-tier styling.
