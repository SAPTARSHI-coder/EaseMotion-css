const text =
"React Hooks are special functions introduced in React 16.8 that allow functional components to use state, lifecycle methods, and other React features without writing class components. Hooks make components easier to understand, reuse, and maintain by organizing related logic together. Some commonly used Hooks include useState, useEffect, useContext, useMemo, and useRef.";

const stream = document.getElementById("stream");
const copyBtn = document.getElementById("copyBtn");
const regenBtn = document.getElementById("regenBtn");

let index = 0;
let typing = false;

function typeWriter() {
    if (index < text.length) {
        stream.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 18);
    } else {
        typing = false;
        regenBtn.disabled = false;
    }
}

function startStreaming() {
    if (typing) return;

    typing = true;
    stream.textContent = "";
    index = 0;
    regenBtn.disabled = true;

    typeWriter();
}

regenBtn.addEventListener("click", startStreaming);

copyBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(stream.textContent);

        const original = copyBtn.innerHTML;
        copyBtn.innerHTML = "✅ Copied!";

        setTimeout(() => {
            copyBtn.innerHTML = original;
        }, 1500);
    } catch (err) {
        alert("Unable to copy text.");
    }
});

window.addEventListener("DOMContentLoaded", startStreaming);