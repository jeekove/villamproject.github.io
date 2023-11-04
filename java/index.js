document.addEventListener("DOMContentLoaded", function() {
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    var image3 = document.getElementById("image3");
    var imageText1 = document.getElementById("image-text");
    var imageText2 = document.getElementById("image-text2");
    var imageText3 = document.getElementById("image-text3");
    var images = [image1, image2, image3];
    var imageTexts = [imageText1, imageText2, imageText3];
    var currentIndex = 0;

    function switchImage() {
        images[currentIndex].style.opacity = 0;
        imageTexts[currentIndex].style.opacity = 0;

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].style.opacity = 1;
        imageTexts[currentIndex].style.opacity = 1;
    }

    images[currentIndex].style.opacity = 1;
    imageTexts[currentIndex].style.opacity = 1;

    setInterval(switchImage, 7000);
});

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("value");
  animateValue(obj, 100, 0, 5000);
