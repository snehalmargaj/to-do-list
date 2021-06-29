$(function(){
    $("#add").on("click",function(){
        var a = $("input").val();     //to get the value of the input
        if(a!==""){
            var b = $("<li></li>").text(a);
            $(b).append("<button class='cancel'><i class='fas fa-trash-alt'></i></button>")
            $(b).append("<button class='check'><i class='fas fa-check'></i></button>");   //append button to text
            $("#tasks").append(b);                                //append text + button to the list
            $("input").val("");       //To clear input
            $(".cancel").on("click",function(){
                $(this).parent().remove();     //this - current object
            });

            $(".check").on("click",function(){
                var c = $(this).parent();     //parent of check is li
                $(c).fadeOut(function(){     //li is faded from tasks list
                    $("#done").append(c);   //li gets added to tasks completed
                    $(c).fadeIn();              //li gets visble in tasks completed
                });
                $(this).remove();
            });
        }
    });
});