# Line Height Utilities (`ease-line-height-utilities-proposal`)

This proposal introduces a set of CSS utility classes to manage the `line-height` typography property, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

These utilities provide developers with direct, granular control over vertical text rhythm (often referred to as "leading" in typography). This ensures text maintains legibility across different contexts like tight headings or loose paragraphs.
Included classes:

- `.leading-none` (1)
- `.leading-tight` (1.25)
- `.leading-snug` (1.375)
- `.leading-normal` (1.5)
- `.leading-relaxed` (1.625)
- `.leading-loose` (2)

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`.

You can apply the proposed utilities to any text element (e.g., headings, paragraphs, spans):

```html
<!-- Tight leading for a large heading -->
<h1 class="leading-tight text-4xl">
  Breaking News Title That Might Span Multiple Lines
</h1>

<!-- Relaxed leading for long-form reading content -->
<p class="leading-relaxed">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</p>
```

_Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-line-height-utilities-proposal/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet._

## 🔗 Related Issue

Closes Issue #16440
