/* eslint-disable no-plusplus */

import makeForms from './formAddEdit'

// GET LS INDEX NUMBER OF TASK TO EDIT
function taskEdit(e) {
    const prjctList = document.getElementById('projectListDiv')
    if (prjctList) {
        prjctList.innerHTML = ''
    }
    const sortDiv = document.getElementById('sortDiv')
    if (sortDiv) {
        sortDiv.innerHTML = ''
    }
    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    const targetID =
        e.target.parentElement.parentElement.parentElement.childNodes[0]
            .childNodes[0].firstChild.data
    const indexToEdit = collection.findIndex(
        (object) => object.title === targetID
    )
    makeForms(indexToEdit)

    // POPULATE FORM WITH INFO FROM LOCAL STORAGE BASED ON IndexToEdit
    document.getElementById('title').value = collection[indexToEdit].title
    document.getElementById('description').value =
        collection[indexToEdit].description
    document.getElementById('project').value = collection[indexToEdit].project
    document.getElementById('deadline').value = collection[indexToEdit].deadline

    const priorityFromLS = collection[indexToEdit].priority
    let priorityToSend = ''
    switch (priorityFromLS) {
        case 3: {
            priorityToSend = 'High'
            break
        }
        case 2: {
            priorityToSend = 'Medium'
            break
        }
        case 1: {
            priorityToSend = 'Low'
            break
        }
        default:
    }
    document.getElementById('priorityLevel').value = priorityToSend
    // HIT THE SAVE BUTTON WILL SAVE IT AS A NEW TASK - after editing required fields
}
export default taskEdit
