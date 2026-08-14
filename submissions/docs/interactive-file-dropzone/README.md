# Interactive File Drag Dropzone (Quickstart Guide)

This guide documents the implementation of a modern, interactive file drag-and-drop zone. The primary challenge of building a custom file upload interface is that the native browser `<input type="file">` is notoriously difficult to style.

## 1. The HTML Pattern (Hidden Input + Label)

The solution is to visually hide the native file input and construct a custom UI using a `<label>` element that points to it via the `for` attribute. Clicking anywhere on the label will automatically trigger the hidden input.

```html
<div class="dropzone-container">
    
    <!-- 1. Visually hide the native input using 'sr-only' -->
    <input 
        type="file" 
        id="upload-input" 
        class="dropzone-input sr-only" 
        multiple
    >
    
    <!-- 2. The label acts as the visual dropzone -->
    <label for="upload-input" class="dropzone-label">
        <div class="dropzone-content">
            <svg>...</svg>
            <span class="dropzone-title">Drag & drop files here</span>
            <span class="dropzone-subtitle">or click to browse</span>
        </div>
    </label>
</div>
```

## 2. Visually Hiding the Input (Accessibility)

**Do not** use `display: none` or `visibility: hidden` to hide the file input. Doing so removes it from the browser's accessibility tree, making it impossible for keyboard users to focus on it.

Instead, use a visually hidden utility class (e.g., `sr-only`) that shrinks the input to a 1px square while keeping it technically focusable.

```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

## 3. Keyboard Navigation (The Adjacent Sibling Selector)

Because the physical input is invisible, when a keyboard user presses `Tab` and focuses on it, they won't know they've done so. 

We solve this using CSS. When the hidden input receives `:focus-visible`, we use the adjacent sibling combinator (`+`) to apply a focus ring to the custom `<label>` that immediately follows it.

```css
/* When the hidden input receives focus... */
.dropzone-input:focus-visible + .dropzone-label {
    
    /* ...draw a high-contrast outline on the label */
    outline: 3px solid #3b82f6;
    outline-offset: 4px;
    
    /* Optional: Trigger the same visual hover state */
    border-color: #3b82f6;
    background-color: #eff6ff;
}
```

By connecting the hidden input's focus state to the label's visual state, the component behaves exactly like a native, accessible button.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
