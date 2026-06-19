#!/usr/bin/env bash
# ============================================================
# EaseMotion CSS — Spacing Scale Generator
# Generates margin and padding utility classes from tokens.
# Usage: bash generate.sh > style.css
# ============================================================

SIZES=(
  "0:0px"
  "0\\.5:0.125rem"
  "1:0.25rem"
  "2:0.5rem"
  "3:0.75rem"
  "4:1rem"
  "5:1.25rem"
  "6:1.5rem"
  "8:2rem"
  "10:2.5rem"
  "12:3rem"
  "16:4rem"
  "20:5rem"
  "24:6rem"
)

cat << HEADER
/* ============================================================
   EaseMotion CSS — Spacing Scale Utility Classes
   Generated: $(date '+%Y-%m-%d')
   Scale: 0, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24
   Each unit = 0.25rem
   ============================================================ */

:root {
HEADER

for entry in "${SIZES[@]}"; do
  key="${entry%%:*}"
  val="${entry##*:}"
  echo "  --ease-space-${key}: ${val};"
done

echo "}"
echo ""

# Generate classes
generate() {
  local prefix="$1"   # m, p, mt, mr, mb, ml, mx, my, pt, pr, pb, pl, px, py
  local prop="$2"     # margin, padding, margin-top, etc.

  for entry in "${SIZES[@]}"; do
    key="${entry%%:*}"
    val="${entry##*:}"
    echo ".ease-${prefix}-${key} { ${prop}: var(--ease-space-${key}); }"
  done
}

# Margin
generate "m"   "margin"
generate "mt"  "margin-top"
generate "mr"  "margin-right"
generate "mb"  "margin-bottom"
generate "ml"  "margin-left"
generate "mx"  "margin-inline"
generate "my"  "margin-block"

# Padding
generate "p"   "padding"
generate "pt"  "padding-top"
generate "pr"  "padding-right"
generate "pb"  "padding-bottom"
generate "pl"  "padding-left"
generate "px"  "padding-inline"
generate "py"  "padding-block"
