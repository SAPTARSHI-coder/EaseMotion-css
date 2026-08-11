# Customer Lifecycle Stage Tabs Feature

Submits layout utility architectures and segment headers for marketing pipeline tracking interfaces (`.ease-lifecycle-tabs`, `.ease-lifecycle-tab`) under issue #15328.

## Functional Mechanics

- **The Problem:** Sorting client leads or customer directories across separate phases (Leads, MQL, SQL, Opportunity) using standard tab controls or bulky sidebar menus consumes too much layout space. This setup often causes horizontal breaking issues on small responsive viewport screens.
- **The Solution:** Scroll-safe inline marketing funnel headers. This utility class formats a clean, tabbed workflow bar that naturally drops into a scroll-anchored horizontal track on mobile screens. It pairs clear active state bottom lines with embedded count badges to keep pipeline operators focused on volume metrics.

## Usage Layout Structure
```html
<div class="ease-lifecycle-tabs">
  <div class="ease-lifecycle-tab active">
    Marketing Segment Label 
    <span class="stage-count-badge">05</span>
  </div>
</div>
```

Closes #15328
