$(document).ready(function() {
    function changeForm(form, animated, duration) {
        $('section').hide();
        $(form).show();
        $(animated).css('transition', 'height ' + duration);
        $(animated).css('height', '0%');
    }

    $('.homebtn').click(function() {
        changeForm('.firstpage', '.homepageanimateddiv', '0.5s');
        $('.aboutpageanimateddiv').css('height', '100%');
        $('.servicepageanimateddiv').css('height', '100%');
        $('.experincepageanimateddiv').css('height', '100%');
        $('.workspageanimateddiv').css('height', '100%');
        $('.contactpageanimateddiv').css('height', '100%');
    });

    $('.aboutpagebtn').click(function() {
        changeForm('.secondpage', '.aboutpageanimateddiv', '0.5s');
        $('.homepageanimateddiv').css('height', '100%');
        $('.servicepageanimateddiv').css('height', '100%');
        $('.experincepageanimateddiv').css('height', '100%');
        $('.workspageanimateddiv').css('height', '100%');
        $('.contactpageanimateddiv').css('height', '100%');
    });

    $('.servicepagebtn').click(function() {
        changeForm('.thirdpage', '.servicepageanimateddiv', '0.5s');
        $('.homepageanimateddiv').css('height', '100%');
        $('.aboutpageanimateddiv').css('height', '100%');
        $('.experincepageanimateddiv').css('height', '100%');
        $('.workspageanimateddiv').css('height', '100%');
        $('.contactpageanimateddiv').css('height', '100%');
    });

    $('.resumepagebtn').click(function() {
        changeForm('.forthpage', '.experincepageanimateddiv', '0.5s');
        $('.homepageanimateddiv').css('height', '100%');
        $('.aboutpageanimateddiv').css('height', '100%');
        $('.servicepageanimateddiv').css('height', '100%');
        $('.workspageanimateddiv').css('height', '100%');
        $('.contactpageanimateddiv').css('height', '100%');
    });

    $('.projectspagebtn').click(function() {
        changeForm('.fifthpage', '.workspageanimateddiv', '0.5s');
        $('.homepageanimateddiv').css('height', '100%');
        $('.aboutpageanimateddiv').css('height', '100%');
        $('.servicepageanimateddiv').css('height', '100%');
        $('.experincepageanimateddiv').css('height', '100%');
        $('.contactpageanimateddiv').css('height', '100%');
    });

    $('.contactpagebtn').click(function() {
        changeForm('.sixpage', '.contactpageanimateddiv', '0.5s');
        $('.homepageanimateddiv').css('height', '100%');
        $('.aboutpageanimateddiv').css('height', '100%');
        $('.servicepageanimateddiv').css('height', '100%');
        $('.experincepageanimateddiv').css('height', '100%');
        $('.workspageanimateddiv').css('height', '100%');
    });
});

function setPageAnimation(){
    $('.homepageanimateddiv').css('height', '100%');
    $('.aboutpageanimateddiv').css('height', '100%');
    $('.servicepageanimateddiv').css('height', '100%');
    $('.experincepageanimateddiv').css('height', '100%');
    $('.workspageanimateddiv').css('height', '100%');
    $('.contactpageanimateddiv').css('height', '100%');
}

function closeallbtn(){
    $('.minimizebtninnercontainer').css('width', '0%');
    $('.minimizebtnset>div>button>i').css('opacity', '0%');
    $('.minimizebtnset>div>button>span').css('opacity', '0%');
    $('.minimizebtninnercontainer').one('transitionend', function() {
        $('.minimizebtncontainer').css('display', 'none');
    });
}