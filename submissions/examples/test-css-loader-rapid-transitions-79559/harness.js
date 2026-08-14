/* Rapid-toggle demo harness — submission for #79559 */
(function () {
  var btn = document.getElementById("toggle-loader");
  var target = document.getElementById("loader-target");
  if (!btn || !target) return;
  var on = false;
  btn.addEventListener("click", function () {
    on = !on;
    target.classList.toggle("is-loading", on);
    // immediate re-toggle to exercise rapid start/stop/restart
    requestAnimationFrame(function () { target.classList.toggle("is-loading", !on ? false : on); });
  });
})();
