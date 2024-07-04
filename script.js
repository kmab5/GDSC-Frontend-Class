const drawer = document.querySelector(".dropdown");
const navbar = document.querySelector(".navbar");

// Highlight page
window.onload = e => {
    console.log("Loaded");
    if(document.location.toString().match(/home/g)){
        Array.from(document.querySelectorAll("nav.navbar .rightnav p"))[0].style.setProperty("color", "darkgreen");
        console.log(`${document.location}: Home`);
    } else if(document.location.toString().match(/service/g)){
        Array.from(document.querySelectorAll("nav.navbar .rightnav p"))[1].style.setProperty("color", "darkgreen");
        console.log(`${document.location}: Service`);
    } else if(document.location.toString().match(/index/g)){
        Array.from(document.querySelectorAll("nav.navbar .rightnav p"))[2].style.setProperty("color", "darkgreen");
        console.log(`${document.location}: Contact`);
    }
};

// Drawer click
document.querySelector("#drawericon").addEventListener("click", e => {
    drawer.classList.toggle("active");
    navbar.classList.toggle("active");
});

