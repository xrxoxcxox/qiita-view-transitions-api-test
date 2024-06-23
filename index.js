const images = document.querySelectorAll("img");

const callback = (entries, observer) => {
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

images.forEach((box) => {
  observer.observe(box);
});
