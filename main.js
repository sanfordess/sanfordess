$('.nav-toggle').on('click', function() {
      $('#menu').toggleClass('active');
    });

$('.on').on('click', function() {
	$('.on').css('display', 'none');
    $('.off').css('display', 'block');
    $('body').css('background', '#1B1B1B');
    $('h1, h3, h4').css('color', '#fff');
    $('.mcd-menu').css('background', '#363737');
    $('.mcd-menu li button').css('color', '#fff');
    $('.mcd-menu li button').css('backgroundColor', '#2E2E2E');
    $('.select select').css('color', '#fff');
    $('table, td, th').css('border', '1px solid #fff');
    $('table').css('color', '#fff');

    });

$('.off').on('click', function() {
	$('.off').css('display', 'none');
    $('.on').css('display', 'block');
    $('body').css('background', '#f7f7f7');
    $('h1, h3, h4').css('color', '#000');
    $('.mcd-menu').css('background', '#FFF');
    $('.mcd-menu li button').css('color', '#000');
    $('.mcd-menu li button').css('backgroundColor', '#EEE');
    $('.select select').css('color', '#000');
    $('table, td, th').css('border', '1px solid #000');
    $('table').css('color', '#000');
    });
