# input-focus-pr

An **animated focus underline** for text inputs, textareas, and form fields. The underline expands from the center on focus with a smooth gradient animation.

## Preview

Open `demo.html` in your browser. No build step required.

## Effect Behavior

| State | Border Bottom | Underline | Label |
|-------|---------------|-----------|-------|
| Default | Gray (`--ease-color-gray-300`) | Hidden | Gray |
| Focus | Transparent | Gradient expands from center | Turns primary color |
| Error | Red (`--ease-color-danger`) | Red underline | Red label |
| Disabled | Light gray | None | Gray |

## Usage

```html
&lt;!-- Basic input --&gt;
&lt;div class="form-group"&gt;
  &lt;label class="input-label-pr"&gt;Email&lt;/label&gt;
  &lt;div class="input-focus-pr"&gt;
    &lt;input type="email" placeholder="you@example.com" /&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- With icon --&gt;
&lt;div class="input-focus-pr input-with-icon-pr"&gt;
  &lt;span class="input-icon-pr"&gt;🔍&lt;/span&gt;
  &lt;input type="text" placeholder="Search..." /&gt;
&lt;/div&gt;

&lt;!-- Error state --&gt;
&lt;div class="input-focus-pr input-error-pr"&gt;
  &lt;input type="email" value="invalid" /&gt;
&lt;/div&gt;

&lt;!-- Sizes --&gt;
&lt;div class="input-focus-pr input-sm-pr"&gt;&lt;input ... /&gt;&lt;/div&gt;
&lt;div class="input-focus-pr input-lg-pr"&gt;&lt;input ... /&gt;&lt;/div&gt;