const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

//button Scrolling

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log("current scroll(X/Y)", window.pageXOffset, window.pageYOffset);
  console.log(
    "Height/Width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });
  section1.scrollIntoView({ behavior: "smooth" });
});

////////////////////////////
//page Navigation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//1-Add event listner to common parent element
//2-Determine whar element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
//Tabbed component
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);
  //Guard clause
  if (!clicked) return; //if nothing clicked just finish this function
  //Remove Active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
  //Active Tab
  clicked.classList.add("operations__tab--active");
  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataSet.tab}`)
    .classList.add("operations__content--active");
});

//Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelector(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//passing 'argument' into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// //sticky navigation
// const intitialCoords = section1.getBoundingClientRect();
// console.log(intitialCoords);
// window.addEventListener("scroll", function (e) {
//   console.log(this.window.scrollY);
//   if (this.window.screenY > intitialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

//Sticky Navigation : Intersection Observer API

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

const header = document.querySelector(".header");

const stickyNav = function (entries) {
  const [entry] = entries;
  nav.classList.add("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);
// const h1 = document.querySelector("h1");
// //Going downwards : child
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";

// //Going upwords : parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

//it select a colsest header to h1 element,
//so the closest parent element that has the selected class ".header" and applied the action on it
// h1.closest(".header").style.background = "var(--gradient-secondary)";
// //it will call the element it self
// h1.closest("h1").style.background = "var(--gradient-primary)";

//Going sideways : siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
//to get all children of the parent not only previus and next  (trick about sibling)
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.tranform = "scale(0.5)";
// });
