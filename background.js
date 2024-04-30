// Listen for messages from content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "blockWebsite") {
    chrome.tabs.update(sender.tab.id, { url: chrome.extension.getURL("blocked.html") });
  }
});
