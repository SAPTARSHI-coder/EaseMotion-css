# Avatar Print Optimization

**What does this do?**
Strips the heavy background color and box-shadow from the avatar component when printed, replacing them with a thin border so the avatar shape stays visible while saving ink.

**How is it used?**
```html
<div class="avatar">AK</div>
```

**Why is it useful?**
Avatars with solid colored backgrounds print as heavy ink blocks, especially in lists or profile cards. This keeps the avatar recognizable as a bordered circle in print, consistent with EaseMotion's focus on practical, real-world UI behavior.
