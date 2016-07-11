    var windowWidth, windowHeight;

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    document.body.style.width = windowWidth+"px";
    document.getElementById("header").style.width = windowWidth+"px";
    
    document.getElementById("tour").style.height = (windowHeight)+"px";
    document.getElementById("tour").style.width = windowWidth+"px";
    
    document.getElementById("headercontent").style.left = ((windowWidth-1200)/2)+"px";

    document.getElementById("footer").style.top = (windowHeight-100)+"px";
    document.getElementById("footer").style.width = windowWidth+"px";
    document.getElementById("footercontent").style.left = ((windowWidth-800)/2)+"px";
    
    document.getElementById("tourFrame").style.height = windowHeight+"px";
    document.getElementById("tourFrame").style.width = windowWidth+"px";

