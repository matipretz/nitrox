document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loader").style.display = "none";
  var placeholders = document.querySelectorAll(".placeholder");
  placeholders.forEach(function (placeholder) {
    placeholder.classList.remove("placeholder");
  });
});
