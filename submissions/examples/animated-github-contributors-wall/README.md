# ease-contributors-wall

An auto-fetched, animated GitHub contributors wall for **EaseMotion CSS**. No manual list — pulls live from the GitHub API.

## Usage

```html
<div class="contributors-wall" id="contributorsWall"></div>

<script>
  fetch('https://api.github.com/repos/SAPTARSHI-coder/EaseMotion-css/contributors')
    .then(res => res.json())
    .then(data => {
      const wall = document.getElementById('contributorsWall');
      data.forEach((c, i) => {
        const a = document.createElement('a');
        a.href = c.html_url;
        a.className = 'contributor-avatar';
        a.style.animationDelay = `${i * 40}ms`;
        a.innerHTML = `<img src="${c.avatar_url}" alt="${c.login}" title="${c.login} · ${c.contributions} commits">`;
        wall.appendChild(a);
      });
    });
</script>