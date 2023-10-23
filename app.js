let burger = document.querySelector(".burger-menu");
let items = document.querySelector(".items");
let toggle = true;

burger.addEventListener("click", () => {
    items.style.height = toggle ? "auto" : "0";
    toggle = !toggle;
});

// Add an event listener for window resize
window.addEventListener("resize", () => {
    if (screen.width >= 800) {
        items.style.height = "auto";
    }
});
//
//SLIDER

let slideIndex = 1;
let sliderHolder = document.querySelector(".sliderHolder");
let remove = document.querySelector(".remove");

const HardCodedImages = [
    {
        src: "gallery/pexels-vlada-karpovich-4050318.jpg",
        attribute: "Attribute 1",
    },
    {
        src: "gallery/pexels-pixabay-210265.jpg",
        attribute: "Attribute 2",
    },
    {
        src: "gallery/pexels-burst-545012.jpg",
        attribute: "Attribute 3",
    },
    {
        src: "gallery/pexels-祝-鹤槐-683929.jpg",
        attribute: "Attribute 3",
    },
];
// create slider with images of specific card
function createSlideshow(images = HardCodedImages) {
    sliderHolder.style.display = "block";
    const slideshowContainer = document.querySelector(".slideshow-container");

    // Check if dots element already exists
    let dots = slideshowContainer.querySelector(".dots");
    if (!dots) {
        dots = document.createElement("div");
        dots.className = "dots";
        dots.style.textAlign = "center";
    } else {
        dots.removeChild(".dot");
    }

    images.forEach((image, index) => {
        const slide = document.createElement("div");
        slide.className = "mySlides fade";
        slide.innerHTML = `
            <img src="${image.src}" style="width: 100%" data-attribute="${image.attribute}">
        `;

        slideshowContainer.appendChild(slide);

        // Create navigation dot
        const dot = document.createElement("span");
        dot.className = "dot";
        dots.appendChild(dot);
    });

    // Add the dots element if it doesn't already exist
    if (!slideshowContainer.querySelector(".dots")) {
        slideshowContainer.appendChild(dots);
    }

    // Add previous and next buttons
    const prev = document.createElement("a");
    prev.className = "prev";
    prev.setAttribute("onclick", "plusSlides(-1)");
    prev.innerHTML = "❮";
    slideshowContainer.appendChild(prev);

    const next = document.createElement("a");
    next.className = "next";
    next.setAttribute("onclick", "plusSlides(1)");
    next.innerHTML = "❯";
    slideshowContainer.appendChild(next);
}

// Define your images and their attributes here

remove.addEventListener("click", () => {
    sliderHolder.style.display = "none";
});

// Define your images and their attributes here

remove.addEventListener("click", () => {
    sliderHolder.style.display = "none";
});
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
