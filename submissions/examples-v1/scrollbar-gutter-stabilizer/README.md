# Sandbox Layout Fix: Modal Open Background Overflow Scrollbar Disappearance Layout Shift Resolution

## Overview
A structural viewport rendering fix for modal overlays and page root layouts to completely eliminate horizontal pixel layout jumping, stop fixed header tracking slips, and prevent scrollbar unmounting distortions across desktop viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Precision presentation stage hosting a scrolling emulator card underneath fixed nav rows to evaluate layout shift thresholds.
* `style.css` — Scoped layout modifier asset layer specifying native scroll tracking channel controls linked back to global tokens.

## 🐛 The Bug Resolved
Previously, appending structural layout modal containers that freeze main background content tracks (`overflow: hidden;`) triggered severe visual layout popping anomalies across desktop browsers (especially Firefox). Because desktop layout engines calculate viewport widths by packing the OS scrollbar directly onto the screen track boundary (~16px horizontal allocation), dropping the scroller forces a global container box recalculation pass. This causes fixed layouts, navigation bars, and anchored headers to jump or pop rightward instantly to absorb the empty margin lane, disrupting layout continuity.

## 🛠️ The Solution
The box model track distribution paths are optimized. By introducing `scrollbar-gutter: stable;` straight onto the page root scroller bounds container, you instruct the engine's layout router to permanently lock down an invisible buffer field matching the scrollbar width specification. When the active modal launches and toggles overflow constraints, the browser hides the visual scroll track while cleanly keeping its structural runway intact, completely preventing horizontal layout shifts without using layout calculation scripts.
