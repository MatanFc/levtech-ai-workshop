// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "fetchTranslation") {
//     const word = message.word;
//     fetch(`https://www.morfix.co.il/${word}`)
//       .then((response) => response.text())
//       .then((data) => {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(data, "text/html");
//         const elements = doc.querySelectorAll(".Translation_content_heToen");
//         let result = "";
//         elements.forEach((el) => {
//           const name = el.querySelector(".Translation_spTop_heToen")?.innerText;
//           const value = el.querySelector(
//             ".Translation_hemin_heToen"
//           )?.innerText;
//           if (name && value) {
//             result += `<b>${name}:</b> ${value}<br>`;
//           }
//         });
//         sendResponse({ result });
//       })
//       .catch((error) => {
//         console.error("Error fetching translation:", error);
//         sendResponse({ result: "Error fetching translation." });
//       });
//     return true; // Keep the message channel open for sendResponse
//   }
// });
