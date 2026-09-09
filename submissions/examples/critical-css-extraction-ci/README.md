# Critical CSS Extraction Benchmark for Above-the-Fold Loading (#82077)

An example benchmark submission implementing a CI integration test for validating critical CSS extraction boundaries, above-the-fold render-blocking payload limits, and First Contentful Paint (FCP) latency.

## Performance Budgets
- **Maximum Bundle Size:** <= 50.0 KB (51,200 bytes)
- **Maximum Extraction Time:** <= 16.0 ms
- **Target Frame Rate:** >= 60.0 FPS

## File Structure
- `demo.html` - Interactive critical CSS extraction CI test dashboard.
- `style.css` - Cascade layer-based stylesheet with layout and style containment.
- `README.md` - Technical specification and performance budget guidelines.
