# HTMX + EaseMotion Integration Showcase

Resolves #43655.

### What does this do?
Provides a reference implementation demonstrating how to map EaseMotion CSS animations to HTMX's native AJAX DOM swapping lifecycle classes (`htmx-added` and `htmx-swapping`).

### How is it used?
HTMX uses a specific delay for swapping elements (`hx-swap="outerHTML swap:0.5s"`). We can bind EaseMotion keyframes (`easeFadeInUp` and `easeFadeOutDown`) to HTMX's `.htmx-added` and `.htmx-swapping` classes in CSS. This creates perfectly smooth entering and leaving transitions for AJAX responses.

### Why is it useful?
HTMX has become incredibly popular for building dynamic UIs without heavy JS frameworks. Providing a clear integration guide ensures EaseMotion works flawlessly with hypermedia-driven applications.
