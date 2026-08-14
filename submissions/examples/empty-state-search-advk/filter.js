/* Empty State Search — submission for #75551
 *
 * Filters results and toggles the `hidden` attribute. Echoes back the exact
 * query ("No results for xyz") so the empty state is not a dead end.
 * Uses the `hidden` attribute for visibility state; degrades to the full
 * list with JS disabled (the empty-state paragraph is hidden by default).
 */
(function () {
  var section = document.querySelector(".empty-state-search-advk");
  if (!section) return;
  var input = section.querySelector(".empty-state-search-advk__input");
  var items = Array.prototype.slice.call(section.querySelectorAll(".empty-state-search-advk__item"));
  var empty = section.querySelector(".empty-state-search-advk__empty");
  var queryEl = section.querySelector(".empty-state-search-advk__query");

  input.addEventListener("input", function () {
    var q = input.value.trim().toLowerCase();
    var visible = 0;
    items.forEach(function (item) {
      var match = item.textContent.toLowerCase().indexOf(q) !== -1;
      item.hidden = !match;
      if (match) visible++;
    });
    if (visible === 0 && q !== "") {
      queryEl.textContent = input.value.trim();
      empty.hidden = false;
    } else {
      empty.hidden = true;
    }
  });
})();
