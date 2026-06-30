# ease-code-block-pr

Styled code block with dark theme, language label, line numbers, and syntax highlighting.

## Features

- Dark theme with window dots (red, yellow, green)
- Language label badge
- Copy button with hover effect
- Line numbers column
- Syntax highlighting with color classes
- Light theme variant
- Inline code variant

## Files

- `style.css` — the code block styles
- `demo.html` — working demo with HTML, CSS, JS, light theme
- `README.md` — usage documentation

## Usage

```html
&lt;div class="code-block-pr"&gt; &lt;div class="code-block-pr-header"&gt;
&lt;div class="code-block-pr-dots"&gt; &lt;span class="code-block-pr-dot
code-block-pr-dot-red"&gt;&lt;/span&gt; &lt;span class="code-block-pr-dot
code-block-pr-dot-yellow"&gt;&lt;/span&gt; &lt;span class="code-block-pr-dot
code-block-pr-dot-green"&gt;&lt;/span&gt; &lt;/div&gt; &lt;span
class="code-block-pr-lang"&gt;HTML&lt;/span&gt; &lt;button
class="code-block-pr-copy"&gt;Copy&lt;/button&gt; &lt;/div&gt; &lt;div
class="code-block-pr-body"&gt; &lt;div
class="code-block-pr-lines"&gt;1&lt;br&gt;2&lt;br&gt;3&lt;/div&gt; &lt;div
class="code-block-pr-code"&gt;code here&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
```
