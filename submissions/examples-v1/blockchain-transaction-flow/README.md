# Blockchain Transaction Flow

A responsive blockchain transaction flow diagram showing the journey
from wallet to confirmed block — built in pure HTML and CSS.

## Structure
blockchain-transaction-flow/
├── demo.html
├── style.css
└── README.md
## Usage

```html
<div class="flow-node wallet">
  <div class="node-icon">💳</div>
  <div class="node-label">Wallet</div>
  <div class="node-desc">Transaction initiated & signed</div>
  <div class="node-badge">ORIGIN</div>
</div>

<div class="flow-arrow">↓</div>

<div class="flow-node block">
  <div class="node-icon">📋</div>
  <div class="node-label">Block Created</div>
  <div class="node-desc">Transaction included in new block</div>
  <div class="node-badge block-badge">CONFIRMED</div>
</div>
```

## Node Types

| Class | Stage |
|---|---|
| `flow-node wallet` | Transaction origin |
| `flow-node broadcast` | P2P network broadcast |
| `flow-node mempool` | Awaiting miner selection |
| `flow-node validation` | Node verification |
| `flow-node mining` | Proof of work/stake |
| `flow-node block` | Block creation |
| `flow-node chain` | Ledger finalization |

## Features
- Pure HTML & CSS — no JavaScript
- Color-coded transaction stages
- Pulsing mining badge animation
- Hover lift on each node
- Responsive down to mobile
- Respects `prefers-reduced-motion`

## Use Cases
- Blockchain education & documentation
- Crypto technical blogs
- Engineering presentations
- Developer portfolios