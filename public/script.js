document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".button-descriptions button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var target = this.getAttribute("data-target-active");

      var descriptions = document.querySelectorAll(".descriptions");
      descriptions.forEach(function (description) {
        description.style.display = "none";
      });

      var selectedDescription = document.querySelector("[data-active='" + target + "']");
      selectedDescription.style.display = "block";

      var images = document.querySelectorAll(".img-wrapper figure");
      images.forEach(function (image) {
        image.style.display = "none";
      });

      var selectedImage = document.querySelector("." + target);
      selectedImage.style.display = "block";
    });
  });
});