// NAVBAR TOP
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const topNav = document.querySelector(".navbar .top .nav");
const navBottom = document.querySelector(".navbar .navigation .nav");
const historyExperienceToggle = document.querySelector(
  ".history-toggle-experience"
);
const historyEducationToggle = document.querySelector(
  ".history-toggle-education"
);
const historyExperienceComponent = document.querySelector(
  ".history-experience"
);
const historyEducationComponent = document.querySelector(".history-education");

hamburgerMenu.addEventListener("click", e => {
  topNav.classList.toggle("hidden");
  navBottom.classList.toggle("hidden");
  hamburgerMenu.setAttribute("data-feather", "x");
});

// NAVBAR BOTTOM
const navBottomLists = document.querySelectorAll(".navbar .navigation li a");
let pageSection = "#" + window.location.href.split("#")[1];

window.addEventListener("load", async event => {
  await setDefaultNavItemColor();
  await changeNavItemColor();
});

navBottomLists.forEach(item => {
  item.addEventListener("click", async e => {
    await setDefaultNavItemColor();
    e.target.classList.remove("text-blue-light");
    e.target.classList.add("text-blue-dark");
  });
});

const setDefaultNavItemColor = async function () {
  navBottomLists.forEach(item => {
    item.classList.add("text-blue-light");
  });
};

const changeNavItemColor = async function () {
  if (!window.location.href.split("#")[1]) {
    setDefaultNavItemColor();
    navBottomLists[0].classList.remove("text-blue-light");
    navBottomLists[0].classList.add("text-blue-dark");
  } else {
    navBottomLists.forEach(item => {
      if (pageSection == item.getAttribute("href")) {
        item.classList.remove("text-blue-light");
        item.classList.add("text-blue-dark");
      }
    });
  }
};

// WHEN OTHER AREA IS CLICKED THAN NAVBAR
document.addEventListener("click", e => {
  if (!hamburgerMenu.contains(e.target) && !topNav.contains(e.target)) {
    topNav.classList.add("hidden");
    navBottom.classList.add("hidden");
  }
});

// History toggle
historyEducationToggle.addEventListener("click", function () {
  historyExperienceToggle.classList.remove("toggle-active");
  historyEducationToggle.classList.add("toggle-active");
  historyExperienceComponent.classList.remove("is-active");
  historyEducationComponent.classList.add("is-active");
});

historyExperienceToggle.addEventListener("click", function () {
  historyExperienceToggle.classList.add("toggle-active");
  historyEducationToggle.classList.remove("toggle-active");
  historyExperienceComponent.classList.add("is-active");
  historyEducationComponent.classList.remove("is-active");
});
