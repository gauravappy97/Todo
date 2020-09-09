//checking of sepecific li's on clicking
$("ul").on('click','li',function () {
    $(this).toggleClass('completed')
    //IF statement for checking if color is grey or no, if grey turn it black else grey
    // if ($(this).css('color') === 'rgb(128, 128, 128)') {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: 'none'
    //     })
    // }
    // else {
    //     //turn it grey
    //     $(this).css({
    //         color: "grey",
    //         textDecoration: "line-through"
    //     })
    // }
})

//next task is to task remove when clicked on Delete
$("ul").on('click','span',function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();//this will prevent from bubble event calling
})

//when press enter then task added to the list, since "which" code for enter is 13
$("input[type='text']").keypress(function(event){
    if(event.which===13){
        var todoText = $(this).val() //storing value of the enterd task into todoText
        $(this).val("")
        $("ul").append("<li> <span><i class='fa fa-trash'></i> </span>" + todoText + "</li>") //using append funtion added element is appended at the last of the list
    }
})
$(".fa-edit").click(function(){
    $("input[type='text']").fadeToggle()
})

