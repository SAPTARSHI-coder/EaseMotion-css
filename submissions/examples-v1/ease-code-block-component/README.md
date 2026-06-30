# Modern Code Block Component

**Category:** Components — Code & Documentation  
**Type:** Pure CSS (Zero JavaScript)  
**Folder:** `submissions/examples/ease-code-block-component/`

---

## 1. What does this do?

The **Modern Code Block Component** delivers developer-centric code panels featuring:

- **Zero-JS Line Numbering** — uses native CSS counters to generate consecutive numbers for each wrapped line automatically.
- **Header Window Chrome** — OS-style window controls (red/yellow/green close dots), customizable language badge indicators (JS, CSS, HTML), and a mock action group (Copy button).
- **GPU-Composited Elevation** — the entire wrapper lifts gently on hover, intensifying its border contrast and glowing ambient shadows without performance lag.
- **Active Line Highlighting** — a custom utility class `.ease-code-line--highlighted` adds a left purple vertical highlight, brightens the active line number, and applies a subtle backdrop tint to focus developer attention on a specific block of code.
- **Semantic Structure** — fully utilizes semantic `<pre><code>` structures for absolute integration with accessibility standards.

---

## 2. How is it used?

### Basic Code Block Layout

Use the following semantic skeleton:

```html
<section class="ease-code-block-wrapper">
  <!-- Header tab chrome bar -->
  <header class="ease-code-header-bar">
    <div class="ease-code-window-dots">
      <span class="ease-code-dot ease-code-dot--close"></span>
      <span class="ease-code-dot ease-code-dot--minimize"></span>
      <span class="ease-code-dot ease-code-dot--maximize"></span>
    </div>

    <div class="ease-code-file-meta">
      <span class="ease-code-lang-icon" style="color: #f1e05a;">JS</span>
      <span class="ease-code-filename">app.js</span>
    </div>

    <button class="ease-code-btn-copy" type="button">Copy</button>
  </header>

  <!-- Preformatted code -->
  <pre class="ease-code-pre"><code class="ease-code">
    <span class="ease-code-line">const value = "Hello World";</span>
    <span class="ease-code-line--highlighted">console.log(value);</span>
  </code></pre>
</section>
```

### Syntax Highlighting Reference

Standard styling spans are pre-themed:

| Class       | Match                                   | Styled color      |
| ----------- | --------------------------------------- | ----------------- |
| `.syn-kw`   | Keyword (`const`, `function`, `return`) | Purple            |
| `.syn-str`  | Strings (`"text"`)                      | Green             |
| `.syn-fn`   | Function calls (`log()`, `apply()`)     | Blue              |
| `.syn-cmt`  | Comments (`// context`)                 | Dim Gray (Italic) |
| `.syn-num`  | Number values (`170`, `0.01`)           | Orange            |
| `.syn-op`   | Operator tokens (`+`, `=`, `?`)         | Teal              |
| `.syn-cls`  | Custom Classes (`SpringForce`)          | Yellow            |
| `.syn-prop` | Property tags (`stiffness`, `style`)    | Red               |

---

## 3. Why is it useful?

1. **Purely Declarative** — Requires absolutely zero scripting dependencies. Line numbers, row highlighting, scrollbars, and elevations execute during browser parsing.
2. **Accessible Code Selection** — In modern web browsers, content rendered inside pseudo-elements (`::before`) is omitted from clipboard selection. Placing line counters in the `::before` pseudo-element allows developers to select and copy code blocks _without_ dragging along numbers.
3. **Hardware Elevated Transitions** — Highlighting lines, copy transitions, and card elevations use exclusively GPU-composited variables (`transform` and `opacity`), preventing page repaints or layout recalculations.
4. **Responsive Horizontal Scrolling** — Line rows map seamlessly to block dimensions; overflow lines generate elegant, custom track scrollbars that keep containers intact across tablets and mobile viewports.
5. **Completely Custom-Property Configured** — Modifying themes is highly direct. Change variables like `--code-bg`, `--syn-keyword`, or `--code-line-hightlight-border` inline to match any documentation palette instantly.
