# Scrollbar Width None Utility

Introduces the layout stealth overflow control token (`.ease-scrollbar-none`) under issue #15171.

## Functional Mechanics

- **The Problem:** When constructing modern horizontal card swipe decks, image carousels, or minimal sidebar channels, the default browser-native scrollbar box injects visual clutters that disrupt grid alignment and distract from the interface.
- **The Solution:** Completely hides scroll indicators without disabling functionality. The `.ease-scrollbar-none` utility pairs standard W3C layout parameters with legacy Microsoft properties and WebKit layout rules to hide the track entirely while maintaining full touch swipe and mouse wheel capabilities.

## Usage Layout Structure
```html
<div class="ease-scrollbar-none" style="overflow-x: auto; display: flex;">
  </div>
```

Closes #15171
