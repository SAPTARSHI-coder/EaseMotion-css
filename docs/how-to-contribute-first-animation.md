# How to Contribute Your First Animation to EaseMotion CSS

A beginner-friendly walkthrough to make your first open source contribution!
**Time needed:** ~15 minutes

---

## Step 1: Find an Issue

1. Go to [EaseMotion CSS Issues](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues)
2. Filter by label **`good first issue`**
3. Pick an animation issue that interests you
4. Comment on it: *"Hi, I'd like to work on this!"*

---

## Step 2: Fork the Repository

1. Go to `github.com/SAPTARSHI-coder/EaseMotion-css`
2. Click the **Fork** button (top-right)
3. Click **Create fork**

> Your copy will be at: `github.com/YOUR_USERNAME/EaseMotion-css`

---

## Step 3: Clone to Your Computer

Open terminal and run:

```bash
git clone https://github.com/YOUR_USERNAME/EaseMotion-css.git
cd EaseMotion-css
```

---

## Step 4: Create a New Branch

Never work on `main` directly. Create a new branch:

```bash
git checkout -b feat/ease-bounce-animation
```

---

## Step 5: Copy the TEMPLATE Folder

Inside the `easemotion/` folder, find the `TEMPLATE` folder and copy it:

```bash
cp -r easemotion/TEMPLATE easemotion/ease-bounce
```

---

## Step 6: Build Your Animation

Open `easemotion/ease-bounce/` and edit the files.

### `ease-bounce.css`
```css
@keyframes ease-bounce {
  0%   { transform: translateY(0); }
  40%  { transform: translateY(-20px); }
  60%  { transform: translateY(-10px); }
  80%  { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}

.ease-bounce {
  animation: ease-bounce 0.8s ease-in-out;
}
```

### `ease-bounce.html`
```html
<div class="ease-bounce">
  Hello! I bounce 🎉
</div>
```

---

## Step 7: Save and Commit

```bash
git add .
git commit -m "feat: add ease-bounce animation"
```

---

## Step 8: Push to GitHub

```bash
git push origin feat/ease-bounce-animation
```

---

## Step 9: Submit a Pull Request

1. Go to your forked repo on GitHub
2. Click **"Compare & pull request"**
3. Add a clear title: `feat: add ease-bounce animation`
4. Describe what you did
5. Click **"Create pull request"**

---

## ⚠️ Common Mistakes

| Mistake | Fix |
|---|---|
| Working on `main` branch | Always create a new branch first |
| Wrong folder name | Match the animation name exactly |
| Missing CSS class | Class name must match animation name |
| No commit message | Always write a clear commit message |

---

## 🎉 You Did It!

Congratulations on your first open source contribution!