# Unused CSS Class Extraction & Purge Efficiency Benchmark (#82118)

An example benchmark submission demonstrating AST-based unused CSS class extraction, purge efficiency yield metrics, and rendering performance under budget enforcement thresholds.

## Performance Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Maximum Execution Time:** <= 100.0 ms
- **Target Frame Rate:** >= 60.0 FPS

## File Structure
- `demo.html` - Interactive extraction and purge efficiency dashboard.
- `style.css` - Cascade layer-based stylesheet (`@layer reset, theme, components, utilities`).
- `README.md` - Technical overview and performance budget guidelines.
