// NAVBAR TOP
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const topNav = document.querySelector(".navbar .top .nav");

hamburgerMenu.addEventListener("click", (e) => {
  topNav.classList.toggle("hidden");
  hamburgerMenu.setAttribute("data-feather", "x");
});

// NAVBAR BOTTOM
const navBottomLists = document.querySelectorAll(".navbar .navigation li a");
let pageSection = "#" + window.location.href.split("#")[1];

window.addEventListener("load", async (event) => {
  await setDefaultNavItemColor();
  await changeNavItemColor();
});

navBottomLists.forEach(item => {
  item.addEventListener("click", async (e) => {
    await setDefaultNavItemColor();
    e.target.classList.remove("text-blue-light");
    e.target.classList.add("text-blue-dark");
  });
});

const setDefaultNavItemColor = async function () {
  navBottomLists.forEach(item => {
    item.classList.add("text-blue-light");
  })
};

const changeNavItemColor = async function () {
  navBottomLists.forEach(item => {
    if (pageSection == item.getAttribute("href")) {
      item.classList.remove("text-blue-light");
      item.classList.add("text-blue-dark");
    }
  });
}