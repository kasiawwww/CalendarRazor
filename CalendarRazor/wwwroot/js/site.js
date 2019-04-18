"use strict";

let connection = new signalR.HubConnectionBuilder().withUrl("/Index").build();



connection.on("ReceiveCalendar", function (model) {
    for (var i = 0; i < model.length; i++) {
        let elementId = '#d_' + model[i].startDate.getDate() + '_' + model[i].startDate.getHours();
        let element = $(elementId)
        let div = document.createElement('div');
        div.classList.add('task')
        div.attributes.add('title', '')
        let p = document.createElement('p')
        p.textContent = 'Opis: '
        let p1 = document.createElement('p')
        p.textContent = 'Lokalizacja: '
        div.appendChild(p)
        div.appendChild(p1)
        element.html(div)
    }
   //console.log(model)

  //  $('#calendarContent').html("kabuuuum")
});

connection.start().then(function () {

}).catch(function (err) {
    return console.error(err.toString());
});

document.addEventListener("DOMContentLoaded", function (event) {
    connection.invoke("SendCalendar").catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});
function getCalendarContent() {
   // $('#calendarContent').html("kabuuuum")
}