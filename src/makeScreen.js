/* eslint-disable no-plusplus */
// import { addMinutes,addHours,addDays,addMonths,addYears,format } from 'date-fns'

// design SCREEN (Mobile First) TO DISPLAY TASKS USING A CARD FOR EACH TASK

import taskDelete from './deleteTask'
import taskEdit from './editTask'
import branchToForm from './branchAddEdit'
import taskDone from './taskDone'

const content = document.getElementById('content')
function makeHeader() {
    const header = document.createElement('div')
    header.id = 'header'
    const h1 = document.createElement('h1')
    h1.innerHTML = 'THINGS TO DO'
    header.appendChild(h1)
    content.appendChild(header)
}

function createCard(main) {
    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
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
        deadline.innerHTML = `<b>Due</b>: ${collection[i].deadline}`
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
        btnDone.classList.add('done')
        if (collection[i].completed === true) {
            btnDone.innerHTML = `<i class="fa fa-check"></i>`
        } else {
            btnDone.innerHTML = `<i class="fa fa-window-close-o"></i>`
        }
        btnDone.addEventListener('click', taskDone)
        line4.appendChild(btnDone)

        const btnEdit = document.createElement('button')
        btnEdit.classList.add('edit')
        btnEdit.innerHTML = `<i class="fa fa-edit"></i>`
        btnEdit.addEventListener('click', taskEdit)
        line4.appendChild(btnEdit)

        const trash = document.createElement('button')
        trash.classList.add('trash')
        trash.innerHTML = `<i class="fa fa-trash"></i>`
        trash.addEventListener('click', taskDelete)
        line4.appendChild(trash)

        if (collection[i].priority === 'High') {
            card.classList.add('high')
        }
        if (collection[i].priority === 'Medium') {
            card.classList.add('medium')
        }
        if (collection[i].priority === 'Low') {
            card.classList.add('low')
        }

        if (collection[i].completed === true) {
            card.style.borderRight = 'none'
            btnDone.style.color = 'green'
            card.style.borderRight = 'none'
            card.classList.add('strike')
        }
        main.appendChild(card)
    }
}

function makeMain() {
    const main = document.createElement('div')
    main.id = 'main'
    content.appendChild(main)
    createCard(main)
}

// MAKE FOOTER TO HOLD THE NAVBAR
function makeFooter() {
    const footer = document.createElement('footer')
    // MAKE NAVBAR TO CONTAIN MENU
    const navbar = document.createElement('navbar')
    navbar.id = 'navbar'
    // CREATE MENU ITEMS TO GO INTO NAVBAR
    const menuList = [
        `<i class="fa fa-home"></i>`,
        `<i class="fa fa-plus-square"></i>`,
        `<i class="fa fa-calendar"></i>`,
        `<i class="fa fa-sort"></i>`,
    ]
    const ul = document.createElement('ul')
    let i = 0
    for (i = 0; i <= menuList.length - 1; i++) {
        const li = document.createElement('li')
        li.innerHTML = `<a href="#">${menuList[i]}</a>`
        li.classList.add('menuItem')
        li.addEventListener('click', branchToForm)
        ul.appendChild(li)
    }
    navbar.appendChild(ul)
    footer.appendChild(navbar)
    content.appendChild(footer)
}

function makeScreen() {
    //  3 SECTIONS, Header, Main and Footer
    makeHeader()
    makeMain()
    makeFooter()
}

export default makeScreen
