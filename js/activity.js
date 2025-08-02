$(document).ready(function () {
  $("td.not-available").css({
    "background-color": "#e0e0e0",
    color: "#9e9e9e",
    cursor: "not-allowed",
  });

  $(document).ready(function () {
    $("td").click(function () {
      var content = $(this).text();

      if (content != "Not Available") {
        var colIndex = $(this).index();
        var location = $("th").eq(colIndex).text().trim();
        var fullText =
          content + " <span class='location'>at " + location + "</span>";

        $(this).toggleClass("tdhighlight");

        if ($(this).hasClass("tdhighlight")) {
          $(this).css("background-color", "#9dd034");
          $("#displaySelected").css("visibility", "visible");
          $("#displaySelected").css("margin-top", "2em");
          $("#result").append("<p>" + fullText + "</p>");
        } else {
          $(this).css("background-color", "");
          $('#result p:contains("' + content + '")').remove();

          if ($("#result").has("p").length == false) {
            $("#displaySelected").css("visibility", "hidden");
            $("#displaySelected").css("margin-top", "0");
          }
        }
      }
    });
  });
});
