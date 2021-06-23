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

window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight){
        //if scroll is bigger than the height of the navbar
        header.classList.add('scroll')
    } else {
        //if scroll is smaller than the height of the navbar
        header.classList.remove('scroll')
    }
})