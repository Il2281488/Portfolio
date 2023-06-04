$('dociment').ready( function() {

    // ---------------------- header

    let headerHeight = $('.header').height();
    let scrollHeight = () => document.documentElement.scrollTop;
    let hasClassNavToggleVisible = $('.nav__toggle').hasClass('visible');
    let hasClassNavToggleActive = $('.nav__toggle').hasClass('active');



function onScroll () {
    $(window).scroll(function () {
        if ($(window).width() <= 768 && scrollHeight() >= headerHeight && hasClassNavToggleVisible == false){
            $('.nav__toggle').addClass('visible');
        }
        
        if (scrollHeight() < headerHeight  && $('.nav__toggle').hasClass('active') == false) {
            $('.nav__toggle').removeClass('visible');
        }
        
        if ($(window).width() > 768  && scrollHeight() >= headerHeight) {
            $('.header').addClass('fixed');
        }
        
        if ( $(window).width() > 768 && scrollHeight() < headerHeight && $('.header').hasClass('fixed')) {
            $('.header').removeClass('fixed');
        }

        
    });
}


onScroll();


    // --------------------- nav toggle

    $('.nav__toggle').click(function(){
        $('.nav__toggle').toggleClass('active');
        $('nav').toggleClass('active');
    });


    // ---------------------- smooth scroll

    Array.from($('nav a')).forEach((link) => {
        link.addEventListener('click', (event) =>{
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navbarHeight = $('.header').height();
            const scrollToPosition = targetElement.offsetTop - navbarHeight ;

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            })
        })
    })







    


















})