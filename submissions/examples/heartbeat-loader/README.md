# Heartbeat Loader

1. What does this do? Shows a pulsing heart (built from CSS shapes) with an animated ECG line that wipes across the screen — a pure-CSS loader for health and wellness apps.
2. How is it used? Add a `.heartbeat-loader` element containing a `.heartbeat-loader__heart` span, an `.heartbeat-loader__ecg` SVG with a `.heartbeat-loader__ecg-line` polyline, and an optional `.heartbeat-loader__label`. Customize the heart pink, trace ink, and rhythm speed via `--hbl-pink`, `--hbl-ink`, and `--hbl-speed`.
3. Why is it useful? It is a dependency-free, on-theme loader with a single shared heartbeat rhythm, and it respects `prefers-reduced-motion`.
