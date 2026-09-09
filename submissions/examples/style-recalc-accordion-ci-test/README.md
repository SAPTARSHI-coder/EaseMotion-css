# Style Recalculation Duration Audit for Accordions CI Integration Test (#82107)

An example benchmark submission implementing a CI integration test for auditing DOM style recalculation duration and CSS rule invalidation during accordion toggles.

## Performance Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Maximum Recalc Time:** <= 16.0 ms
- **Target Frame Rate:** >= 60.0 FPS

## File Structure
- `demo.html` - Interactive style recalculation duration CI test dashboard.
- `style.css` - Cascade layer-based stylesheet with layout and style containment rules.
- `README.md` - Technical specification and performance budget guidelines.
