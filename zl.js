
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
