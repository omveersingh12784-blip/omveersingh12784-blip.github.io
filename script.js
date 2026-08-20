document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded successfully.");

  const buttons = document.querySelectorAll("button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("Button clicked");
    });
  });
});
