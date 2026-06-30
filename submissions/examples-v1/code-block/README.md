# Styled Code Block with Copy Button

A documentation-friendly code block component with syntax highlighting-friendly styling, a copy button hover state, and a "copied!" micro-animation feedback.

## Demo

Open `demo.html` in your browser to see:

- Dark theme code block (default)
- Light theme variant
- Line numbers variant
- Inline code snippets
- Copy button with success feedback

## Usage

```html
&lt;!-- Basic code block --&gt; &lt;div class="code-block"&gt; &lt;div
class="code-block-header"&gt; &lt;span
class="code-block-lang"&gt;JavaScript&lt;/span&gt; &lt;button
class="code-block-copy" onclick="copyCode(this)"&gt; &lt;span
class="copy-icon"&gt;📋&lt;/span&gt; &lt;span
class="copy-text"&gt;Copy&lt;/span&gt; &lt;/button&gt; &lt;/div&gt; &lt;pre
class="code-block-content"&gt;&lt;code&gt;const greeting = 'Hello
World';&lt;/code&gt;&lt;/pre&gt; &lt;/div&gt; &lt;!-- Light theme --&gt; &lt;div
class="code-block code-block-light"&gt; ... &lt;/div&gt; &lt;!-- With line
numbers --&gt; &lt;div class="code-block code-block-lines"&gt; &lt;div
class="code-block-header"&gt;...&lt;/div&gt; &lt;div
class="code-block-wrapper"&gt; &lt;div class="line-numbers"&gt;
&lt;span&gt;1&lt;/span&gt; &lt;span&gt;2&lt;/span&gt; &lt;span&gt;3&lt;/span&gt;
&lt;/div&gt; &lt;pre
class="code-block-content"&gt;&lt;code&gt;...&lt;/code&gt;&lt;/pre&gt;
&lt;/div&gt; &lt;/div&gt; &lt;!-- Inline code --&gt; &lt;p&gt;Use &lt;code
class="code-inline"&gt;.ease-fade-in&lt;/code&gt; for animations.&lt;/p&gt;
```
