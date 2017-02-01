$(document).ready(function(){
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 1000);
	    return false;
	});	
});

function toggle(id) {
    var elements = ["education", "skills", "links", "contact"]; 
    var a = document.getElementById(id); 
    if (a.style.display == 'none') {
        var i; 
        for (i = 0; i < elements.length; i++) {
            if (elements[i] != id) {
                document.getElementById(elements[i]).style.display = 'none';
            }
        }
        a.style.display = 'block'; 
    } else {
        a.style.display = 'none'; 
    }
}
