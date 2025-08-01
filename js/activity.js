$(document).ready(function () {
    $("td.not-available").css({
        "background-color": "#e0e0e0",
        "color": "#9e9e9e",
        "cursor": "not-allowed"
    });

    $("th").css("cursor", "default");

    $("td").each(function () {
        const text = $(this).text().trim();
        if (text !== "Not Available") {
            $(this).css("cursor", "pointer");
        }
    });

    $("table").on("click", "td", function () {
        const cellText = $(this).text().trim();
        if (
            cellText === "Not Available" ||
            $(this).index() === 0
        ) {
            return;
        }

        if (!$(this).hasClass("highlight")) {
            $(this).addClass("highlight").css("background-color", "#9dd034");
        } else {
            $(this).removeClass("highlight").css("background-color", "");
        }
    });
});
