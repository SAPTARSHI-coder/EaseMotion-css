# Ease Breadcrumb Component

1. **What does this do?** Adds a breadcrumb navigation component with customizable separators via CSS variable `--ease-breadcrumb-sep`.

2. **How is it used?**
```html
   <ol class="ease-breadcrumb">
     <li class="ease-breadcrumb-item"><a href="#">Home</a></li>
     <li class="ease-breadcrumb-item"><a href="#">Products</a></li>
     <li class="ease-breadcrumb-item active">Laptop</li>
   </ol>

   <!-- Custom separator -->
   <ol class="ease-breadcrumb sep-arrow">...</ol>
   <ol class="ease-breadcrumb" style="--ease-breadcrumb-sep: '»'">...</ol>
```

3. **Why is it useful?** Pure CSS breadcrumb with zero JavaScript, customizable separators via CSS variables, and hover animations — fits EaseMotion CSS's utility-first, animation-first philosophy.