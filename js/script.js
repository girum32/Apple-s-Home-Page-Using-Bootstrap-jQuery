$(document).ready(function(){


$(window).on('resize', function(e) {
    var windowWidth = $(window).width();     
    if (windowWidth < 800) {
          // initialize small viewport functionality

        $(".footer-link-column1 h3").click(function(){
            $(".footer-link-column1 ul").toggle();
        });

        $(".footer-link-column2 .serv ").click(function(){
            $(".footer-link-column2 .services").toggle();
        });
        $(".footer-link-column2 .acct h3").click(function(){
            $(".footer-link-column2 .account").toggle();
        });

        $(".footer-link-column3 h3").click(function(){
            $(".footer-link-column3 ul").toggle();
        });

        $(".footer-link-column4 .biz").click(function(){
            $(".footer-link-column4 .bussiness").toggle();
        });

        $(".footer-link-column4 .edu").click(function(){
            $(".footer-link-column4 .education").toggle();
        });

        $(".footer-link-column4 .care").click(function(){
            $(".footer-link-column4 .healthcare").toggle();
        });

        $(".footer-link-column4 .gov").click(function(){
            $(".footer-link-column4 .government").toggle();
        });

        $(".footer-link-column5 .val").click(function(){
            $(".footer-link-column5 .values").toggle();
        });

        $(".footer-link-column5 .abt").click(function(){
            $(".footer-link-column5 .about").toggle();
        });


    } else {
        this.location.reload(false);
    }
});









});



