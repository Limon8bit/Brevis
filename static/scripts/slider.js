$(document).ready(function(){

    function sliderNav(){
        var slideIndex = $('.slide').index($('.activeSlide'));

        $('.sliderNavigation-element').each(function(){
            $(this).removeClass('sliderNavigationActive');
        });

        $('.sliderNavigation-element:nth-child('+ (slideIndex+1) +')').addClass('sliderNavigationActive');
    }

    $( ".prevSlideButton" ).on('click', function(){
        $(".slide").each(function(){
            if($(this).hasClass('activeSlide')){
                $(this).addClass('nextSlide').removeClass('activeSlide');
            } else if($(this).hasClass('prevSlide')){
                $(this).addClass('activeSlide').removeClass('prevSlide');
            } else if($(this).hasClass('nextSlide')){
                $(this).addClass('prevSlide').removeClass('nextSlide');
            }
        });
        sliderNav();
    });

    $( ".nextSlideButton" ).on('click', function(){
        $(".slide").each(function(){
            if($(this).hasClass('activeSlide')){
                $(this).addClass('prevSlide').removeClass('activeSlide');
            } else if($(this).hasClass('prevSlide')){
                $(this).addClass('nextSlide').removeClass('prevSlide');
            } else if($(this).hasClass('nextSlide')){
                $(this).addClass('activeSlide').removeClass('nextSlide');
            }
        });
        sliderNav();
    });

    

    $('.sliderNavigation-element').on('click', function(){

        // Управление слайдером через нижнее меню

        $('.sliderNavigation-element').each(function(){
            $(this).removeClass('sliderNavigationActive');
        });

        // Привязка порядка кнопки к слайду через переменную

        var index = $('.sliderNavigation-element').index($(this));

        // Очистка слайдов классов
        function clean(){
            $('.slide').each(function(){
                $('.slide').removeClass('activeSlide');
                $('.slide').removeClass('prevSlide');
                $('.slide').removeClass('nextSlide');
            })
        }
        
        if(index == 0){
            clean();
            $('.slide:nth-child(1)').addClass('activeSlide');
            $('.slide:nth-child(2)').addClass('nextSlide');
            $('.slide:nth-child(3)').addClass('prevSlide');
        }
        if(index == 1){
            clean();
            $('.slide:nth-child(3)').addClass('nextSlide');
            $('.slide:nth-child(1)').addClass('prevSlide');
            $('.slide:nth-child(2)').addClass('activeSlide');
        }
        if(index == 2){
            clean();
            $('.slide:nth-child(2)').addClass('prevSlide');
            $('.slide:nth-child(3)').addClass('activeSlide');
            $('.slide:nth-child(1)').addClass('nextSlide');
        }

        $(this).addClass('sliderNavigationActive');
    })
});
