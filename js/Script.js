$('a.inactive').click(function () {
    $('a.inactive').removeClass("active");
    $(this).addClass("active");
    console.log('hello');
});