# Custom Font Utilities (`ease-font-face-custom-proposal`)

This proposal introduces a standardized pattern for importing custom fonts via `@font-face` and exposing them as utility classes, targeted for integration into the core framework.

## 📌 Feature Overview

Using custom web fonts securely and performantly requires defining `@font-face` declarations with `font-display: swap` to prevent invisible text during load. This submission demonstrates how to configure these fonts and map them to `.font-[name]` utility classes so they can be easily assigned directly in HTML, maintaining the utility-first philosophy.

Included classes in demo:
- `.font-custom-display` (Modern sans-serif)
- `.font-custom-handwriting` (Stylized cursive)

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

Apply the generated font utilities directly to text elements:

```html
<h1 class="font-custom-display">Welcome to the Dashboard</h1>
<p class="font-custom-handwriting">Signed, Administration</p>
```

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-font-face-custom-proposal/` directory to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these patterns to the core typography styles.*

## 🔗 Related Issue
Closes Issue #15549
