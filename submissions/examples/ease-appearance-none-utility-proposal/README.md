# Appearance None Utility (`ease-appearance-none-utility-proposal`)

This proposal introduces the `.appearance-none` utility class to strip default browser styling from UI elements, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

Browsers apply heavy, hard-to-override default styles to form elements like `<select>`, `<input type="checkbox">`, and `<input type="radio">`. 

The `.appearance-none` utility forces the browser to discard these native OS/browser renderings, effectively providing a blank slate so developers can apply completely custom CSS (like custom SVG arrows for select menus, or transforming a native checkbox into a toggle switch).

Included class:
- `.appearance-none`

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

Apply the utility directly to your form elements before applying custom styles:

```html
<!-- Remove the native dropdown arrow from a select menu -->
<select class="appearance-none border p-2">
  <option>Option 1</option>
</select>

<!-- Strip a checkbox down to a raw box to style as a switch -->
<input type="checkbox" class="appearance-none w-10 h-5 bg-gray-200 rounded-full">
```

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-appearance-none-utility-proposal/` directory to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate this utility to the core stylesheet.*

## 🔗 Related Issue
Closes Issue #15071
