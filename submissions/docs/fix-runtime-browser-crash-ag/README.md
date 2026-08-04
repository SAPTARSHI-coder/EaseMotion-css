# Fix: Runtime Browser Crash on Invalid Animation Token

1. What does this do? Prevents the EaseMotion JS engine from throwing a `ReferenceError` and crashing when it encounters an invalid/unsupported `em` attribute in a browser environment without `process` defined.
2. How is it used? Automatically applied within the EaseMotion runtime. Simply import `easemotion-css/engine` in your HTML/JavaScript, and any invalid `em` value will be gracefully ignored (with a console warning in development mode).
3. Why is it useful? It ensures that invalid animation syntax or user input does not break the entire JavaScript application running the Motion Engine in browser environments.
