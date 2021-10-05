$('document').ready(function(){
    $('.btn').on('click',function(){
        var red = $('#red').val();
        var green = $('#green').val();
        var blue = $('#blue').val();
        var body = $(this).parents().parents();
        console.log(body);
        body.css("background-color", "rgb("+ red + "," + green + "," + blue + ")" );
    });
});
