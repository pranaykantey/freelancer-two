$(document).ready(function(){
    // inititatization of wow.js
    new WOW().init();
    // typed.js implementation
    var options = {
        strings: ["Sutherland Shire Apps"],
        typeSpeed: 120,
        loop: true,
        backDelay: 10000,
        cursorChar: '|'
    }
    var typed = new Typed(".typed", options);

    // services typed.js
    
    var serOptions = {
        strings: ["Be the leader in your industry with a customised, data driven app to <br>keep your clients engaged and coming back!","Your business can have a custom built App <br>for less than $1000!","If you're happy with the end product ... <br>YOU own the source-code.","<b>If not ...</b> you pay nothing\! <br>\(Conditions Apply, see below\)"],
        typeSpeed: 40,
        loop: true,
        backDelay: 3000,
        cursorChar: '|'
    }
    var serTyped = new Typed('.services',serOptions);
    // header top colapse/shorterd when scroll
    /**
     *  manu margin top solution
     */
    var distanceArr = [];
    var offsetTop,distance;
    $(window).scroll(function(e){
        var scroll = $(window).scrollTop();

        // $('.navbar.fixed-top').css('transition','.5s');
        $('.style-custom ul li a.nav-link').css('color','#33A4D8');
        if( scroll>150 ){
            $('.navbar.fixed-top').addClass('main-menu');
            // distenc count
            offsetTop = $('.navbar.fixed-top').offset().top;
            distance = (scroll-offsetTop);
            distanceArr.push(distance);
            topVal =  Math.min.apply(null,distanceArr);
            setTimeout(function(){
                $('.navbar.fixed-top').css('margin-top',topVal+'px');
            },30);
        }else{
            $('.navbar.fixed-top').removeClass('main-menu');
            $('.navbar.fixed-top').css('margin-top','0px');
            $('.style-custom ul li a.nav-link').css('color','#ffffff');
        }

    });


    // scroll slowly functionality
    function scrollNav() {
        $('.main.navbar a').click(function(){
          var windowTop = $(window).scrollTop();
          //Toggle Class
          $(".main li.nav-item.active").removeClass("active");      
          $(this).closest('li').addClass("active");
          var theClass = $(this).attr("class");
          // $('.'+theClass).parent('li').addClass('active');
          var id = $(this).attr('href');
          var elFromTop = $(id).offset().top;
          var minusVal = ($('.navbar.main').height()/10)*8;
          var distance =  ( elFromTop - minusVal );
          console.log(distance);
          //Animate
          $('html, body').stop().animate({
              scrollTop: distance
          }, 800);
          return false;
        });
        $('.scrollTop a').scrollTop();
      }
      scrollNav();


      // Scrolspy work
    //   $('body').scrollspy({ target: '#main-nav' });
    //   $('[data-spy="scroll"]').on('activate.bs.scrollspy', function (e) {
    //     alert('hmm');
    //   });


});