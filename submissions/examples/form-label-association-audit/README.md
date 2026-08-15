# Form Label Association `for` Attribute Audit

An audited, WCAG 2.1 AA compliant form layout ensuring explicit programmatic `<label for="...">` association, linked instructions via `aria-describedby`, accessible error descriptions, and Windows High Contrast Mode support.

## 🌟 Features & Accessibility Fixes

* **Explicit Label Association (WCAG 1.3.1 & 4.1.2):** Explicitly pairs `<label for="[id]">` with input controls to pass automated `axe-core` label audits and enable clickable label focus.
* **Programmatic Helper & Error Descriptions (WCAG 3.3.2):** Links field hints via `aria-describedby` and errors via `aria-errormessage`, ensuring assistive technologies read supplementary context automatically upon focus.
* **Dual-Layer Focus Rings (WCAG 2.4.7):** Ensures high-contrast focus rings on input elements across dark and light surfaces.
* **Error Handling & Focus Restoration (WCAG 3.3.1):** Programmatically identifies validation failures, applies `aria-invalid="true"`, shifts focus to the first invalid field, and announces status to screen readers.
* **High Contrast Mode Support (`forced-colors: active`):** Explicitly maps `Field`, `FieldText`, `CanvasText`, and `Highlight` system colors.

## 🚀 Usage

```html
<div class="form-group">
  <label for="user-name" class="form-label">Full Name</label>
  <input 
    type="text" 
    id="user-name" 
    class="form-input" 
    aria-required="true"
    aria-describedby="name-hint"
  >
  <span id="name-hint" class="field-hint">Enter your official name.</span>
</div>
