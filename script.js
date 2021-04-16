$(".image").click(function(){
    $(".image").removeClass("active");
    $(this).addClass("active");
    $(".corps").addClass("invisible");
    $("#"+$(this).attr('id')+"_text").removeClass("invisible");
})



