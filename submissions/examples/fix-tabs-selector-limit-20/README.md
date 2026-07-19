# Fix: Extend tabs.css Selector Lists from 20 to 30 Tabs

## Problem

`components/tabs.css` hardcoded all three selector lists up to index 20:

```css
/* Stops at 20 — tabs 21+ break */
.ease-tab-input:nth-of-type(20):focus-visible ~ ...
.ease-tab-input:nth-of-type(20):checked ~ .ease-tabs-content ...
.ease-tabs-auto .ease-tab-input:nth-of-type(20):checked ~ ...
```

Tab groups with more than 20 tabs:
1. Lose keyboard focus ring beyond index 20 — keyboard accessibility regression
2. Fail to show the active panel for tabs beyond index 20
3. Fail to highlight the active label in `.ease-tabs-auto` beyond index 20

## Solution

Extend all three selector lists from 20 to 30 tabs:

```css
/* focus-visible extended to 30 */
.ease-tab-input:nth-of-type(21):focus-visible ~ .ease-tabs-nav .ease-tab-label:nth-of-type(21),
...
.ease-tab-input:nth-of-type(30):focus-visible ~ .ease-tabs-nav .ease-tab-label:nth-of-type(30) { ... }

/* checked panel extended to 30 */
.ease-tab-input:nth-of-type(21):checked ~ .ease-tabs-content .ease-tab-panel:nth-of-type(21),
...

/* auto active label extended to 30 */
.ease-tabs-auto .ease-tab-input:nth-of-type(21):checked ~ .ease-tabs-nav .ease-tab-label:nth-of-type(21),
...
```

## Usage

No class changes needed — tab groups with up to 30 tabs now work correctly out of the box.

## Why it fits EaseMotion CSS

The CSS-only checkbox hack used by EaseMotion tabs requires explicit nth-of-type selectors for each tab. Extending the limit to 30 covers the vast majority of real-world tab group use cases while maintaining the zero-JS approach.

Fixes #10429
