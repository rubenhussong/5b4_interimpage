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
var modalMessage = $('#modal-message')
var closeModalMessage = $('#close-modal-message')
function closeMessageModal() {
    modalMessage.addClass('hidden')
}

var scrolledDown = false;
$(window).scroll(function() {
    var scrollY = $(window).scrollTop()
    var height = $(window).height()

    console.log(height + ", " + scrollY)

    var header = $(":header")
    console.log(header)
    if(scrollY > height) {
        if (!scrolledDown) {
            scrolledDown = true
            header.toggleClass("visible")
        }
    } else {
        if (scrolledDown) {
            scrolledDown = false
            header.toggleClass("visible")
        }
    }
})