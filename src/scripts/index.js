let timeout = null
$(document).ready(function(){
    if(!(screen.width < 600 || (screen.height<600 && window.orientation != 0))){
        if($(window).scrollTop() !== 0){
            clearTimeout(timeout)
            $(".left-intro").width("100%");
            $(".right-intro").width("0%");
            $("#intro").addClass("lefted");
        }else{
            $(".left-intro").width("50%");
            timeout = setTimeout(()=>{
                $(".right-intro").width("50%");
            },1800)
            $("#intro").removeClass("lefted");
        }
    }
})


$(window).scroll(function(){
    if(screen.width < 600 || (screen.height<600 && window.orientation != 0)){
        return
    }

    if($(window).scrollTop() !== 0){
        clearTimeout(timeout)
        $(".left-intro").width("100%");
        $(".right-intro").width("0%");
        $("#intro").addClass("lefted");
        if($(window).scrollTop() >= window.innerHeight * 0.4){
            $("#fading-scroll-helper").animate({"opacity": 0});
        }
    }else{
        $(".left-intro").width("50%");
        timeout = setTimeout(()=>{
            $(".right-intro").width("50%");
        },1800)
        $("#intro").removeClass("lefted");
    }
})