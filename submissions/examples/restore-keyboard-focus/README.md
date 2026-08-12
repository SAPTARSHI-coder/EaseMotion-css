# Accessibility: Restore Visible Keyboard Focus Indicators

This directory restores accessible keyboard-only navigation focus indicators across standard interactive inputs, buttons, and anchor anchors, correcting issue #35162.

## Accessibility Design Logic
- **Using `:focus-visible` over `:focus`:** Traditional `:focus` rules force focus rings to display even during casual mouse clicks, which design teams frequently hide for aesthetic reasons. `:focus-visible` applies focus footprints **strictly** when a physical keyboard modifier (like `Tab`) triggers focus.
- **Contrast & Visibility Standards:** Built with high-contrast offsets (`2px`) and distinctive thickness parameters (`3px`) conforming with WCAG accessibility guidelines, making tracking intuitive for low-vision users.

## Structure
```text
submissions/examples/restore-keyboard-focus/
├── demo.html
├── style.css
└── README.md