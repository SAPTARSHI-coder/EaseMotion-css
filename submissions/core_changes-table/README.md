# Table Component

1. **What does this do?** Provides a responsive data table component with striped rows, bordered cells, hover highlighting, and a compact (small) variant — all pure CSS with horizontal scroll support via `.table-wrapper`.

2. **How is it used?**
   ```html
   <div class="table-wrapper">
     <table class="table">
       <thead>
         <tr><th>Name</th><th>Email</th></tr>
       </thead>
       <tbody>
         <tr><td>Alice</td><td>alice@example.com</td></tr>
       </tbody>
     </table>
   </div>

   <!-- Variants: table-striped, table-bordered, table-hover, table-sm -->
   ```

3. **Why is it useful?** Data tables are essential for displaying structured information. This implementation follows EaseMotion CSS's philosophy by using semantic HTML `<table>`/`<thead>`/`<tbody>`, supporting dark mode automatically, providing a responsive wrapper for horizontal overflow on small screens, and offering clear visual variants through simple modifier classes — all without JavaScript.
