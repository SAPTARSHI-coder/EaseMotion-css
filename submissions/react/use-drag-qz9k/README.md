# useDrag

Tracks pointer-drag delta from the drag's starting point, using the Pointer
Events API so the same code handles mouse, touch, and pen input.

## API

```js
const { dragging, delta, handlers } = useDrag(onDragEnd);
```

| Return | Type | Description |
|---|---|---|
| `dragging` | `boolean` | Whether a drag is currently in progress. |
| `delta` | `{ x: number, y: number }` | Offset from the drag's start point. |
| `handlers` | `object` | Spread onto the draggable element. |

`onDragEnd(delta)` is called once when the drag ends.

## Usage

```jsx
function DraggableCard() {
  const { dragging, delta, handlers } = useDrag((finalDelta) => {
    console.log('dropped at offset', finalDelta);
  });

  return (
    <div
      {...handlers}
      style={{
        transform: `translate(${delta.x}px, ${delta.y}px)`,
        cursor: dragging ? 'grabbing' : 'grab',
        touchAction: 'none',
      }}
    >
      Drag me
    </div>
  );
}
```

## Why is it useful?

Implementing drag tracking with separate `mousedown`/`mousemove`/`mouseup`
and `touchstart`/`touchmove`/`touchend` listeners means writing and
maintaining two parallel code paths for what's conceptually one gesture.
Pointer Events unify mouse, touch, and pen input behind a single event
model, so `onPointerDown`/`onPointerMove`/`onPointerUp` alone cover every
input type this hook needs to support.

`setPointerCapture`/`releasePointerCapture` matter specifically for fast
drags: without pointer capture, a drag that moves the cursor off the
original element mid-gesture (easy to do with a fast flick) stops
delivering move events to that element, silently truncating the drag.
Capturing the pointer on `pointerdown` guarantees the same element keeps
receiving `pointermove`/`pointerup` for that pointer regardless of where the
cursor physically travels, until the drag genuinely ends.

Consumers still need `touch-action: none` in their own CSS on the draggable
element — without it, a touchscreen browser can claim the gesture for
native scrolling before Pointer Events ever see it, which this hook can't
prevent from JS alone.
