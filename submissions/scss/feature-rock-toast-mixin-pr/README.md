# Rock Toast Mixin (Disabled State)

**What does this do?**
This SCSS mixin applies a subtle side-to-side rocking animation alongside standard disabled-state styling (like reduced opacity and a not-allowed cursor) to visually communicate that a toast or element cannot be interacted with.

**How is it used?**
```scss
@use 'ease-motion' as *;

.my-disabled-toast {
  @include rock-toast-ds(0.5s);
}