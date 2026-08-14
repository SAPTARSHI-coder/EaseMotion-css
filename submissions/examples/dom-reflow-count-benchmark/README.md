# DOM Reflow Count Benchmark during Dynamic Class Toggles (#82114)

An example benchmark submission auditing DOM reflow counts and layout recalculation overhead during dynamic class state toggles under strict budget thresholds.

## Performance Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Maximum Execution Time:** <= 100.0 ms
- **Target Frame Rate:** >= 60.0 FPS

## File Structure
- `demo.html` - Interactive DOM reflow audit dashboard.
- `style.css` - Cascade layer-based stylesheet (`@layer reset, theme, components, utilities`).
- `README.md` - Technical specification and performance budget guidelines.
