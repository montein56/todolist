/* eslint-disable no-plusplus */

import makeForms from './formAddEdit'
import taskSort from './taskSort'
import projectList from './tasksByProject'

function branchToForm(e) {
    this.removeEventListener('click', branchToForm)
    if (e.target.className.includes('plus')) {
        const prjctList = document.getElementById('projectListDiv')
        if (prjctList) {
            prjctList.innerHTML = ''
        }
        const sortDiv = document.getElementById('sortDiv')
        if (sortDiv) {
            sortDiv.innerHTML = ''
        }
        makeForms()
    } else if (e.target.className.includes('sort')) {
        taskSort()
    } else if (e.target.className.includes('home')) {
        window.location.reload()
    } else if (e.target.className.includes('project')) {
        projectList()
    }
}

function applyNavListeners() {
    const navbarItems = document.getElementsByClassName('menuItem')
    let i = 0
    for (i = 0; i <= navbarItems.length - 1; i++) {
        navbarItems[i].addEventListener('click', branchToForm)
    }
}
export default branchToForm
export { applyNavListeners }
