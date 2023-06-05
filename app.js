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

        if ($('.nav__toggle').hasClass('active') == false && $('nav').hasClass('active') == false) {

            $('.nav__toggle').addClass('active');
            $('nav').addClass('active');
            $('nav.active').animate({ opacity: 1, height: 'slow' }, 'slow');

        } else {
            $('.nav__toggle').removeClass('active');
            $('nav.active').animate({ opacity: 0, height: 'slow' }, 'slow'); 
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
        if ($('.header__2').offset().top < scrollHeight() + 300) {
            $('.header__2').addClass('show');
        }

        if ($('.about').offset().top < scrollHeight() +300) {
            $('.about').addClass('show');
        }

        if ($('#portfolio').offset().top < scrollHeight() +300){
            $('#portfolio').addClass('show');
        }

        if($('#contacts').offset().top - 600 < scrollHeight()){
            $('#contacts').addClass('show');
        }

        console.log($('#contacts').offset().top - 600, scrollHeight())   
    }

    $(window).scroll(showFunctions).resize(showFunctions);

    showFunctions();












    


















})