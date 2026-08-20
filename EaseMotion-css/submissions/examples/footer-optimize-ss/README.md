# Footer CSS Optimization (ss)

1. **What does this do?**  
   Analyzes `components/footer.css` (~21KB, 724 lines) and provides 6 strategies to reduce it to ~8KB by extracting inline SVG icons, consolidating light mode, removing duplicate transitions, merging orb code, combining breakpoints, and using shorthand.

2. **How is it used?**  
   Open `demo.html` to see the breakdown and strategies. Apply to `components/footer.css`:
   - Extract 7 inline SVGs to separate file (-4.5 KB)
   - Use `[data-theme="light"]` instead of `@media prefers-color-scheme` (-1.0 KB)
   - Set `transition` on parent, inherit on children (-0.5 KB)
   - Merge `::before`/`::after` orb declarations (-0.5 KB)
   - Fold 480px breakpoint into 768px (-0.5 KB)
   - Use `margin-inline`, remove `!important` (-0.3 KB)

3. **Why is it useful?**  
   Footer CSS is the largest component at ~21KB — bigger than tooltips (7KB), modals (7KB), and tabs (12KB). Optimizing to ~8KB makes the framework leaner and improves CDN delivery.
