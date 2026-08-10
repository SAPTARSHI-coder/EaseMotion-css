# Active Navigation Highlighting

## Overview

Active Navigation Highlighting automatically updates documentation navigation links based on the section currently visible in the viewport.

As users scroll through the page or click navigation links, the corresponding navigation item receives an active visual state.

## Features

* Automatic active-state detection using Intersection Observer
* Updates navigation state while scrolling
* Updates navigation state when links are clicked
* Smooth scrolling support
* Lightweight and dependency-free implementation

## Usage

```html
<nav class="docs-nav">
  <a href="#getting-started">Getting Started</a>
  <a href="#utilities">Utilities</a>
  <a href="#animations">Animations</a>
  <a href="#components">Components</a>
</nav>
```

The active class is automatically applied to the navigation item corresponding to the currently visible section.

## Visual Indicators

The active navigation item includes:

* Highlighted text color
* Background accent
* Left border indicator
* Increased font weight

## Why is it useful?

Documentation pages can become lengthy and difficult to navigate.

Active Navigation Highlighting improves usability by:

* Helping users understand their current location
* Providing clear visual feedback
* Improving navigation within long documentation pages
* Creating a more intuitive developer experience

## Implementation Details

The feature uses the browser's native `IntersectionObserver` API to monitor visible sections and update navigation states efficiently without scroll event listeners.
