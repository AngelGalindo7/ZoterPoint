// This is not used and not needed (I think)
chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.executeScript(tab.id, { file: 'content.js' });
  });