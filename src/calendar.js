/* eslint-disable no-plusplus */
import { addDays, format } from 'date-fns'

function makeCalendar() {
    // MAKE CALENDAR BAR BELOW HEADER
    // const header = document.getElementById('header')
    // const calendarBar = document.getElementById('calendar')
    // header.insertAdjacentElement('afterend', calendarBar)
    // const content = document.getElementById('content')
    // content.style.gridTemplateAreas =
    //     '"header header" "footer calendarBar" "footer main"'

    const date = new Date()
    const cards = document.getElementsByClassName('cardDay')
    let x = 0
    for (x = 0; x <= cards.length - 1; x++) {
        const paraDay = document.createElement('p')
        paraDay.classList.add('paraDay')
        const tasksToday = document.createElement('p')
        tasksToday.classList.add('tasksToday')
        const dateToUse = addDays(date, x)
        cards[x].innerText = format(dateToUse, 'EEE')
        cards[x].appendChild(paraDay)
        cards[x].appendChild(tasksToday)
        paraDay.innerText = format(dateToUse, 'dd MMM')

        const dateForTasks = format(addDays(date, x), 'yyyy-MM-dd')
        const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
        const arrTasksToday = collection.filter(
            (item) => item.deadline === dateForTasks
        )
        let i = 0
        for (i = 0; i <= arrTasksToday.length - 1; i++) {
            tasksToday.innerHTML += `<br>${i + 1}. ${
                arrTasksToday[i].title
            }<br>`
        }
    }
}
export default makeCalendar
