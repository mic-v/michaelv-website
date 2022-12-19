let menuIcons = document.querySelectorAll(".menuicon");


console.log(menuIcons.length);

for (let i = 0; i < menuIcons.length; i++) {
    menuIcons[i].addEventListener('click', function() {
        const element = document.querySelector('.navigation-list');
        let opacity = element.style.opacity;
        console.log("opacity: " + opacity);
        if(opacity === "1") {
            element.style.opacity = 0;
            element.style.height = "0";
        } else {
            element.style.opacity = 1;
            element.style.height = "100%";
        }
    });
}

function show(elementID) {
    const element = document.getElementById(elementID);
    if(!element) {
        alert("There is no page for that!");
        return;
    }

    const pages = document.getElementsByClassName('page');
    for(let i =0; i < pages.length; i++)
    {
        pages[i].classList.remove('visible');
        pages[i].classList.add('hidden');
    }
    element.classList.remove('hidden');
    element.classList.add('visible');

    let windowX = window.matchMedia("(min-width: 700px)");

    if(!windowX.matches) {
        const navlist = document.querySelector('.navigation-list');
        let opacity = navlist .style.opacity;
        console.log("opacity: " + opacity);
        if(opacity === "1") {
            navlist .style.opacity = 0;
            navlist .style.height = "0";
        } else {
            navlist .style.opacity = 1;
            navlist .style.height = "100%";
        }

    }
}