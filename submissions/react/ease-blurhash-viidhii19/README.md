# Progressive Image Loader (ease-blurhash-viidhii19)

A zero-dependency React component optimized to prevent Cumulative Layout Shift (CLS) and maximize perceived load speed using heavily blurred base64 placeholders that smoothly crossfade into high-res images.

## Features
- **Zero Dependencies**: Relies purely on native React `img` `onLoad` events and `useState`.
- **CLS Prevention**: Absolute positioning and CSS object-fit maintain the container aspect ratio, ensuring the layout doesn't shift when the high-res image resolves.
- **EaseMotion Integration**: Utilizes EaseMotion's `ease-fade-in` CSS utility for a hardware-accelerated, smooth crossfade transition.

## Usage

```jsx
import { EaseImage } from './EaseImage';

const App = () => {
  const placeholder = 'data:image/jpeg;base64,...';
  const url = 'https://images.unsplash.com/photo-1682687220063...';

  return (
    <div style={{ width: '400px', height: '300px' }}>
      <EaseImage 
        src={url} 
        placeholder={placeholder} 
        alt="Beautiful landscape" 
        className="my-custom-class"
      />
    </div>
  );
};
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `src` | `string` | The URL of the high-res image to load. |
| `placeholder` | `string` | The base64 or BlurHash string encoded as a data URI to use as the blurry placeholder. |
| `alt` | `string` | Alt text for accessibility. |
| `className` | `string` | Optional CSS class to apply to the wrapper. |

## How it Works
1. An outer wrapper `div` creates a positioning context.
2. The `placeholder` image is rendered instantly, stretched to cover the container, with a heavy `blur(20px)` and `scale(1.1)` CSS filter to aggressively smooth out artifacts.
3. The actual high-res `img` is overlaid absolutely with an initial opacity of `0`.
4. Once the high-res `img` triggers its native `onLoad` event, it is conditionally assigned EaseMotion's `ease-fade-in` class, which triggers the CSS crossfade animation directly over the blurred canvas placeholder.
