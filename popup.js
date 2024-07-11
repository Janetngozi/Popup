const button = document.querySelector("button");
const popupWrapper = document.querySelector(".popup-wrapper");
const email = document.querySelector("#email");
button.addEventListener("click", () => {
  popupWrapper.style.display = "block";
});
popupWrapper.addEventListener("click", function () {
  popupWrapper.style.display = "none";
});

const popup = document.querySelector(".popup");

popup.addEventListener("click", (e) => {
  e.stopPropagation();
});

