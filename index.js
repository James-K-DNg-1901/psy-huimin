
$("#section-1").attr("hidden", false);

$(".col-md-6").click(function () {
    var title = $(this).attr("id")
    console.log(title);
    setTimeout(function() {
        changePage(title);
    }, 200);
});

$("a").click(function () {
    var title = $(this).attr("id")
    console.log(title);
    setTimeout(function() {
        changePage(title);
    }, 200);
});

$("li").click(function () {
    var title = $(this).attr("id")
    console.log(title);
    setTimeout(function() {
        changePage(title);
    }, 200);
});

function changePage(title) {
    
    switch (title) {
        case "news":
            $("#section-1").attr("hidden", true);
            $("#section-2").attr("hidden", false);
            $("#section-3").attr("hidden", true);
            $("#section-4").attr("hidden", true);
            $("#section-5").attr("hidden", true);
            break;
        case "translate":
            $("#section-1").attr("hidden", true);
            $("#section-2").attr("hidden", true);
            $("#section-3").attr("hidden", false);
            $("#section-4").attr("hidden", true);
            $("#section-5").attr("hidden", true);
            break;
        case "say-something":
            $("#section-1").attr("hidden", true);
            $("#section-2").attr("hidden", true);
            $("#section-3").attr("hidden", true);
            $("#section-4").attr("hidden", false);
            $("#section-5").attr("hidden", true);
            break;
        case "memo":
            $("#section-1").attr("hidden", true);
            $("#section-2").attr("hidden", true);
            $("#section-3").attr("hidden", true);
            $("#section-4").attr("hidden", true);
            $("#section-5").attr("hidden", false);
            break;
        case "home":
            $("#section-1").attr("hidden", false);
            $("#section-2").attr("hidden", true);
            $("#section-3").attr("hidden", true);
            $("#section-4").attr("hidden", true);
            $("#section-5").attr("hidden", true);
            break;
        case "cancel":
            $("#section-1").attr("hidden", false);
            $("#section-2").attr("hidden", true);
            $("#section-3").attr("hidden", true);
            $("#section-4").attr("hidden", true);
            $("#section-5").attr("hidden", true);
            break;
        default:
            console.log(title);
            break;
    }
}