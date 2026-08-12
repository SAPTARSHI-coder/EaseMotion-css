# css-user-profile-edit-aaniya22
Pure CSS user profile edit — a profile card with fields that switch between a read-only view and an inline editable state, with an Edit/Save button that swaps based on the current state. No JavaScript required.

## How to use
```html
<div class="ease-profile-card-aaniya22">
  <input type="checkbox" id="edit-toggle-aaniya22" class="ease-profile-checkbox-aaniya22" />
  <div class="ease-profile-header-aaniya22">
    <span class="ease-profile-avatar-aaniya22">AJ</span>
    <div class="ease-profile-fields-aaniya22">
      <label class="ease-profile-field-aaniya22">
        <span class="ease-profile-field-label-aaniya22">Name</span>
        <input type="text" class="ease-profile-input-aaniya22" value="Aaniya Joshi" />
      </label>
      <label class="ease-profile-field-aaniya22">
        <span class="ease-profile-field-label-aaniya22">Email</span>
        <input type="email" class="ease-profile-input-aaniya22" value="aaniya@example.com" />
      </label>
    </div>
  </div>
  <div class="ease-profile-actions-aaniya22">
    <label for="edit-toggle-aaniya22" class="ease-profile-edit-btn-aaniya22">Edit</label>
    <label for="edit-toggle-aaniya22" class="ease-profile-save-btn-aaniya22">Save</label>
  </div>
</div>
```

A hidden checkbox drives the edit state via `:checked ~` sibling selectors: unchecked shows read-only fields and the "Edit" button; checked enables the input fields (via `pointer-events`) and swaps to the "Save" button. Both buttons are `<label>` elements pointing at the same checkbox, so clicking either toggles the state — no JavaScript needed.
