# YouTube Video Tutorial Script & Screenplay

This document contains the complete production script and gameplay storyboard for a 10-minute video tutorial titled **"Getting Started with EaseMotion CSS"**.

---

## 📹 Video Metadata Planner

### 1. Title Suggestions
* **Option A:** Build Beautiful CSS Animations in 5 Minutes (Zero JS!)
* **Option B:** Why You Should STOP Writing Custom Keyframes manually
* **Option C:** EaseMotion CSS Crash Course: Beginner to Advanced

### 2. Timestamps Chapters
* `00:00 - 02:15` | Introduction & CDN Setup
* `02:15 - 04:45` | Basic Fade Entrance Animation
* `04:45 - 07:30` | Hover Micro-interactions
* `07:30 - 09:15` | Staggered Entrance Lists
* `09:15 - 10:00` | Outro & Open Source Contributions

---

## 🎙️ Voiceover Script & Screenplay

### Chapter 1: Introduction & CDN Setup (`00:00 - 02:15`)
* **Voiceover (Narrator):**
  > "Hey developers! Today we are looking at EaseMotion CSS—a powerful animation framework designed to build fluid transitions in milliseconds with zero JavaScript dependencies. We will go from complete blank canvas to responsive staggered entries. Let's start by linking the CDN. Just copy the jsDelivr link tag from our readme and paste it inside your HTML head element."
* **Screenplay (Actions):**
  * Zoom in on VS Code editor.
  * Show copying the CDN tag and pasting it inside the `<head>` of an empty `index.html`.

```html
<!-- CDN Import -->
<link 
  rel="stylesheet" 
  href="https://cdn.jsdelivr.net/npm/easemotion-css/core/animations.min.css"
/>
```

---

### Chapter 2: Basic Fade Entrance Animation (`02:15 - 04:45`)
* **Voiceover (Narrator):**
  > "Now let's build our first animation. By simply attaching the class name `ease-fade-in` to any element, it performs a smooth opacity transition. We can combine this with `ease-zoom-in` and duration configurations to build standard entrance effects."
* **Screenplay (Actions):**
  * Type class names `class="ease-fade-in ease-zoom-in ease-duration-normal"` onto a heading.
  * Save the file, refresh the browser window, and show the box pop into screen.

```html
<div class="ease-fade-in ease-zoom-in ease-duration-normal">
  <h3>My first animated heading!</h3>
</div>
```

---

### Chapter 3: Hover Micro-interactions (`04:45 - 07:30`)
* **Voiceover (Narrator):**
  > "Hover animations are where EaseMotion shines. Simply use the prefix classes to define hover bounds. Watch how this card scales up and rotates slightly on hover."
* **Screenplay (Actions):**
  * Code a basic pricing card in HTML.
  * Add the class: `class="ease-hover-float ease-zoom-in ease-duration-fast"`.
  * Move cursor over the element to showcase spring scales live.

```html
<div class="pricing-card ease-hover-float ease-zoom-in ease-duration-fast">
  <h3>Basic Card</h3>
</div>
```

---

### Chapter 4: Staggered Entrance Lists (`07:30 - 09:15`)
* **Voiceover (Narrator):**
  > "Staggered transitions are built using sequential animation delay utilities. We attach incrementing delays to list items to make them load sequentially, building a premium entrance cascading effect."
* **Screenplay (Actions):**
  * Code an unordered list `<ul>` with three items.
  * Assign delays `ease-delay-100` and `ease-delay-200` to the second and third items.
  * Preview list elements entering in cascade mode.

```html
<ul>
  <li class="ease-fade-in-up">Immediate item</li>
  <li class="ease-fade-in-up ease-delay-100">Delayed item 1</li>
  <li class="ease-fade-in-up ease-delay-200">Delayed item 2</li>
</ul>
```

---

### Chapter 5: Outro & Contributions (`09:15 - 10:00`)
* **Voiceover (Narrator):**
  > "That is it! EaseMotion is open-source and beginner-friendly. Go star our repository on GitHub and open a pull request to submit your own custom animation. See you in the next video!"
* **Screenplay (Actions):**
  * Display GitHub repository page.
  * Point cursor to the Star button and click it.
