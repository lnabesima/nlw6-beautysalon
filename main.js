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
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
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
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true,
        }
    }

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
const backToTopBtn = document.querySelector('.back-to-top');

function backToTop() {
    if(window.scrollY >= 560) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

/* Highlight menu link with the current section */
const sections = document.querySelectorAll('section[id]')
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
    for(const section of sections){
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if (checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
}


/* When Scroll */
window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
}
)