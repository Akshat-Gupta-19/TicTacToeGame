let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let btn = document.querySelector("#win-btn");

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let count = 0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const checkWinner = () => {
    for(pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                showWinner(pos1Val);
                setTimeout(()=>{
                    turnO = true;
                    for(let i=0;i<boxes.length;i++){
                        boxes[i].innerText = "";
                        boxes[i].disabled = false;
                    }
                    btn.classList.add("hide");
                    count = 0;
                },2000)
            }
        }
    }
    if(count==9){
        turnO = true;
        for(let i=0;i<boxes.length;i++){
            boxes[i].innerText = "";
            boxes[i].disabled = false;
        }
        btn.classList.add("hide");
        count = 0;
    }
}

let showWinner = (pos1Val)=>{
    btn.classList.remove("hide");
    btn.innerText = "winner is " + pos1Val;
}

resetBtn.addEventListener("click",()=>{
    turnO = true;
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerText = "";
        boxes[i].disabled = false;
    }
    btn.classList.add("hide");
})