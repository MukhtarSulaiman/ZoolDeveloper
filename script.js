
const body = document.getElementById("body")
const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");
const menuIcon = document.querySelector(".navbar");
const modeToggler = document.getElementsByClassName("modeToggler");


for (i = 0; i < modeToggler.length; i++) {
    modeToggler[i].addEventListener("click", ()=> {
        
        if (body.classList.contains("white") === false) {
            body.classList.add("white");
            menuIcon.classList.remove("navbar-dark");
            menuIcon.classList.add("navbar-light");
            sunIcon.style.display = "none";
            moonIcon.style.display = "block";
            console.log('you')
        } else {
            body.classList.remove("white");
            menuIcon.classList.remove("navbar-light");
            menuIcon.classList.add("navbar-dark");
            sunIcon.style.display = "block";
            moonIcon.style.display = "none";
            
        }
    });
}