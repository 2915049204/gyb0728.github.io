$(document).ready(function() {
    $('button').click(function() {
    var keyword = $('input').val().trim();
    if (keyword) {
    $('li').hide();
    $('li:contains(' + keyword + ')').show();
    }
    });
    });