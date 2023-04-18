browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("mechacomic.jp/")) {
        browser.tabs.update(tabId, { url: "https://www.youtube.com/watch?v=zriF4xIYZQI" });
        // https://youtu.be/zhwLxNjK97A
    }
});