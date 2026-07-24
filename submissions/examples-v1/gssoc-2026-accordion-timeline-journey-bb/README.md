# Accordion Roadmap Journey Timeline

An interactive vertical roadmap accordion timeline component for EaseMotion CSS featuring milestone badges, connector line glows, and smooth card expansion animations.

## 1. What does this do?
This component renders a vertical project roadmap where clicking milestone headers smoothly expands detailed event cards, highlights active timeline badges, and rotates toggle indicators.

## 2. How is it used?
1. Link `style.css` in your HTML template `<head>`.
2. Wrap items inside `.timeline` with `.timeline-item` and `.timeline-card` elements.
3. Toggle `.active` on `.timeline-item` elements to trigger CSS height and opacity transitions dynamically.

## 3. Why is it useful?
- **Interactive Roadmaps**: Displays project history, release notes, or process steps cleanly.
- **Space-Efficient**: Accordion collapse mechanics prevent page clutter.
- **Accessible Controls**: Toggle buttons bind `aria-expanded="true/false"` state attributes.
