
window.onload = function() {
  document.forms.formText.onclick = function() {
    var sum = 0,
      els = this.querySelectorAll('input[type="checkbox"]:checked');
    for (var i = 0; i < els.length; i++) {
      sum += +els[i].value;
    }
    this.sumOut.value = sum;
  };
};

//-----------------------------------------------
jQuery(($) => {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 780) $(".to-up").fadeIn();
        else $(".to-up").fadeOut();
    });
    $(".to-up").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 566);
        return false;
    });
});