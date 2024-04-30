// Function to check if a string contains any of the inappropriate text
function containsInappropriateText(text) {
  const inappropriateText = ["Selenite", "MonkeyGG2", "CrazyGames", "Unblocked Games", "Proxy", "AddictingGames"];
  // Convert the text to lowercase for case-insensitive comparison
  const lowercaseText = text.toLowerCase();
  // Split the text into words
  const words = lowercaseText.split(/\s+/);
  // Check if any of the inappropriate phrases are present in the text as whole words
  return inappropriateText.some(phrase => {
    // Convert the phrase to lowercase for case-insensitive comparison
    const lowercasePhrase = phrase.toLowerCase();
    // Check if the phrase is found in the words array as a whole word
    return words.includes(lowercasePhrase);
  });
}

// Send message to background script if inappropriate text is found
function scanPageForInappropriateText() {
  const pageText = document.body.innerText;
  if (containsInappropriateText(pageText)) {
    // Send a message to the background script to block the website
    chrome.runtime.sendMessage({ action: "blockWebsite" });
  }
}

// Run the scan when the page is loaded
scanPageForInappropriateText();
