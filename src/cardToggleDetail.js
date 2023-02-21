function taskDetail(e) {
    const targetID1 =
        e.target.parentElement.parentElement.previousElementSibling
    const targetID2 =
        e.target.parentElement.parentElement.previousElementSibling
            .previousElementSibling
    const imgGetClass = e.target.classList[1]
    const btnImage = e.target.parentElement

    if (imgGetClass === 'detail') {
        btnImage.innerHTML = `<img src = 'images/slim.png' class = 'btnCard slim'>`
        targetID1.style.display = 'block'
        targetID2.style.display = 'block'
    } else {
        btnImage.innerHTML = `<img src = 'images/detail.png' class = 'btnCard detail'>`
        targetID1.style.display = 'none'
        targetID2.style.display = 'none'
    }
}
export default taskDetail
