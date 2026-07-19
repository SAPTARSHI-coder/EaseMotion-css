# Print Utilities

Submission for EaseMotion CSS — resolves Issue #2669

## 1. What does this do?

Adds a global @media print reset plus two utility classes so any
EaseMotion-styled page prints correctly — animations cancelled,
decorative effects removed, full control over what appears on paper.

## 2. How is it used?

Hide in print:
  <nav class="print-hidden">...</nav>

Show only in print:
  <p class="print-only">Printed from MyApp</p>

Page breaks:
  <section class="page-break-before">...</section>
  <div class="page-break-avoid">...</div>

The global reset is automatic — no class needed.

## 3. Why is it useful?

Without a print reset, EaseMotion pages break in print:
- opacity:0 elements are invisible on paper
- Shimmer animations freeze mid-sweep
- Scroll bars print as stripes across the page
- Glows and shadows waste ink

This fixes all of that with zero breaking changes.

## Files

| File      | Purpose                                      |
|-----------|----------------------------------------------|
| style.css | Global print reset + utility classes         |
| demo.html | 4 demos with Print button to test            |
| README.md | This file                                    |

Proposed ease-* names: ease-print-hidden, ease-print-only,
ease-page-break-before, ease-page-break-after, ease-page-break-avoid
