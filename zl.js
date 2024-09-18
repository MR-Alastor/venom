
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
document.addEventListener("DOMContentLoaded", () => {
    let to_top_btn = document.querySelector(".to-up");

    window.onscroll = function () {
        if (window.pageYOffset > 580) {
            to_top_btn.style.display = "block"
        } else {
            to_top_btn.style.display = "none"
        }
    }

    // плавный скролл наверх
    to_top_btn.addEventListener("click", function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    });
});