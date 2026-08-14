# Engine Showcase: Programmatic Stagger Delays (engine-stagger-viidhii19)

### 1. What does this do?
This feature introduces a native AST token (`em="stagger-[delay]"`) that dynamically calculates and applies cascading animation delays to all child elements.

### 2. How is it used?
Apply the `em="stagger-[delay]"` token to any parent container.
```html
<ul id="list" em="stagger-150">
    <li class="ease-slide-up">Item 1</li>
    <li class="ease-slide-up">Item 2</li>
</ul>
```

### 3. Why is it useful?
It eliminates the need to manually append `ease-delay-*` classes to every child element, ensuring seamless and scalable dynamic list rendering in modern JS frameworks while staying true to EaseMotion's philosophy of effortless, data-driven animations.

## AST Compiler Logic

When the `compiler.js` processes the DOM/AST, it identifies parent elements containing the `em="stagger-[delay]"` token to programmatically distribute animation delays across children.

### Implementation Plan

1. **Token Detection**: Traverse the AST to find elements matching the `em^="stagger-"` attribute selector.
2. **Delay Extraction**: Parse the token to extract the numeric delay modifier. For `em="stagger-100"`, the value is `100`.
3. **CSS Block Generation**: Dynamically construct a `<style>` block using CSS `nth-child` pseudo-classes to apply mathematical calculations based on the extracted delay parameter.
4. **Injection**: Append the constructed `<style>` rules into the document `<head>` to execute the dynamic delays natively.

```css
/* The AST compiler generates and injects this logic: */
#list > *:nth-child(n) { 
    animation-delay: calc(n * 100ms); 
}
```

This programmatic approach ensures scalable list animations in modern frameworks without needing explicit `ease-delay-*` classes on every child element.
