

const nav = document.querySelectorAll(".nav__link");
const button = document.querySelector(".inform__button");
const flinks = document.querySelectorAll(".flinks");
console.log(flinks);


// Navigation

nav.forEach(navItem => {
    navItem.addEventListener("mouseover", function() {
        navItem.style.backgroundColor = "#643a79";
        navItem.style.borderRadius = "3px";
    });
})

nav.forEach(navItem => {
    navItem.addEventListener("mouseout", function() {
        navItem.style.backgroundColor = "";
        navItem.style.borderRadius = "";
    });
})


// Button

button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "#c86a40";
    button.innerHTML = "example@gmail.com";
    button.style.textTransform = "none";
});

button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "#eb7d4b";
    button.innerHTML = "WORK WITH US!";
});


// Footer

flinks.forEach(flinksItem => {
    flinksItem.addEventListener("mouseover", function() {
        flinksItem.style.backgroundColor = "#4d619d";
        flinksItem.style.borderRadius = "3px";
    });
})

flinks.forEach(flinksItem => {
    flinksItem.addEventListener("mouseout", function() {
        flinksItem.style.backgroundColor = "";
        flinksItem.style.borderRadius = "";
    });
})