# AriaButton - Fixed Version

## Overview
This component adds proper ARIA labels for accessibility.

## Fix Applied
Added `aria-label` to buttons.

## Usage
```jsx
import AriaButton from './AriaButton';

<AriaButton onClick={() => setOpen(false)} ariaLabel="Close">
  Close
</AriaButton>


