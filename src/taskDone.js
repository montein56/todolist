/* eslint-disable no-console */

const collection = JSON.parse(window.localStorage.getItem('ToDoList'))

function taskDone(e) {
    const taskTitleDone =
        e.target.parentElement.parentElement.parentElement.childNodes[0]
            .childNodes[0].firstChild.data
    const indexOfDoneTask = collection.findIndex(
        (object) => object.title === taskTitleDone
    )
    if (collection[indexOfDoneTask].completed === false) {
        collection[indexOfDoneTask].completed = true
        // strikeTask(indexOfDoneTask)
    } else {
        collection[indexOfDoneTask].completed = false
        // unStrikeTask(indexOfDoneTask)
    }
    localStorage.setItem('ToDoList', JSON.stringify(collection))
    window.location.reload()
}
export default taskDone
