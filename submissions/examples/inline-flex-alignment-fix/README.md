# Sandbox Layout Fix: Inline-Flex Typography Sub-Pixel Shifting Resolution

## Overview
A structural typographic alignment fix for inline-flex container tags and button pills to completely eliminate sub-pixel character dropping, resolve text-icon disalignment, and stabilize font glyph matrices across Chromium viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Precision presentation tracking monitor hosting mixed content status pills to verify vertical grid alignments.
* `style.css` — Scoped layout sheet setting explicit line-height and middle vertical alignment constraints linked back to global tokens.

## 🚀 The Bug Resolved
Previously, grouping custom inline vector icons directly alongside text string parameters inside an active inline-flex row (`display: inline-flex; align-items: center;`) caused prominent rendering bugs in Google Chrome and Microsoft Edge. Because font characters and external vectors use distinct inner bounding metric blocks, the browser's layout calculator fails to calculate a shared coordinate base layer. This conflict causes text glyph structures to randomly slip down by 1px to 2px, ruining crisp dashboard alignments.

## 🛠️ The Solution
The canvas text rendering tracks are optimized. By injecting `vertical-align: middle;` directly onto the active inner typography text wrapper span, you force the browser's font engine to snap the character glyph coordinates onto a centered timeline path. Coupling this alignment with a parent numeric override of `line-height: 1;` strips out legacy layout buffer values, ensuring perfectly synchronized alignment tracks across fluid viewport configurations.
