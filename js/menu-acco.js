$(document).ready(function () {
  initTabMenu();
});

function initTabMenu() {

  var items = $('.burgers__item'); // элементы (li-шки)
  var titleBtn = $('.burgers__title'); // нажимать будем сюда
  var classItemActiv = 'burgers__item--active'; //класс который будет добавлен

  titleBtn.click(function (e) {
    e.preventDefault(); //отключение действия по умолчанию

    var self = $(this);
    var parrent = self.parents('.burgers__item'); //получаем родительский блок

    //проверка активного класса
    if (parrent.hasClass(classItemActiv)){
      //если активный то удаляем (блок закрывается)
      parrent.removeClass(classItemActiv)
    } else {
      //все лишки закрываем
      items.removeClass(classItemActiv);
      //открываем нужную
      parrent.addClass(classItemActiv);
    }
  })
}
