# Ease Scoped Widget (@scope Component Isolation)

Demonstration of modern native CSS component style isolation and scoping using the `@scope` at-rule with donut hole scoping (`to (.ease-slot)`).

## 1. What does this do?
The `@scope` at-rule natively encapsulates styles within a specific DOM subtree (`.ease-complex-widget`). It prevents internal component styles from leaking out into the rest of the page, while simultaneously allowing precise style isolation without breaking semantic element selectors (`.title`, `img`, `.btn`). Furthermore, by defining a lower boundary (`to (.ease-slot)`), slotted content inside the component explicitly bypasses component styles and falls back to global styles—creating a true native "donut" scope.

## 2. How is it used?
Styles are encapsulated using `@scope` with a scope root and an optional scope limit (donut hole):

```css
@scope (.ease-complex-widget) to (.ease-slot) {
  :scope {
    background: #1e293b;
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid #334155;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .title {
    color: #f8fafc;
    font-size: 1.5rem;
    font-weight: 800;
    text-decoration: none;
    margin: 0;
  }

  img {
    border: 2px solid #3b82f6;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    object-fit: cover;
  }

  .btn {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn:hover {
    background: #2563eb;
  }
}
```

## 3. Why is it useful?
- **Kills BEM Verbosity**: Eliminates complex class naming conventions like `.ease-complex-widget__title--large` or `.ease-complex-widget__button`. Simple, semantic class names (`.title`, `.btn`, `img`) can be reused safely across components without risk of global collision.
- **No Build Tools Required**: Replaces JavaScript-heavy CSS Modules, CSS-in-JS runtimes, and bundler transformations with pure, native browser CSS.
- **Lighter than Shadow DOM**: Provides style encapsulation without the architectural complexity, DOM encapsulation barriers, or accessibility/form interaction drawbacks of Web Components Shadow DOM.
- **Donut Hole Scoping**: Enables slot-based component architectures where slotted child content retains global or parent styling rules automatically.
