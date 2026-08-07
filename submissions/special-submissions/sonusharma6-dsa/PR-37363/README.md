# Button Markup Fix (#37025)

This example demonstrates the fix for the broken button markup in `docs/demo.html`.

## Bug Description
The outline button had an unterminated `style` attribute and did not close the opening `<button>` tag correctly:
`style="border-color:rgba(255,255,255,0.3); color: var(--page-text);Hover me 🚀</button>`
This caused the browser parser to consume subsequent buttons and labels into the attribute string.

## Solution
Properly terminate the double-quoted style attribute and close the opening tag:
`style="border-color:rgba(255,255,255,0.3); color: var(--page-text);">Hover me 🚀</button>`
