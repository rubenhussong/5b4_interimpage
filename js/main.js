$(document).ready(function(){
    var slideshow = $('.slideshow')
    slideshow.slick({
        arrows: false,
        centerMode: false,
        variableWidth: true,
        focusOnSelect: true,
        cssEase: 'ease-out',
        speed: 500,
    })

    // dragging class
    slideshow.on('mousedown', function(event) {
        $(event.currentTarget).find('.slick-list').addClass('is-dragging')
    })

    slideshow.on('mouseup', function(event) {
        $(event.currentTarget).find('.slick-list').removeClass('is-dragging')
    })

    rotateClock();
    showWordmark($(window).scrollTop())
    showArrow($(window).scrollTop())
})


function rotateClock() {
    var clock = $('#clock')
    setInterval(function () {
        if (clock.angle === undefined) {
            clock.angle = 30;
        } else {
            clock.angle += 30;
        }
        clock.css('transform', 'rotateZ(' + clock.angle + 'deg)')
    }, 1000);
}

// modal-message
function closeMessageModal() {
    $('#modal-message').addClass('hidden')
}

$(window).scroll(function() {
    var scrollY = $(window).scrollTop()

    // Wordmark fade
    showWordmark(scrollY)

    // Scroll Arrow
    showArrow(scrollY)
})

// Shows word mark on main page dependent on scroll position
function showWordmark(scrollY) {
    var height = $(window).height()
    var header = $("#header-main")
    if(scrollY >= height) {
        if (!header.hasClass('visible')) {
            header.addClass('visible')
        }
    } else {
        if (header.hasClass('visible')) {
            header.removeClass('visible')
        }
    }
}

// Shows scroll arrow dependent on scroll position
function showArrow(scrollY) {
    var arrowWrapper = $("#wrapper-arrow-scroll-down")
    if(scrollY >= 200) {
        if (!arrowWrapper.hasClass('hidden')) {
            arrowWrapper.addClass('hidden')
        }
    } else {
        if (arrowWrapper.hasClass('hidden')) {
            arrowWrapper.removeClass('hidden')
        }
    }
}

function scrollUp() {
    $('body,html').animate({ scrollTop: 0 }, 500)
}

function scrollDown() {
    $('body,html').animate({ scrollTop: $(window).height() }, 500)
}

var button = $(":button")

// Button focus live
button.on('mousedown', function(evt) {
    $('#' + evt.target.id).addClass("focused")
})
button.on('mouseup', function(evt) {
    $('#' + evt.target.id).removeClass("focused")
})
button.on('mouseout', function(evt) {
    $('#' + evt.target.id).removeClass("focused")
})
