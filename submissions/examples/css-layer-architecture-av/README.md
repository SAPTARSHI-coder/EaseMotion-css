# CSS `@layer` Architecture (Eliminating Specificity Wars)

## What does this do?
Proposes a massive architectural structural refactor across the entire framework to aggressively eliminate CSS Specificity Wars by wrapping all core variables, utilities, and components into modern CSS Cascade Layers (`@layer`).

## How is it used?
Maintainers and core contributors must systematically audit all files across `core/*.css` and `components/*.css` (spanning 15+ core files). 

At the very root of the `easemotion.css` entry file, we must define a strict global layer hierarchy:
```css
/* ✅ GOOD: Establish the global cascade hierarchy at the highest level */
@layer easemotion-reset, easemotion-core, easemotion-components, easemotion-utilities;
```

Then, every single file in the framework must be wrapped in its corresponding layer. For example, inside `components/buttons.css`:
```css
/* ✅ GOOD: Wrap the entire component file in its designated architectural layer */
@layer easemotion-components {
  .ease-btn {
    background: blue;
  }
}
```

## Why is it useful?
Currently, EaseMotion is incredibly frustrating for downstream enterprise developers to customize. Because the framework currently lacks a CSS `@layer` architecture, if an enterprise user writes custom CSS to override an EaseMotion component, their custom CSS constantly gets ignored by the browser due to "specificity leaks." The framework's internal CSS selectors are often built too highly specific (e.g., `.ease-card > .ease-card-header h2:hover`), forcing downstream developers to literally litter their entire corporate codebase with toxic `!important` hacks just to change a simple background color.

By wrapping the entire framework inside an `@layer` block, we permanently fix this. In modern CSS, layers defined later in a document *always* override layers defined earlier, completely regardless of CSS selector specificity! A developer can configure their app so that their `custom-app` layer natively comes after the `easemotion` layer. This allows them to flawlessly override a highly complex, deeply nested EaseMotion selector using a completely basic, weak selector like `.my-card`, and it will work perfectly on the very first try without ever needing `!important`.
