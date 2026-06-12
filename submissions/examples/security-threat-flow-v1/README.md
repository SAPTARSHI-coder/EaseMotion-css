## Usage

```html
<div class="flow-node threat">
  <div class="node-icon">⚠</div>
  <div class="node-label">Attacker</div>
  <div class="node-desc">External threat source</div>
</div>
```

## Node Types

| Class                | Purpose                |
| -------------------- | ---------------------- |
| `flow-node threat`   | Threat/attacker source |
| `flow-node defense`  | Firewall / WAF layer   |
| `flow-node auth`     | Authentication layer   |
| `flow-node gateway`  | API gateway / router   |
| `flow-node resource` | Secured resource       |

## Features

- Pure HTML & CSS — no JavaScript
- Hover lift animations on each node
- Color-coded security layers
- Shield badges (PROTECTED / VERIFIED / SECURE)
- Responsive down to mobile
- Respects `prefers-reduced-motion`

## Use Cases

- Security documentation
- Threat modeling diagrams
- Cybersecurity training materials
- Architecture review presentations
