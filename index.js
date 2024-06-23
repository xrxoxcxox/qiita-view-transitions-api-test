const images = document.querySelectorAll("img");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const imageName = entry.target.getAttribute("data-image-name");
      console.log(`${imageName} が描画されました`);
      // observer.unobserve(entry.target);
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
