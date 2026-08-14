# DOM Reflow Count CI Integration Test (#82115)

An example benchmark submission implementing a CI integration test for DOM reflow counts and layout recalculation overhead during dynamic class toggles under budget threshold enforcement.

## Performance Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Maximum Execution Time:** <= 100.0 ms
- **Target Frame Rate:** >= 60.0 FPS

## File Structure
- `demo.html` - Interactive CI integration test execution dashboard.
- `style.css` - Cascade layer-based stylesheet (`@layer reset, theme, components, utilities`).
- `README.md` - Technical specification and performance budget guidelines.
