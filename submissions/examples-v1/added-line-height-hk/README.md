### What does this do?

This submission demonstrates the CSS `line-height-step` property. It creates a strict vertical rhythm for text blocks, ensuring that all typography (headings, paragraphs, blockquotes) snaps consistently to a predictable baseline grid.

### How is it used?

Apply the CSS property to an article container to instantly align the typography:

````css
.tech-review-layout {
  line-height-step: 1.5rem;
}

```html
<article class="tech-review-layout">
  <h1>Your Heading</h1>
  <p>Your paragraph text perfectly aligned.</p>
</article>
'''

### Why is it useful?
Consistent vertical rhythm drastically improves readability for long-form content, such as technical documentation, blogs, or product reviews. By forcing line heights to round up to the next multiple of the step unit, the UI feels mathematically structured and easier on the eyes.
````
