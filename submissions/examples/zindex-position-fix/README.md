# Z-Index Position Fix

A fundamental CSS architectural pattern that clarifies and resolves the incredibly common beginner mistake where `z-index` mysteriously fails to work because the element lacks a valid positioning context.

## Features
- **The Bug Context**: In CSS, elements that overlap are painted in the order they appear in the HTML DOM (elements lower in the file are painted on top of elements higher up). When a developer wants to force an earlier element to the front, they typically write `z-index: 9999`. However, they are often bewildered when nothing happens. 
- **The Core Rule**: The `z-index` property *only works* on "positioned" elements. By default, all elements have `position: static`. The browser strictly ignores `z-index` on static elements.
- **The Fix**: The safest way to activate `z-index` without breaking your layout is to apply `position: relative`. This creates a new stacking context for the element and enables `z-index`, while leaving the element exactly where it currently sits in the normal document flow. (Note: `absolute`, `fixed`, and `sticky` also enable `z-index`, as does being a direct child of a Flex or Grid container).

## Usage
Open `demo.html` in your browser. 
- Look at the **Buggy Demo**. The green box explicitly declares `z-index: 9999`, but because it lacks a position, the red box (which comes later in the HTML) is painted over it.
- Look at the **Fixed Demo**. The exact same HTML structure is used, but the green box has `position: relative` added to it. The `z-index: 9999` is successfully activated, pushing the green box firmly in front of the red box.

## Files
- `demo.html`: The HTML structure demonstrating two overlapping boxes using negative margins.
- `style.css`: The styling engine contrasting a static z-index with a relative z-index.
