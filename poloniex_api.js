
$(document).ready(function() {

fetchPoloniex()
});


function fetchPoloniex () {
   $.get(
    "https://poloniex.com/public?command=returnTicker",
    function(data) {
      console.log(data)
    }
  );
}

