# Comment Thread

### What does this do?

It lays out a comment thread with initials avatars, an author and time, comment text in a bubble, and reply and like actions. One reply is nested and indented under its parent with a connector line.

### How is it used?

```html
<ul class="thread">
  <li class="comment">
    <span class="c-avatar">AL</span>
    <div class="c-body">
      <div class="c-bubble"><span class="c-meta"><strong>Ada</strong><time>2h</time></span><p>Nice work.</p></div>
      <div class="c-actions"><a href="#">Like</a><a href="#">Reply</a></div>
      <ul class="thread is-nested"><li class="comment">...</li></ul>
    </div>
  </li>
</ul>
```

Nest a `thread is-nested` list inside a comment body to show replies. It indents and draws a left connector line.

### Why is it useful?

Discussion sections and reviews show threaded comments. This lays out a comment thread with nested replies, a connector line, and action links, using only CSS and initials avatars so there are no external images. Action links have hover and focus styles and the transition is removed under reduced motion.
