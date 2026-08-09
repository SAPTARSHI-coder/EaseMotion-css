# Animation Compatibility Validator

Relates to feature request **#41361**.

## 1. What does this do?

Adds an interactive developer utility that validates combinations of EaseMotion animation classes. It analyzes input classes, warns developers about conflicting animations (e.g., classes that overwrite the same CSS property like `transform` or `opacity`), and suggests compatible alternatives.

## 2. Why is this useful for EaseMotion CSS?

As the EaseMotion library grows, developers may unintentionally combine utilities that conflict with one another (like applying `ease-slide-left` and `ease-slide-right` to the same element). An official compatibility validator reduces debugging time, improves documentation, and helps users compose complex animations effectively.

## 3. How it Works

The utility categorizes known EaseMotion animations into **Conflict Groups** based on the underlying CSS properties they animate:
- **`transform_x`**: `ease-slide-left`, `ease-slide-right`
- **`transform_y`**: `ease-slide-up`, `ease-slide-down`
- **`opacity`**: `ease-fade-in`, `ease-fade-out`
- **`shadow`**: `ease-glow`, `ease-pulse-shadow`

When a user inputs a string of classes, the JavaScript engine parses the string, checks it against the Conflict Groups, and outputs warnings if multiple classes from the same group are detected.

## 4. Features Included

- **Live Input Validation**: Paste your HTML `class="..."` string directly into the tool.
- **Smart Conflict Detection**: Accurately flags conflicting properties.
- **Auto-Resolution**: Suggests a "safe" combination by dropping redundant classes.
- **Live Visual Preview**: The `demo.html` applies the classes to a real DOM element in real-time so you can visually verify the resulting animation.
- **Quick Tests**: Built-in buttons to instantly test known valid and conflicting combinations.
