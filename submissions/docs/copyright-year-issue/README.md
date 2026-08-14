# Automated Copyright Year

1. What does this do? Automatically displays the current copyright year in the footer below existing branding text without manual updates.
2. How is it used? Add `<span id="year"></span>` inside your copyright paragraph and populate it dynamically using `document.getElementById('year').textContent = new Date().getFullYear()`.
3. Why is it useful? Keeps footer copyright notices automatically accurate every year with zero manual maintenance.

## Example

```html
<footer class="footer">
  <!-- Branding text -->
  <p class="branding">Built with ❤️ using <strong>EaseMotion CSS</strong></p>

  <!-- Automated copyright line below branding text -->
  <p class="copyright">&copy; <span id="year"></span> EaseMotion CSS</p>
</footer>

<script>
  document.getElementById('year').textContent = new Date().getFullYear();
</script>
```
