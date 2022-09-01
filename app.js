let photo = document.querySelector(".banner3_img");
let header1 = document.querySelector(".header1");
let header2 = document.querySelector(".header");

let resizing = () => {
    if (innerWidth > 800) {
        photo.style.display = "flex";
        header1.style.display = "flex";     
        header2.style.display = "none";
    } else {
        photo.style.display = "none";
        header1.style.display = "none"
        header2.style.display = "flex";
    };
};

resizing();

window.addEventListener("resize", resizing);