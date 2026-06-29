# Configurable Contributor Wall

This guide outlines security and robustness guidelines regarding hardcoded script configurations, illustrating customizable grid layouts.

---

## Removing Hardcoded Configurations

Hardcoding system-specific paths (`/tmp/contributors.json`) or rigid styling assumptions (`COLS = 12`) in build scripts limits flexibility and creates execution failures across varying environments (e.g. Windows paths vs Linux paths).

### Best Practices

1. **Environment Variables**:
   Read input paths and token settings from local system environments using script configs:
   ```python
   import os
   INPUT_FILE = os.getenv("CONTRIBUTORS_FILE", "contributors.json")
   ```
2. **Arguments Parser**:
   Allow administrators to customize constants directly on execution using tools like Python's `argparse`:
   ```python
   import argparse
   parser = argparse.ArgumentParser()
   parser.add_argument('--cols', type=int, default=12)
   ```
3. **External Config JSON**:
   Read runtime configuration properties from a central config JSON settings file.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Drag the **Grid Columns** and **Grid Gap** sliders — verify the avatar grid shifts configuration parameters instantly.
3. Toggle the **Theme Accents** dropdown selector — verify the avatars transition to match selected hex values.
