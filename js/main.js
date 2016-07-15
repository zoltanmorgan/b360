    var windowWidth, windowHeight;
    var headerHeight, tourHeight;

    window.addEventListener("resize", setPositions);

    setPositions()

    function setPositions() {

        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        headerHeight = document.getElementById("headercontent").offsetHeight;

        document.body.style.width = windowWidth+"px";

        document.getElementById("tour").style.height = (windowHeight-headerHeight-550)+"px";
        document.getElementById("tour").style.width = windowWidth+"px";

        if (windowWidth < 900) {
            $( "#projects" ).width("600px");
            document.getElementById("projects").style.left = ((windowWidth-600)/2)+"px";

            $( "#headercontent" ).width("600px");
            document.getElementById("headercontent").style.left = ((windowWidth-600)/2)+"px";

            $( ".imgbox" ).width("300px");
            $(".projimg").css("margin-left", "-300px");

        }

        else if (windowWidth  > 900 && windowWidth < 1200){
            $( "#projects" ).width("900px");
            document.getElementById("projects").style.left = ((windowWidth-900)/2)+"px";

            $( "#headercontent" ).width("900px");
            document.getElementById("headercontent").style.left = ((windowWidth-900)/2)+"px";

            $( ".imgbox" ).width("600px");
            $(".projimg").css("margin-left", "-150px");

        }

        else {
            $( "#projects" ).width("1200px");
            document.getElementById("projects").style.left = ((windowWidth-1200)/2)+"px";

            $( "#headercontent" ).width("1200px");
            document.getElementById("headercontent").style.left = ((windowWidth-1200)/2)+"px";
            $(".projimg").css("margin-left", "-700px");

            $( ".imgbox" ).width("900px");
            $(".projimg").css("margin-left", "0px");
;
        }

    }



    $( ".proj" )
        .mouseover(function() {
            // i += 1;

            $(this).find(".one").stop().animate({left: '30px'}, "fast");
            $(this).find(".two").stop().animate({left: '50px'}, "fast");
            $(this).find(".three").stop().animate({left: '70px'}, "fast");
            $(this).find(".txtline").stop().animate({width: '33px'}, "fast");
        })
        .mouseout(function() {
            //    $( this ).text( "mouse out " );
            $(this).find(".one").stop().animate({left: '0px'}, "slow");
            $(this).find(".two").stop().animate({left: '0px'}, "slow");
            $(this).find(".three").stop().animate({left: '0px'}, "slow");
            $(this).find(".txtline").stop().animate({width: '4px'}, "slow");
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


    pannellum.viewer('tour', {
        "type": "equirectangular",
        "panorama": "https://pannellum.org/images/alma.jpg",
        "autoLoad": true,
        "autoRotate": -0.5
    });