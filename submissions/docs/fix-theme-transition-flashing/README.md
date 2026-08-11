# Fix: Theme Transition Flashing

Resolves layout flashing issues in `base.css` where document-wide element transitions trigger visual color flashes during color-scheme toggles.

## What does this do?
- **Preload Blocker:** Introduces transition suppression class utilities to bypass layout styling flashes when modifying variables.