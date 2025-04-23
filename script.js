const inputfield = document.getElementById("input-field");
const listcont = document.getElementById("list-cont");

function addTask(){
    if(inputfield.value ==='') {
        alert("You must write something!...");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputfield.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputfield.value = "";
    saveData();
} 

listcont.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listcont.innerHTML);
}
function showTask(){
    listcont.innerHTML=localStorage.getItem("data");
}
showTask();
