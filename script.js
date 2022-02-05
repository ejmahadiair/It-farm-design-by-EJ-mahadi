// var body = document.body;
// window.addEventListener("scroll", () => {
//     console.log("average sroll  is = ", scrollY);
//     console.log("Total hight = ", body.scrollHeight);
//     var ejnavbar = document.getElementById("ejnav");
//     ejnavbar.classList.toggle("sticky", window.scrollY > 0);
// });
let nav = document.getElementById("ejnav");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if (window.scrollY <= 5) {
        nav.classList.remove("nav-hidden");
        nav.classList.remove("nav-back-color");
    } else if (lastScrollY > window.scrollY) {
        nav.classList.add("nav-hidden");
        nav.classList.add("nav-back-color");
    } else {
        nav.classList.remove("nav-hidden");
        nav.classList.remove("nav-back-color");
    }
    lastScrollY = window.scrollY;
    console.log(window.scrollY);
});
// if (window.scrollY <= 5) {
//     nav.style.background = "#000";
// }
