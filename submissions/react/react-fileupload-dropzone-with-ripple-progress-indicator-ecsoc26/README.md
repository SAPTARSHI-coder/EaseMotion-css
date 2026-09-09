# React Component: FileUpload Dropzone with Ripple Progress Indicator (ECSoC26 Edition)

I am fixing this issue under ECSoC26.

1. **What does this do?**  
   It renders a modular, copy-paste ready React component for a **FileUpload Dropzone with Ripple Progress Indicator** containing file format filters, simulated progression, error alerts, and pulsating progress ring ripples.

2. **How is it used?**  
   Import [FileUploadDropzone.jsx](./FileUploadDropzone.jsx) into your React application and pass props specifying constraints. Trigger uploads via drag-and-drop or hit Space/Enter on dropzone to trigger the select dialog.
   
3. **Why is it useful?**  
   It delivers zero-dependency keyboard accessible upload drops, real-time feedback indicator ripples, and custom mouse spotlight gradients.

---

## 📦 Installation

Copy [FileUploadDropzone.jsx](./FileUploadDropzone.jsx) and [FileUploadDropzone.css](./FileUploadDropzone.css) into your component directory. Import the component inside your React entry point:

```javascript
import FileUploadDropzone from './FileUploadDropzone';
```

---

## 🚀 Usage Example

```jsx
import React from 'react';
import FileUploadDropzone from './FileUploadDropzone';

export default function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#020617' }}>
      <FileUploadDropzone
        maxFileSize={5242880} // 5MB limit
        allowedTypes={['image/png', 'image/jpeg', 'application/pdf']}
        accentColor="#2563eb"
        theme="dark"
        onUploadStart={(files) => console.log('Upload started:', files)}
        onUploadSuccess={(file) => console.log('Uploaded successfully:', file)}
      />
    </div>
  );
}
```

---

## ⌨️ Accessibility Guidelines

This dropzone fully implements standard accessibility protocols:
- Focus outlines are rendered on focus-visible states.
- The dropzone is fully focusable using `Tab` key.
- Hitting `Space` or `Enter` keys triggers click simulations which invokes standard OS file picker selector widgets.

---

## 🌐 Browser Compatibility

The component is tested and verified to work correctly on:
- Google Chrome (Desktop & Mobile)
- Mozilla Firefox
- Apple Safari (macOS & iOS)
- Microsoft Edge
It uses standard standard drag and drop Web API interfaces.

---

## ⚙ Props Specifications

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `maxFileSize` | `number` | `10485760` | Maximum file limit size in bytes. |
| `allowedTypes` | `array` | `['image/*', 'application/pdf']` | Allowed MIME formats patterns list. |
| `accentColor` | `string` | `'#3b82f6'` | Highlight theme color. |
| `theme` | `string` | `'dark'` | Visual styling theme options: `'dark' \| 'light' \| 'glass'`. |
| `onUploadStart` | `function` | `undefined` | Callback triggered when upload simulator starts. |
| `onUploadSuccess` | `function` | `undefined` | Callback triggered when upload finishes successfully. |
