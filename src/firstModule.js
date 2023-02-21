/* eslint-disable no-alert */
// CHECK IF TODOLIST EXISTS IN LOCAL STORAGE, IF NOT CREATE A DUMMY TASK THERE
import makeCalendar from './calendar'
import {
    applyCalendarListeners,
    applyCardBtnListeners,
    applyNavListeners,
} from './listenerBranch'
import createCard from './makeScreen'
import { taskFactory } from './taskNewEditSave'

function initLocalStorage() {
    const ToDoList = localStorage.getItem('ToDoList')
    // TODOLIST - COULD BE EMPTY [will have 2 brackets, hence the 3 test]
    if (ToDoList === null || ToDoList.length < 3) {
        alert(
            "\n\nLocal Storage is either empty or does not exist. \n \nCreating 'local-storage' list array with a sample task"
        )
        const sampleTask = taskFactory(
            'BUY MILK',
            'From here, we can easily conclude that it’s best to go for three sizes: desktop, tablet, and phone.',
            3,
            'Groceries',
            new Date(),
            false
        )
        const listFromLS = []
        listFromLS.push(sampleTask)
        localStorage.setItem('ToDoList', JSON.stringify(listFromLS))
    }
    createCard()
    makeCalendar()
    applyNavListeners()
    applyCalendarListeners()
    applyCardBtnListeners()
}
export default initLocalStorage
