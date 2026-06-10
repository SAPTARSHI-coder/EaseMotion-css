function minifyCss(css) {
  return removeCSSComments(css)
    .replace(/\r\n/g, "\n")
    .replace(/\n+/g, "\n")
    .replace(/\s+/g, " ")
    .replace(/\s*([{};,])\s*/g, "$1")
    .replace(/;}/g, "}")
    .replace(/\)\s+\{/g, "){")
    .trim();
}
