# Gzip vs Brotli Compression Efficiency Benchmark (#82121)

An example benchmark submission evaluating payload compression efficiency ratios between Gzip and Brotli algorithm standards for production minified CSS bundles under strict budget limits.

## Performance Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Maximum Execution Time:** <= 100.0 ms
- **Target Frame Rate:** >= 60.0 FPS

## File Structure
- `demo.html` - Interactive compression efficiency analysis dashboard.
- `style.css` - Stylesheet implementation using `@layer` cascade isolation.
- `README.md` - Technical specification and benchmark threshold guidelines.
