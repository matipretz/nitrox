document.addEventListener("DOMContentLoaded", function () {
  var placeholders = document.querySelectorAll(".placeholder");
  placeholders.forEach(function (placeholder) {
    placeholder.classList.remove("placeholder");
  });
});
