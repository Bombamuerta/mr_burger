$(document).ready(function () {
    initTeamMenu();
  });
  
  function initTeamMenu() {
  
    var teamItems = $('.team__item'); //все элементы
    var teamBtn = $('.team__title'); //заголоаки
    var teamActiveClass = 'team__item--active'; // активный класс
  
    teamBtn.click(function (t) {
      t.preventDefault(); //отклюяем действие по умолчанию
  
      var self = $(this);
      var parrent = self.parents('.team__item'); //получаем родителя
  
      //проверяем активный класс
      if (parrent.hasClass(teamActiveClass)){
        //закрвываем (удаляем) если активный
        parrent.removeClass(teamActiveClass)
      } else {
        //закрываем все элементы
        teamItems.removeClass(teamActiveClass);
        //открываем нужный
        parrent.addClass(teamActiveClass);
      }
    })
  }
  