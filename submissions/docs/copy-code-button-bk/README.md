# Copy Code Button for Documentation Code Blocks

1. What does this do? Adds an absolute-positioned Copy Code button to documentation code blocks that copies the text content to the user's clipboard and provides temporary success feedback.
2. How is it used? Wrap code snippets inside a `.code-block` container and add a `.copy-btn` button inside it.
3. Why is it useful? It removes friction for developers when copying installation instructions, imports, or examples from EaseMotion CSS documentation.

## Showcase Features
- **One-click copy**: Uses modern `navigator.clipboard` API with an asynchronous feedback loop.
- **Robust Fallback**: Includes a fallback handler for older/unsupported environments.
- **Visual Feedback**: Transitions to a checkmark state for 2 seconds to confirm success.
- **Responsive Layout**: Works with standard code blocks, with or without headers.
