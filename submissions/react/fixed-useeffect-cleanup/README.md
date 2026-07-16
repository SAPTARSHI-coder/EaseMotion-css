# useEventListener - Custom Hook with Cleanup

## Overview
This custom hook adds event listeners with proper cleanup to prevent memory leaks.

## Fix Applied
- Proper cleanup in useEffect
- Prevents memory leaks
- Reusable event listener hook

## Usage
```jsx
import useEventListener from './useEventListener';

function Component() {
  useEventListener('keydown', (e) => {
    console.log('Key pressed:', e.key);
  });

  return <div>Press any key</div>;
}

