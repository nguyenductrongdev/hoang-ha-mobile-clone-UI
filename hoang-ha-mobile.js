const sliderBtnPreviouss = document.querySelector(
  ".slider .slider__btn-previous"
);
const sliderBtnNext = document.querySelector(".slider .slider__btn-next");
let sliderImages = document.querySelectorAll(".slider .slider__image");
let currIndex = 0;
let preIndex = currIndex - 1 < 0 ? sliderImages.length - 1 : currIndex - 1;
let nextIndex = currIndex + 1 > sliderImages.length - 1 ? 0 : currIndex + 1;

// console.log(preIndex, currIndex, nextIndex);

sliderImages[preIndex].style.left = "-100%";
sliderImages[nextIndex].style.left = "100%";

function sliderTo(signal) {
  const [PREVIOUS, NEXT] = [-1, 1];

  console.log("click", preIndex, currIndex, nextIndex);

  //   get animation based on signal param
  switch (signal) {
    case PREVIOUS:
      console.log("next");
      sliderImages[preIndex].style.visibility = "visible";
      sliderImages[preIndex].style.left = "0";
      sliderImages[currIndex].style.left = "-100%";
      sliderImages[currIndex].style.visibility = "hidden";

      currIndex = currIndex - 1 < 0 ? sliderImages.length - 1 : currIndex - 1;
      break;

    case NEXT:
      console.log("next");
      sliderImages[nextIndex].style.visibility = "visible";
      sliderImages[nextIndex].style.left = "0";
      sliderImages[currIndex].style.left = "-100%";
      sliderImages[currIndex].style.visibility = "hidden";

      currIndex = currIndex + 1 > sliderImages.length - 1 ? 0 : currIndex + 1;
      break;

    default:
      throw Error("signal argument must -1 or 1, not " + signal);
  }

  // update value for preIndex and nexrIndex based on currIndex
  preIndex = currIndex - 1 < 0 ? sliderImages.length - 1 : currIndex - 1;
  nextIndex = currIndex + 1 > sliderImages.length - 1 ? 0 : currIndex + 1;

  sliderImages[preIndex].style.left = "-100%";
  sliderImages[nextIndex].style.left = "100%";
}

sliderBtnNext.addEventListener("click", function (event) {
  event.preventDefault();
  sliderTo(1);
});

sliderBtnPreviouss.addEventListener("click", function (event) {
  event.preventDefault();
  sliderTo(-1);
});
