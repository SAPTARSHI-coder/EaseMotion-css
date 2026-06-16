# .ease-avatar-group Overlapping Avatar Stack

Adds an overlapping avatar group component for displaying team members, contributors, or participants with a stacked layout.

## Problem

Team pages, contributor lists, and participant displays often show multiple avatars overlapping or listed together, but EaseMotion has no utility for this common pattern. Manual implementation requires flexbox with negative margins and custom borders.

## Proposed CSS to Add to `components/avatar-group.css`

```css
.ease-avatar-group {
  display: inline-flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.ease-avatar-group .ease-avatar {
  border: 2px solid white;
  margin-left: -0.5rem;
}

.ease-avatar-group .ease-avatar:first-child {
  margin-left: 0;
}

.ease-avatar-group-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #e2e8f0;
  color: #475569;
  font-size: 0.8rem;
  font-weight: 700;
  border: 2px solid white;
  margin-left: -0.5rem;
}
```

## Usage

```html
<div class="ease-avatar-group">
  <img class="ease-avatar" src="user1.jpg" alt="User 1" />
  <img class="ease-avatar" src="user2.jpg" alt="User 2" />
  <img class="ease-avatar" src="user3.jpg" alt="User 3" />
  <img class="ease-avatar" src="user4.jpg" alt="User 4" />
  <span class="ease-avatar-group-count">+3</span>
</div>
```

## Files
- `README.md` — this file
- `demo.html` — demo page
- `style.css` — proposed CSS (includes basic .ease-avatar for demo purposes)
