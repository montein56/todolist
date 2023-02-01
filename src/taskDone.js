/* eslint-disable no-console */

const collection = JSON.parse(window.localStorage.getItem('ToDoList'))

function strikeTask(index) {
    collection[index].completed = true
    localStorage.setItem('ToDoList', JSON.stringify(collection))
}
function unStrikeTask(index) {
    collection[index].completed = false
    localStorage.setItem('ToDoList', JSON.stringify(collection))
}
function taskDone(e) {
    const taskTitleDone =
        e.target.parentElement.parentElement.parentElement.childNodes[0]
            .childNodes[0].firstChild.data
    const indexOfDoneTask = collection.findIndex(
        (object) => object.title === taskTitleDone
    )
    if (collection[indexOfDoneTask].completed === false) {
        strikeTask(indexOfDoneTask)
    } else {
        unStrikeTask(indexOfDoneTask)
    }
    window.location.reload()
}
export default taskDone
