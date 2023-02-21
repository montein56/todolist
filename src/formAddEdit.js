/* eslint-disable no-plusplus */
import { saveNewTask, resetForm } from './taskNewEditSave'

function makeForms(editIndex) {
    const newForm = document.getElementById('formAdd')
    newForm.style.visibility = 'visible'

    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    const uniqueProjects = [...new Set(collection.map((item) => item.project))]
    uniqueProjects.sort((a, b) => (a > b ? 1 : -1))

    const datalistProjects = document.querySelector('#projects')
    for (let i = 0; i <= uniqueProjects.length - 1; i++) {
        const option = document.createElement('option')
        option.value = uniqueProjects[i]
        option.text = uniqueProjects[i]
        datalistProjects.appendChild(option)
    }
    const btnCancel = document.querySelector('#btnCancel')
    btnCancel.addEventListener('click', resetForm)
    const btnSave = document.querySelector('#btnSave')
    if (editIndex >= 0) {
        btnSave.addEventListener(
            'click',
            () => {
                saveNewTask(editIndex)
            },
            false
        )
    } else {
        btnSave.addEventListener('click', saveNewTask)
    }
    const title = document.getElementById('title')
    title.focus()
    title.select()
}
export default makeForms
