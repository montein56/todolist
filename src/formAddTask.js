/* eslint-disable no-plusplus */
import saveNewTask from './newTask'

function makeForms(e) {
    // eslint-disable-next-line no-console, no-alert
    const formAddTask = document.createElement('form')
    formAddTask.id = 'formAdd'
    const closeX = document.createElement('a')
    closeX.innerHTML =
        '<a class="close" href="javascript:window.location.reload()">&#10060</a>'
    formAddTask.appendChild(closeX)
    const group = document.createElement('fieldset')
    const legend = document.createElement('legend')

    if (e) {
        legend.innerHTML = '<b>EDIT FIELDS AS REQUIRED</b>'
    } else {
        legend.innerHTML = '<b>ENTER NEW TASK INFORMATION</b>'
    }

    const br = document.createElement('br')

    const fields = ['title', 'description', 'project']
    let i = 0
    for (i = 0; i <= fields.length - 1; i++) {
        const field = document.createElement('input')
        field.setAttribute('type', 'text')
        field.setAttribute('name', 'Task')
        field.setAttribute('placeholder', fields[i])
        field.classList.add('wide')
        field.id = fields[i]

        group.appendChild(field)
        group.appendChild(br.cloneNode())
    }

    const deadline = document.createElement('input')
    deadline.setAttribute('type', 'date')
    deadline.setAttribute('name', 'Task')
    deadline.setAttribute('placeholder', 'Enter date as yyyy-mm-dd')
    deadline.classList.add('wide')
    deadline.id = 'deadline'

    group.appendChild(deadline)
    group.appendChild(br.cloneNode())

    const priority = document.createElement('p')
    const values = ['Low', 'Medium', 'High']
    const select = document.createElement('select')
    select.name = 'priority'
    select.id = 'priority'
    select.classList.add('wide')
    let m = 0
    for (m = 0; m <= values.length - 1; m++) {
        const option = document.createElement('option')
        option.value = values[m]
        option.text = values[m]
        select.appendChild(option)
    }

    const label = document.createElement('label')
    label.innerHTML = 'Choose your priority: '
    label.htmlFor = 'priority'
    priority.appendChild(label).appendChild(select)
    group.appendChild(priority)

    const btn = document.createElement('button')
    btn.setAttribute('type', 'submit')
    if (e >= 0) {
        btn.innerText = 'Save Edited Task'
        btn.id = 'btnEdit'
        btn.addEventListener(
            'click',
            () => {
                saveNewTask(e)
            },
            false
        )
    } else {
        btn.innerText = 'Save New Task'
        btn.id = 'btnAdd'
        btn.addEventListener('click', saveNewTask)
    }

    group.appendChild(legend)
    group.appendChild(btn)
    formAddTask.appendChild(group)

    document.body.appendChild(formAddTask)

    const title = document.getElementById('title')
    title.focus()
    title.select()
    title.setAttribute('required', '')
}

export default makeForms
