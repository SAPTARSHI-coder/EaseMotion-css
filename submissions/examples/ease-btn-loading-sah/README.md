# Button Loading State with Spinner (`ease-btn-loading`)

## What does this do?
Transforms buttons into an asynchronous loading state complete with a smooth rotating CSS spinner and automatic pointer-event disabling.

## How is it used?
Toggle the `ease-btn-loading` class on any action button during API calls or data processing:
```html
<button class="btn primary ease-btn-loading">Updating Settings...</button>
```

## Why is it useful?
Resolves issue #56088 by providing consistent asynchronous visual feedback and preventing accidental duplicate button clicks during network submissions.