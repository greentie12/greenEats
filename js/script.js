// let dt = new Date();
// document.getElementById("datetime").innerHTML = dt.toDateString();

const navSlide = () => {
  const burger = document.getElementById("hamburger");
  const nav = document.querySelector("header .container");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();
