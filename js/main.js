$(document).ready(function(){
    var slideshow = $('.slideshow')
    slideshow.slick({
        arrows: false,
        centerMode: false,
        variableWidth: true,
        focusOnSelect: true
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

function showWordmark(scrollY) {
    var height = $(window).height()
    var header = $("#header")
    if(scrollY >= height) {
        if (!scrolledDown) {
            scrolledDown = true
            header.toggleClass("visible")
        }
    } else {
        if (arrowWrapper.hasClass('hidden')) {
            arrowWrapper.removeClass('hidden')
        }
    }
}

function showArrow(scrollY) {
    if (scrollY > 200) {
        console.log("hey")
        $("#arrow-scroll-down").addClass("hidden")
    }
}

function scrollDown() {
    $('body,html').animate({ scrollTop: $(window).height() }, 500);
}
