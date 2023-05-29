document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            document.querySelector('.navbar').classList.add("sticky");
        } else {
            document.querySelector('.navbar').classList.remove("sticky");
        }
        
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            document.querySelector('.scroll-up-btn').classList.add("show");
        } else {
            document.querySelector('.scroll-up-btn').classList.remove("show");
        }
    });

    // slide-up script
    document.querySelector('.scroll-up-btn').addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // removing smooth scroll on slide-up button click
        document.documentElement.style.scrollBehavior = "auto";
    });

    var menuLinks = document.querySelectorAll('.navbar .menu li a');
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            // applying again smooth scroll on menu items click
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });

    // toggle menu/navbar script
    document.querySelector('.menu-btn').addEventListener("click", function() {
        document.querySelector('.navbar .menu').classList.toggle("active");
        document.querySelector('.menu-btn i').classList.toggle("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    var carousel = document.querySelector('.carousel');
    if (carousel) {
        new Glide(carousel, {
            type: 'carousel',
            startAt: 0,
            autoplay: 2000,
            hoverpause: true,
            perView: 3,
            breakpoints: {
                0: {
                    perView: 1
                },
                600: {
                    perView: 2
                },
                1000: {
                    perView: 3
                }
            }
        }).mount();
    }
});
