# Input Shake Error (`ease-input-shake-error`)

A horizontal head-shake animation and red border flash component used to indicate validation failures on forms. Built for the EaseMotion-css framework.

## 🚀 Features

- **Universal UX Pattern**: The horizontal shake mimics a person shaking their head "no", making it instantly recognizable to users that their input is invalid.
- **Custom Keyframes**: Utilizes a highly tuned `@keyframes ease-shake` animation combined with a sharp `cubic-bezier` curve to make the shake feel forceful and immediate.
- **CSS-Driven Validation State**: The input border smoothly transitions to red while shaking, and provides a matching red `box-shadow` if the user clicks it while still invalid.

## 🛠️ Usage

Apply the `.ease-input` class to your base input element.

```html
<input type="password" class="ease-input" placeholder="Password" />
```
