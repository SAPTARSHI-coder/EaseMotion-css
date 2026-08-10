# Web Components Wrapper for EaseMotion

Resolves #43657.

### What does this do?
Provides a reference implementation showcasing how to properly use standard global EaseMotion CSS classes (`.ease-btn`, `.ease-hover-lift`, etc.) inside a scoped Web Component Shadow DOM.

### How is it used?
Since CSS does not pierce the Shadow DOM boundary by default, you must inject the library into the component. This demo uses the `<link rel="stylesheet">` injection approach directly within the component constructor, allowing inner elements to react to EaseMotion classes.

### Why is it useful?
Web Components are becoming increasingly popular for micro-frontends and framework-agnostic design systems. Contributors need to know how to bridge the gap between our global utility classes and the scoped nature of the Shadow DOM.
