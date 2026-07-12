# Animated Count Up Numbers

1. **What does this do?**
   It provides an animated counting-up number component utilizing CSS `@property`, ideal for stats sections.
2. **How is it used?**
   Apply the `.count-up-ss` class to an empty element and set the inline style `--count-target-ss: 42;`. You can append suffixes by adding modifier classes like `.count-up-plus-ss` or `.count-up-percent-ss`.
   ```html
   <div class="count-up-ss count-up-plus-ss" style="--count-target-ss: 42;"></div>
   ```
3. **Why is it useful?**
   It allows developers to create engaging, dynamic numerical statistics without relying on JavaScript, fitting perfectly into EaseMotion's CSS-first, zero-dependency philosophy.
