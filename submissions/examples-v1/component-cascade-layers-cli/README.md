# Component Cascade Layers Test

## What does this do?
Provides a test suite to validate the resolution of Issue #6676. It proves that the remaining unlayered component stylesheets (`chip.css`, `footer.css`, `scroll-progress.css`, and `sidebar.css`) have been successfully wrapped inside `@layer easemotion-components` blocks.

## How does it work?
The submission includes a simple unlayered `style.css` that contains CSS class definitions that conflict directly with the core framework styles (e.g., overriding `.ease-chip`, `.ease-sidebar`, `.ease-scroll-progress`, and `.ease-footer`). 

Because CSS Cascade Layers specify that unlayered styles **always** win over layered styles (regardless of selector specificity), our simple classes flawlessly override the framework defaults without resorting to `!important` hacks.

## Why is it useful?
Wrapping all framework components inside `@layer` blocks is critical for a CSS library. It ensures that developers importing EaseMotion CSS can easily customize components to fit their brand's theme without getting caught in specificity wars against the framework's internal codebase.
