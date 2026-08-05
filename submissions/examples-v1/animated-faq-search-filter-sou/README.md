# Animated FAQ with Search Filter

A fully animated FAQ component with a live search filter, category tabs, smooth accordion transitions, and real-time keyword highlighting — built with pure HTML, CSS, and vanilla JavaScript.

---

## 1. What does this do?

It renders an accessible FAQ section where users can smoothly expand/collapse questions, filter by category, and instantly search across all questions and answers with highlighted keyword matches and animated hide/show transitions.

## 2. How is it used?

Include the `style.css` file and drop the HTML structure into your page. Each FAQ entry is a `.ease-faq__item` with a category (`data-cat`), a `.ease-faq__question` button, and a `.ease-faq__answer` block.

### Minimal HTML usage

```html
<section class="ease-faq">
  <div class="ease-faq__search">
    <input type="text" class="ease-faq__search-input" id="faqSearch" placeholder="Search questions..." />
  </div>

  <div class="ease-faq__categories">
    <button class="ease-faq__cat active" data-cat="all">All</button>
    <button class="ease-faq__cat" data-cat="general">General</button>
    <button class="ease-faq__cat" data-cat="billing">Billing</button>
  </div>

  <div class="ease-faq__list" id="faqList">
    <div class="ease-faq__item" data-cat="general">
      <button class="ease-faq__question">
        Your question here?
        <span class="ease-faq__icon">+</span>
      </button>
      <div class="ease-faq__answer">
        <p>Your answer goes here.</p>
      </div>
    </div>
  </div>

  <p class="ease-faq__empty" id="faqEmpty" hidden>No matching questions found.</p>
</section>
```

### Available classes

| Class | Purpose |
|---|---|
| `.ease-faq` | Root wrapper for the FAQ component |
| `.ease-faq__search` | Wrapper around the search input |
| `.ease-faq__search-input` | The search text input field |
| `.ease-faq__categories` | Row of category filter buttons |
| `.ease-faq__cat` | Single category button (add `.active` for the selected one) |
| `.ease-faq__list` | Container for all FAQ items |
| `.ease-faq__item` | Single FAQ entry (add `.open` when expanded, `.hidden` when filtered out) |
| `.ease-faq__question` | Clickable question button |
| `.ease-faq__icon` | The `+` toggle icon (rotates to `×` when open) |
| `.ease-faq__answer` | Expandable answer container |
| `.ease-faq__mark` | Highlight style applied to matching search text |
| `.ease-faq__empty` | Empty-state message shown when no results match |

## 3. Why is it useful?

FAQ sections are essential on help centers, docs, landing pages, and support pages. This component embodies **EaseMotion's animation-first philosophy** — every interaction (expand, collapse, filter, highlight, empty state) transitions smoothly instead of snapping, making the content feel alive and effortless to explore. It is fully self-contained, zero-dependency, keyboard accessible, and respects `prefers-reduced-motion` for users who prefer minimal animation.

---

## Features

- 🔍 **Live search** with real-time filtering across questions and answers
- ✨ **Highlighted matches** — matching keywords are visually emphasized
- 🏷️ **Category tabs** for topic-based filtering
- 🎬 **Smooth accordion** expand/collapse with rotating `+` → `×` icon
- 💨 **Animated hide/show** when filtering (fade + collapse)
- 📱 **Fully responsive** — adapts to mobile screens
- ♿ **Accessible** — respects `prefers-reduced-motion`
- 🎨 **Modern dark UI** with gradient accents
- 📦 **Zero dependencies** — pure HTML, CSS, vanilla JS

---

## Files

| File | Description |
|---|---|
| `demo.html` | Self-contained demo — open directly in a browser |
| `style.css` | All component styles and animations |
| `README.md` | This documentation |
