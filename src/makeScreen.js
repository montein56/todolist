/* eslint-disable no-plusplus */

import { parseISO, format } from 'date-fns'
import taskDetail from './cardToggleDetail'
import taskDelete from './taskDelete'
import taskDone from './taskDone'
import taskEdit from './taskEdit'

function createCard(newCollection) {
    const collection =
        newCollection || JSON.parse(window.localStorage.getItem('ToDoList'))
    const main = document.getElementById('main')
    let i = collection.length
    for (i = collection.length - 1; i >= 0; i--) {
        const card = document.createElement('card') // parent card element, one per task
        card.classList.add('card')

        const line1 = document.createElement('div') // cardLines are children
        card.appendChild(line1)
        const line2 = document.createElement('div')
        card.appendChild(line2)
        const line3 = document.createElement('div')
        card.appendChild(line3)
        const line4 = document.createElement('div')
        card.appendChild(line4)

        const title = document.createElement('p')
        title.classList.add('title')
        title.innerHTML = collection[i].title
        line1.appendChild(title)

        const deadline = document.createElement('deadline')
        deadline.classList.add('deadline')
        const taskDate = `${collection[i].deadline}`
        if (taskDate) {
            deadline.innerHTML = format(parseISO(taskDate), 'EEE, dd MMM yyyy')
        }
        line1.appendChild(deadline)

        const project = document.createElement('project')
        project.classList.add('project')
        project.innerHTML = `<b>Project</b>: ${collection[i].project}`
        line2.appendChild(project)

        const description = document.createElement('description')
        description.classList.add('description')
        description.innerHTML = `<i>${collection[i].description}</i>`
        line3.appendChild(description)

        const btnDone = document.createElement('button')
        btnDone.classList.add('btnElement')
        btnDone.addEventListener('click', taskDone)
        if (collection[i].completed === true) {
            btnDone.innerHTML = `<img src = 'images/check.png' class = 'btnCard done'>`
        } else {
            btnDone.innerHTML = `<img src = 'images/pending.png' class = 'btnCard done'>`
        }
        line4.appendChild(btnDone)

        const btnDetail = document.createElement('button')
        btnDetail.addEventListener('click', taskDetail)
        btnDetail.classList.add('btnElement')
        btnDetail.innerHTML = `<img src = 'images/detail.png' class = 'btnCard detail'>`
        line4.appendChild(btnDetail)

        const btnEdit = document.createElement('button')
        btnEdit.addEventListener('click', taskEdit)
        btnEdit.classList.add('btnElement')
        btnEdit.innerHTML = `<img src = 'images/edit.png' class = 'btnCard edit'>`
        line4.appendChild(btnEdit)

        const btnDelete = document.createElement('button')
        btnDelete.addEventListener('click', taskDelete)
        btnDelete.classList.add('btnElement')
        btnDelete.innerHTML = `<img src = 'images/delete.png' class = 'btnCard delete'>`
        line4.appendChild(btnDelete)

        if (collection[i].priority === 3) {
            card.classList.add('high')
        }
        if (collection[i].priority === 2) {
            card.classList.add('medium')
        }
        if (collection[i].priority === 1) {
            card.classList.add('low')
        }
        if (collection[i].completed === true) {
            card.style.borderLeft = 'none'
            card.classList.add('strike')
        }
        line2.style.display = 'none'
        line3.style.display = 'none'

        main.appendChild(card)
    }
}

export default createCard
