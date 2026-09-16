# Appearance Textfield Utility (`ease-appearance-textfield-utility-proposal`)

This proposal introduces the `.appearance-textfield` utility class to override default browser element rendering, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

The CSS `appearance` property is used to control native UI controls. Setting it to `textfield` instructs the browser to render the element exactly like a standard `<input type="text">`. 

The most common modern use case for this is **removing the annoying spinner arrows from `<input type="number">` fields**, giving designers total control over the input's aesthetics while preserving the semantic and validation benefits of the number type.

Included class:
- `.appearance-textfield`

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

Apply the utility directly to your number inputs:

```html
<!-- The browser's default up/down arrows will be hidden -->
<input type="number" class="appearance-textfield border rounded p-2" value="100">
```

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-appearance-textfield-utility-proposal/` directory to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate this utility to the core stylesheet.*

## 🔗 Related Issue
Closes Issue #15073
