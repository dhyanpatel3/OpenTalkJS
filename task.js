import ollama from "ollama";
import fs from "fs";
let input = process.argv[2];
let q;
let ans;
let n = Math.floor(Math.random() * 3 + 1);

async function ask_question(q) {
  const response = await ollama.chat({
    model: "llama3.2:1b",
    messages: [{ role: "user", content: q }],
  });
  ans = response.message.content;
  fs.writeFileSync(`Ans.txt`, ans, (err) => {
    if (err) {
      throw err;
    }
  });
}

switch (input) {
  case "Professional_Writing":
    q = `./Category/Professional_Writing/q${n}.txt`;
    ask_question(
      fs.readFileSync(q, "utf-8", (err) => {        if (err) {
          throw err;
        }
      })
    );

    break;
  case "Creative_Writing":
    q = `./Category/Creative_Writing/q${n}.txt`;
    ask_question(
      fs.readFileSync(q, "utf-8", (err) => {
        if (err) {
          throw err;
        }
      })
    );

    break;
  case "Technical_Content":
    q = `./Category/Technical_Content/q${n}.txt`;
    ask_question(
      fs.readFileSync(q, "utf-8", (err) => {
        if (err) {
          throw err;
        }
      })
    );

    break;
  case "Academic_Writing":
    q = `./Category/Academic_Writing/q${n}.txt`;
    ask_question(
      fs.readFileSync(q, "utf-8", (err) => {
        if (err) {
          throw err;
        }
      })
    );

    break;
  case "Marketing_Content":
    q = `./Category/Marketing_Content/q${n}.txt`;
    ask_question(
      fs.readFileSync(q, "utf-8", (err) => {
        if (err) {
          throw err;
        }
      })
    );

    break;
}