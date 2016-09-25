    $(document).ready(function() {
        $('.dropdown').hover(
            function(){
                $(this).children('.sub-menu').slideDown(1000);
            },
            function(){
                $(this).children('.sub-menu').slideUp(300);
            }
            
        );
    });
