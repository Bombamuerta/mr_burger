// yandex.map
ymaps.ready(init)

function init() {
  var myMap = new ymaps.Map('map', {
    center: [59.94, 30.32],
    zoom: 12,
    controls: ['geolocationControl'],
    controls: ['zoomControl'],
    behaviors: ['drag'],
  })
  var placemark = new ymaps.Placemark(
    [59.96, 30.32],
    {
      hintContent: '<div class="hint">ул.Бабушкина, д.12/1</div>',
      balloonContent: '<div class="map-balloon">Я от бабушки ушел!</div>',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '/img/map-marker.svg',
    }
  )

  var placemark2 = new ymaps.Placemark(
    [59.93, 30.26],
    {
      hintContent: '<div class="hint">ул.Дедушкина, д.80</div>',
      balloonContent: '<div class="map-balloon">И от дедушки ушел!</div>',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '/img/map-marker.svg',
    }
  )
  var placemark3 = new ymaps.Placemark(
    [59.92, 30.48],
    {
      hintContent: '<div class="hint">ул.Колобкова, д.20</div>',
      balloonContent:
        '<div class="map-balloon">Я же колобок в конце концов!</div>',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '/img/map-marker.svg',
    }
  )

  myMap.geoObjects.add(placemark)
  myMap.geoObjects.add(placemark2)
  myMap.geoObjects.add(placemark3)
}
