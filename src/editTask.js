/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-alert */

import branchToForm from './branchAddEdit'

function taskEdit(e) {
    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    let i = 0
    for (i = 0; i <= collection.length - 1; i++) {
        const btnClass = document.getElementsByClassName('edit')
        btnClass[i].removeEventListener('click', taskEdit)
    }
    const targetID =
        e.target.parentElement.parentElement.parentElement.childNodes[0]
            .childNodes[0].firstChild.data
    const indexToEdit = collection.findIndex(
        (object) => object.title === targetID
    )

    branchToForm(indexToEdit)

    // POPULATE FORM WITH INFO FROM LOCAL STORAGE BASED ON IndexToEdit
    document.getElementById('title').value = collection[indexToEdit].title
    document.getElementById('description').value =
        collection[indexToEdit].description
    document.getElementById('project').value = collection[indexToEdit].project
    document.getElementById('deadline').value = collection[indexToEdit].deadline
    document.getElementById('priority').value = collection[indexToEdit].priority
    // HIT THE SAVE BUTTON WILL SAVE IT AS A NEW TASK - after editing required fields
}
export default taskEdit
