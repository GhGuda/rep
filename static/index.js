// Scroll section active links

let section = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('nav div ul');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('.active');
                document.querySelector('nav div ul a[href*=' + id + ']').classList.add('.active');
            });
        };
    });
};

// BREAKPOINT TOGGLER 


var toggler = document.querySelector('.toggler');
var main = document.querySelector('.navLinks');
toggler.addEventListener('click', function() {
    main.classList.toggle('navLinks-active');
});



// Scroll Reveal 

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right' });



// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer','Influencer','Blogger.'],
    typeSpeed: 200,
    backspeed: 100,
    backDelay: 1000,
    loop: true

})
