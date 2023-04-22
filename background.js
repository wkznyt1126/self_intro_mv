browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("mechacomic.jp/")) {
        browser.tabs.update(tabId, { url: "https://www.youtube.com/embed/zriF4xIYZQI?autoplay=1&fs=1&rel=0&modestbranding=1" });
        // https://youtu.be/zhwLxNjK97A
    }
});