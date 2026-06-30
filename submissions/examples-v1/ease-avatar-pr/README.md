# ease-avatar-pr

Avatar component with online/offline/busy status indicator dot.

## Features

- Circular avatar with initials placeholder
- Small status dot positioned bottom-right
- 3 statuses: online (green), offline (gray), busy (red)
- 3 sizes: small (32px), medium (48px), large (64px)
- Optional wrapper with name and role text

## Files

- `style.css` — the avatar styles
- `demo.html` — working demo with sizes, statuses, and user list
- `README.md` — usage documentation

## Usage

```html
&lt;!-- Basic avatar with status --&gt; &lt;div class="avatar-pr
avatar-pr-md"&gt; JD &lt;span class="avatar-pr-status
avatar-pr-online"&gt;&lt;/span&gt; &lt;/div&gt; &lt;!-- With user info --&gt;
&lt;div class="avatar-pr-wrapper"&gt; &lt;div class="avatar-pr avatar-pr-md"&gt;
JD &lt;span class="avatar-pr-status avatar-pr-online"&gt;&lt;/span&gt;
&lt;/div&gt; &lt;div class="avatar-pr-info"&gt; &lt;span
class="avatar-pr-name"&gt;John Doe&lt;/span&gt; &lt;span
class="avatar-pr-role"&gt;Frontend Developer&lt;/span&gt; &lt;/div&gt;
&lt;/div&gt;
```
