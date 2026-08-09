git add submissions/react/accessibility-kit/ && git commit -m "feat: add Accessibility Utility Kit for better a11y" && git push fork main

- `AccessibleImage` - Image with alt text
- `AccessibleButton` - Button with ARIA label
- `AccessibleInput` - Input with ARIA label

## Usage
```jsx
import { AccessibleImage, AccessibleButton, AccessibleInput } from './accessibility-kit';

<AccessibleImage src="image.png" alt="Description" />
<AccessibleButton onClick={() => {}} ariaLabel="Close">Close</AccessibleButton>
<AccessibleInput type="text" placeholder="Search" ariaLabel="Search" />
