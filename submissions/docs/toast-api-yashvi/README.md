# Programmatic Toast Notification API

## What does this do?

It implements a client-side JavaScript Toast notification manager (`core/toast.js`) and dynamic stacking layouts (`components/toast.css`) that allow developer-friendly popups across multiple viewport anchors.

## How is it used?

Include the CSS and script and invoke `EaseToast.show` programmatically:

```html
<script src="core/toast.js"></script>
<script>
  EaseToast.show({
    title: "Notification",
    message: "Action completed successfully!",
    type: "success",
    position: "top-right",
    duration: 3500,
  });
</script>
```

### Options

| Parameter  | Type   | Default       | Description                                                                                               |
| ---------- | ------ | ------------- | --------------------------------------------------------------------------------------------------------- |
| `title`    | String | `""`          | Strong header text of the toast.                                                                          |
| `message`  | String | `""`          | Description/body text of the toast.                                                                       |
| `type`     | String | `"info"`      | Toast style: `success`, `danger`, `warning`, `info`.                                                      |
| `position` | String | `"top-right"` | Viewport location: `top-left`, `top-right`, `top-center`, `bottom-left`, `bottom-right`, `bottom-center`. |
| `duration` | Number | `3000`        | Lifetime in milliseconds before auto-removal (set to `0` for manual close).                               |

## Why is it useful?

It converts static toast styling into an automated dynamic stacking notification registry, preventing developers from manually copy-pasting HTML markup or writing timer functions themselves.
