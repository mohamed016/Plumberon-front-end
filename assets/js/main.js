const closebutton = document.querySelector(".closebutton");
const toggleBtn = document.querySelector(".toggleBtn");
const nav = document.querySelector(".second-part");
const header = document.querySelector("header");
const date = document.querySelector("label[for='date']");
const dateInput = document.querySelector("#date");
const qunatitys = document.querySelectorAll(".qunatity");
const navLink = document.querySelectorAll(".navLink");
console.log(date, dateInput);
console.log("closebutton", closebutton);
window.addEventListener("DOMContentLoaded", () => {});
// /*=====[handle navBar ]=====*/
if (closebutton) {
  closebutton.addEventListener("click", function () {
    console.log("close button clicked");
    nav.classList.toggle("shownav");
  });
}
if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", function () {
    nav.classList.toggle("shownav");
  });
}
window.addEventListener("scroll", function (e) {
  const scrollY = window.scrollY;
  if (scrollY > 0) {
    header.classList.add("positionSticky");
  } else {
    header.classList.remove("positionSticky");
  }
});
Array.from(navLink).forEach((link) => {
  link.addEventListener("click", function () {
    Array.from(navLink).forEach((ele) => {
      ele.classList.remove("active");
    });
    link.classList.add('active');
  });
});
// /*=====[handle form-date ]=====*/
if (date) {
  date.addEventListener("click", function () {
    dateInput.showPicker();
  });

  dateInput.addEventListener("change", function (e) {
    date.innerHTML = e.target.value;
  });
}

// /*=====[handle-counter]=====*/
qunatitys.forEach((qunatity) => {
  const target = Number(qunatity.textContent.trim().replace(/[^\d]/g, ""));
  window.addEventListener("scroll", function () {
    if (qunatity.getBoundingClientRect().top <= window.innerHeight) {
      let current = 0;
      const interval = setInterval(() => {
        qunatity.innerHTML = current;
        if (current >= target) {
          clearInterval(interval);
        }
        current = current + 70;
      }, 15);
    }
  });
});
