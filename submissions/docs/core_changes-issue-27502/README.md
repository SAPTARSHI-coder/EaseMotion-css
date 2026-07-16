# ease-modal — Dynamic Modal Dialog with Backdrop Blur & Scale-Up

## What does this do?

A React modal dialog component with backdrop blur, scale-up entrance animation, and click-outside-to-close.

## How is it used?

```jsx
import DynamicModal from './DynamicModal';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <DynamicModal open={open} onClose={() => setOpen(false)} title="Hello">
        <p>Modal content here.</p>
      </DynamicModal>
    </>
  );
}
```

### Props

| Prop | Type | Default |
|---|---|---|
| open | boolean | false |
| onClose | function | — |
| title | string | 'Modal' |
| children | node | — |
