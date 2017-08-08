$(document).ready(function(){
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 1000);
	    return false;
	});	
});

$(document).ready(function(){
    $('.toggle').click(function(){
        var curr = document.getElementById( $(this).attr('id').slice(7));
        $('.togglable').not($(curr)).slideUp(); 
        $(curr).slideToggle();        
    });
});
