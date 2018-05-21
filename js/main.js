$(function () {
    $(".toggle-menu").click(function () {
        $(this).toggleClass("on");
        $("nav").slideToggle();
    });
    $(function () {
        $('.rating').barrating({
            theme: 'fontawesome-stars',
            initialRating: "4.5"
        });
    });

    $("#datepicker").datepicker();
    var circle = $("#circle");

    $(".select-form").selectmenu({
        change: function (event, data) {
            circle.css({
                width: data.item.value,
                height: data.item.value
            });
        }
    });

    $("<input>").is(":text")
});

