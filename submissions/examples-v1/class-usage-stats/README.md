# Class Usage Statistics Generator

A maintainer tool that scans all `demo.html` files inside `submissions/examples/` and counts the frequency of every CSS class used. The result is a popularity report that shows which EaseMotion classes the community uses most.

## Files

- `scan_classes.sh` – Bash script (for Unix / Git Bash)
- `scan_classes.ps1` – PowerShell script (for Windows)
- `demo.html` – Explains usage in the EaseMotion demo page style
- `style.css` – Minimal styling for the demo page

## How it works

1. The script recursively finds every `demo.html` file under `submissions/examples/`.
2. It extracts the value of each `class` attribute, splits it by whitespace, and tallies each class.
3. The results are sorted from most used to least used and printed to the console.
4. A text report is also saved as `class-usage-report.txt` inside the submissions directory.

## Usage

```bash
# From the submissions/examples/class-usage-stats/ directory:
bash scan_classes.sh
```
