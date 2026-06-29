# Orphan Submission Folder Finder

A maintainer tool that scans the `submissions/examples/` directory and flags folders that are not listed in a tracking file. Helps identify submissions that may be unused or need integration.

## Files

- `find_orphans.sh` – Bash script (for Unix / Git Bash)
- `find_orphans.ps1` – PowerShell script (for Windows)
- `tracking.json` – Sample integration list (edit to include your known integrated folders)
- `demo.html` – Explains usage in the EaseMotion demo page style

## How it works

1. The script reads `tracking.json`, which contains an `integrated` array of folder names that are known to be integrated.
2. It then scans all folders inside `submissions/examples/` (one level up from the script).
3. Any folder **not** present in the tracking list is reported as an orphan with a warning.
4. A final summary shows the total number of folders and the orphan count.

## Usage

```bash
# From the submissions/examples/orphan-finder/ directory:
bash find_orphans.sh