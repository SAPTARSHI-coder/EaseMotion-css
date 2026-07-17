# CSS Initial Letter Showcase

## 1. What does this do?
This showcase page demonstrates the usage of the CSS `initial-letter` property to create decorative drop caps and premium editorial layouts in article typography. It highlights how the property allows browsers to automatically scale and sink the first letter of a text block relative to the surrounding line height, avoiding fragile layout offsets.

## 2. How is it used?
You can control the drop cap behavior by targeting the `::first-letter` pseudo-element of your paragraph tags and setting the `initial-letter` property to represent the number of lines high the character should span:

### Simple 3-Line Drop Cap:
```css
p::first-letter {
    initial-letter: 3;
    -webkit-initial-letter: 3; /* Required for WebKit/Safari support */
}
```

### Styled 4-Line Accent Cap:
```css
p::first-letter {
    initial-letter: 4;
    -webkit-initial-letter: 4;
    color: #a855f7;
    font-weight: 700;
}
```

### Graceful Fallback:
For browsers that do not natively support the property (such as Firefox behind flags), a feature query using `@supports` floats the first letter as a fallback:
```css
@supports not (initial-letter: 3) and not (-webkit-initial-letter: 3) {
    p::first-letter {
        float: left;
        font-size: 3.5em;
        line-height: 0.85;
        margin-top: 0.1em;
        margin-right: 0.15em;
    }
}
```

## 3. Why is it useful?
Using `initial-letter` aligns directly with EaseMotion's philosophy of offering clean, responsive, and robust utility styles. Unlike older float-based drop caps which easily break when line heights, containers, or viewport widths change, `initial-letter` dynamically calculates the required spacing natively. This guarantees clean, polished editorial typography across all responsive display sizes.
