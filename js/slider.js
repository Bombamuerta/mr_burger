$(function() {
 var moveSlide = function(container, slideNum) {
  (items = container.find('.slider-container__item')),
   (activeSlide = items.filter('.active')),
   (reqItem = items.eq(slideNum)),
   (reqIndex = reqItem.index()),
   (list = container.find('.slider__list')),
   (duration = 500);

  if (reqItem.length) {
   list.animate(
    {
     left: -reqIndex * 100 + '%'
    },
    duration,
    function() {
     activeSlide.removeClass('active');
     reqItem.addClass('active');
    }
   );
  }
 };

 $('.slider__button').on('click', function(e) {
  e.preventDefault();
  var $this = $(this),
   container = $this.closest('.slider'),
   items = $('.slider-container__item', container),
   activeItem = items.filter('.active'),
   nextItem = activeItem.next(),
   prevItem = activeItem.prev();

  if ($this.hasClass('slider__button--next')) {
   if (nextItem.length) {
    moveSlide(container, nextItem.index());
   } else {
    moveSlide(container, items.first().index());
   }
  } else {
   if (prevItem.length) {
    moveSlide(container, prevItem.index());
   } else {
    moveSlide(container, items.last());
   }
  }
 });
});
