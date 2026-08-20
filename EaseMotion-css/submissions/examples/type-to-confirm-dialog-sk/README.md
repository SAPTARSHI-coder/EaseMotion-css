# Type-to-Confirm Destructive Dialog

## What does this do?

A destructive dialog that enables the danger button only after typing DELETE.

## How is it used?

```html
<dialog open><input pattern="DELETE" required/><button class="danger">Delete</button></dialog>
```

Open `demo.html` in a browser to try it.

## Why is it useful?

Reduces accidental deletes with a clear disabled/ready state machine.
