    var windowWidth, windowHeight;

    window.addEventListener("resize", setPositions);

    setPositions()

    function setPositions() {

        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;

        $( "#header" ).width(windowWidth+"px");
        $( "#header" ).height("120px");
        $( "#header-content" ).height("40px");
        $( "#header-content" ).css('top', "40px");
        $( "#tour" ).css('top', "120px");

        document.body.style.width = windowWidth+"px";

        document.getElementById("tour").style.width = windowWidth+"px";

        $( "#tour" ).height("560px");

        $(window).scroll(function(){
                var scrollpos = $(window).scrollTop();

                if (scrollpos == 0) {
                    $( "#header").stop().animate({
                        height: '120px'
                    }, 150);

                    $("#header-content" ).stop().animate({
                        top: '40px'
                    }, 150);

                    $("#tour" ).stop().animate({
                        top: '120px'
                    }, 150);


                }

                else {
                    $( "#header").stop().animate({
                        height: '60px'
                    }, 150);

                    $("#header-content" ).stop().animate({
                        top: '10px'
                    }, 150);

                    $("#tour" ).stop().animate({
                        top: '60px'
                    }, 150);

                }

            });

        $( "#icons" ).css('top', $("#header").height() + $("#tour").height() + 40 + "px");

        if (windowWidth < 900) {
            // $( "#projects" ).width("600px");
            // document.getElementById("projects").style.left = ((windowWidth-600)/2)+"px";

            $( "#header-content, #icons, #shot" ).stop().animate({
                left: ((windowWidth-600)/2) + 'px',
                width: '600px'
            }, "fast");

            $(".icon").width("200px");

            // $( ".imgbox" ).width("300px");
            // $(".projimg").css("margin-left", "-300px");

        }
        else if (windowWidth  > 900 && windowWidth < 1200){
            // $( "#projects" ).width("900px");
            // document.getElementById("projects").style.left = ((windowWidth-900)/2)+"px";


            $( "#header-content, #icons, #shot" ).stop().animate({
                left: ((windowWidth-900)/2) + 'px',
                width: '900px'
            }, "fast");

            $(".icon").width("300px");

        }
        else {
            // $( "#projects" ).width("1200px");
            // document.getElementById("projects").style.left = ((windowWidth-1200)/2)+"px";


            $( "#header-content, #icons, #shot" ).stop().animate({
                left: ((windowWidth-1200)/2) + 'px',
                width: '1200px'
            }, "fast");

            $(".icon").width("400px");

        }

    }



    // $( ".proj" )
    //     .mouseover(function() {
    //         // i += 1;
    //
    //         $(this).find(".one").stop().animate({left: '30px'}, "fast");
    //         $(this).find(".two").stop().animate({left: '50px'}, "fast");
    //         $(this).find(".three").stop().animate({left: '70px'}, "fast");
    //         $(this).find(".txtline").stop().animate({width: '33px'}, "fast");
    //     })
    //     .mouseout(function() {
    //         //    $( this ).text( "mouse out " );
    //         $(this).find(".one").stop().animate({left: '0px'}, "slow");
    //         $(this).find(".two").stop().animate({left: '0px'}, "slow");
    //         $(this).find(".three").stop().animate({left: '0px'}, "slow");
    //         $(this).find(".txtline").stop().animate({width: '4px'}, "slow");
    //     });
    //
    //
    // $( ".but" )
    //     .mouseover(function() {
    //         // i += 1;
    //
    //         $(this).children(".buttnt").stop().animate({height: '10px', top: '70px'}, "fast");
    //     })
    //     .mouseout(function() {
    //         //    $( this ).text( "mouse out " );
    //         $(this).children(".buttnt").stop().animate({height: '0', top: '80px'}, "fast");
    //     });
    //
    //
    pannellum.viewer('tour', {
        "type": "equirectangular",
        "panorama": "img/equi.jpg",
        "autoLoad": true,
        "autoRotate": -0.5
    });