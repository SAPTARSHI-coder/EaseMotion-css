# Custom Theme Palettes Support

**What does this do?**
This submission demonstrates how to easily extend the native Light/Dark themes of EaseMotion CSS by introducing custom global theme palettes (Ocean, Forest, and Sunset) via the `data-theme` attribute.

**How is it used?**
Include the custom palettes in your CSS and switch themes dynamically by updating the `data-theme` attribute on the HTML tag (e.g., `<html data-theme="ocean">`). The core CSS framework's variables (`--ease-color-primary`, `--ease-color-bg`, etc.) will automatically update.

**Why is it useful?**
It avoids hardcoding hex colors and leverages EaseMotion CSS's powerful design token architecture. By defining a global palette object inside a `[data-theme="custom-name"]` selector, all standard components (buttons, prompts, borders) automatically hook into the new colors without requiring a JavaScript ThemeProvider context.
