# CSS Cascade Layer Utility Packs

Relates to feature request **#41335**.

## 1. What does this do?

Introduces an organizational architecture for EaseMotion CSS using the `@layer` CSS rule. By separating styles into defined groups (`base`, `components`, `utilities`, `animations`), it makes style overrides completely predictable and eliminates the need for `!important` flags or complex selector weight battles.

## 2. Why is this useful for EaseMotion CSS?

As CSS projects grow, managing specificity becomes increasingly difficult. For a utility-first or component library like EaseMotion, developers need confidence that adding a utility class (like `.ease-bg-red`) will actually override the component's default styling. Organizing utilities with Cascade Layers provides a modern architecture to guarantee this behavior without changing existing APIs.

## 3. The Architecture

The system defines four core layers, ordered from lowest to highest priority:

1. `easemotion.base`: Resets, typography, global element defaults.
2. `easemotion.components`: Complex UI patterns (cards, buttons, navs).
3. `easemotion.utilities`: Single-purpose overrides (colors, spacing, layout).
4. `easemotion.animations`: Keyframes and animation utility classes.

## 4. How is it used?

**CSS** (matches the issue's snippet exactly)
```css
/* 1. Declare the order upfront (highest priority last) */
@layer easemotion.base,
       easemotion.components,
       easemotion.utilities,
       easemotion.animations;

/* 2. Assign styles to layers */
@layer easemotion.components {
  #my-button { background: blue; }
}

@layer easemotion.utilities {
  .ease-bg-red { background: red; }
}
```

**HTML**
```html
<!-- Because utilities is a higher layer, the class wins against the ID -->
<button id="my-button" class="ease-bg-red">Red Button</button>
```

## 5. The Specificity Problem Solved

Traditionally, an ID selector (`#my-button`) has higher specificity than a class selector (`.ease-bg-red`). If a component uses an ID, utility classes fail to override it unless they use `!important`.

With Cascade Layers, **Layer Order > Selector Specificity**. Because the `.ease-bg-red` class is inside the `utilities` layer (which is ordered *after* the `components` layer), it wins — even against an ID.

## 6. Browser Support

| Browser | Support |
|---|---|
| Chrome | 99+ ✅ |
| Firefox | 97+ ✅ |
| Safari | 15.4+ ✅ |
| Edge | 99+ ✅ |

> **Note:** Browsers that do not support `@layer` will ignore the layer wrappers but still apply the CSS inside them according to traditional specificity rules. To fully support older browsers, Polyfills or PostCSS plugins may be required for production builds.
