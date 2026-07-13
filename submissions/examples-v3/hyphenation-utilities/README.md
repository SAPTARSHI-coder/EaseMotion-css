# CSS Hyphenation Utilities

Relates to feature request **#41287**.

## 1. What does this do?

Provides utility classes that intelligently manage automatic word breaking and hyphenation using modern CSS typography properties. Includes language-aware presets and responsive typography helpers.

## 2. Why is this useful for EaseMotion CSS?

Responsive layouts often suffer from overflowing words or inconsistent text wrapping. This is especially common in narrow containers (like sidebars or mobile viewports) when long technical words, URLs, or foreign language words don't have natural break points. Native `hyphens` and `text-wrap` utilities improve readability while reducing the need for manual `<br>` tags or JavaScript-based text manipulation.

## 3. Utilities Provided

| Class | Properties | Use Case |
|---|---|---|
| `.ease-hyphenate` | `hyphens: auto`, `overflow-wrap: break-word`, `text-wrap: pretty` | General-purpose auto hyphenation (from the issue snippet) |
| `.ease-wrap-pretty` | `text-wrap: pretty`, `overflow-wrap: break-word` | Prevents orphaned words without hyphenating |
| `.ease-hyphenate-article` | Full preset with word-spacing | Best for article/blog body paragraphs |
| `.ease-no-hyphens` | `hyphens: none`, `overflow-wrap: normal` | Explicitly disables hyphenation for overrides |

## 4. How is it used?

**HTML** (matching the issue's snippet)
```html
<p class="ease-hyphenate" lang="en">
  Supercalifragilisticexpialidocious demonstrates automatic word breaking.
</p>
```

**CSS** (matching the issue's CSS snippet exactly)
```css
.ease-hyphenate {
  hyphens: auto;
  overflow-wrap: break-word;
  text-wrap: pretty;
}
```

## 5. Critical Requirement: `lang` Attribute

> ⚠️ `hyphens: auto` **requires** a `lang` attribute on the element or an ancestor (e.g., `<html lang="en">`). Without it, the browser does not know which hyphenation dictionary to use, and the property silently does nothing.

The `lang` attribute can be set on the `<html>` tag globally, or directly on individual elements for multilingual content:

```html
<!-- Global (recommended) -->
<html lang="en">

<!-- Per-element (for mixed-language content) -->
<p class="ease-hyphenate" lang="de">Donaudampfschifffahrtsgesellschaft</p>
```
