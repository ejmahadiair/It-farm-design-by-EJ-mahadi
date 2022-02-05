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
    if (lastScrollY > window.scrollY) {
        nav.classList.add("nav-hidden");
        nav.classList.add("nav-back-color");
    } else if (window.scrollY >= 5 || lastScrollY >= 5) {
        nav.style.background = "transparent";
    } else {
        nav.classList.remove("nav-hidden");
        nav.classList.remove("nav-back-color");
    }
    lastScrollY = window.scrollY;
});
