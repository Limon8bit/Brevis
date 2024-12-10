$(document).ready(function(){
    var showBurger = 0;
    $('.burgerButton').on('click', function(){

        showBurger = !showBurger;
        if(showBurger){
            $(".burgerMenu").show();
            $("body").css("overflow", "hidden");
            $(".burgerButton .line:first-child").hide();
            $(".burgerButton .line:nth-child(2)").css({
                "position": "absolute",
                "top" : "50%",
                "transform": "rotate(45deg)"
            });
            $(".burgerButton .line:last-child").css({
                "position": "absolute",
                "top" : "50%",
                "transform": "rotate(-45deg)"
            })
        } else {
            $(".burgerMenu").hide();
            $("body").css("overflow", "visible");
            $(".burgerButton .line:first-child").show();
            $(".burgerButton .line:nth-child(2)").css({
                "position": "static",
                "transform": "rotate(0deg)"
            });
            $(".burgerButton .line:last-child").css({
                "position": "static",
                "transform": "rotate(0deg)"
            })
        }
    })

    var showServices = 0;
    $(".burgerElem .servicesButton").on('click', function(){
        showServices = !showServices;
        if(showServices){
            $(".burgerElem .servicesButton .services").css('display', 'flex');
            $(".servicesButton .navButton").css('margin-bottom', '24px');
            $(".burgerElem .servicesButton img").css("transform", "rotate(90deg)");
        } else {
            $(".burgerElem .servicesButton .services").hide();
            $(".servicesButton .navButton").css('margin-bottom', '0');
            $(".burgerElem .servicesButton img").css("transform", "rotate(0deg)");
        }
        
    })
})