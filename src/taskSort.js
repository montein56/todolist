/* eslint-disable no-alert */

// SORT BUTTON IN NAVBAR: SORT BY 5 THINGS
function sortBy(e) {
    const sortField = e.target.id
    const collection = JSON.parse(window.localStorage.getItem('ToDoList'))
    if (sortField.includes('Date')) {
        collection.sort((a, b) => (a.deadline > b.deadline ? 1 : -1))
    } else if (sortField.includes('Title')) {
        collection.sort((a, b) => (a.title < b.title ? 1 : -1))
    } else if (sortField.includes('Project')) {
        collection.sort((a, b) => (a.project < b.project ? 1 : -1))
    } else if (sortField.includes('Priority')) {
        collection.sort((a, b) => (a.priority > b.priority ? 1 : -1))
    } else if (sortField.includes('Done')) {
        collection.sort((a, b) => (a.completed > b.completed ? 1 : -1))
    }

    localStorage.setItem('ToDoList', JSON.stringify(collection))
    window.location.reload()
}

function taskSort() {
    const projectListDiv = document.getElementById('projectListDiv')
    if (projectListDiv) {
        projectListDiv.innerHTML = ''
    }
    const parent = document.getElementById('navbar')
    const br = document.createElement('br')

    const sortDiv = document.createElement('div')
    sortDiv.id = 'sortDiv'

    const sortFields = ['Title', 'Date', 'Project', 'Priority', 'Done']
    let i = 0
    // eslint-disable-next-line no-plusplus
    for (i = 0; i <= sortFields.length - 1; i++) {
        const field = document.createElement('a')
        field.id = `sort${sortFields[i]}`
        field.innerHTML = `<b>Sort:</b> ${sortFields[i]}`
        field.addEventListener('click', sortBy)
        sortDiv.appendChild(field)
        sortDiv.appendChild(br.cloneNode())
        sortDiv.appendChild(br.cloneNode())
    }
    parent.appendChild(sortDiv)
}
export default taskSort
