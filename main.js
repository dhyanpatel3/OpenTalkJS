import fs from 'fs';
import ollama from "ollama";

// Wrapping the logic in an async function
async function processQuery() {
    // Read the file asynchronously
    fs.readFile("q.txt", "utf8", async (readErr, q) => {
        if (readErr) {
            console.error("Error reading q.txt:", readErr);
            return;
        }

        try {
            // Call the chat API asynchronously
            const response = await ollama.chat({
                model: "llama3.2:1b",
                messages: [{ role: "user", content: q }],
            });

            const a = response.message.content;

            // Write the response to a file asynchronously
            fs.writeFile("a.txt", a, (writeErr) => {
                if (writeErr) {
                    console.error("Error writing to a.txt:", writeErr);
                } else {
                    console.log("Response written to a.txt successfully!");
                }
            });
        } catch (apiError) {
            console.error("Error processing the chat response:", apiError);
        }
    });
}

// Call the function
processQuery();
