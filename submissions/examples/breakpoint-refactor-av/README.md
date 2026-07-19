# Centralized SCSS Breakpoint Architecture

## What does this do?
Proposes a structural refactor to eliminate hardcoded media queries (like `@media (max-width: 640px)`) across all framework components by migrating to a centralized SCSS `$breakpoints` map and a `@respond-to` mixin.

## How is it used?
Component authors write their styles in `.scss` files using `@include respond-to('sm') { ... }` instead of writing raw `@media` queries. This centralizes all breakpoint configurations into `scss/_variables.scss`.

## Why is it useful?
Because native CSS variables (`var(--ease-bp-sm)`) are not supported inside `@media` queries by standard CSS yet, developers cannot globally configure responsive breakpoints dynamically. Currently, core files like `components/navbar.css`, `components/masonry.css`, `components/buttons.css`, and `components/sidebar.css` heavily hardcode `640px` or `768px` breakpoints. 

If a team utilizing EaseMotion CSS wants to adjust the mobile breakpoint from `640px` to `768px`, they must run a massive search-and-replace across the entire framework. By adopting an SCSS-first approach for components, we guarantee a single source of truth for responsive design, making the library infinitely more scalable.
