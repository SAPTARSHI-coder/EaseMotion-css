# SCSS Motion Mixin Recipe Book

Resolves #43355.

### What does this do?
Provides a navigable "recipe book" interface containing copy-pasteable snippets for using EaseMotion via SCSS `@include` directives instead of standard CSS utility classes.

### How is it used?
Users can click through the sidebar navigation to view different animation categories. Each panel reveals the exact SCSS snippet required to bind EaseMotion logic to semantic HTML class names, maintaining separation of concerns.

### Why is it useful?
Many enterprise codebases strictly prohibit "utility class pollution" in their HTML templates (e.g. BEM methodologies). By showcasing that EaseMotion provides SCSS mixins for every single animation, we accommodate teams that prefer semantic stylesheets.
