// menu-icon-navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



// scroll-section-active-links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky-navbar
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove-menu-icon-when-click-navbar-links(scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


}


// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// dark-mode-light

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


// scroll-reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-container, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .home-img img, .services-container, .gallery-section, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-container h1, .about-img, about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-container h3, .home-container p, .about-content', { origin: 'right' });


// Once all content has been loaded, the function check if there is at least 1 container with class 'progress' and at least 1 child with 'data-progress' attribute inside the container
window.onload = function () {
    if (
        document.querySelectorAll(".progress").length > 0 &&
        document.querySelectorAll(".progress [data-progress]").length > 0
    ) {
        // Get all elements with 'data-progress' attribute and run the 'AnimateProgress' funcion with each one
        document
            .querySelectorAll(".progress [data-progress]")
            .forEach((x) => AnimateProgress(x));
    }
};

function AnimateProgress(el) {
    // Get the element that came as parameter and add the class 'animated-progress' on it
    el.className = "animate-progress";
    // Set the attribute 'style' of this element with the custom attribute '--animate-progress' and the value of 'data-progress' as the width value
    el.setAttribute(
        "style",
        `--animate-progress:${el.getAttribute("data-progress")}%;`
    );
    // After this the CSS make its magic
}


// filter-section
$(".filter a").click(function (e) {
    e.preventDefault();
    var a = $(this).attr("href");
    a = a.substr(1);
    $(".sets a").each(function () {
        if (!$(this).hasClass(a) && a != "") $(this).addClass("hide");
        else $(this).removeClass("hide");
    });



    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("btncontainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        var current = document.getElementsByClassName("btn-active");
        current[0].className = current[0].className.replace(" btn-active", "");
        this.className += " btn-active";

    }
});


let imgs = document.querySelectorAll("img");
let count;
imgs.forEach((img, index) => {
    img.addEventListener("click", function (e) {
        if (e.target == this) {
            count = index;
            let openDiv = document.createElement("div");
            let imgPreview = document.createElement("img");
            let butonsSection = document.createElement("div");
            butonsSection.classList.add("butonsSection");
            let closeBtn = document.createElement("button");
            let nextBtn = document.createElement("button");
            let prevButton = document.createElement("button");
            prevButton.innerText = "Prev";
            nextBtn.innerText = "Next";

            nextBtn.classList.add("nextButton");
            prevButton.classList.add("prevButton");
            nextBtn.addEventListener("click", function () {
                if (count >= imgs.length - 1) {
                    count = 0;
                } else {
                    count++;
                }

                imgPreview.src = imgs[count].src;
            });

            prevButton.addEventListener("click", function () {
                if (count === 0) {
                    count = imgs.length - 1;
                } else {
                    count--;
                }

                imgPreview.src = imgs[count].src;
            });

            closeBtn.classList.add("closeBtn");
            closeBtn.innerText = "X";
            closeBtn.addEventListener("click", function () {
                openDiv.remove();
            });

            imgPreview.classList.add("imgPreview");
            imgPreview.src = this.src;

            butonsSection.append(prevButton, nextBtn);
            openDiv.append(imgPreview, butonsSection, closeBtn);

            openDiv.classList.add("openDiv");

            document.querySelector("body").append(openDiv);
        }
    });
});