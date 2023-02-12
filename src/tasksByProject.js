/* eslint-disable no-alert */

import { createCard } from './makeScreen'
// CREATE LIST OF TASKS BY PROJECT
function projectTaskList(e) {
    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    // GET TASKS AS OBJECTS WHERE PROJECT NAME = THE ONE CLICKED IN DROPDOWN
    const newCollection = collection.filter(
        (item) => item.project === e.target.innerHTML
    )
    const main = document.getElementById('main')
    main.innerHTML = ''
    createCard(newCollection, main)
}
function projectList() {
    // CREATE DROPDOWN- LIST OF UNIQUE PROJECTS
    const navSubMenu = document.getElementById('navSubMenu')
    navSubMenu.innerHTML = ''
    const br = document.createElement('br')
    const menuHeader = document.createElement('p')
    menuHeader.innerHTML = '<b>PROJECTS:</b>'
    navSubMenu.appendChild(menuHeader)
    navSubMenu.appendChild(br.cloneNode())

    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    const arrProjectNames = [...new Set(collection.map((item) => item.project))] // ARRAY OF PROJECT NAMES
    if (arrProjectNames.length > 6) {
        alert('Too Many Projects to display all')
    }
    // arrProjectNames.unshift(menuHeader)

    let i = 0
    // eslint-disable-next-line no-plusplus
    for (i = 0; i <= arrProjectNames.length - 1; i++) {
        const projectName = document.createElement('a')
        projectName.innerHTML = `${arrProjectNames[i]}`
        navSubMenu.appendChild(projectName)
        navSubMenu.appendChild(br.cloneNode())
        navSubMenu.appendChild(br.cloneNode())
        projectName.addEventListener('click', projectTaskList)
    }
}
export default projectList
