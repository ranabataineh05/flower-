document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector(".nav-search");
  const userBtn = document.querySelector(".nav-user");
  const cancelSearch = document.querySelector(".search-cancel");
  const cancelLogin = document.querySelector(".login-cancel");
  const searchBar = document.querySelector(".search-bar");
  const loginModal = document.querySelector(".square");
  const searchInput = document.querySelector(".search-input input");
  const header = document.querySelector('header');

  searchBtn.addEventListener("click", () => {
    searchBar.classList.add("search-bar-active");
  });

  cancelSearch.addEventListener("click", () => {
    searchBar.classList.remove("search-bar-active");
    searchInput.value = "";
  });

  userBtn.addEventListener("click", () => {
    loginModal.classList.add("square-active");
  });

  cancelLogin.addEventListener("click", () => {
    loginModal.classList.remove("square-active");
  });

});
