# Tabs Beyond 20 Limit Stress Test Demo

Resolves #43647.

### What does this do?
Provides a performance testing playground that renders 50 interactive tabs. Clicking any tab instantly unmounts and remounts the content panel with an EaseMotion CSS animation (`.ease-fade-in-up`).

### How is it used?
It uses Vanilla JS to generate the tabs dynamically. Users can click through the tabs as rapidly as possible to stress-test the browser's painting and compositing engine when running EaseMotion classes.

### Why is it useful?
Design systems often struggle with performance edge cases when components are abused (like rendering 50 tabs on a single screen). This demo proves that EaseMotion's use of hardware-accelerated transforms prevents frame dropping and UI stuttering even under extreme stress.
