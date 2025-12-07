// --- PLUS BUTTON TOGGLE ---
const plusBtn = document.getElementById("plusBtn");
const plusMenu = document.getElementById("plusMenu");

plusBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    plusMenu.classList.toggle("hidden");
});

// Click outside → Hide menu
document.addEventListener("click", (e) => {
    if (!plusMenu.contains(e.target) && e.target !== plusBtn) {
        plusMenu.classList.add("hidden");
    }
});

// --- SEND MESSAGE TO AI ---
document.getElementById("sendBtn").onclick = async () => {
    const msgInput = document.getElementById("userInput");
    const msg = msgInput.value.trim();
    if (!msg) return;

    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += `<p><b>You:</b> ${msg}</p>`;
    msgInput.value = "";

    try {
        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: msg })
        });

        const data = await res.json();
        chatBox.innerHTML += `<p><b>Nox AI:</b> ${data.reply}</p>`;
    } catch (err) {
        chatBox.innerHTML += `<p><b>Nox AI:</b> Server Error ⚠️</p>`;
    }
};
