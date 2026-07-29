# Tabs Component Example (`ease-tabs-sap`)

A pure CSS-only tabs component showcasing how to organize multi-section content interfaces dynamically using the framework's semantic structure guidelines.

## Answers to Framework Evaluation Questions

### 1. What does this do?

This submission adds a highly requested, self-contained tabs layout utility that splits overlapping display panels into organized sections driven completely by native browser radio selection vectors.

### 2. How is it used?

Developers wrap content partitions inside a master modifier container, employing isolated label selectors to switch layout panels smoothly without a single line of script logic:

```html
<div class="ease-tabs-sap ease-tabs-underline-sap">
  <input
    type="radio"
    id="tab-1-sap"
    name="tabs"
    class="ease-tab-state-sap"
    checked
  />

  <div class="ease-tabs-nav-sap">
    <label for="tab-1-sap" class="ease-tab-trigger-sap">Tab Title</label>
  </div>

  <div class="ease-tabs-content-sap">
    <div class="ease-tab-panel-sap panel-1-sap">
      <p>Your tab content goes here.</p>
    </div>
  </div>
</div>
```

### 3. Why is it useful?

It fills an empty component gap identified in the project roadmap while keeping motion a first-class citizen, utilizing hardware-accelerated transforms and honoring user accessibility profiles natively.

### Save instructions:

1. Copy this code block completely.
2. Open your empty `README.md` file inside `submissions/examples/tabs-component-sap/`.
3. Paste the markdown structure and save.
