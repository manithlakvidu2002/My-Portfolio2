$('.hamburgerbtn').click(function(){
    $('.minimizebtncontainer').css('display','block');
    setTimeout(function() {
        $('.minimizebtnset>div>button>i').css('opacity', '100%');
        $('.minimizebtnset>div>button>span').css('opacity', '100%');
        $('.minimizebtninnercontainer').css('width', '100%');
    }, 0.2);
});

$('.closebtn').click(function(){
    $('.minimizebtninnercontainer').css('width', '0%');
    $('.minimizebtnset>div>button>i').css('opacity', '0%');
    $('.minimizebtnset>div>button>span').css('opacity', '0%');
    $('.minimizebtninnercontainer').one('transitionend', function() {
        $('.minimizebtncontainer').css('display', 'none');
    });
});