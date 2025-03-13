const themeToggler = document.getElementById("theme-toggler");
const body = document.body;
const navMenu = document.querySelector(".nav_menu");
const scrollToTop = document.getElementById("scrollToTop");

function setTheme(isDark) {
  body.classList.toggle("dark-theme", isDark);
  body.classList.toggle("light-theme", !isDark);
  themeToggler.classList.toggle("fa-moon", !isDark);
  themeToggler.classList.toggle("fa-sun", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

themeToggler.addEventListener("click", () => {
  const isDark = body.classList.contains("light-theme");
  setTheme(isDark);
});

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme ? savedTheme === "dark" : true);

window.addEventListener("scroll", () => {
  const scrolledPastThreshold = window.scrollY > window.innerHeight;
  const nearBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  const showScrollButton = window.scrollY > 300;

  if (scrolledPastThreshold) {
    navMenu.classList.add("fixed");
  } else {
    navMenu.classList.remove("fixed");
  }
  if (scrolledPastThreshold && nearBottom) {
    navMenu.classList.remove("fixed");
  }
  scrollToTop.classList.toggle("show", showScrollButton);
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
