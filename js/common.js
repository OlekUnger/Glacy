var search_btn = document.querySelector(".search-btn");
var search_form = document.querySelector(".search-form");
var search = document.querySelector(".search");
var search_field = search_form.querySelector("[name=search]");


search_btn.addEventListener("mouseover", function(event) {
  event.preventDefault();
  search_form.classList.add("modal-content-show");
  search_field.focus();
});

search_field.addEventListener("mouseout", function(event) {
  search_form.classList.remove("modal-content-show");
});