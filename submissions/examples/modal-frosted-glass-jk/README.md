# Modal Frosted Glass Demo

## What does this do?

This demo creates a frosted glass modal with a blurred backdrop, smooth slide-up animation, and animated close button.

## How is it used?

Open the page and click the **Open Modal** button to display the modal.

```html
<div id="modal" class="modal">
  <div class="modal-content">
    <!-- your content -->
    <button id="closeModal" class="close-btn">Close</button>
  </div>
</div>
​```

​```js
modal.classList.add("show");    // open
modal.classList.remove("show"); // close
​```

## Why is it useful?

This component provides a modern and visually appealing modal effect that can be used for dialogs, login forms, notifications, and other popup content.