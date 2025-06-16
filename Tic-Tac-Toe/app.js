let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerO

const winPttn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO) {
            //playerO
            box.innerText = "O";
            // document.querySelector(".box").style.color = "green";
            turnO = false;
        } else {
            //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWin();
    });
});

const disableBoxes =  () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes =  () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWin = () => {
    for(let pttn of winPttn) {
        // console.log(pttn[0],pttn[1],pttn[2]);
        // console.log(boxes[pttn[0]].innerText,boxes[pttn[1]].innerText,boxes[pttn[2]].innerText);

        let pos1val = boxes[pttn[0]].innerText
        let pos2val = boxes[pttn[1]].innerText
        let pos3val = boxes[pttn[2]].innerText

        if(pos1val != "" && pos2val != "" && pos3val !="") {
            if(pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);