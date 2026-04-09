$(document).ready(function() {
    var image = 1;
    $('.red-dot-1').hover(
        // Function to run when mouse enters (mouseenter)
        function() {
            // Find the .image-text within the current container and fade it in
            $('.image-container').find('.image-text').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'); 
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
            $('.image-container').find('.image-text').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'); 
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
            $('.image-container').find('.image-text').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'); 
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