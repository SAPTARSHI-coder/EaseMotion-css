# CSS-Only Interactive Tabs Component

Resolves Issue #59848.

This submission provides a fully functional, animated tabbed interface using absolutely zero JavaScript.

## Implementation Strategy
We utilize the "Hidden Radio Button" hack combined with Flexbox ordering:
- `input[type="radio"]` elements are hidden.
- `<label>` elements are styled as the clickable tabs and given `order: 1` so they align at the top.
- `.ease-tab-content` panes are given `width: 100%` and `order: 2` so they are forced below the row of tabs.
- The CSS Adjacent Sibling Combinator (`+`) is used to detect when a radio button is `:checked` to highlight its adjacent `<label>` and display the subsequent `.ease-tab-content`.
- The entrance is animated smoothly using `@keyframes` modifying `opacity` and `transform`.

## Included Files
- `style.css`: The reusable, scalable component CSS.
- `demo.html`: A functional example demonstrating the component.

## Integration
Once the core engine contribution freeze is lifted, `style.css` can be merged into `easemotion/components/tabs.css`.
