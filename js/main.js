
//Яндекс карта

ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("map", {
        center: [59.91817154482064,30.30557799999997],
        zoom: 11,
        controls: []
    });

    myMap.behaviors.disable('scrollZoom');
    // myMap.behaviors.disable('ruler');

    var coords = [
        [59.94554327989287, 30.38935262114668],
        [59.91142323563909, 30.50024587065841],
        [59.88693161784606, 30.319658102103713], 
        [59.97033574821672, 30.315194906302924]        
        ],
        myCollection = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: '/img/icons/map-marker.svg',
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

            otherContent.css({
                'width': 0
            })

            content.css({
                'width': 540
            })

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
