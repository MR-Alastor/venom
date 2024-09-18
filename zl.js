
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
    $(document).ready(function(){
        // прячем кнопку #back-top
        $("#back-top").hide();

        // появление/затухание кнопки #back-top
        $(function (){
            $(window).scroll(function (){
                if ($(this).scrollTop() > 100){
                    $('#back-top').fadeIn();
                } else{
                    $('#back-top').fadeOut();
                }
            });

            // при клике на ссылку плавно поднимаемся вверх
            $('#back-top a').click(function (){
                $('body,html').animate({
                    scrollTop:0
                }, 800);
                return false;
            });
        });
    });