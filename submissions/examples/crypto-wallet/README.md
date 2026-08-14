# Crypto Wallet

A dark-themed crypto wallet UI with balance display, token list, and a send modal. Built with EaseMotion CSS design tokens.

## Features

- Total balance card with gradient background
- Eye toggle to show/hide balance (blur filter)
- Token list: BTC, ETH, SOL with amounts and USD values
- Send modal with recipient address and amount inputs
- Modal overlay with fade + scale entrance animation

## Usage

Open `demo.html` in a browser. Click the eye icon to toggle balance visibility. Click "Send" to open the send modal.

## Customization

- Balance card gradient: modify `background` in `.ease-balance-card`
- Token icon colors: update inline `background` and `color` per token
- Confirm button color: change `.ease-confirm-btn` background

## Tech Stack

- EaseMotion CSS (design tokens)
- Vanilla CSS for wallet layout and modal
- Vanilla JS for balance toggle and modal control
