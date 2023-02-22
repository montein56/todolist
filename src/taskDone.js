/* eslint-disable no-console */

function taskDone(e) {
    const newCollection = JSON.parse(window.localStorage.getItem('ToDoList'))
    const titleOfTaskToChangeDone =
        e.target.parentElement.parentElement.parentElement.childNodes[0]
            .childNodes[0].firstChild.data
    const getNodeToChange =
        e.target.parentElement.parentElement.parentElement.childNodes[0]
            .childNodes[0]
    const indexOfDoneTask = newCollection.findIndex(
        (object) => object.title === titleOfTaskToChangeDone
    )
    if (newCollection[indexOfDoneTask].completed === false) {
        newCollection[indexOfDoneTask].completed = true
    } else {
        newCollection[indexOfDoneTask].completed = false
    }
    localStorage.setItem('ToDoList', JSON.stringify(newCollection))
    if (
        e.target.parentElement.innerHTML ===
        '<img src="images/pending.png" class="btnCard done">'
    ) {
        e.target.parentElement.innerHTML =
            '<img src="images/check.png" class="btnCard done">'
        getNodeToChange.classList.add('strike')
        getNodeToChange.nextSibling.classList.add('strike')
    } else {
        e.target.parentElement.innerHTML =
            '<img src="images/pending.png" class="btnCard done">'
        getNodeToChange.classList.remove('strike')
        getNodeToChange.nextSibling.classList.remove('strike')
    }
    e.stopPropagation()
}
export default taskDone
