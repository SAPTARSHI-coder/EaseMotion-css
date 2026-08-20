# 🐛 Fix: Logo Redirects to Documentation Instead of Landing Page

Resolves: #54655

## The Bug
The project logo in the navigation bar linked to `#docs` instead of `#home`,
so clicking it took users to the Documentation section instead of the
Landing/Home section — duplicating the behavior of the "Docs" nav link and
breaking the expected "click logo to go home" convention.

## The Fix
Changed the logo's `href` from `#docs` to `#home`:

```diff
- <a href="#docs" class="logo">EaseMotion CSS</a>
+ <a href="#home" class="logo">EaseMotion CSS</a>
```

Now:
- Clicking the **logo** navigates to the Landing/Home section.
- Clicking **Docs** still navigates to the Documentation section.
- All other nav links are unaffected.

## Files
- `demo.html` — minimal reproduction with the fix applied (logo → `#home`).
- `style.css` — supporting styles so the two sections and nav are easy to
  tell apart when testing in a browser.
- `README.md` — this file.

## How to Verify
1. Open `demo.html` in a browser.
2. Click the logo in the nav bar — you should land on the "🏠 Landing Page"
   section.
3. Click "Docs" — you should land on the "📖 Documentation" section.
4. Click "Home" — should also land on the Landing Page section, confirming
   both it and the logo now behave consistently.