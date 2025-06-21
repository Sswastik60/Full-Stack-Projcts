let boxes=document.querySelectorAll(".btn");
let reset=document.querySelector(".resetbtn");

let turnO = true;
const winpatterns = [
    [0,1,2,],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],      
];

boxes.forEach((btn) => {
    btn.addEventListener("click",() =>{
        console.log("Box was clicked");
        if (turnO === true){
            btn.innerText="O";
            turnO = false;
        }
        else {
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;  
    });  
});