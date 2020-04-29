const button = $('.photo__link')
const closeBtn = $('#redCross')
const modal = $('#reviewPop')
const reviewPopupHeader = modal.find('.review-popup__header')
const reviewPopupText = modal.find('.review-popup__text')

button.on('click', function (e) {
  e.preventDefault()
  const name = $(this).prevAll('.photo__name').text()
  const text = $(this).prevAll('.photo__text').text()
  reviewPopupHeader.text(name)
  reviewPopupText.text(text)

  modal.addClass('overlay--active')
})
closeBtn.on('click', function () {
  modal.removeClass('overlay--active')
})
