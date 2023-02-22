/* eslint-disable no-plusplus */
import { addDays, format } from 'date-fns'

function makeCalendar(changedDate) {
    // MAKE CALENDAR BAR BELOW HEADER

    const date = changedDate || new Date()

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
        paraDay.innerText = format(dateToUse, 'dd MMM yy')

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
