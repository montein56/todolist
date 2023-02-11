/* eslint-disable no-console */
/* eslint-disable no-alert */

// COMMON MODULE TO HANDLE ADDING NEW AND EDIT OF EXISTING TASKS
// OPENS A COMMON FORM TO HANDLE BOTH

function taskFactory(
    title,
    description,
    priority,
    project,
    deadline,
    completed
) {
    // FACTORY FUNCTION
    return {
        title,
        description,
        priority,
        project,
        deadline,
        completed,
    }
}

function addTaskToLocalStorage(item, editIndex) {
    const listFromLS = JSON.parse(window.localStorage.getItem('ToDoList'))
    if (typeof editIndex === 'number') {
        // editIndex WILL BE A NUMBER - i.e. LS INDEX
        listFromLS.splice(editIndex, 1, item)
    } else {
        // editIndex WILL NOT BE A NUMBER FOR A NEW TASK
        listFromLS.push(item)
    }
    localStorage.setItem('ToDoList', JSON.stringify(listFromLS))
}

function saveNewTask(editIndex) {
    // FUNCTION [for Save Button on form]] WHEN ADDING NEW TASK AND WHEN EDITING EXISTING TASKS
    // editIndex FROM EDIT FORM BUTTON CLICK - Holds Task's index # in LS

    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    const title = document.getElementById('title').value.toUpperCase()

    if (title === '') {
        alert('PLEASE ENTER A TASK TITLE')
        return
    }
    // TO AVOID DUPLICATE TASK NAMES
    if (
        (collection.some((elem) => elem.title === title) &&
            typeof editIndex !== 'number') ||
        (collection.some((elem) => elem.title === title) &&
            typeof editIndex === 'number' &&
            title !== collection[editIndex].title)
    ) {
        alert(`"${title}": CHANGE TASK TITLE TO AVOID DUPLICATES`) // DUPLICATE TASK NAMES MESSES UP THE 'DONE' FEATURE
        return
    }
    const description = document.getElementById('description').value
    let priority = document.getElementById('priorityLevel').value
    switch (priority) {
        case 'High': {
            priority = 3
            break
        }
        case 'Medium': {
            priority = 2
            break
        }
        case 'Low': {
            priority = 1
            break
        }
        default:
    }
    const project = document.getElementById('project').value
    const deadline = document.getElementById('deadline').value

    const newTask = taskFactory(
        title,
        description,
        priority,
        project,
        deadline,
        false
    )
    addTaskToLocalStorage(newTask, editIndex)
}

function resetForm(e) {
    e.preventDefault()
    const formFields = document.querySelectorAll('.wide')
    let m = 0
    // eslint-disable-next-line no-plusplus
    for (m = 0; m <= formFields.length - 1; m++) {
        formFields[m].value = ''
    }
}
export { addTaskToLocalStorage, taskFactory, resetForm, saveNewTask }
export default saveNewTask
