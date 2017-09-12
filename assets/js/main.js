$(document).ready(function(){
	$(".wrapper").hover(function() {
        $(this).css("border-color", "gray");
        $(this).find(".my-link").css("color", "gray");
    }, function() {
        $(this).css("border-color", "white");
        $(this).find(".my-link").css("color", "white");
    });
});