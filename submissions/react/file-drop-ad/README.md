# FileDrop — drag-and-drop upload zone

> Issue: [#63566](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63566)

A drop zone with type and size validation, announced rejections, and a real keyboard path.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `accept` | `string[]` | `[]` | MIME types (`image/png`), wildcards (`image/*`) or extensions (`.pdf`). Empty accepts all. |
| `maxSize` | `number` | — | Max bytes per file. |
| `maxFiles` | `number` | — | Max file count. |
| `multiple` | `boolean` | `true` | Allow multiple selection. |
| `onFiles` | `(files: File[]) => void` | — | Receives accepted files. |
| `onReject` | `(rejections) => void` | — | Receives `{ name, reason }` for each rejected file. |
| `label` | `string` | `'Drop files here'` | Primary text. |
| `hint` | `string` | `'or click to browse'` | Secondary text. |
| `disabled` | `boolean` | `false` | Disable the zone. |
| `className` | `string` | `''` | Merged onto the root. |

## Usage

```jsx
import FileDrop from './FileDrop';
import './style.css';

<FileDrop
  accept={['image/png', 'image/jpeg', '.pdf']}
  maxSize={2 * 1024 * 1024}
  maxFiles={5}
  onFiles={(files) => upload(files)}
  onReject={(r) => console.warn(r)}
  label="Drop statements here"
  hint="PNG, JPEG or PDF · up to 2 MB each"
/>
```

## Why it fits EaseMotion

Three things hand-rolled drop zones almost always get wrong:

**Silent rejection.** An invalid file is dropped, nothing happens, and the user has no idea why. Here rejections are collected with a specific reason per file, rendered visibly, and announced through a `role="status"` live region.

**The dragleave flicker.** `dragleave` fires every time the pointer crosses a *child* element boundary, so a boolean drag state flashes on and off while moving over the zone's own contents. A depth counter — increment on enter, decrement on leave, clear only at zero — is the reliable fix. This is the bug that makes most custom drop zones feel janky.

**No keyboard path.** A pointer-only drop zone is unusable without a mouse. The zone is a real `<button>` that opens the file picker, and the underlying `<input type="file">` is taken out of the tab order so the two do not create a double stop.

Two smaller details: `preventDefault` on `dragover` is mandatory — without it the browser navigates to the dropped file and discards the page entirely, which is the single most common drop-zone bug. And the input's value is reset after each change, so selecting the same file twice still fires an event.

The file-count check runs *after* the per-file checks, so "over the 5 file limit" only applies to files that actually qualified — otherwise an oversized file could consume a slot and push a valid one out.
