1. What does this do?
A full-screen modal lightbox featuring CSS target-based previous/next carousel controls, smooth zoom transitions, and image captions.

2. How is it used?
<div id="mlb-img-1" class="mlb-modal">
  <a href="#" class="mlb-backdrop"></a>
  <div class="mlb-modal-content" role="dialog" aria-modal="true">
    <a href="#" class="mlb-close">&times;</a>
    <div class="mlb-stage">
      <a href="#mlb-img-3" class="mlb-nav mlb-prev">&lsaquo;</a>
      <div class="mlb-frame mlb-frame-1"></div>
      <a href="#mlb-img-2" class="mlb-nav mlb-next">&rsaquo;</a>
    </div>
  </div>
</div>

3. Why is it useful?
It provides front-end developers with an interactive, zero-dependency full-screen gallery viewer that operates purely on CSS pseudo-classes without requiring JavaScript state management.