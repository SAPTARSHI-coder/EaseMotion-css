# User Select Text Utility

Introduces the explicit target pointer text selection token (`.ease-select-text`) under issue #15147.

## Functional Mechanics

- **The Problem:** When applying application-wide selection bans (`user-select: none`) across dynamic UI wrappers or interactive card layouts, nested text components like tracking codes, error messages, or terminal payloads unintentionally become uncopyable.
- **The Solution:** Resets interaction parameters explicitly. The `.ease-select-text` class overrides inherited structural restrictions, allowing standard mouse and cursor highlight operations to cleanly copy textual blocks.

## Usage Layout Structure
```html
<div class="ease-select-text">
  Only this copyable string code segment can be selected...
</div>
```

Closes #15147
