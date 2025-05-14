document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, существует ли элемент карты на странице
    if (document.getElementById('map-interactive')) {

        // Инициализация карты 2GIS
        const map = new mapgl.Map('map-interactive', { // Используем ID нашего div
            center: [74.58402137760633, 42.84654296969603], // Координаты центра (Бишкек)
            zoom: 13, // Уровень масштабирования
            key: 'ece52447-f2cb-41b6-b94b-ed5d8ab7cfe7', // Ваш API ключ 2GIS
        });

        // URL иконки для маркеров
        const iconUrl = 'mapsign.png'; // Иконка хлеба

        // Координаты маркеров (точек сбора)
        const markersData = [
            // Формат: [долгота, широта, 'Описание для всплывающей подсказки (опционально)']
            { coords: [74.58402137760633, 42.84654296969603], title: 'Точка сбора 1' },
            { coords: [74.58518036852237, 42.846530064713754], title: 'Точка сбора 2' },
            { coords: [74.58356312191316, 42.844509887970176], title: 'Точка сбора 3' },
            { coords: [74.576819, 42.846984], title: 'Точка сбора 4' },
            // Добавьте сюда больше координат ваших бочек
            // { coords: [74.600000, 42.850000], title: 'Еще одна точка' },
        ];

        // Добавляем маркеры на карту
        markersData.forEach(markerInfo => {
            const marker = new mapgl.Marker(map, {
                coordinates: markerInfo.coords,
                icon: iconUrl,
                // Добавляем класс для возможной стилизации иконки
                iconClass: 'mapgl-marker-icon'
            });

            // Добавляем всплывающую подсказку (popup) при клике на маркер
            if (markerInfo.title) {
                marker.on('click', () => {
                     new mapgl.Popup(map, {
                        coordinates: markerInfo.coords,
                        content: `<div style="padding: 5px; font-family: var(--font-family);">${markerInfo.title}</div>`, // Простой HTML для подсказки
                        closeButton: true, // Показать кнопку закрытия
                    });
                });
            }
        });

        // Добавление элементов управления картой (зум)
        new mapgl.ControlGroup(map, { position: 'topRight' })
            .addChild(new mapgl.ZoomControl(map));

    } // конец if (document.getElementById('map-interactive'))

}); // конец DOMContentLoaded