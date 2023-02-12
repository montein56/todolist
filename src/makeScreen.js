/* eslint-disable no-plusplus */
// import { addMinutes,addHours,addDays,addMonths,addYears,format } from 'date-fns'

import taskDetail from './cardToggleDetail'
import taskDelete from './taskDelete'
import taskDone from './taskDone'
import taskEdit from './taskEdit'

// MOBILE FIRST DESIGN: DISPLAY TASKS USING A CARD FOR EACH TASK

const content = document.getElementById('content')
function makeHeader() {
    const header = document.createElement('div')
    header.id = 'header'
    const h1 = document.createElement('h1')
    h1.innerHTML = 'THINGS TO DO'
    header.appendChild(h1)
    content.appendChild(header)
}

function createCard(collection, main) {
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
            card.style.borderRight = 'none'
            card.classList.add('strike')
        }
        line2.style.display = 'none'
        line3.style.display = 'none'

        main.appendChild(card)
    }
}

function makeMain() {
    const main = document.createElement('div')
    main.id = 'main'
    content.appendChild(main)
    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))

    createCard(collection, main)
}

// FOOTER TO HOLD THE NAVBAR
function makeFooter() {
    const footer = document.createElement('footer')
    // NAVBAR TO CONTAIN MENU
    const navbar = document.createElement('navbar')
    navbar.id = 'navbar'
    // MENU ITEMS TO GO INTO NAVBAR
    const menuList = [
        `<img src = 'images/home.png'  class = 'home btnNav'>`,
        `<img src = 'images/plus.png'  class = 'plus btnNav'>`,
        `<img src = 'images/project.png'  class = 'projectList btnNav'>`,
        `<img src = 'images/sort.png'  class = 'sort btnNav'>`,
    ]
    const ul = document.createElement('ul')
    let i = 0
    for (i = 0; i <= menuList.length - 1; i++) {
        const li = document.createElement('li')
        li.innerHTML = `${menuList[i]}`
        li.classList.add('menuItem')
        ul.appendChild(li)
    }
    const navSubMenu = document.createElement('div')
    navSubMenu.id = 'navSubMenu'

    navbar.appendChild(ul)
    navbar.appendChild(navSubMenu)
    footer.appendChild(navbar)
    content.appendChild(footer)
}

function makeScreen() {
    makeHeader()
    makeMain()
    makeFooter()
}

export default makeScreen
export { createCard }
