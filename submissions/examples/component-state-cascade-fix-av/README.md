# Component State Modifiers Cascade Refactor

## What does this do?
Proposes a complete architectural refactor of the `components/` directory to permanently rip out all `!important` flags from component state modifiers (such as `:disabled`, `.is-active`, or `.is-loading`).

## How is it used?
Maintainers and contributors must rip out the `!important` tags sprinkled aggressively across the component files. Instead of using brute-force overrides, components must rely on natural CSS specificity and source order to style modifiers. 

For example, a disabled button should naturally override the base button simply by being declared lower in the stylesheet, or by doubling up the selector (`.ease-btn:disabled, .ease-btn[disabled]`) to safely bump specificity by exactly 1 class-weight without nuking the cascade.

To strictly enforce this, we propose adding Stylelint to the pipeline with the `declaration-no-important` rule activated:
```json
"rules": {
  "declaration-no-important": true
}
```

## Why is it useful?
Currently, files like `buttons.css`, `cards.css`, `modals.css`, and `masonry.css` widely use `!important` to force state overrides. This completely breaks the natural cascade. If a developer using EaseMotion tries to customize how a disabled button looks (e.g., for a global Dark Mode implementation), their custom CSS will silently fail. They are then forced to write their own `!important` hacks to fight the framework, resulting in a toxic, unmaintainable "specificity war" across their entire application. Removing `!important` makes the framework natively predictable, accessible, and a joy to customize.
