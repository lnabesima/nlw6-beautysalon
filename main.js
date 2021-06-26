/*open and close menu on click*/
const nav = document.querySelector('header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle){
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/*close menu when an item is clicked*/
const links = document.querySelectorAll('nav ul li a');

for (const link of links){
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/*add shadow to header when scroll*/
function changeHeaderWhenScroll() {
    const header = document.querySelector('#header');
    const navHeight = header.offsetHeight;

    if(window.scrollY >= navHeight){
        //if scroll is bigger than the height of the navbar
        header.classList.add('scroll')
    } else {
        //if scroll is smaller than the height of the navbar
        header.classList.remove('scroll')
    }
}


/*testimonial carousel using swiper*/
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
});

/*scrollreveal*/
const scrollreveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 850,
    reset: true,
});

scrollreveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social`,
    {interval: 100}
)

/*Back to top Button*/
function backToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if(window.scrollY >= 560) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

/* When Scroll */

window.addEventListener('scroll', function(){

    backToTop()
    changeHeaderWhenScroll()
})