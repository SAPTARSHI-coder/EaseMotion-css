# Motion Decision Matrix Documentation

## 1. What does this do?

This documentation page gives developers a structured decision matrix and comparison framework for choosing the right animation pattern for a given UI scenario based on usability, accessibility, and performance.

---

## 2. How is it used?

```html
<section class="section" id="decision-matrix">
  <div class="table-wrap">
    <table class="doc-table">
      ...
    </table>
  </div>
</section>
```

Developers browse to the scenario closest to their own component in the Decision Matrix table, check the recommended and alternative motion pattern, then read the matching Pattern Comparison card for its strengths, limitations, and best use cases before implementing it.

---

## 3. Why is it useful?

It turns motion selection from a subjective guess into a repeatable, CSS-first reference that any component can be checked against. The matrix is framework agnostic and production-inspired, mapping real UI scenarios to reusable, consistent motion patterns rather than one-off effects, which keeps a project's motion system developer friendly and coherent as it grows.
