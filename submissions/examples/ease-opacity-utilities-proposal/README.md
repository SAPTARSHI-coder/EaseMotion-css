# Opacity Utilities (`ease-opacity-utilities-proposal`)

This proposal introduces a comprehensive scale of CSS utility classes to manage the `opacity` property, targeted for integration into `core/utilities.css`.

## 📌 Feature Overview

These utilities provide standard increments of transparency, allowing developers to quickly adjust the visual weight of elements without writing custom CSS.
Included classes span from `0` to `100`:
- `.opacity-0`
- `.opacity-5`
- `.opacity-10`
- `.opacity-20`
- `.opacity-25`
- `.opacity-30`
- `.opacity-40`
- `.opacity-50`
- `.opacity-60`
- `.opacity-70`
- `.opacity-75`
- `.opacity-80`
- `.opacity-90`
- `.opacity-95`
- `.opacity-100`

## ⚙️ How to Use

To test this feature locally, simply open the `demo.html` file in your web browser. The styles are contained in `style.css`. 

You can apply the proposed utilities to any element. They are especially useful in combination with hover states or transitions:

```html
<!-- An image that is 50% opaque by default -->
<img src="photo.jpg" class="opacity-50 hover-animation" />
```

*Note: As per the contributing guidelines, this proposal is implemented inside `submissions/examples/ease-opacity-utilities-proposal/` to avoid directly modifying core files and causing zero deletions. The maintainer can safely migrate these classes to the core utility stylesheet.*

## 🔗 Related Issue
Closes Issue #16446
