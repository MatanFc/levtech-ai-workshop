# levtech-ai-workshop

# Hebrew Word Simplifier Chrome Extension

## Introduction

This project aims to develop a Chrome extension that simplifies hard words in Hebrew using Morfix's online dictionary. The extension allows users to highlight a word, click the extension icon, and see the simplified version of the word in a popup.

## Development Process

### Step 1: Define the Problem

Initially, the problem was defined to ChatGPT: creating a Chrome extension that simplifies hard Hebrew words.

### Step 2: Define the Solution

A solution was proposed where users highlight a word, click the extension icon, and a popup shows the word along with its simplified version. The simplified version is fetched from the Morfix website.

### Step 3: Technical Specifications

A detailed explanation of the desired functionality was provided:

- Highlight a word.
- Click the extension icon to open a popup.
- The popup displays the highlighted word and its simplified version fetched from Morfix.

### Step 4: Provide Necessary Information

ChatGPT was asked if more information was needed to develop the product. This iterative process helped refine the solution and address specific technical requirements.

## Example Input to ChatGPT

To get a working out-of-the-box Chrome extension, the following input was provided to ChatGPT:

```
i want to build a chrome extension that simplifying hard words in Hebrew.

i want to mark a word, and when clicking on the extension's icon - a popup will open and show the word and the according simplify word.

you can get the simplify word from the site 'https://www.morfix.co.il/<my-hard-word>', when <my-hard-word> will be replaced with the hard word i highlighted.

there are multiple results, each result is under class "Translation_content_heToen"
in each result there is a word and the simplified word.
The word is under class “Translation_spTop_heToen” and the simplified word is under class “Translation_hemin_heToen”

please help me build it, assume I haven’t started anything.
If there are any missing information you need – let me know and I’ll provide it.
```

## Implementation Details

### Manifest File (`manifest.json`)

The manifest file includes the necessary permissions and configurations for the Chrome extension.

### Content Script (`content.js`)

The content script listens for text selection events, fetches the simplified word from Morfix, and stores the selected word in Chrome's local storage.

### Popup Script (`popup.js`)

The popup script retrieves the selected word from local storage, fetches the simplified word from Morfix, and displays the word and its simplified version in the popup. It also includes functionality for saving translations and pronouncing the word using the Web Speech API.

### Popup HTML (`popup.html`)

The popup HTML file defines the layout and styling of the popup, ensuring a user-friendly interface.

## Conclusion

By following these steps and iterating with ChatGPT's assistance, a functional Chrome extension was developed that simplifies hard words in Hebrew. This process highlights the effectiveness of using AI to support and streamline the development of software solutions.
