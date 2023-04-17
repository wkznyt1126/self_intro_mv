browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("twitter.com")) {
        browser.tabs.update(tabId, { url: "https://youtu.be/zhwLxNjK97A" });
    }
});