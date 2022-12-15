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
            console.log("tyes");
        } else {
            element.style.opacity = 1;
            element.style.height = "100%";
            console.log("no");
        }
    });
}