$( function() {

    // ---------------------- header

    let headerHeight = $('.header').height();
    let scrollHeight = () => document.documentElement.scrollTop;
    let hasClassNavToggleVisible = $('.nav__toggle').hasClass('visible');
    let hasClassNavToggleActive = $('.nav__toggle').hasClass('active');



function onScroll () {
        if ($(window).width() <= 768 && scrollHeight() >= headerHeight && hasClassNavToggleVisible == false){
            $('.nav__toggle').addClass('visible');
        }
        
        if (scrollHeight() < headerHeight  && hasClassNavToggleActive == false && $('nav').hasClass('active') == false) {
            $('.nav__toggle').removeClass('visible');
        }
        
        if ($(window).width() > 768  && scrollHeight() >= headerHeight) {
            $('.header').addClass('fixed');
        }
        
        if ( $(window).width() > 768 && scrollHeight() < headerHeight && $('.header').hasClass('fixed')) {
            $('.header').removeClass('fixed');
        }

        
    
}

$(window).scroll(onScroll).resize(onScroll);

onScroll();


    // --------------------- nav toggle

    $('.nav__toggle').click(function(){

        if ($('.nav__toggle').hasClass('active') == false && $('nav').hasClass('active') == false) {

            $('.nav__toggle').addClass('active');
            $('nav').addClass('active');
            $('nav').addClass('show');

        } else {
            $('.nav__toggle').removeClass('active');
            $('nav').removeClass('show');
            $('nav').removeClass('active');
        }
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


    // --------------------- show animate

    function showFunctions () {
        if ($('.header__2').offset().top - (0.5 * $(window).height()) < scrollHeight()) {
            $('.header__2').addClass('show');
        }

        if ($('.about').offset().top - (0.5 * $(window).height()) < scrollHeight()) {
            $('.about').addClass('show');
        }

        if ($('#portfolio').offset().top - (0.5 * $(window).height()) < scrollHeight()){
            $('#portfolio').addClass('show');
        }

        if ($('#portfolio__item__1').offset().top - (0.5 * $(window).height()) < scrollHeight()){
            $('#portfolio__item__1').addClass('show');
        }

        if ($('#portfolio__item__2').offset().top - (0.5 * $(window).height()) < scrollHeight()){
            $('#portfolio__item__2').addClass('show');
        }
    }

    $(window).scroll(showFunctions).resize(showFunctions);

    showFunctions();












    


















})