// Receive message from content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "blockWebsite") {
    // Get the URL of the blocked page
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const blockedUrl = tabs[0].url;
      // Open blocked.html with the blocked URL as a query parameter
      chrome.tabs.create({ url: "blocked.html?blockedUrl=" + encodeURIComponent(blockedUrl) });
    });
  }
});
