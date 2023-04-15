const videoElement = document.createElement('video');
videoElement.src = chrome.extension.getURL('video/sample.mp4');
videoElement.controls = true;

document.body.appendChild(videoElement);
