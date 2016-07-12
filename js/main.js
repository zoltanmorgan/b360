    var windowWidth, windowHeight;
    var leftcontHeight, leftcontWidth;
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    leftcontHeight = document.getElementById("leftcontent").offsetHeight;
    leftcontWidth = document.getElementById("leftcontent").offsetWidth;

    setPositions()

    function setPositions() {
        document.body.style.width = windowWidth+"px";

        document.getElementById("leftbar").style.height = windowHeight+"px";
        document.getElementById("leftbar").style.width = leftcontWidth+80+"px";
        document.getElementById("leftbar").style.top =  0+"px";
        document.getElementById("leftbar").style.left = 0+"px";

        document.getElementById("leftcontent").style.top = ((windowHeight-leftcontHeight)/3)+"px";
        document.getElementById("leftcontent").style.left = 40+"px";


        document.getElementById("tour").style.height = (windowHeight)+"px";
        document.getElementById("tour").style.width = windowWidth+"px";

        document.getElementById("headercontent").style.left = ((windowWidth-1200)/2)+"px";

        document.getElementById("footer").style.top = (windowHeight-100)+"px";
        document.getElementById("footer").style.width = windowWidth+"px";
        document.getElementById("footercontent").style.left = ((windowWidth-800)/2)+"px";

        document.getElementById("tourFrame").style.height = windowHeight+"px";
        document.getElementById("tourFrame").style.width = windowWidth+"px";
    }



