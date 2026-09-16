# Student Profile — Dynamic Projects & Experience Repeater

## What does this do?

A dynamic form repeater component for student profiles that allows adding, editing, and removing multiple project and work experience entries. Built with vanilla JS DOM manipulation and animated CSS transitions.

## How is it used?

Open `demo.html` to see the profile form with pre-seeded entries. Use the **+ Add Project** and **+ Add Experience** buttons to append new blocks. Click **✕ Remove** on any block to delete it with a slide-out animation. The **Save Profile** button collects all data into a structured JSON object.

## Key features

- **Add More** buttons append new reusable input blocks
- **Remove** buttons delete entries with a slide-out animation
- **Empty states** shown when no entries exist
- **Pre-seeded** with 2 projects and 1 experience for demo
- **Save button** serializes all data into the expected `{ projects: [...], experience: [...] }` schema format
- **Fully responsive** — stacks inputs vertically on mobile

## CSS concepts used

- Flexbox row layouts for compact multi-field rows
- 3-column layout for company/role/duration inputs
- Animated add (slide-in) and remove (slide-out) via CSS classes
- Dashed "add" buttons for clear visual affordance
- Danger-styled remove buttons

## EaseMotion classes used

This demo imports `easemotion.css` for base styling and extends with custom repeater-specific styles.
