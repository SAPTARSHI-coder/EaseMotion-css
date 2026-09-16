# Cyberpunk Code Terminal Block

1. What does this do? Renders a neon-glow developer code terminal with window control dots, line numbers, syntax color tokens, active line highlighting, and a blinking prompt cursor.
2. How is it used? Build a `.cyberpunk-terminal` container with a `.cyberpunk-terminal__bar` (window dots + title) and a `<pre class="cyberpunk-terminal__body"><code>...</code></pre>` block. Each line is a `.cyberpunk-terminal__line` (add `--active` to highlight it) with a `.cyberpunk-terminal__ln` number. Wrap tokens in `.tok--kw`, `.tok--var`, `.tok--fn`, `.tok--str`, `.tok--num`, `.tok--op`, `.tok--com` classes. Drop a `.cyberpunk-terminal__cursor` after the active-line content for the blinking cursor. Customize colors and the mono stack via the `--cct-*` variables.
3. Why is it useful? It styles code snippets for technical docs and SDK landing pages with a distinctive cyberpunk aesthetic using only HTML/CSS, and the cursor respects `prefers-reduced-motion`.
