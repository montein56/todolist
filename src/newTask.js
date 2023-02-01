/* eslint-disable no-console */
/* eslint-disable no-alert */

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

function addTaskToLocalStorage(item, e) {
    const listFromLS = JSON.parse(window.localStorage.getItem('ToDoList'))
    if (typeof e === 'number') {
        // e WILL BE A NUMBER - INDEX, FOR A TASK IN LS TO EDIT
        listFromLS.splice(e, 1, item)
    } else {
        // e WILL NOT BE A NUMBER FOR A NEW TASK
        listFromLS.push(item)
    }
    localStorage.setItem('ToDoList', JSON.stringify(listFromLS))
    window.location.reload()
}

function saveNewTask(e) {
    // FUNCTION USED WHEN ADDING NEW TASK AND WHEN EDITING EXISTING TASKS
    // e COMES ONLY FROM EDIT FORM BUTTON CLICK. Holds index #
    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    const title = document.getElementById('title').value.toUpperCase()
    if (title === '') {
        alert('PLEASE ENTER A TASK TITLE')
        return
    }
    // TO AVOID DUPLICATE TASK NAMES
    if (
        (collection.some((elem) => elem.title === title) &&
            typeof e !== 'number') ||
        (collection.some((elem) => elem.title === title) &&
            typeof e === 'number' &&
            title !== collection[e].title)
    ) {
        alert(
            `"${title}" IGNORE IF NOT EDITING TASK TITLE. CHANGE TASK TITLE TO AVOID DUPLICATES`
        ) // DUPLICATE TASK NAMES MESSES UP THE 'DONE' FEATURE
        return
    }
    // }
    const description = document.getElementById('description').value
    const priority = document.getElementById('priority').value
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
    addTaskToLocalStorage(newTask, e)
}
export { addTaskToLocalStorage, taskFactory }
export default saveNewTask
