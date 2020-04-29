$(document).ready(function () {
  initTeamMenu()
})

function initTeamMenu() {
  var teamItems = $('.team__item')
  var teamBtn = $('.team__title')
  var teamActiveClass = 'team__item--active'

  teamBtn.click(function (t) {
    t.preventDefault()

    var self = $(this)
    var parrent = self.parents('.team__item')

    if (parrent.hasClass(teamActiveClass)) {
      parrent.removeClass(teamActiveClass)
    } else {
      teamItems.removeClass(teamActiveClass)
      parrent.addClass(teamActiveClass)
    }
  })
}
