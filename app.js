let burger = document.querySelector(".burger-menu");
let items = document.querySelector(".items");
let toggle = true;

burger.addEventListener("click", () => {
    items.style.height = toggle ? "190px" : "0";
    toggle = !toggle;
});

// Add an event listener for window resize
window.addEventListener("resize", () => {
    if (screen.width >= 800) {
        items.style.height = "190px";
    } else {
        items.style.height = "0";
    }
});
//
