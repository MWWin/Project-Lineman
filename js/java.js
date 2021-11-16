$(function(){
    $(".like").on("click", function(){
        $(".img-like").addClass("active");
        $(".text-like").addClass("active");
        if($(".img-dislike").hasClass("active")){
            $(".img-dislike").removeClass("active");
            $(".text-dislike").removeClass("active");
        }
    });

    $(".dislike").on("click", function(){
        if($(".img-like").hasClass("active")){
            $(".img-like").removeClass("active");
            $(".text-like").removeClass("active");
        }
        $(".img-dislike").addClass("active");
        $(".text-dislike").addClass("active");

    });

})



// $(function(){

//     $(".toggle").on("click", function(){
//         if($(".nav-link").hasClass("active")){
//             $(".nav-link").removeClass("active");
//             document.querySelector(".backgroud").style.display="none";
//             document.querySelector(".bars").style.display="block";
//         }else{
//             $(".nav-link").addClass("active");
//             document.querySelector(".backgroud").style.display="block";
//             document.querySelector(".bars").style.display="none";
//         }
//     });
