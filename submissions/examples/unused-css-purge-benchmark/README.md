# Unused CSS Class Extraction & Purge Efficiency Benchmark (#82119)

An example benchmark submission evaluating unused CSS selector extraction ratios, dead-code purging efficiency, and rendering performance under strict budget limits.

## Performance Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Maximum Execution Time:** <= 100.0 ms
- **Target Frame Rate:** >= 60.0 FPS

## File Structure
- `demo.html` - Interactive purge efficiency analysis dashboard.
- `style.css` - CSS stylesheet utilizing `@layer` cascade architecture.
- `README.md` - Technical specification and performance threshold guidelines.
