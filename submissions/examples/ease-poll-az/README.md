# Poll Component

### What does this do?

Adds `ease-poll-az` — a poll component with radio-selectable options and animated progress-bar results view. Supports voting mode and results mode (toggled via `.results` class).

### How is it used?

The maintainer should copy `style.css` into `components/poll.css` and import it.

```html
<div class="ease-poll-az">
  <p class="ease-poll-question-az">Your question?</p>
  <p class="ease-poll-meta-az">1,247 votes &middot; 5 days left</p>

  <label class="ease-poll-option-az">
    <input type="radio" name="poll" value="a" />
    <span class="ease-poll-label-az">
      <span class="ease-poll-radio-az"></span>
      <span class="ease-poll-text-az">Option A</span>
      <span class="ease-poll-pct-az">54%</span>
      <span class="ease-poll-bar-wrap-az"
        ><span class="ease-poll-bar-az --winner" style="width:54%"></span
      ></span>
    </span>
  </label>

  <div class="ease-poll-footer-az">
    <span class="ease-poll-votes-az">1,247 total votes</span>
  </div>
</div>
```

Add `.results` to the card container to show progress bars and percentages. Use `.--winner` on the bar for the leading option. Mark `checked` on the radio input of the option the user selected.

### Why is it useful?

1. **Dual mode** — voting (radio selection with hover states) and results (progress bars with percentages)
2. **Pure CSS radio hack** — no JavaScript required for selection interaction
3. **Winner highlight** — `.--winner` class for the leading option's bar
4. **Lightweight** — single component with no external dependencies

Submitted by: @zen-ash-dev

Date: 2026-06-08

Status: **Pending review**
