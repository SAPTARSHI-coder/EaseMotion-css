# Minimalist Tab Bar — Accessibility Integration

## Overview
This guide documents an accessible minimalist tab bar.
The pattern organizes related views without sacrificing keyboard or screen-reader support.

## Markup
```html
<div class="tabs" role="tablist" aria-label="Account sections">
  <button class="tab" role="tab" aria-selected="true" aria-controls="panel-profile" id="tab-profile">Profile</button>
  <button class="tab" role="tab" aria-selected="false" aria-controls="panel-security" id="tab-security" tabindex="-1">Security</button>
</div>
```

## Class Naming
`tabs` is the component container.
`tab` represents each tab control.
Panel classes should remain independent from visual styling.

## Accessibility
Use the WAI-ARIA tab pattern when implementing dynamic tabs.
Keep `aria-selected` synchronized with the active panel.
Connect tabs and panels with `aria-controls` and `aria-labelledby`.
Move focus according to the chosen tab interaction model.
Keep a visible focus indicator.

## Keyboard Guidance
Support Arrow Left and Arrow Right for a tablist interaction model.
Home and End may move to the first and last tabs.
Enter or Space can activate manually activated tabs.
Keep inactive tabs out of the normal tab sequence when using roving tabindex.

## Styling
Use a restrained visual hierarchy.
Do not indicate the active tab with color alone.
Use an underline, weight, or other non-color indicator.

## Responsive Behavior
Allow tab labels to remain readable.
Use horizontal scrolling or wrapping deliberately when space is limited.

## Motion
Optional active-state transitions should respect reduced motion.

## Testing
Test keyboard navigation, selected state announcements, focus visibility, zoom, and narrow screens.

## Files
`README.md` contains accessibility guidance.
`demo.html` contains the standalone demonstration.
`style.css` contains clean presentation rules.

## Maintenance
Keep ARIA state synchronized with application state.
Do not add ARIA roles when native semantics already provide the required behavior.
