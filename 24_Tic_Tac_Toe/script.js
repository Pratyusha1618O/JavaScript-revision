let currentPlayer = "X";
let arr = Array(9).fill(null)

const winnerMsg = document.getElementById('winner');

console.log(arr);

function checkWinner(){
    if(
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
    ){
        console.log(currentPlayer);
        winnerMsg.innerText = "Winner is: "+ currentPlayer;
        return;
    }

    if(!arr.some(e => e === null)){
        winnerMsg.innerText = "Game Draw!!";
        return;
    }
    
}


function handleClick(el){
    // console.log(el)
    const id = Number(el.id);
    if(arr[id] !== null) // if there is already an elem, then it will not be change on click
        return;

    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X'? 'O' : 'X';
    // console.log(arr);

}

