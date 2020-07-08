$(document).ready(function () {
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
    slideshow.on('mousedown', function (event) {
        $(event.currentTarget).find('.slick-list').addClass('is-dragging')
    })

    slideshow.on('mouseup', function (event) {
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

$(window).scroll(function () {
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
    if (scrollY >= height) {
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
    if (scrollY >= 200) {
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


// ================================================== S C R O L L   A N I M A T I O N S

window.addEventListener('scroll', function () {
    console.log("Scrollin'")
})

var scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60) }

var elementsToShow = document.querySelectorAll('.show-on-scroll')

function loop() {

    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible')
            element.classList.remove('invisible-again')
        } else if (isElementOverViewport(element)) {
            element.classList.remove('is-visible')
            element.classList.add('invisible-again')
        } else {
            element.classList.remove('is-visible')
            element.classList.remove('invisible-again')
        }
    })

    scroll(loop)
}

loop();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}


function isElementOverViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.bottom < 0)
    )
}