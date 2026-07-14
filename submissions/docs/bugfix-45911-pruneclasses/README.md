# Fix for pruneClasses nested CSS bug (#45911)

This submission contains the proposed fix for issue #45911 where `.ease-*` rules containing nested CSS blocks (like `&:hover { ... }`) caused the `pruneClasses` optimizer regex to fail and silently drop subsequent classes.

## Included files:
- `optimizer.js`: The updated optimizer script with a brace-counting parser replacing the naive regex.
- `engine.test.js`: Regression tests verifying the fix.
- `demo.html` & `style.css`: Dummy reproduction of the bug context.
