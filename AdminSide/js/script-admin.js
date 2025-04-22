$(document).ready(function () {
  $("#myTable").DataTable();
});

const burger = document.querySelector(".burger");
const mobileView = document.querySelector(".nav-mobile");

burger.addEventListener("click", function () {
  mobileView.classList.toggle("d-block");
  mobileView.classList.toggle("d-none");
});
