async function sendChat(userInput) {
    try {
        const apiKey = "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";
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: "user",
                        content: userInput,
                    },
                ],
                model: "llama3-8b-8192",
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const content = data.choices[0]?.message?.content || "";
        displayResponse(content);
    } catch (error) {
        console.error("Error calling Groq API:", error);
        displayResponse("An error occurred. Please try again.");
    }
}

// Function to display response in the frontend
function displayResponse(response) {
    const responseOutput = document.getElementById("responseOutput");
    responseOutput.innerText = response;
}

// Event listener for button click
document.getElementById("submitButton").addEventListener("click", () => {
    const userInput = document.getElementById("userInput").value;
    sendChat(userInput);
});
