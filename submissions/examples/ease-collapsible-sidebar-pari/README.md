## ease-collapsible-sidebar

**What does this do?**
A collapsible navigation sidebar that smoothly expands and collapses
using CSS width transitions, improving readability and focus.

**How is it used?**
<div class="layout">
  <aside class="sidebar" id="sidebar">
    <!-- nav items -->
  </aside>
  <main class="content">
    <button onclick="toggleSidebar()">☰</button>
    <!-- content -->
  </main>
</div>

<script>
  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
  }
</script>

**Why is it useful?**
Provides a smooth, animated collapsible sidebar pattern common in
documentation sites like MDN, Docusaurus, and GitBook —
consistent with EaseMotion CSS's animation-first philosophy.