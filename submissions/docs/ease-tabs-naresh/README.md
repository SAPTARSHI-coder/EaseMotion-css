# Sliding Navigation Tabs Component

## 1. What does this do?
This component introduces lightweight, pure CSS sliding navigation tabs featuring active indicators (underline or pill capsule) that slide between selected elements via `transform: translateX` and trigger fade-in animations on tab content panels.

## 2. How is it used?
Structure the tabs navigation and panel containers using hidden radio inputs and sibling label elements:

```html
<div class="ease-tabs ease-tabs--3">
  <!-- Hidden Radios -->
  <input type="radio" id="tab-3-1" name="tab-group-3" checked>
  <input type="radio" id="tab-3-2" name="tab-group-3">
  <input type="radio" id="tab-3-3" name="tab-group-3">

  <!-- Navigation Row -->
  <div class="ease-tabs__nav" role="tablist">
    <label for="tab-3-1" class="ease-tab" role="tab">Account</label>
    <label for="tab-3-2" class="ease-tab" role="tab">Preferences</label>
    <label for="tab-3-3" class="ease-tab" role="tab">Security</label>
    <div class="ease-tabs__underline" aria-hidden="true"></div>
  </div>

  <!-- Content Panels -->
  <div class="ease-tabs__content">
    <div id="panel-3-1" class="ease-tab-panel" role="tabpanel">Account Content</div>
    <div id="panel-3-2" class="ease-tab-panel" role="tabpanel">Preferences Content</div>
    <div id="panel-3-3" class="ease-tab-panel" role="tabpanel">Security Content</div>
  </div>
</div>
```

### Layout Modifiers
- `.ease-tabs--2`: Configures equal widths for 2 tabs (50% each).
- `.ease-tabs--3`: Configures equal widths for 3 tabs (33.333% each).
- `.ease-tabs--4`: Configures equal widths for 4 tabs (25% each).

### Indicator Style Modifiers
- `.ease-tabs--pill`: Alters the indicator style from a bottom underline to a sliding background capsule behind the active tab text.

---

## 3. Why is it useful?
Tabs are essential for clean, compact page structures, helping users toggle between contexts without page reloads. Using radio inputs and sibling selectors eliminates the need for JavaScript wrappers, keeping the page layout light, SEO-friendly, and responsive.
