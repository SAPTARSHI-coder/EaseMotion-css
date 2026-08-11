/* ==========================================================================
   ease-md-editor — behavior
   Vanilla JS, no dependencies. Handles: live preview rendering (lightweight
   markdown subset), toolbar formatting actions, view mode switching, and
   dark mode toggling.
   ========================================================================== */

(function () {
  "use strict";

  /**
   * Very small markdown-to-HTML converter covering the subset used by the
   * toolbar: headings, bold, italic, inline code, links, blockquotes,
   * bulleted lists, and paragraphs. Not a full CommonMark implementation —
   * intentionally minimal to stay dependency-free.
   */
  function renderMarkdown(src) {
    const escapeHtml = (str) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const lines = src.split("\n");
    const html = [];
    let inList = false;

    const closeList = () => {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
    };

    const inlineFormat = (text) =>
      escapeHtml(text)
        .replace(/`([^`]+)`/g, "<code>$1</code>")
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/\*([^*]+)\*/g, "<em>$1</em>")
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    lines.forEach((rawLine) => {
      const line = rawLine.trimEnd();

      if (/^###\s+/.test(line)) {
        closeList();
        html.push(`<h3>${inlineFormat(line.replace(/^###\s+/, ""))}</h3>`);
      } else if (/^##\s+/.test(line)) {
        closeList();
        html.push(`<h2>${inlineFormat(line.replace(/^##\s+/, ""))}</h2>`);
      } else if (/^#\s+/.test(line)) {
        closeList();
        html.push(`<h1>${inlineFormat(line.replace(/^#\s+/, ""))}</h1>`);
      } else if (/^>\s?/.test(line)) {
        closeList();
        html.push(`<blockquote>${inlineFormat(line.replace(/^>\s?/, ""))}</blockquote>`);
      } else if (/^[-*]\s+/.test(line)) {
        if (!inList) {
          html.push("<ul>");
          inList = true;
        }
        html.push(`<li>${inlineFormat(line.replace(/^[-*]\s+/, ""))}</li>`);
      } else if (line.trim() === "") {
        closeList();
      } else {
        closeList();
        html.push(`<p>${inlineFormat(line)}</p>`);
      }
    });

    closeList();
    return html.join("\n");
  }

  /** Wraps or inserts syntax around the current textarea selection. */
  function applyInlineFormat(textarea, before, after, placeholder) {
    const { selectionStart, selectionEnd, value } = textarea;
    const selected = value.slice(selectionStart, selectionEnd) || placeholder;
    const next =
      value.slice(0, selectionStart) + before + selected + after + value.slice(selectionEnd);

    textarea.value = next;
    const cursorStart = selectionStart + before.length;
    textarea.setSelectionRange(cursorStart, cursorStart + selected.length);
    textarea.focus();
    textarea.dispatchEvent(new Event("input", { bubbles: true }));
  }

  /** Prefixes the current line (or each selected line) with a marker. */
  function applyLinePrefix(textarea, prefix) {
    const { selectionStart, selectionEnd, value } = textarea;
    const lineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
    let lineEnd = value.indexOf("\n", selectionEnd);
    if (lineEnd === -1) lineEnd = value.length;

    const block = value.slice(lineStart, lineEnd);
    const updated = block
      .split("\n")
      .map((line) => (line.startsWith(prefix) ? line : prefix + line))
      .join("\n");

    textarea.value = value.slice(0, lineStart) + updated + value.slice(lineEnd);
    textarea.focus();
    textarea.dispatchEvent(new Event("input", { bubbles: true }));
  }

  function initEditor(root) {
    const textarea = root.querySelector("[data-md-input]");
    const preview = root.querySelector("[data-md-preview]");
    const toolbar = root.querySelector(".ease-md-editor__toolbar");

    const update = () => {
      preview.innerHTML = renderMarkdown(textarea.value);
    };

    textarea.addEventListener("input", update);
    update();

    toolbar.addEventListener("click", (event) => {
      const btn = event.target.closest("button");
      if (!btn) return;

      const action = btn.dataset.mdAction;
      const view = btn.dataset.mdView;

      if (action) {
        switch (action) {
          case "bold":
            applyInlineFormat(textarea, "**", "**", "bold text");
            break;
          case "italic":
            applyInlineFormat(textarea, "*", "*", "italic text");
            break;
          case "code":
            applyInlineFormat(textarea, "`", "`", "code");
            break;
          case "link":
            applyInlineFormat(textarea, "[", "](https://)", "link text");
            break;
          case "heading":
            applyLinePrefix(textarea, "## ");
            break;
          case "quote":
            applyLinePrefix(textarea, "> ");
            break;
          case "list":
            applyLinePrefix(textarea, "- ");
            break;
        }
        return;
      }

      if (view) {
        root.setAttribute("data-ease-md-view", view);
        toolbar.querySelectorAll("[data-md-view]").forEach((b) => {
          b.setAttribute("aria-pressed", String(b === btn));
        });
        return;
      }

      if (btn.hasAttribute("data-md-theme-toggle")) {
        const isDark = root.getAttribute("data-ease-md-theme") === "dark";
        root.setAttribute("data-ease-md-theme", isDark ? "light" : "dark");
      }
    });
  }

  document.querySelectorAll("[data-ease-md-editor]").forEach(initEditor);
})();
