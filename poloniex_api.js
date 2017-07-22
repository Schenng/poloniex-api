
$(document).ready(function() {
  $( "#reloadPoloniex" ).click(function() {
    reloadPoloniex();
  });
});


function reloadPoloniex() {
   $.get(
    "https://poloniex.com/public?command=returnTicker",
    function(data) {
      console.log(data)
    }
  );
}