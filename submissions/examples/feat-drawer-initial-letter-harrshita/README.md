# Drawer CSS `initial-letter` Drop Caps

## Description
This PR introduces the modern CSS `initial-letter` property to the `drawer` component, enabling flawless, print-style drop caps. 

Historically, drop caps required fragile CSS hacks (`float: left`, magic `font-size` and `line-height` numbers) that broke easily when fonts changed or viewports resized. The `initial-letter` property delegates the math to the browser, ensuring the drop cap always perfectly spans the specified number of lines.

## Key CSS Properties
- `initial-letter: 3 3`: Tells the browser the first letter should be exactly 3 lines tall, and sink 3 lines deep into the paragraph.
- `-webkit-initial-letter`: Included for Safari support.

## Changes
- `style.css`: Implements two styles of drop caps (standard classic, and a bordered modern variant) using `::first-letter` and `initial-letter`.
- `demo.html`: Magazine-style layout demonstrating the flawless alignment of the drop caps.
- `README.md`: Describes the feature and usage.
\nFixes #56584\n