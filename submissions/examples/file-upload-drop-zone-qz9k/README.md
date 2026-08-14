# File Upload Drop Zone

## What does this do?

A drag-and-drop file upload zone that also works as an ordinary
click-to-browse file input, using a drag-enter counter (not a boolean) to
correctly track when the pointer has actually left the zone versus merely
crossed into a child element inside it.

## How is it used?

```html
<div class="fdz-zone" ondragenter="fdzDragEnter(event)" ondragover="fdzDragOver(event)"
     ondragleave="fdzDragLeave(event)" ondrop="fdzDrop(event)">
  <input type="file" id="fdz-input" class="fdz-input" multiple onchange="fdzHandleFiles(this.files)" />
  <label for="fdz-input" class="fdz-label">Drag files here or <span class="fdz-browse">browse</span></label>
</div>
```

`fdzDepth` increments on every `dragenter` and decrements on every
`dragleave`; the zone's active styling is only removed once `fdzDepth`
returns to `0`, and `fdzDrop` resets it unconditionally.

## Why is it useful?

A drop zone with any visual children (the icon, the text, the hint) fires
its own `dragenter`/`dragleave` pair on *each* child element as the pointer
moves across them during a drag, because those events bubble and target
whatever element the pointer is currently over — not just the outer zone.
A naive implementation using a boolean "is dragging over" flag toggles that
flag off the instant the pointer crosses from the zone itself onto a child
element (a `dragleave` on the zone, immediately followed by a `dragenter`
on the child), which visibly flickers the active-state styling on and off
as the user drags across the zone's own content. Counting enter/leave pairs
instead only clears the active state once the *net* count returns to zero
— i.e., the pointer has genuinely left the zone's entire bounding area, not
just crossed an internal element boundary.

Keeping the real `<input type="file">` visible-but-transparent
(`opacity: 0`, stretched to fill the zone) rather than hidden with
`display: none` and proxied through a JS click on a hidden input means the
native `<label for>` association and default click-to-browse behavior work
unmodified — no `.click()` call needed to open the file picker, and no risk
of that proxy click being blocked by browser popup/file-picker security
heuristics that sometimes apply to synthetic clicks.
