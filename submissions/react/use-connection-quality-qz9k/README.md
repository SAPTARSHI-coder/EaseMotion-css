# useConnectionQuality

Reports network connection quality via the Network Information API —
`effectiveType` (`'4g'`, `'3g'`, ...), `downlink` speed estimate, and the
user's `saveData` preference — updating live as conditions change.

## API

```js
const { supported, effectiveType, downlink, saveData } = useConnectionQuality();
```

| Field | Description |
|---|---|
| `supported` | Whether the Network Information API is available in this browser. |
| `effectiveType` | Rough bucket: `'slow-2g'`, `'2g'`, `'3g'`, or `'4g'`. |
| `downlink` | Estimated downlink speed in Mbps. |
| `saveData` | Whether the user has enabled a browser/OS-level data-saver mode. |

## Usage

```jsx
function ProductImage({ src, srcCompressed }) {
  const { effectiveType, saveData } = useConnectionQuality();
  const useCompressed = saveData || effectiveType === '2g' || effectiveType === 'slow-2g';
  return <img src={useCompressed ? srcCompressed : src} alt="" />;
}
```

## Why is it useful?

This hook and `useOnlineStatus` (elsewhere in this repo) answer different
questions. `useOnlineStatus` reports binary connectivity — is there a
network connection at all — which is right for deciding whether to attempt
a request in the first place. `useConnectionQuality` instead reports *how
good* an existing connection is, which is the right signal for deciding
*what* to load: whether to fetch a full-resolution image or a compressed
one, whether to autoplay video, whether to prefetch content the user
hasn't requested yet. Conflating the two — using online/offline status to
make a quality decision — misses users who are technically online but on a
slow or metered connection, exactly the audience `saveData` and a low
`effectiveType` are meant to identify.

The Network Information API isn't universally supported (notably absent
in Safari as of recent versions), so `supported` is exposed explicitly
rather than leaving consumers to infer support from `effectiveType` being
`null` — a caller should branch on `supported` first and fall back to a
sensible default (assume good connection, or use `useOnlineStatus` alone)
rather than trying to interpret an absent value as meaningful information.

## Reacting to live changes

`effectiveType` and `downlink` aren't static — a user walking from a wifi
zone into a cellular-only area, or a phone throttling itself under battery
saver, changes them mid-session. The hook listens for the connection
object's own `change` event and re-reads the snapshot on every firing, so
a component using this hook automatically adapts as conditions shift
without the consumer polling or re-checking manually:

```jsx
function VideoPlayer({ src }) {
  const { effectiveType } = useConnectionQuality();
  const [quality, setQuality] = useState('auto');

  useEffect(() => {
    if (effectiveType === '2g' || effectiveType === 'slow-2g') {
      setQuality('low');
    }
  }, [effectiveType]);

  return <video src={src} data-quality={quality} />;
}
```

## Combining with saveData explicitly

`saveData` is a distinct signal from `effectiveType` — a user can have a
fast connection but still have data-saver mode enabled deliberately (to
control mobile data usage, for instance), which `effectiveType` alone
wouldn't capture. Treating `saveData` as an independent override rather
than folding it into the same bucket as a slow `effectiveType` respects
that the user's *preference* and the network's *actual speed* are two
separate reasons to reduce data usage, and either alone is sufficient
reason to serve the lighter asset.

## Prefixed properties

`navigator.connection` is unprefixed in current Chromium and Firefox, but
the hook also checks `mozConnection` and `webkitConnection` for broader
compatibility with older browser versions that shipped the API behind a
vendor prefix before standardization — the three checks cover the property
under every name it has historically been exposed as.
