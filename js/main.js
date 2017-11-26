
//Яндекс карта

ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("map", {
        center: [59.91817154482064,30.30557799999997],
        zoom: 11,
        controls: []
    });

    myMap.behaviors.disable(['drag', 'scrollZoom', 'dblClickZoom']);

    var coords = [
        [59.94554327989287, 30.38935262114668],
        [59.91142323563909, 30.50024587065841],
        [59.88693161784606, 30.319658102103713], 
        [59.97033574821672, 30.315194906302924]        
        ],
        myCollection = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            // iconImageHref: '/img/icons/map-marker.svg',
            iconImageHref: 'https://alexs222.github.io/burger-shop/img/icons/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-26, -52],
            draggable: false
        });

    for (var i = 0; i < coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i]));
    }

    myMap.geoObjects.add(myCollection);
}


// Аккордеон секция team

$(function () {
    $('.team-acco__trigger').on('click', e => {
        e.preventDefault();

        const $this = $(e.currentTarget);
        const container = $this.closest('.team-acco');
        const item = $this.closest('.team-acco__item');
        const items = $('.team-acco__item', container);
        const content = $('.team-acco__content', item);
        const otherContent = $('.team-acco__content', container);
        const textBlock = $('.team-acco__wrap-content', item);
        const regHeight = textBlock.outerHeight();

        if (!item.hasClass('team-acco__item--active')) {

            items.removeClass('team-acco__item--active');
            item.addClass('team-acco__item--active');
            
            otherContent.css({
            'height' : 0
        })

            content.css({
            'height' : regHeight
        })

        } else {
            item.removeClass('team-acco__item--active');
            content.css({
                'height' : 0
            })
        }

    })

})

// Аккордеон секция menu

$(function () {
    $('.menu-acco__trigger').on('click', e => {
        e.preventDefault();

        const $this = $(e.currentTarget);
        const container = $this.closest('.menu-acco');
        const item = $this.closest('.menu-acco__item');
        const items = $('.menu-acco__item', container);
        const content = $('.menu-acco__content', item);
        const otherContent = $('.menu-acco__content', container);
        // const textBlock = $('.menu-acco__text', item);
        // const regWidth = textBlock.outerWidth();

        if (!item.hasClass('menu-acco__item--active')) {

            items.removeClass('menu-acco__item--active');
            item.addClass('menu-acco__item--active');

            // otherContent.css({
            //     'width': 0
            // })

            // content.css({
            //     'width': 540
            // })

        } else {
            item.removeClass('menu-acco__item--active');
            content.css({
                'width': 0
            })
        }

    })

})

// Слайдер bxSlider

$(document).ready(function () {
    let slider = $('.slider__list').bxSlider({
        pager : false,
        controls : false
    });

    $('.burgers__arrow-left').on('click', e => {
        e.preventDefault();
        slider.goToPrevSlide();
    })

    $('.burgers__arrow-right').on('click', e => {
        e.preventDefault();
        slider.goToNextSlide();
    })
});



//  Модальое окно fancybox

// $(document).ready(function () {

//     $('.order-link--about').fancybox({
        
//             'width': 200,
//             'height': 100,
//             autoDimensions: false
//         'showCloseButton' : false
//         'autoDimensions' : false,
//         'maxWidth' : 460,
//         'maxHeight' : 255,
//         'transitionIn': 'elastic',
//         'transitionOut': 'elastic',
//         'speedIn': 600,
//         'speedOut': 200,
//         'overlayShow': false
//         'autoSize': false
//     });
// });



// One Page Scroll

        

const display = $('.maincontent');
const sections = $('.section');

let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();


    // Функция отвечает за подсветку активного класса в меню
    
const switchMenuActiveClass = sectionEq => {
    $('.fixed-menu__item').eq(sectionEq).addClass('active')
        .siblings().removeClass('active');
}


    // Функция которая перемещает секции

const performTransition = sectionEq => {
    if (inScroll) return
    inScroll = true

    const position = (sectionEq * -100) + '%';

    display.css({
        'transform': `translate(0, ${position})`,
        '-webkit-transform': `translate(0, ${position})`
    })

    sections.eq(sectionEq).addClass('active')
        .siblings().removeClass('active');

    setTimeout(() => {
        inScroll = false;
        switchMenuActiveClass(sectionEq);
    }, 1300);
}

const difineSections = section => {
    const activeSection = sections.filter('.active');
    return {
        activeSection: activeSection,
        nextSection: activeSection.next(),
        prevSection: activeSection.prev()
    }
}

const scrollToSection = direction => {
    const section = difineSections(sections)

    if (inScroll) return;

    if (direction == 'up' && section.nextSection.length) { //вниз
        performTransition(section.nextSection.index());
    }
        
    if (direction == 'down' && section.prevSection.length) { //вверх
        performTransition(section.prevSection.index());
    }
}

$('.wrapper').on({
    wheel: e => {
        const deltaY = e.originalEvent.deltaY;
        let direction = (deltaY > 0)
            ? 'up' 
            : 'down'
        
        scrollToSection(direction);
       

    },

    touchmove : e => (e.preventDefault())
});


    // Управление кнопками клавиатуры

$(document).on('keydown', e => {
    const section = difineSections(sections);

    if (inScroll) return
     switch (e.keyCode) {
         case 40: //вверх
            if (!section.nextSection.length) return
            performTransition(section.nextSection.index());
            break;

         case 38: //вниз
             if (!section.prevSection.length) return
             performTransition(section.prevSection.index());
             break;
     }
});


  //  Переходы по дата атрибуту

if (isMobile) {
    $(window).swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            scrollToSection(direction);
        }
    })
}


$('[data-scroll-to]').on('click touchstart', e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const sectionIndex = parseInt($this.attr('data-scroll-to'));

    performTransition(sectionIndex);


})


// fullscreenMenu

$(function () { 
    const fullMenu = $('.fullscreenmenu');
    const closeMenu = $('.fullscreen__btn');



    // ---- открываем fullscreenMenu

    $('.hamburger-menu-link').on('click', e => {
        e.preventDefault();
        // console.log(e.currentTarget);

        // console.log(fullMenu);

        if (!fullMenu.hasClass('.active')) {
            // fullMenu.removeClass('.active');
            fullMenu.addClass('active');
        } else {
            fullMenu.removeClass('.active');
        }
    });

    // ---- работаем c closeMenu

    $('.fullscreen__btn').on('click', e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        // console.log(closeMenu);
        
        fullMenu.css({
            'height': 0 
        });
        // fullMenu.removeClass('.active');
    });

    // ---- работаем с пунктами меню

    $('.fullscreen__link').on('click', e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        // console.log(closeMenu);

        fullMenu.css({
            'height': 0
        });
        // fullMenu.removeClass('.active');
    });



        // const $this = $(e.currentTarget);
        // const container = $this.closest('.menu-acco');
        // const item = $this.closest('.menu-acco__item');
        // const items = $('.menu-acco__item', container);
        // const content = $('.menu-acco__content', item);
        // const otherContent = $('.menu-acco__content', container);
        // // const textBlock = $('.menu-acco__text', item);
        // // const regWidth = textBlock.outerWidth();

        // if (!item.hasClass('menu-acco__item--active')) {

        //     items.removeClass('menu-acco__item--active');
        //     item.addClass('menu-acco__item--active');

        //     // otherContent.css({
        //     //     'width': 0
        //     // })

        //     // content.css({
        //     //     'width': 540
        //     // })

        // } else {
        //     item.removeClass('menu-acco__item--active');
        //     content.css({
        //         'width': 0
        //     })
        // }

    

})
