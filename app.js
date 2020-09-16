$(window).on("load", function () {
  //Navigaton Scroll.
  $("a[href*=\\#]:not([href=\\#])").click(function () {
    if (
      location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 50,
          },
          1000
        );
        return false;
      }
    }
  });

  $("body").scrollspy({
    target: "#mainDiv",
    offset: 50,
  });

  $(".tools")
    .find("i")
    .hover(function () {
      $(this).toggleClass("colored");
    });
});

function slideInNav() {
  document.querySelector(".navbar-nav").style.transform = "translate(0px, 0px)";
  // document.addEventListener("click", slideoutNav);
}

function closeNav() {
  document.querySelector(".navbar-nav").style.transform = "translate(-150px, 0px)";
  document.removeEventListener("click", slideoutNav);
}

function slideoutNav(e) {
  console.log("This is called");
  if (e.target.className !== "navbar-nav") {
    closeNav();
  }
}
