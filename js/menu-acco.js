$(document).ready(function () {
  initTabMenu()
})

function initTabMenu() {
  var items = $('.burgers__item')
  var titleBtn = $('.burgers__title')
  var classItemActiv = 'burgers__item--active'

  titleBtn.click(function (e) {
    e.preventDefault()

    var self = $(this)
    var parrent = self.parents('.burgers__item')

    if (parrent.hasClass(classItemActiv)) {
      parrent.removeClass(classItemActiv)
    } else {
      items.removeClass(classItemActiv)
      parrent.addClass(classItemActiv)
    }
  })
}
