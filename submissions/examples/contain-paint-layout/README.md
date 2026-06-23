# CSS contain — Paint, Layout, Size, Style Isolation

## Overview

Demonstrates CSS `contain` property for performance isolation. Cards and widgets use `contain: paint`, `contain: layout`, `contain: size`, `contain: strict`, and `contain: content` to create independent rendering contexts. Includes overflow clipping without `overflow: hidden`, scoped float layouts, and stability examples for dynamic content.

## Usage

Open `demo.html` in Chrome, Edge, or Firefox. Inspect each card in DevTools to see the containment scopes. The widget grid at the top shows isolated components that could be independently updated without affecting surrounding layout. Use the Performance panel to compare rendering cost with and without containment on dynamic changes.

## Browser Support

`contain` is supported in Chromium 52+, Firefox 69+, and Safari 15.4+. The `style` containment value has limited support (Chromium only). All examples degrade gracefully — without support, elements render normally but without the optimization benefits.
