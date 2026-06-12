# ease-upload-pr

Pure CSS file upload dropzone with 5 visual states.

## States
| Class | State |
|-------|-------|
| `.ease-upload` | Default — dashed border, hover turns blue |
| `.ease-upload--drag` | Drag-over — animated dashed border pulse, scale up |
| `.ease-upload--uploading` | Uploading — striped progress bar, pulsing icon |
| `.ease-upload--success` | Success — green checkmark with pop-in animation |
| `.ease-upload--error` | Error — red theme with shake animation |

## File List
`.ease-upload__files` holds `.ease-file` rows with CSS/Unicode type icons (pdf, jpg, doc, xls, zip, txt) and styled remove buttons.

## Quick Start
```html
&lt;div class="ease-upload"&gt;
  &lt;input type="file" class="ease-upload__input" multiple&gt;
  &lt;div class="ease-upload__icon"&gt;...&lt;/div&gt;
  &lt;p class="ease-upload__title"&gt;Click or drag files here&lt;/p&gt;
&lt;/div&gt;