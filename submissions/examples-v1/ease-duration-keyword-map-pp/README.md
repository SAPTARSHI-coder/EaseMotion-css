# Duration Keyword Mapper Lab

An interactive timing diagnostic lab that maps EaseMotion duration keywords (`fast` / `medium` / `slow`) and helper utilities (`ease-duration-*`) to matching CSS variables and milliseconds.

---

## 1. What does this do?
This showcase displays a timing synchronization map, stopwatch sweep tracks, side-by-side transition speed comparisons, and copy-paste ready utility snippets.

---

## 2. How is it used?
Open `demo.html` in a web browser to select transition keywords, slide to custom millisecond ranges, and verify class alignments across different rendering APIs:

```html
<!-- Apply fast duration timing class -->
<div class="ease-slide-up ease-duration-fast">Timed entrance container</div>
```

---

## 3. Why is it useful?
It bridges separate documentation segments into a single mental model, prevents developers from guessing millisecond specifications, and aids in adjusting motion layouts for optimal user experiences.

---

## Features & Implementation Suffix

- **Folder Path:** `submissions/examples/ease-duration-keyword-map-pp/`
- **Contributor Suffix:** `pp` (Pratyush Panda)
- **Resolved Ticket:** [Issue #46187](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46187)

### Included Interactive Timing Tools:
1. **Interactive Speed Selection Cards:** Toggle between Fast (150ms), Medium (300ms), and Slow (600ms) with ease.
2. **Dynamic Transition previewer:** Triggers entrance, slide, zoom, and sweep animations using custom speed modifiers.
3. **Stopwatch Sweep Bar:** Animates visual sweep tracks matching exact milliseconds.
4. **Side-by-Side Comparison:** Compares Fast and Slow elements concurrently.
