const btnsAndIcons = document.querySelector(".btnsAndIcons"),
    mobileBtn = document.querySelector(".mobile-bar");
const REMOVING_CN = "removing";

function handleClick() {
    btnsAndIcons.classList.toggle(REMOVING_CN);
}

mobileBtn.addEventListener("click", handleClick);


