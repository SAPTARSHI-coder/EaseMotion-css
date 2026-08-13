# EaseMotion Dynamic Input

The **EaseMotion Dynamic Input** is a lightweight, zero-JavaScript input component that delivers fluid floating label transitions and instant visual validation states using pure CSS pseudo-classes.

## Overview

Modern web interfaces frequently rely on complex JavaScript event handlers or state management frameworks (such as React `useState`) to govern input focus states, label animation vectors, and validation error displays. EaseMotion Dynamic Input replaces this overhead entirely with native CSS features.

By pairing structural DOM relationships (sibling combinators `~`) with modern CSS pseudo-classes (`:placeholder-shown`, `:valid`, `:invalid`, `:focus-within`), all dynamic visual transitions—floating label physics, border color highlights, glow rings, and error message reveals—are executed natively by the browser's render engine for 60fps performance and minimal bundle size.

## Floating Label Mechanics

The floating label animation relies on the `:placeholder-shown` pseudo-class working in tandem with the general sibling combinator `~`. 

### The Single-Space Placeholder Technique
To allow standard CSS rules to detect whether an input contains text without JavaScript, a single whitespace character (`placeholder=" "`) is provided as the input's placeholder attribute.

1. **Empty / Idle State**: When no text is typed into the input, the placeholder is considered "shown" (`:placeholder-shown`). The label positions itself over the input area as a standard placeholder.
2. **Focused or Filled State**: As soon as the user focuses the field or enters text, the placeholder is no longer shown (`:not(:placeholder-shown)`). CSS transforms scale down the label and translate it upward smoothly (`top: 0.5rem; transform: translateY(0);`).

```html
<!-- Default Text Input Variation -->
<div class="ease-input-group">
  <input type="text" id="username" class="ease-input" placeholder=" " required />
  <label for="username" class="ease-label">Username</label>
</div>
```

## Native Validation States

Using native HTML validation attributes (such as `required` or `type="email"`), CSS can evaluate the input's validity state in real time as the user types.

### State Rules
- **`:focus`**: Highlights the border with `#38bdf8` and applies an subtle glow shadow box (`0 0 0 4px rgba(56, 189, 248, 0.15)`).
- **`:not(:placeholder-shown):valid`**: When the user has entered text that meets HTML5 validation criteria, the border and label change to emerald green (`#10b981`).
- **`:not(:placeholder-shown):invalid`**: When the input content fails HTML5 validation (e.g. an invalid email string), the border and label switch to rose red (`#ef4444`).
- **Error Reveal**: Sibling error messages (`.ease-error-msg`) transition smoothly into view when `:invalid` is active.

```html
<!-- Email Input with Live Native Validation -->
<div class="ease-input-group">
  <input type="email" id="email" class="ease-input" placeholder=" " required />
  <label for="email" class="ease-label">Email Address</label>
  <span class="ease-error-msg">Please enter a valid email address</span>
</div>
```

```html
<!-- Error State Focus Variation -->
<div class="ease-input-group">
  <input type="email" id="user-email" class="ease-input" placeholder=" " required />
  <label for="user-email" class="ease-label">Work Email</label>
  <span class="ease-error-msg">Invalid format: missing '@' symbol</span>
</div>
```

## Accessibility (a11y)

To ensure complete accessibility for screen readers and assistive technology, the dynamic label implementation strictly adheres to standard HTML accessibility patterns:

1. **Explicit Label Association**: Every `<label>` element uses a `for` attribute matching the corresponding `<input>`'s `id`.
2. **Visually Hidden Single-Space Placeholder**: The `placeholder=" "` attribute contains a single space character. Screen readers recognize the `<label>` text via the `for`/`id` pairing rather than reading out empty placeholder text.
3. **Pointer Events Handling**: The `.ease-label` has `pointer-events: none;` applied in CSS so that clicks directly on the label pass through to focus the underlying `<input>`.
4. **Keyboard Navigation & High Contrast**: Outline focus rings and high-contrast color shifts (#38bdf8 focus, #ef4444 error, #10b981 success) ensure compliance with WCAG AAA visual contrast guidelines.
