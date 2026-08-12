#!/usr/bin/env bash
# Generates all spacing utility classes (margin, padding)
# Run: bash generate.sh

SIZES=("0" "0_5" "1" "2" "3" "4" "5" "6" "8" "10" "12" "16" "20" "24")

echo "/* Spacing utility classes — auto-generated */"
echo ""

for prop_dir in "m" "p"; do
  if [ "$prop_dir" = "m" ]; then
    label="margin"
  else
    label="padding"
  fi

  echo "/* --- ${label} --- */"
  for size in "${SIZES[@]}"; do
    echo ".ease-${prop_dir}-${size} { ${label}: var(--ease-space-${size}); }"
  done
  echo ""

  for dir in "t" "r" "b" "l"; do
    case "$dir" in
      t) sublabel="top" ;;
      r) sublabel="right" ;;
      b) sublabel="bottom" ;;
      l) sublabel="left" ;;
    esac
    for size in "${SIZES[@]}"; do
      echo ".ease-${prop_dir}${dir}-${size} { ${label}-${sublabel}: var(--ease-space-${size}); }"
    done
    echo ""
  done

  for axis in "x" "y"; do
    if [ "$axis" = "x" ]; then
      a1="left"
      a2="right"
    else
      a1="top"
      a2="bottom"
    fi
    for size in "${SIZES[@]}"; do
      echo ".ease-${prop_dir}${axis}-${size} { ${label}-${a1}: var(--ease-space-${size}); ${label}-${a2}: var(--ease-space-${size}); }"
    done
    echo ""
  done
done
