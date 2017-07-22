
$(document).ready(function() {
  $( "#reloadPoloniex" ).click(function() {
    reloadPoloniex();
  });
});

function reloadPoloniex() {
   $.get(
    "https://poloniex.com/public?command=returnTicker",
    function(raw_data) {

      data = []

      for (var crypto in raw_data) {
        temp = {};
        temp = raw_data[crypto]
        temp["currency"] = crypto
        data.push(temp)
      }

      var body = $('#poloniexTable'),

      props = [
        "currency",
        "baseVolume",
        "high24hr",
        "highestBid",
        "id",
        "isFrozen",
        "last",
        "low24hr",
        "lowestAsk",
        "percentChange",
        "quoteVolume"
      ];

      $.each(data, function(i, data) {
        var tr = $('<tr>');
        $.each(props, function(i, prop) {
          $('<td>').html(data[prop]).appendTo(tr);
        });
        body.append(tr);
      });
    }
  );
}
