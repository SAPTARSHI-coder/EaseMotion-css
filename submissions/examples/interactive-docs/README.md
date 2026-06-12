# Interactive Documentation Site

This is an interactive documentation site proposal that adds live component previews, copy-to-clipboard functionality, and search/filtering capabilities, built primarily using EaseMotion CSS utility classes (dogfooding).

### What does this do?

Transforms the static documentation into a fully interactive experience where users can test animations, search classes, and easily copy code directly from the browser.

### How is it used?

Users interact with the UI elements natively:

- Use the sidebar `<input id="docsSearch">` to filter documentation sections in real-time.
- Click the dynamically generated "Copy" buttons on any `.docs-code` block to copy the syntax.
- Click any button in the `.live-preview` sections to see the framework classes (`ease-bounce`, `ease-card-hover`, etc.) animate in real-time (implemented via DOM cloning to bypass browser reflow caches).

### Why is it useful?

It fulfills Issue #329 by dramatically improving the developer experience of learning and using the framework. Dogfooding the framework's own utility classes proves the robustness of the library and allows users to immediately "feel" how the animations work before writing any code.
