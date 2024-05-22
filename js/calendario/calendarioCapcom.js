let calendar = null;

function editEvent(event) {
    $('#event-modal input[name="event-index"]').val(event ? event.id : '');
    $('#event-modal input[name="event-name"]').val(event ? event.name : '');
    $('#event-modal input[name="event-location"]').val(event ? event.location : '');
    $('#event-modal input[name="event-start-date"]').datepicker('update', event ? event.startDate : '');
    $('#event-modal input[name="event-end-date"]').datepicker('update', event ? event.endDate : '');
    $('#event-modal').modal();
}

function deleteEvent(event) {
    var dataSource = calendar.getDataSource();

    calendar.setDataSource(dataSource.filter(item => item.id !== event.id));
}

function saveEvent() {
    var event = {
        id: $('#event-modal input[name="event-index"]').val(),
        name: $('#event-modal input[name="event-name"]').val(),
        location: $('#event-modal input[name="event-location"]').val(),
        startDate: $('#event-modal input[name="event-start-date"]').datepicker('getDate'),
        endDate: $('#event-modal input[name="event-end-date"]').datepicker('getDate')
    }

    var dataSource = calendar.getDataSource();

    if (event.id) {
        for (var i in dataSource) {
            if (dataSource[i].id == event.id) {
                dataSource[i].name = event.name;
                dataSource[i].location = event.location;
                dataSource[i].startDate = event.startDate;
                dataSource[i].endDate = event.endDate;
            }
        }
    }
    else {
        var newId = 0;
        for (var i in dataSource) {
            if (dataSource[i].id > newId) {
                newId = dataSource[i].id;
            }
        }

        newId++;
        event.id = newId;

        dataSource.push(event);
    }

    calendar.setDataSource(dataSource);
    $('#event-modal').modal('hide');
}

$(function () {
    var currentYear = new Date().getFullYear();

    calendar = new Calendar('#calendar', {
        enableContextMenu: true,
        enableRangeSelection: true,
        contextMenuItems: [
            {
                text: 'Actualizar',
                click: editEvent
            },
            {
                text: 'Eliminar',
                click: deleteEvent
            }
        ],
        selectRange: function (e) {
            editEvent({ startDate: e.startDate, endDate: e.endDate });
        },
        mouseOnDay: function (e) {
            if (e.events.length > 0) {
                var content = '';

                for (var i in e.events) {
                    content += '<div class="event-tooltip-content">'
                        + '<div class="event-name" style="color:' + e.events[i].color + '">' + e.events[i].name + '</div>'
                        + '<div class="event-location">' + e.events[i].location + '</div>'
                        + '</div>';
                }

                $(e.element).popover({
                    trigger: 'manual',
                    container: 'body',
                    html: true,
                    content: content
                });

                $(e.element).popover('show');
            }
        },
        mouseOutDay: function (e) {
            if (e.events.length > 0) {
                $(e.element).popover('hide');
            }
        },
        dayContextMenu: function (e) {
            $(e.element).popover('hide');
        },
        dataSource: [
            {
                id: 0,
                name: 'Año Nuevo',
                location: 'Toda España',
                startDate: new Date(2024, 0, 1),
                endDate: new Date(2024, 0, 1)
            },
            {
                id: 1,
                name: 'Día de Reyes Magos',
                location: 'Toda España',
                startDate: new Date(2024, 0, 6),
                endDate: new Date(2024, 0, 6)
            },
            {
                id: 2,
                name: 'Viernes Santo',
                location: 'Toda España',
                startDate: new Date(2024, 3, 29),
                endDate: new Date(2024, 3, 29)
            },
            {
                id: 3,
                name: 'Domingo de Resurrección',
                location: 'Toda España',
                startDate: new Date(2024, 3, 31),
                endDate: new Date(2024, 3, 31)
            },
            {
                id: 4,
                name: 'Día del Trabajo',
                location: 'Toda España',
                startDate: new Date(2024, 4, 1),
                endDate: new Date(2024, 4, 1)
            },
            {
                id: 5,
                name: 'Día de la Comunidad Valenciana',
                location: 'Comunidad Valenciana',
                startDate: new Date(2024, 5, 28),
                endDate: new Date(2024, 5, 28)
            },
            {
                id: 6,
                name: 'Corpus Christi',
                location: 'Toda España',
                startDate: new Date(2024, 5, 30),
                endDate: new Date(2024, 5, 30)
            },
            {
                id: 7,
                name: 'Día de la Virgen del Carmen',
                location: 'Zonas costeras de España',
                startDate: new Date(2024, 7, 16),
                endDate: new Date(2024, 7, 16)
            },
            {
                id: 8,
                name: 'La Tomatina',
                location: 'Buñol, Valencia',
                startDate: new Date(2024, 8, 28),
                endDate: new Date(2024, 8, 28)
            },
            {
                id: 9,
                name: 'Día de la Hispanidad',
                location: 'Toda España',
                startDate: new Date(2024, 10, 12),
                endDate: new Date(2024, 10, 12)
            },
            {
                id: 10,
                name: 'Fiesta de Todos los Santos',
                location: 'Toda España',
                startDate: new Date(2024, 11, 1),
                endDate: new Date(2024, 11, 1)
            },
            {
                id: 11,
                name: 'Navidad',
                location: 'Toda España',
                startDate: new Date(2024, 11, 25),
                endDate: new Date(2025, 0, 6)
            },
            {
                id: 12,
                name: 'Nochevieja',
                location: 'Toda España',
                startDate: new Date(2024, 11, 31),
                endDate: new Date(2025, 0, 1)
            },
            {
                id: 13,
                name: 'San Valentín',
                location: 'Toda España',
                startDate: new Date(2025, 1, 14),
                endDate: new Date(2025, 1, 14)
            },
            {
                id: 14,
                name: 'Día Internacional de la Mujer',
                location: 'Toda España',
                startDate: new Date(2025, 2, 8),
                endDate: new Date(2025, 2, 8)
            },
            {
                id: 15,
                name: 'Feria de Abril',
                location: 'Sevilla',
                startDate: new Date(2025, 4, 26),
                endDate: new Date(2025, 5, 4)
            },
            {
                id: 16,
                name: 'San Isidro',
                location: 'Madrid',
                startDate: new Date(2025, 5, 15),
                endDate: new Date(2025, 5, 15)
            },
            {
                id: 17,
                name: 'San Juan',
                location: 'Toda España',
                startDate: new Date(2025, 6, 24),
                endDate: new Date(2025, 6, 24)
            },
            {
                id: 18,
                name: 'Festival de San Fermín',
                location: 'Pamplona',
                startDate: new Date(2025, 6, 6),
                endDate: new Date(2025, 7, 14)
            }
        ]
    });

    $('#save-event').click(function () {
        saveEvent();
    });
});