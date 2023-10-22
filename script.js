
// getting the date
const dateteller = () => {
    let d = 24
    let m = 10
    let arr = []
    for (let i = 0; i < 75; i++) {
        if (d <= 31 && m == 10) {
            d = d
            m = m
        }
        else if (d > 31 && m == 10) {
            d = d - 31
            m = 11
        }
        else if (d <= 30 && m == 11) {
            d = d
            m = 11
        }
        else if (d > 30 && m == 11) {
            d = d - 30
            m = 12
        }
        else if (d <= 31 && m == 12) {
            d = d
            m = 12
        }
        else if (d > 31 && m == 12) {
            d = d - 31
            m = 1
        }
        let date = `${d}: ${m}: 2023`
        arr.push(date)
        d++
    }
    return (arr)
}

let itemcontainer = document.querySelector('.itemcontainer')


for (let i = 0; i < 75; i++) {
    let div = document.createElement("div")
    div.className = "item"
    // div.id = `${i}`
    div.innerHTML = `Day: ${i + 1}`
    itemcontainer.appendChild(div)
}

let item = Array.from(document.querySelectorAll(".item"))
item.forEach((element) => {
    for (let j = 0; j < 6; j++) {
        let tasks = document.createElement("div")
        tasks.className = "tasks"
        tasks.classList.add(`${j}`)
        element.appendChild(tasks)
    }
})

let firstbox = document.getElementsByClassName("0")
Array.from(firstbox).forEach((element,i) => {
    element.innerHTML = dateteller()[i]
})

let boxestocheck = Array.from(document.getElementsByClassName("tasks"))
boxestocheck.forEach((element,i)=>{
    if(element.classList[1] != "0"){
        element.classList.add("boxestocheck") 
        element.id = `${i+100}`
    }
})

let myboxes = Array.from(document.getElementsByClassName("boxestocheck"))
myboxes.forEach((element,i)=>{
    element.innerHTML = `<input type="checkbox" class="mycheckbox" id=${i+1}>` //id range of boxes 0-375
})

let arr_of_boxes = Array.from(document.getElementsByClassName("mycheckbox"))
arr_of_boxes.forEach((element)=>{
    element.addEventListener("change",()=>{
        // console.log(element.id,element.checked)
        localStorage.setItem(element.id,element.checked)
    })
})
arr_of_boxes.forEach((element)=>{
    window.addEventListener('load',()=>{
        const ischecked = localStorage.getItem(element.id)
        if(ischecked === 'true'){
            element.checked = true
        }
        else{
            element.checked = false
        }
    })
})


