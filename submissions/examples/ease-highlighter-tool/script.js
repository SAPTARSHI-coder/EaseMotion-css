const editor = document.getElementById("editor");
const colorButtons = document.querySelectorAll(".color-btn");
const removeHighlightBtn = document.getElementById("removeHighlight");
const clearAllBtn = document.getElementById("clearAll");
const copyBtn = document.getElementById("copyText");

function highlightText(color) {
    const selection = window.getSelection();

    if (!selection.rangeCount || selection.isCollapsed) {
        alert("Please select some text first.");
        return;
    }

    editor.focus();

    document.execCommand("styleWithCSS", false, true);
    document.execCommand("hiliteColor", false, color);

    selection.removeAllRanges();
}

colorButtons.forEach(button => {
    button.addEventListener("mousedown", e => {
        e.preventDefault();
        highlightText(button.dataset.color);
    });
});

removeHighlightBtn.addEventListener("click", () => {

    const selection = window.getSelection();

    if (!selection.rangeCount || selection.isCollapsed) {
        alert("Please select highlighted text first.");
        return;
    }

    let node = selection.anchorNode;

    if (node.nodeType === Node.TEXT_NODE) {
        node = node.parentNode;
    }

    while (node && node !== editor) {

        if (
            (node.tagName === "SPAN" || node.tagName === "MARK") &&
            node.getAttribute("style") &&
            node.getAttribute("style").includes("background")
        ) {

            const parent = node.parentNode;

            while (node.firstChild) {
                parent.insertBefore(node.firstChild, node);
            }

            parent.removeChild(node);
            parent.normalize();

            selection.removeAllRanges();

            return;
        }

        node = node.parentNode;
    }

    alert("Selected text is not highlighted.");
});

clearAllBtn.addEventListener("click", () => {

    editor.querySelectorAll("span, mark").forEach(el => {

        if (
            el.tagName === "MARK" ||
            (
                el.getAttribute("style") &&
                el.getAttribute("style").includes("background")
            )
        ) {

            const parent = el.parentNode;

            while (el.firstChild) {
                parent.insertBefore(el.firstChild, el);
            }

            parent.removeChild(el);
        }

    });

    editor.normalize();
});

copyBtn.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(editor.innerText);

    } catch {

        const textArea = document.createElement("textarea");
        textArea.value = editor.innerText;

        document.body.appendChild(textArea);

        textArea.select();

        document.execCommand("copy");

        document.body.removeChild(textArea);
    }

    copyBtn.textContent = "Copied!";

    setTimeout(() => {
        copyBtn.textContent = "Copy Text";
    }, 1500);
});