# Shadow Pop Follow Button

An interactive pure CSS follow button featuring a tactile Neo-Brutalist 3D shadow pop interaction, inspired by Admin Panel design patterns.

## 1. What does this do?

This component provides a follow button that shifts up-left and pops out a hard 3D shadow on hover, switching state to "Following" and dynamically incrementing the profile card's followers count when checked in pure CSS.

## 2. How is it used?

Link to both `easemotion.css` and `style.css`, then construct the HTML with the following pattern inside a `<form>` to enable zero-JS resets:

```html
<form action="javascript:void(0);">
  <div style="display: contents;">
    <!-- Checkbox Toggle -->
    <input type="checkbox" id="follow-1" class="follow-checkbox-ag" />

    <!-- Profile Card containing followers stats -->
    <div class="profile-card-ag profile-card-1">
      <div class="user-info-ag">
        <span class="user-followers-ag followers-count-1">&nbsp;followers</span>
      </div>

      <!-- Follow Button -->
      <label
        for="follow-1"
        class="btn-shadow-pop-ag"
        tabindex="0"
        role="button"
      >
        <span class="state-follow-ag">Follow</span>
        <span class="state-following-ag">✓ Following</span>
      </label>
    </div>
  </div>
</form>
```

### Custom Properties API

Exposed CSS variables that can be overridden at the button level:

- `--pop-offset`: Hard shadow pop-out offset distance (defaults to `5px`).
- `--pop-color`: Border and shadow color (defaults to `#0f172a` / slate-900).
- `--pop-duration`: Shift and pop animation transition speed (defaults to `0.22s`).

---

## 3. Why is it useful?

Follow and engagement prompts are among the most standard components for user dashboards, admin consoles, and profile cards. By utilizing CSS sibling checkbox checks and counter increments (`counter-increment`), all status updates and follower counter increases are handled entirely in pure CSS, aligning with EaseMotion's zero-dependency design standards and ensuring fast page load speeds.
