# Cyberpunk FAQ Accordion — Basic Usage

## Overview
A basic FAQ accordion using semantic HTML disclosure elements.
The cyberpunk treatment is decorative while the disclosure behavior remains native.

## Markup
```html
<details class="faq">
  <summary class="faq__question">What is EaseMotion?</summary>
  <div class="faq__answer">EaseMotion provides reusable motion-focused CSS patterns.</div>
</details>
```

## Class Naming
`faq` is the component block.
`faq__question` styles the summary.
`faq__answer` styles the revealed content.

## Usage
Repeat the details element for each FAQ entry.
Use concise questions and useful answers.

## Accessibility
Native details and summary provide disclosure semantics.
Keep summary text descriptive and keyboard accessible.
Do not hide essential content through decorative effects.

## Styling
Use a readable dark surface and controlled accent glow.
Keep text contrast strong against the background.

## Customization
Override border, glow, radius, spacing, and surface variables.

## Responsive Design
Let questions and answers wrap naturally.
Avoid fixed widths that cause horizontal scrolling.

## Motion
Optional transitions should respect reduced-motion preferences.

## Testing
Test open and closed states.
Test keyboard activation.
Test focus visibility.
Test contrast and narrow layouts.

## Files
`README.md` contains basic usage documentation.
`demo.html` contains the standalone demo.
`style.css` contains properly spaced component CSS.

## Maintenance
Keep disclosure semantics native.
Keep decorative styling separate from content.
