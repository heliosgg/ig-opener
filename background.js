var itemTitle = "Open in Instagram";
var instagramUrl = "https://www.instagram.com/";

function onSelectionClicked(info, tab) {
  let currentUrl = instagramUrl + info.selectionText;
  console.log("Opening: " + currentUrl);

  chrome.tabs.create({ url: currentUrl });
}

chrome.contextMenus.create({
  title: itemTitle,
  contexts: ["selection"],
  onclick: onSelectionClicked });