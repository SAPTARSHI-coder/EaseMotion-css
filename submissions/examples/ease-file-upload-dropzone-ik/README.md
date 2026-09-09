# EaseMotion CSS — File Upload Drag & Drop Zone (`ease-file-upload-dropzone-ik`)

Interactive file upload dropzone component (`ease-dropzone`) featuring pulsing dashed border transitions, upload icon lift micro-animations (`translateY(-8px)`), and HTML file input binding.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides an interactive file upload dropzone container (`ease-dropzone`) that highlights hover states with glowing dashed borders and spring icon lift transitions (`translateY(-8px)`).

---

## 2. How is it used?

Wrap the HTML file input element inside the dropzone label container:

```html
<label class="ease-dropzone">
  <input type="file" class="dz-input" multiple>
  <div class="dz-content">
    <div class="dz-icon">☁️</div>
    <h3>Drag and drop files here</h3>
  </div>
</label>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS supports tactile drag-and-drop form controls. The File Upload Dropzone component delivers 60fps GPU compositor lift micro-interactions while respecting `prefers-reduced-motion` settings.
