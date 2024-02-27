let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    if(ul.className == "showData")
    {
        document.getElementById("bar").className = "fa-solid fa-xmark";
    }

    else{
        document.getElementById("bar").className = "fa-solid fa-bars";
    }
});

let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextbtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backbtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"; // Add smooth scroll behavior
    scrollContainer.scrollLeft -= 900; // Change from += to -= to scroll left
});
