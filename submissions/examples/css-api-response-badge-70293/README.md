# CSS API Response Badge

1. What does this do? Renders color-coded status-code badges for API responses (2xx green, 3xx amber, 4xx orange, 5xx red), each with a leading status dot.
2. How is it used? Add `<span class="badge badge--2xx">200 OK</span>` and pick the modifier for the response family (`--2xx`, `--3xx`, `--4xx`, `--5xx`); add `badge--live` to pulse the dot for an in-flight request.
3. Why is it useful? Adds ready-to-use API status badges with no JavaScript, semantic color coding, and `prefers-reduced-motion` support.

Closes #70293
