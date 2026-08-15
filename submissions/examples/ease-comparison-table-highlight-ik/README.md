# EaseMotion CSS — Feature Comparison Table Highlight (`ease-comparison-table-highlight-ik`)

Responsive feature matrix comparison table component (`ease-comparison-table`) featuring active column glow highlights (`col-highlight`) and row hover shading.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a feature matrix comparison table component (`ease-comparison-table`) that highlights popular subscription plans with distinct column border glows (`col-highlight`) and interactive row hover shading.

---

## 2. How is it used?

Apply the `col-highlight` class to table header and body cells in the target featured column:

```html
<table class="ease-comparison-table">
  <thead>
    <tr>
      <th>Feature</th>
      <th class="col-highlight">Pro Studio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Motion Engine</td>
      <td class="col-highlight">Full AST</td>
    </tr>
  </tbody>
</table>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS supports structured pricing tables. The Feature Comparison Table Highlight component delivers clean 60fps row hover shading while preserving accessible semantic `<table>` markup.
