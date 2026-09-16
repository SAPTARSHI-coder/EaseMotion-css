\# ease-bottom-sheet



Mobile-style slide-up panel that slides from the bottom of the screen.



\## Features



\- 📱 Mobile-app style bottom sheet

\- 🎯 CSS-only using :target

\- 📏 Configurable max-height (25%, 50%, 75%, 90%)

\- 🖱️ Drag handle indicator

\- 🌟 Backdrop overlay with fade

\- ⚡ Smooth slide-up animation



\## Usage



```html

<!-- Trigger link -->

<a href="#bottom-sheet-id" class="ease-bottom-sheet-trigger">Open Sheet</a>



<!-- Bottom Sheet -->

<div id="bottom-sheet-id" class="ease-bottom-sheet">

&#x20;   <div class="ease-bottom-sheet-overlay"></div>

&#x20;   <div class="ease-bottom-sheet-container" style="max-height: 50%;">

&#x20;       <div class="ease-bottom-sheet-handle"></div>

&#x20;       <div class="ease-bottom-sheet-content">

&#x20;           Your content here

&#x20;       </div>

&#x20;   </div>

</div>

