$(window).on('load',function(){

  //Navigaton Scroll.
   $('a[href*=\\#]:not([href=\\#])').click(function(){
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 50)
        }, 1000);
        return false;
      }
    }     

   });

   $('body').scrollspy({
    target: '#mainDiv',
    offset: 50
  });


<<<<<<< HEAD
  $('td > i').hover(function(){
  	 $(this).toggleClass('colored');
  
  })




=======
<<<<<<< Updated upstream
>>>>>>> working

=======
  $('td > i').hover(function(){
  	 $(this).toggleClass('colored');
  
  })

  
>>>>>>> Stashed changes



});