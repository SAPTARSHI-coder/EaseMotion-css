# Timeline Component

1. **What does this do?** Provides a chronological timeline component with vertical line, circular dots, date/title/text per event, active state, and color variants (default, success, warning, error) — pure CSS.

2. **How is it used?**
   ```html
   <div class="timeline">
     <div class="tl-item tl-active">
       <div class="tl-dot"></div>
       <div class="tl-content">
         <time class="tl-date">Jun 10</time>
         <h3 class="tl-title">Event title</h3>
         <p class="tl-text">Description text.</p>
       </div>
     </div>
   </div>
   ```

3. **Why is it useful?** Timelines present events in chronological order for activity feeds, project histories, and release logs. Pure CSS, dark mode support, semantic time elements.
