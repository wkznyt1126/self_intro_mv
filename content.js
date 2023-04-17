// Twitter URLからビデオ要素を検索
let videoElement = document.querySelector('video[src^="blob:https://twitter.com/"]');

if (videoElement) {
  // ビデオ要素が見つかったら、YouTube URLに変換する
    let youtubeUrl = "https://youtu.be/zhwLxNjK97A";

    // YouTube URLにリダイレクト
    window.location.href = youtubeUrl;
}
