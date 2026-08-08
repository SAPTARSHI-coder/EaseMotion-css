# Neumorphic Date Picker

A premium, medical-dashboard-themed scheduler date picker built using soft UI extrusions, inset recesses, and CSS-only calendar month selectors.

## 1. What does this do?
This component renders an interactive, neumorphic patient appointment scheduling console, demonstrating soft-shadow date cells that recess dynamically on click.

## 2. How is it used?

Implement the month toggles and calendar structure inside your clinical dashboard layouts:
```html
<!-- Sibling toggles -->
<input type="radio" id="month-july" name="month-select" class="ctrl-month-july" checked />
<input type="radio" id="month-august" name="month-select" class="ctrl-month-august" />
<input type="radio" id="day-12" name="calendar-day" class="ctrl-day-12" checked />

<!-- Calendar Panel -->
<div class="panel-card calendar-panel neumorphic-extruded">
  <!-- Month Tabs Navigation -->
  <div class="calendar-navigation">
    <label for="month-july" class="month-tab lbl-month-july neumorphic-extruded">July 2026</label>
    <label for="month-august" class="month-tab lbl-month-august neumorphic-extruded">August 2026</label>
  </div>

  <!-- Day Selection Cell Grid -->
  <div class="calendar-sheet sheet-july">
    <label for="day-12" class="day-cell day-actionable lbl-day-12 neumorphic-extruded">12</label>
  </div>
</div>
```

## 3. Why is it useful?
Soft UI or neumorphic design requires precise double-shadow configurations that mimic physical textures. 

This component fits EaseMotion's philosophy by:
- **No-JS State Synchronization:** Links parent check states (`:checked`) to child elements to update doctor locations, available schedules, selected dates, and billing receipts without a single line of JavaScript.
- **Perfect Neumorphic Lighting:** Predefines light-source angles (`--med-shadow-extruded-md`, `--med-shadow-recessed`) using slate pastels to ensure depth rendering across different browsers.
- **Fully Accessible UI Structure:** Employs standard screen reader announcements, high-contrast text ratios for clinical users, responsive viewport wraps, and motion-reduction configurations.

## 4. Soft Shadow Presets API

Apply these classes directly to container divs to trigger soft depth:

- `.neumorphic-extruded`: Creates a raised tactile button.
- `.neumorphic-recessed`: Creates a sunken tactile tray or field.

---
*Created as a submission for GSSOC-26  under submissions/examples/neumorphic-date-picker-medical/*
