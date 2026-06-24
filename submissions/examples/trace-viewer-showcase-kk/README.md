# Trace Viewer Showcase

1. **What does this do?**  
   It creates a waterfall-style trace viewer showcase for developer tools, observability panels, and performance monitoring interfaces.

2. **How is it used?**  
   Build rows with trace metadata, a span category, a timeline track, and a duration label:

   ```html
   <article class="trace-row">
     <div class="trace-meta">...</div>
     <div class="trace-type">Ingress</div>
     <div class="trace-track">
       <div class="trace-bar success"></div>
     </div>
     <div class="trace-duration">120ms</div>
   </article>
   ```

3. **Why is it useful?**  
   It adds a more advanced, structured, motion-forward interface to EaseMotion CSS and works naturally with monitoring dashboards, technical admin views, debugging tools, and data-rich product UIs.
