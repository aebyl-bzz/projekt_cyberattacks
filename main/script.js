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
    chatWindow.style.display = chatWindow.style.display === "none" || chatWindow.style.display === "" ? "flex" : "none";
}
function clearchat() {
    document.getElementById("userInput").value = "";
}

// Event listener for button click
document.getElementById("submitButton").addEventListener("click", () => {
    const userInput = document.getElementById("userInput").value;
    sendChat(userInput);
    clearchat()
});
