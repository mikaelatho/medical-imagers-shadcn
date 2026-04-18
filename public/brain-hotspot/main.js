$(document).ready(function() {
    var image = 1;
    var redDotText1 = "hello";
    var redDotText2 = "hello";
    var redDotText3 = "hello";
    $('.red-dot-1').hover(
        // Function to run when mouse enters (mouseenter)
        function() {
            // Find the .image-text within the current container and fade it in
            $('.image-container').find('.image-text').text(redDotText1); 
        },
        // Function to run when mouse leaves (mouseleave)
        function() {
            // Find the .image-text within the current container and fade it out
            $('.image-container').find('.image-text').text('Hover over a red dot to see more details.'); 
        }
    );
    $('.red-dot-2').hover(
        // Function to run when mouse enters (mouseenter)
        function() {
            // Find the .image-text within the current container and fade it in
            $('.image-container').find('.image-text').text(redDotText2); 
        },
        // Function to run when mouse leaves (mouseleave)
        function() {
            // Find the .image-text within the current container and fade it out
            $('.image-container').find('.image-text').text('Hover over a red dot to see more details.'); 
        }
    );
    $('.red-dot-3').hover(
        // Function to run when mouse enters (mouseenter)
        function() {
            // Find the .image-text within the current container and fade it in
            $('.image-container').find('.image-text').text(redDotText3); 
        },
        // Function to run when mouse leaves (mouseleave)
        function() {
            // Find the .image-text within the current container and fade it out
            $('.image-container').find('.image-text').text('Hover over a red dot to see more details.'); 
        }
    );
    $(".right-button").click(function() {
        if (image < 3){
            image+=1;
            setImage(image);
        }
    });
    $(".left-button").click(function() {
        if (image > 1){
            image-=1;
            setImage(image);
        }
    });
    function setImage(num){
        if (num == 1){
            $(".red-dot-1").css({
                bottom: "400px",
                left: "100px"
            });
            $(".red-dot-2").css({
                bottom: "550px",
                left: "200px"
            });
            $(".red-dot-3").css({
                bottom: "350px",
                left: "300px"
            });
            $("#brain_Image").attr("src", "images/AnteriorCoronal_HighConcentration.png");
        }
        else if(num == 2){
            $(".red-dot-1").css({
                bottom: "400px",
                left: "300px"
            });
            $(".red-dot-2").css({
                bottom: "500px",
                left: "250px"
            });
            $(".red-dot-3").css({
                bottom: "425px",
                left: "125px"
            });
            $("#brain_Image").attr("src", "images/PosteriorCoronal_HighConcentration.png");
        }
        else if(num == 3){
            $(".red-dot-1").css({
                bottom: "400px",
                left: "100px"
            });
            $(".red-dot-2").css({
                bottom: "550px",
                left: "200px"
            });
            $(".red-dot-3").css({
                bottom: "350px",
                left: "300px"
            });
            $("#brain_Image").attr("src", "images/AnteriorCoronal_HighConcentration.png");
        }
    }
});