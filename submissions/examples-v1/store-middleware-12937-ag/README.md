# Store Middleware Architecture Guide

This submission documents the store middleware architecture for state management structures in EaseMotion CSS, presenting a fully functional, vanilla JS middleware console.

---

## Store Middleware Architecture

Middleware pipelines allow intercepting actions dispatched to the state store before they reach the reducer. This enables logging, persistence, routing, and asynchronous side-effects.

### Middleware Signature
Every middleware follows the curried Redux signature:

```javascript
const myMiddleware = store => next => action => {
  // 1. Read state before dispatching
  const prevValue = store().count;

  // 2. Pass action to the next middleware in line
  const result = next(action);

  // 3. Perform actions after state updates
  console.log('Next state:', store().count);

  return result;
};
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click **Increment** or **Decrement** — verify the counter updates.
3. Observe the **Middleware Pipeline Logs** console — verify the logger middleware intercepts the action, printing previous and next states.
4. Reload the page — verify that the persistence middleware successfully restores the last count from `localStorage`.
