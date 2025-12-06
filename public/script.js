document.getElementById("sendBtn").onclick = async () => {
    const msg = document.getElementById("userInput").value;
    if (!msg) return;

    const chatBox = document.getElementById("chatOutput");
    chatBox.innerHTML += `<p><b>You:</b> ${msg}</p>`;

    const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg })
    });

    const data = await res.json();
    chatBox.innerHTML += `<p><b>Nox AI:</b> ${data.reply}</p>`;
};
