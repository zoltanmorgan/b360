    var windowWidth, windowHeight;
    var headerHeight, tourHeight;

    window.addEventListener("resize", setPositions);

    setPositions()

    function setPositions() {

        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        headerHeight = document.getElementById("headercontent").offsetHeight;

        document.body.style.width = windowWidth+"px";

        document.getElementById("tour").style.height = (windowHeight-headerHeight)+"px";
        document.getElementById("tour").style.width = windowWidth+"px";

        if (windowWidth  < 900) {
            $( "#projects" ).width("600px");
            document.getElementById("projects").style.left = ((windowWidth-600)/2)+"px";

            $( "#headercontent" ).width("600px");
            document.getElementById("headercontent").style.left = ((windowWidth-600)/2)+"px";
        }

        else {
            $( "#projects" ).width("1200px");
            document.getElementById("projects").style.left = ((windowWidth-1200)/2)+"px";

            $( "#headercontent" ).width("900px");
            document.getElementById("headercontent").style.left = ((windowWidth-900)/2)+"px";
        }

    }



    $( ".proj" )
        .mouseover(function() {
            // i += 1;

            $(this).children(".line").stop().animate({left: '200px'}, "slow");
        })
        .mouseout(function() {
            //    $( this ).text( "mouse out " );
            $(this).children(".line").stop().animate({left: '100px'}, "slow");
        });


    $( ".but" )
        .mouseover(function() {
            // i += 1;

            $(this).children(".buttnt").stop().animate({height: '10px', top: '70px'}, "fast");
        })
        .mouseout(function() {
            //    $( this ).text( "mouse out " );
            $(this).children(".buttnt").stop().animate({height: '0', top: '80px'}, "fast");
        });