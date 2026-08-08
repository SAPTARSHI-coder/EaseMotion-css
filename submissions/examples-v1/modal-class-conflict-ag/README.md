# Modal Class Name Conflicts in Core

This submission demonstrates the class name conflict issues reported in the EaseMotion CSS Modal component (Issue #47781).

## 1. What does this do?
It provides a minimal, reproducible example showing how the `ease-modal` styles can be overridden and broken by generic CSS class names (like `.modal`) originating from third-party frameworks or user-defined global stylesheets.

## 2. How is it used?
Open `demo.html` in your browser. 
Click the "Open Modal" button. You will see that instead of a neatly centered modal, the element spans the full width of the screen, loses its absolute positioning, and takes on a red background with a thick red border due to the conflicting `.modal` styles in `style.css`.

### HTML Structure Example:
```html
<div id="my-modal" class="ease-modal modal">
  <!-- Content -->
</div>
```

## 3. Why is it useful?
Because the repository is currently under a code freeze for core components, this demo helps maintainers identify the exact cause of layout breakages when integrating EaseMotion modals with existing codebases. 

### Expected vs Actual Behavior
* **Expected:** The modal should appear centered on the screen with a clean white background, retaining its core `ease-modal` styles regardless of external generic classes.
* **Actual:** External styles (like `.modal`) can easily override the `ease-modal` rules, breaking the layout, positioning, and visual design.

### Potential Solutions (Post-Freeze)
1. **CSS Namespacing/Prefixing:** Ensure all internal and utility classes are strictly prefixed and do not rely on generic selectors that might clash with Bootstrap, Tailwind, or custom styles.
2. **Increase Specificity:** Use slightly higher specificity for critical layout properties in the core `.ease-modal` definition to protect against accidental overrides.
3. **Scoped CSS / Cascade Layers:** Implement CSS `@layer` to define the precedence of EaseMotion styles over unlayered external CSS.
