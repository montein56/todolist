/* eslint-disable no-plusplus */
import { saveNewTask, resetForm } from './taskNewEditSave'

function makeForms(editIndex) {
    // SAME FORM FOR ADDING A NEW TASK AND FOR EDIT EACH TASK CARD
    // CALLED BY 'ADD' BUTTON IN NAVBAR & EDIT BUTTONS ON CARDS
    const formAddTask = document.createElement('form')
    formAddTask.id = 'formAdd'
    const closeX = document.createElement('a')
    closeX.innerHTML =
        '<a class="close" href="javascript:window.location.reload()">&#10060</a>'
    formAddTask.appendChild(closeX)
    const group = document.createElement('fieldset')
    const legend = document.createElement('legend')

    if (editIndex) {
        legend.innerHTML = '<b>EDIT FIELDS AS REQUIRED</b>'
    } else {
        legend.innerHTML = '<b>ENTER NEW TASK INFORMATION</b>'
    }

    const br = document.createElement('br')

    const deadline = document.createElement('input')
    deadline.setAttribute('type', 'date')
    deadline.setAttribute('name', 'Task')
    deadline.classList.add('wide')
    deadline.id = 'deadline'

    const fields = ['title', 'description']
    let i = 0
    for (i = 0; i <= fields.length - 1; i++) {
        const field = document.createElement('input')
        field.setAttribute('type', 'text')
        field.setAttribute('name', 'Task')
        field.setAttribute('placeholder', fields[i])
        field.classList.add('wide')
        field.id = fields[i]
        group.appendChild(field)
        // group.appendChild(br.cloneNode())
    }
    group.appendChild(deadline)
    // group.appendChild(br.cloneNode())

    const priority = document.createElement('p')
    priority.id = 'priority'
    const labelPriority = document.createElement('label')
    labelPriority.innerHTML = 'Choose your priority: '
    labelPriority.htmlFor = 'priority'
    const values = ['Low', 'Medium', 'High']
    const select = document.createElement('select')
    select.name = 'priority'
    select.id = 'priorityLevel'
    select.classList.add('wide')
    let m = 0
    for (m = 0; m <= values.length - 1; m++) {
        const option = document.createElement('option')
        option.value = values[m]
        option.text = values[m]
        select.appendChild(option)
    }
    priority.appendChild(labelPriority).appendChild(select)
    group.appendChild(priority)
    // group.appendChild(br.cloneNode())

    const project = document.createElement('input')
    project.setAttribute('list', 'projects')
    project.setAttribute('name', 'project')
    project.id = 'project'
    project.value = 'Unknown'
    project.classList.add('wide')

    const labelProject = document.createElement('label')
    labelProject.innerHTML = 'Choose/ Enter Project name: '
    labelProject.htmlFor = 'project'
    group.appendChild(labelProject)

    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    const uniqueProjects = [...new Set(collection.map((item) => item.project))]
    const datalistProjects = document.createElement('datalist')
    datalistProjects.id = 'projects'
    datalistProjects.classList.add('wide')

    for (
        let itemProject = 0;
        itemProject <= uniqueProjects.length - 1;
        itemProject++
    ) {
        const option = document.createElement('option')
        option.value = uniqueProjects[itemProject]
        option.text = uniqueProjects[itemProject]
        datalistProjects.appendChild(option)
    }
    project.appendChild(datalistProjects)
    group.appendChild(project)
    // group.appendChild(br.cloneNode())

    const btnCancel = document.createElement('button')
    btnCancel.setAttribute('type', 'reset')
    btnCancel.classList.add('btnForm')
    btnCancel.innerText = 'CLEAR'
    group.appendChild(btnCancel)
    btnCancel.addEventListener('click', resetForm)

    const btnSave = document.createElement('button')
    btnSave.setAttribute('type', 'submit')
    btnSave.innerText = 'SAVE'
    btnSave.classList.add('btnForm')
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

    group.appendChild(legend)
    group.appendChild(btnSave)
    formAddTask.appendChild(group)
    document.body.appendChild(formAddTask)

    const title = document.getElementById('title')
    title.focus()
    title.select()
    title.setAttribute('required', '')
}
export default makeForms
