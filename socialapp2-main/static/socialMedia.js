// javascript for account page

var settingsMenu = document.querySelector(".settings");

var darkBtn = document.getElementById("dark");
let darkBtn1 = document.getElementById("dark1");
let dim = document.getElementById("dim");
let light = document.getElementById("light");
let small = document.getElementById("small");
let large = document.getElementById("large")
let medium = document.getElementById("medium")

// js for right-slidebar
let right = document.querySelector(".right-sidebar");
let left = document.querySelector(".left-sidebar");

function rightSlide() {
    right.classList.toggle("right-sidebaron");

}
function LefttSlide() {
    left.classList.toggle("left-sidebaron");
}

//login page toggle


// login page
let login = document.getElementById("login");
let signup = document.getElementById("signup");
let indicator = document.getElementById("indicator");

function Signup() {
    login.style.display = "none";
    signup.style.display = "grid";
    indicator.style.transform = "translateX(0px)";
}
function Login() {
    login.style.display = "grid";
    signup.style.display = "none";
    indicator.style.transform = "translateX(125px)";
}

function settingsMenuToggle() {
    settingsMenu.classList.toggle("settings-height");
}

var popup = document.querySelector(".customize-theme");
function popUp() {
    popup.classList.toggle("customize-themeon");
}


// // javascript for dark mode slider
// darkBtn.onclick = function () {
//     darkBtn.classList.toggle("dark-on");

//     // javascript for the dark theme toggle
//     document.body.classList.toggle("dark-theme");

//     if (localStorage.getItem("theme") == "light") {
//         localStorage.setItem("theme", "dark");
//     }
//     else {
//         localStorage.setItem("theme", "light")

//     }
// }

// local storage for the current theme of the browser
// if (localStorage.getItem("theme") == "light") {
//     darkBtn.classList.remove("dark-on");
//     document.body.classList.remove("dark-theme");

// }
// else if (localStorage.getItem("theme") == "dark") {
//     darkBtn.classList.add("dark-on");
//     document.body.classList.add("dark-theme");

// }
// else {
//     localStorage.setItem("theme", "light");

// }

// See More tab 
var seeMore = document.querySelector(".helo ");

function helo_click() {
    seeMore.classList.toggle("hello");
    seeMore.style.a = 'see less';
}

darkBtn1.onclick = function () {
    document.body.classList.toggle("dark-theme");
}

dim.onclick = function () {
    document.body.classList.toggle("dim-theme");
}
light.onclick = function () {
    document.body.classList.toggle("light-theme");
}

// let themeModal = document.querySelector(".customize-theme");

// let closeThemeModal=(e)=>{
//     if(e.target.classList.contains('customize-theme')){
//         themeModal.style.display='none';

//     }
// }

// themeModal.addEventListener('click',closeThemeModal)


// function to remove pop up through touch at any locations
function popdown() {
    popup.classList.remove("customize-themeon");
}

function popdownright() {
    right.classList.remove("right-sidebaron");
}
// touch anywhere closing function::

// window.onload = function () {
//     var hidediv = document.getElementById('closepopup');
//     document.onclick = function (div) {
//         if (div.target.id !== 'closepopup') {
//             hidediv.style.display = 'none';
//         }
//     };
// };