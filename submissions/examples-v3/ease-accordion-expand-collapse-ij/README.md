# Accordion Expand Collapse

Accordion component that expands and collapses content panels with a smooth max-height transition. Only one panel remains open at a time.

## Features

- Smooth expand/collapse animation using max-height
- Dynamic panel height via `--aec-panel-height` CSS custom property
- Single open panel behavior (accordion mode)
- Customizable via root CSS variables
- Hover state on headers

## Usage

Toggle `.aec-active` class on `.aec-item`. JavaScript sets `--aec-panel-height` to the content's `scrollHeight` for accurate animation. CSS handles the max-height transition.
