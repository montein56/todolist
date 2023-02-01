/* eslint-disable no-console */
/* eslint-disable no-alert */
// CHECK IF TODOLIST EXISTS IN LOCAL STORAGE, IF NOT CREATE A DUMMY TASK THERE
import makeScreen from './makeScreen'
import { taskFactory } from './newTask'

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
            'High',
            'Groceries',
            new Date(),
            false
        )
        const listFromLS = []
        listFromLS.push(sampleTask)
        localStorage.setItem('ToDoList', JSON.stringify(listFromLS))
    }
    makeScreen()
}
export default initLocalStorage

// var date = window.localStorage.getItem('date')
// // Initialize the date object as a date object again here
// date = new Date(date)
// date.setDate(date.getDate() + 7)
