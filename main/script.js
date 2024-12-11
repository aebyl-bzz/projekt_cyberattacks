function burgermenue() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function toggleChat() {
    const chatWindow = document.getElementById("chatWindow");
    if (chatWindow.classList.contains("open")) {
        chatWindow.classList.remove("open");
        setTimeout(() => {
            chatWindow.style.display = "none";
        }, 300); // Match the transition duration
    } else {
        chatWindow.style.display = "flex";
        setTimeout(() => {
            chatWindow.classList.add("open");
        }, 10); // Slight delay to trigger the transition
    }
}

// Event listener for button click
document.getElementById("submitButton").addEventListener("click", () => {
    const userInput = document.getElementById("userInput").value;
    sendChat(userInput);
    clearchat()
});
