# Org Chart

### What does this do?

It shows an organization chart as a connected tree. A lead node sits at the top, three department nodes hang below it, and one of those has two sub team nodes, all joined by clean connector lines drawn purely in CSS. Each node shows an avatar, a name, and a role.

### How is it used?

```html
<div class="orgchart">
  <ul>
    <li>
      <div class="node lead"><b>Ava Stone</b><em>CEO</em></div>
      <ul>
        <li><div class="node"><b>Ravi Kumar</b><em>Engineering</em></div></li>
      </ul>
    </li>
  </ul>
</div>
```

The hierarchy is a nested list. Connector lines come from `li::before` and `li::after` borders plus a vertical `ul ul::before`, with first and last child rules rounding the corners, so the tree lines are all CSS and no SVG.

### Why is it useful?

Team pages, admin panels, and about pages show reporting structure as an org chart. This builds one from a nested list and CSS connector lines, so the hierarchy stays semantic and needs no diagramming script.
