    var windowWidth, windowHeight;

    window.addEventListener("resize", setPositions);

    setPositions()

    function setPositions() {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;

        $( "#header" ).width(windowWidth+"px");

        if (windowWidth < 940) {
            $(".middler").width("640px").css('left', ((windowWidth-640)/2) + "px");
            $(".aproj").width("198px").height("148px");
            $(".aproj-img-div").height("148px");
        }

        else if (windowWidth > 939 && windowWidth < 1240) {
            $(".middler").width("940px").css('left', ((windowWidth-940)/2) + "px");
            $(".aproj").width("298px").height("148px");
            $(".aproj-img-div").height("148px");
        }

        else if (windowWidth > 1239) {
            $(".middler").width("1240px").css('left', ((windowWidth-1240)/2) + "px");
            $(".aproj").width("398px").height("198px");
            $(".aproj-img-div").height("198px");

        }

        else {}



        if (windowHeight < 720) {
        }

        else if (windowHeight > 719) {
        }

        else {}

        updateTops()

    }


    $(window).scroll(function(){

        var scrollpos = $(window).scrollTop();

        if (scrollpos == 0) {        }

        else {        }

    })


    function updateTops() {

    }





    $( ".aproj" )
        .mouseover(function() {
            $(this).children(".aproj-img-tint").stop().animate({height: '80px'}, "fast");
        })
        .mouseout(function() {
            $(this).children(".aproj-img-tint").stop().animate({height: '20px'}, "fast");
        });

    $('.but')
        .mouseover(function() {
            $(this).children('h2').stop().animate({ color: '#ffae22'}, "fast");
        })
        .mouseout(function() {
            $(this).children('h2').stop().animate({ color: '#666'}, "fast");
        });











    pannellum.viewer('tour', {
        "type": "equirectangular",
        "panorama": "img/equi.jpg",
        "autoLoad": true,
        "autoRotate": -0.5,
        "showZoomCtrl": false,
        "minHfov" : 60,
        "maxHfov" : 60
    });





    //     $( "#header-content" ).height("40px");
    //     $( "#header-content" ).css('top', "40px");
    //     $( "#tour" ).css('top', "120px");
    //
    //     document.body.style.width = windowWidth+"px";
    //
    //     document.getElementById("tour").style.width = windowWidth+"px";
    //
    //
    //
    //
    //
    //

    //
    //                 $("#header-content" ).stop().animate({
    //                     top: '40px'
    //                 }, 150);
    //
    //                 $("#tour" ).stop().animate({
    //                     top: '120px'
    //                 }, 150);
    //
    //
    //             }
    //
    //             else {
    //                 $( "#header").stop().animate({
    //                     height: '60px'
    //                 }, 150);
    //
    //                 $("#header-content" ).stop().animate({
    //                     top: '10px'
    //                 }, 150);
    //
    //                 $("#tour" ).stop().animate({
    //                     top: '60px'
    //                 }, 150);
    //
    //             }
    //
    //         });
    //
    //     $( "#icons" ).css('top', $("#header").height() + $("#tour").height() + 40 + "px");
    //
    //     if (windowWidth < 900) {
    //         // $( "#projects" ).width("600px");
    //         // document.getElementById("projects").style.left = ((windowWidth-600)/2)+"px";
    //
    //         $( "#header-content, #icons, #shot" ).stop().animate({
    //             left: ((windowWidth-600)/2) + 'px',
    //             width: '600px'
    //         }, "fast");
    //
    //         $(".icon").width("200px");
    //
    //         // $( ".imgbox" ).width("300px");
    //         // $(".projimg").css("margin-left", "-300px");
    //
    //     }
    //     else if (windowWidth  > 900 && windowWidth < 1200){
    //         // $( "#projects" ).width("900px");
    //         // document.getElementById("projects").style.left = ((windowWidth-900)/2)+"px";
    //
    //
    //         $( "#header-content, #icons, #shot" ).stop().animate({
    //             left: ((windowWidth-900)/2) + 'px',
    //             width: '900px'
    //         }, "fast");
    //
    //         $(".icon").width("300px");
    //
    //     }
    //     else {
    //         // $( "#projects" ).width("1200px");
    //         // document.getElementById("projects").style.left = ((windowWidth-1200)/2)+"px";
    //
    //
    //         $( "#header-content, #icons, #shot" ).stop().animate({
    //             left: ((windowWidth-1200)/2) + 'px',
    //             width: '1200px'
    //         }, "fast");
    //
    //         $(".icon").width("400px");
    //
    //     }
    //
    // }



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
    //
