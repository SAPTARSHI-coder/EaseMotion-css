# Contributors Grid Generator

Closes #13657

A searchable grid of contributor avatar cards with initials and usernames. Each card shows a colored avatar circle with the contributor's initials, their name, and username. A live search input filters cards by name or username in real time.

## Usage

```html
<div class="contributor-grid">
  <div class="avatar-card" data-name="Name" data-username="username">
    <div class="avatar-circle">NN</div>
    <div class="contributor-name">Name</div>
    <div class="contributor-username">@username</div>
  </div>
</div>
```

## Features

- Responsive auto-fill grid layout
- Real-time search filtering by name or username
- Hover lift effect on cards
- Dark theme using EaseMotion CSS conventions
