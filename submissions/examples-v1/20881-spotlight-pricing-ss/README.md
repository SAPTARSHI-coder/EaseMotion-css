# Magnetic Spotlight Pricing Cards

## What does it do?

This component provides a fully responsive, 3-card pricing tier layout. As the user moves their mouse over any card, a soft, glowing radial gradient "spotlight" smoothly follows the cursor. It dynamically illuminates a 1px border and provides a subtle flashlight effect on the inner background, updating independently for each card.

## How is it used?

The component consists of a CSS grid `.pricing-container` wrapping multiple `.spotlight-card` elements. It relies on modern CSS variables (`--mouse-x` and `--mouse-y`) to position a `radial-gradient` via pseudo-elements. A small vanilla JavaScript snippet tracks the `mousemove` event and updates those CSS variables relative to each card's individual bounding box.

## Why is it useful?

It provides a highly premium, modern micro-interaction tailored for SaaS landing pages and pricing tables without requiring heavy WebGL libraries. It strictly aligns with the EaseMotion philosophy by using CSS for the heavy lifting (gradients, transitions, layout) and minimal JS purely as a data-provider, keeping the UI highly composable.
