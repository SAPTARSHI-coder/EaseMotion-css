# Button - Fixed Version

## Overview
This component adds proper ARIA labels for accessibility.

## Fix Applied
Added `aria-label` to buttons.

## Usage
```jsx
import ButtonFixed from './Button-Fixed';

<ButtonFixed onClick={() => setOpen(false)} ariaLabel="Close">
  Close
</ButtonFixed>

