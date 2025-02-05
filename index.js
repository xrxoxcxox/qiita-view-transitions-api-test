document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMツリーの解析が終わりました");
});

window.addEventListener("load", function () {
  console.log("ページの読み込みが完了しました");
});

const images = document.querySelectorAll("img");

const callback = (entries) => {
  entries.forEach((entry) => {
    const imageName = entry.target.getAttribute("data-image-name");
    if (entry.isIntersecting) {
      console.log(`${imageName} が描画されました`);
    } else {
      console.log(`${imageName}が見えなくなりました`);
    }
  });
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const observer = new IntersectionObserver(callback, options);

images.forEach((image) => {
  observer.observe(image);
});
