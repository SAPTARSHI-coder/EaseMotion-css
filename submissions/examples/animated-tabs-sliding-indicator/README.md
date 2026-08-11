# ease-tabs

Pure-CSS tabs with a smoothly sliding active indicator for **EaseMotion CSS**. Built on radio inputs — no JavaScript required.

## Usage

```html
<div class="tabs">
  <input type="radio" name="tab" id="tab1" checked>
  <label for="tab1" class="tabs-item">Overview</label>

  <input type="radio" name="tab" id="tab2">
  <label for="tab2" class="tabs-item">Analytics</label>

  <input type="radio" name="tab" id="tab3">
  <label for="tab3" class="tabs-item">Settings</label>

  <span class="tabs-indicator"></span>
</div>