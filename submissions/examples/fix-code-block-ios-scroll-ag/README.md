# Fix ease-code-block iOS Horizontal Scroll

## What does this do?
Adds `-webkit-overflow-scrolling: touch` and `overscroll-behavior-x: contain`
to `.ease-code-block` to enable momentum horizontal scrolling on iOS Safari.

## How is it used?
```html
<pre class="ease-code-block" data-lang="JS"><code>// your code here</code></pre>
```

## Why is it useful?
Without `-webkit-overflow-scrolling: touch`, iOS Safari effectively ignores
`overflow-x: auto` and clips the content without any scroll affordance.
Fixes: #35828
