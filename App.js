// console.log(document.documentElement); //to select all HTML page
// console.log(document.head); //to select head in HTML page
// console.log(document.body); //to select body in HTML page

// document.querySelector(".header"); //to select the header of the page
// document.querySelectorAll(".section"); //to select the section with class called section of the page return nodelist

// document.getElementById("section--1"); //to select element by id
// document.getElementsByTagName("button"); //to select by the name of the tag return htmlcollection

// document.getElementsByClassName("btn"); //to select the element using classname

// // creating and inserting element
// // .insertAdejecentHTML

const message = document.createElement("div"); //will return a DOM element
// message.classList.add("cookie-message"); //to add the class
// message.innerHTML =
//   'we use cookied for improved functionality and analytics <button class = "btn btn--close-cookie">Got it!</button>';

// header.prepend(message); //add the element as a first child
// header.append(message); //add the element as a last child
// header.append(message.cloneNode(true)); //to append in the first and last child

// header.before(message); //add before header element
// header.after(message); //add after header element

// //Delete elements
// document
//   .querySelector(".btn--clise-cookie")
//   .addEventListener("click", function () {
//     message.remove();
//     message.parentElement.removeChild(message); //the same of .remove()
//   });

//styles
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered"); //to change color

// //Attributes
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = "beautiful minimalist logo";

// //non standard
// console.log(logo.designer);
// console.log(logo.getAttribute("designer"));
// logo.setAttribute("company", "Bankist");

// console.log(logo.src);
// console.log(logo.getAttribute("src"));

// const link = document.querySelector(".nav__link--btn");

// console.log(link.href);
// console.log(link.getAttribute("href"));

// //data attributes
// console.log(logo.dataset.versionNumber);

// //classes

// logo.classList.add("c", "j");
// logo.classList.remove("c", "j");
// logo.classList.toggle("c");
// logo.classList.contains("c"); //not inclides

// //Don't use this
// logo.className = "jonas";

// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");

// btnScrollTo.addEventListener("click", function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   console.log(e.target.getBoundingClientRect());
//   console.log("current scroll(X/Y)", window.pageXOffset, window.pageYOffset);
//   console.log(
//     "Height/Width viewport",
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//scrolling
//   window.scrollTo(
//     s1coords.left + window.pageXOffset,
//     s1coords.top + window.pageYOffset
//   );
//   window.scrollTo({
//     left: s1coords.left + window.pageXOffset,
//     top: s1coords.top + window.pageYOffset,
//     behavior: "smooth",
//   });
//   section1.scrollIntoView({ behavior: "smooth" });
// });
// const h1 = document.querySelector("h1");
// const alertH1 = function (e) {
//   alert("addeventlistner : great! you are reading the heading :D");
//   //h1.removeEventListener("mouseenter", alertH1);
// };

// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// //old school ways
// // h1.onmouseenter = function (e) {
// //   alert("addeventlistner : great! you are reading the heading :D");
// // };
