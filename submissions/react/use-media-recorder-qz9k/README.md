# useMediaRecorder

Wraps the `MediaRecorder` API for recording audio/video from a
`MediaStream`, collecting data chunks internally and exposing a ready-to-use
blob URL once recording stops.

## API

```js
const { status, blobUrl, start, stop, pause, resume } = useMediaRecorder(stream, options);
```

| Return | Description |
|---|---|
| `status` | `'idle' \| 'recording' \| 'paused' \| 'stopped'` |
| `blobUrl` | Object URL for the recorded blob, set once recording stops. |
| `start` / `stop` / `pause` / `resume` | Recording controls. |

`options` is passed through directly to the `MediaRecorder` constructor
(e.g. `{ mimeType: 'video/webm;codecs=vp9' }`).

## Usage

```jsx
function VoiceNoteRecorder() {
  const [stream, setStream] = useState(null);
  const { status, blobUrl, start, stop } = useMediaRecorder(stream);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(setStream);
  }, []);

  return (
    <div>
      <button onClick={start} disabled={!stream || status === 'recording'}>Record</button>
      <button onClick={stop} disabled={status !== 'recording'}>Stop</button>
      {blobUrl && <audio controls src={blobUrl} />}
    </div>
  );
}
```

## Why is it useful?

The raw `MediaRecorder` API delivers recorded data in chunks via repeated
`dataavailable` events (the exact chunking behavior varies by browser and
`timeslice` setting), which means every consumer has to independently
implement "accumulate chunks in an array, then assemble them into one Blob
once `stop` fires" — easy to get wrong by forgetting to filter zero-size
chunks, or by reading the accumulated chunks before the final `dataavailable`
event for the last chunk has actually landed. This hook does that
bookkeeping once: chunks are collected in a ref (not state, since
intermediate chunks don't need to trigger re-renders) and only assembled
into a `Blob` — then converted to an object URL — inside the recorder's own
`onstop` handler, guaranteeing the blob is complete.

Object URLs from `URL.createObjectURL` hold a reference to the underlying
blob data in memory until explicitly revoked; this hook calls
`URL.revokeObjectURL` on the *previous* URL whenever a new one is created
(re-recording produces a new blob), preventing each successive recording
from leaking the previous one's memory for the lifetime of the page.
