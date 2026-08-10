# CSS-Only Animated Tabs Component

## Description
A clean, modern, and fully interactive tabs component built entirely with pure CSS. It features smooth content transitions with fade and slide effects, an animated sliding underline indicator that moves between tabs, and active state highlighting. Uses the radio button hack for state management, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure using hidden radio inputs, tab labels, a sliding indicator, and content panels.
- `style.css`: Contains the layout, the sliding indicator animation, content fade/slide transitions, and active state styling.

## How to use
1. Open `demo.html` in your browser and click the tabs to see the smooth transitions.
2. Copy the HTML and CSS into your project.
3. **Structure:**
   - Add hidden radio inputs with unique IDs (e.g., `tab-1-qn`, `tab-2-qn`)
   - Create labels with `for` attributes matching the radio IDs
   - Add a `.tab-indicator-qn` div inside the labels container
   - Create content panels with classes like `.tab-panel-1-qn`, `.tab-panel-2-qn`
4. **Customization:**
   - **Number of Tabs:** To add more tabs, adjust the `width` of `.tab-indicator-qn` (e.g., for 4 tabs: `width: 25%`). Update the `translateX` values in the CSS (0%, 100%, 200%, 300%).
   - **Colors:** Change the active tab color and indicator color by modifying `#3498db` in the CSS.
   - **Animation Speed:** Adjust the `0.4s` transition durations to make the sliding and fading faster or slower.
   - **Content Height:** Modify the `min-height: 250px` in `.tab-content-wrapper-qn` to accommodate more or less content.

## Adding More Tabs
To add a 4th tab:
1. Add a new radio input: `<input type="radio" name="tabs-qn" id="tab-4-qn" class="tab-radio-qn">`
2. Add a new label: `<label for="tab-4-qn" class="tab-label-qn"><span>Support</span></label>`
3. Add a new content panel: `<div class="tab-content-qn tab-panel-4-qn">...</div>`
4. Update CSS:
   - Change `.tab-indicator-qn` width to `25%`
   - Add: `#tab-4-qn:checked ~ .tab-labels-qn .tab-indicator-qn { transform: translateX(300%); }`
   - Add: `#tab-4-qn:checked ~ .tab-content-wrapper-qn .tab-panel-4-qn { opacity: 1; visibility: visible; transform: translateY(0); }`