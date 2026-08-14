# Floating Label Input Animation

## 1. What does this do?
A pure CSS form input pattern that animates the label to float up and shrink smoothly when the input field is focused or contains text.

## 2. How is it used?
Wrap the input and label in an `.input-wrapper` container, ensuring the input has a `placeholder=" "` attribute:

```html
<div class="input-wrapper">
  <input class="input-field" type="text" placeholder=" " id="username" />
  <label class="input-label" for="username">Username</label>
</div>
```

## 3. Why is it useful?
It provides a smooth micro-interaction for forms with zero JavaScript, keeping layouts clean and readable while improving user experience and accessibility.