window.onload = () => { 
        let button1 = document.querySelector(".button-1");
        button1.addEventListener("click", button1Event);
        createNewDivUnderEnrolledStudents();
        createPlusButtons();
        let button3 = document.querySelector(".button3")
        button3.addEventListener("click", button3Event)
        let button4 = document.querySelector(".button4")
        button4.addEventListener("click", button4Event) 
        let button5 = document.querySelector(".button5");
        button5.addEventListener("click", button5Event)
        let button6 = document.querySelector(".button6")
        button6.addEventListener("click", button6Event)
        let colorPicker = document.querySelector(".color-picker")
        colorPicker.addEventListener("click", changeH1WithColorPicker)
        let carsSelector = document.getElementById("cars")
        carsSelector.addEventListener("click", carsSelectorFunction)
        }
    
 
    let valueArray = []
    
    let button1Event = (event) => {
    console.log(event.target)
    let value = document.getElementById("textchange").value
    valueArray.push(value)
    document.getElementById("messages").innerText = valueArray

    if (value.length === 0) {
        alert("It is empty")
    }
    
/*     document.querySelector(".h1-header").innerText = "Hello" */
}


let createNewDivUnderEnrolledStudents = () => {
    let enrolledStudents = document.querySelector(".enrolled-students-section");
    let newDiv = document.createElement("div");
    enrolledStudents.appendChild(newDiv)
}


let createPlusButtons = () => {
    let actionPoints = document.querySelector(".table").rows[5]
    for (let i = 0; i < actionPoints.rows; i++) {
        let row = document.createElement('tr');
        let html = '<td>' + value + '</td><td>' + value1 + '</td><td>' + value2 + '</td>';
        row.innerHTML = html;
        masterList.appendChild(row);
}} 



let button3Event = (event) => {
    console.log(event)
    event.target = document.querySelector("h1").style.backgroundColor ="red"
}

let outputForButton4 = []
let button4Event = (event) => {
    console.log(event)
    let count = document.querySelector(".table").rows.length
    outputForButton4.push(count)
    document.getElementById("output-button-4").innerText = outputForButton4;
  
}

let button5Event = (event) => {
    console.log(event)
    let hhh1 = document.querySelector("h1");
    let hh2 = document.querySelector("h2");
   if (hhh1.innerText === "Hello - this is the header") { 
     hhh1.innerHTML = hh2.innerHTML
   } else {
       hhh1.innerText = "Hello - this is the header"
   }

}   

let button6Event = () => {
    document.getElementById('body').style.backgroundColor = randomColors();
}

let randomColors = () =>{
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//    EX20.: Add a "color picker" to the page, when the color changes, apply it to the header DONE! 
let changeH1WithColorPicker = (event) => {
    console.log(event.target.value)
    document.querySelector("h1").style.backgroundColor = event.target.value;
}

//    EX21.: Add a dropdown (<select> tag), with your fav movies. When one is selected, change the heading of the page with the selected value
let carsSelectorFunction = (event) => {
    console.log(event.target.value)
    document.querySelector("h1").innerText = event.target.value;
}