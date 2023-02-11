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
    const sortdiv = document.getElementById('sortDiv')
    if (sortdiv) {
        sortdiv.innerHTML = ''
    }
    const navbar = document.getElementById('navbar')
    const projectListDiv = document.createElement('div')
    projectListDiv.id = 'projectListDiv'
    const br = document.createElement('br')

    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    const arrProjectNames = [...new Set(collection.map((item) => item.project))] // ARRAY OF PROJECT NAMES

    let i = 0
    // eslint-disable-next-line no-plusplus
    for (i = 0; i <= arrProjectNames.length - 1; i++) {
        const projectName = document.createElement('a')
        projectName.innerHTML = `${arrProjectNames[i]}`
        projectListDiv.appendChild(projectName)
        projectListDiv.appendChild(br.cloneNode())
        projectListDiv.appendChild(br.cloneNode())
        projectName.addEventListener('click', projectTaskList)
    }
    navbar.appendChild(projectListDiv)
}
export default projectList
