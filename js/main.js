    var windowWidth, windowHeight;

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    document.body.style.width = windowWidth+"px";
    document.getElementById("header").style.width = windowWidth+"px";
    document.getElementById("tour").style.height = (windowHeight)+"px";
    document.getElementById("tour").style.width = windowWidth+"px";
    document.getElementById("headercontent").style.left = ((windowWidth-1200)/2)+"px";
    document.getElementById("tourFrame").style.height = windowHeight+"px";
    document.getElementById("tourFrame").style.width = windowWidth+"px";

