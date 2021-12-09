var player = 1;
var p1Score = 0;
var p2Score = 0;

let checkall =(symbol) => {
    console.log(check(symbol, 1, 2, 3))
    if(
        check(symbol, 1, 2, 3) ||
        check(symbol, 4, 5, 6) ||
        check(symbol, 7, 8, 9) ||
        check(symbol, 1, 4, 7) ||
        check(symbol, 2, 5, 8) ||
        check(symbol, 3, 6, 9) ||
        check(symbol, 1, 5, 9) ||
        check(symbol, 3, 5, 7) 
    ) {
        return true;
    }
    return false;
}

let mark =(box) => {
    if(document.getElementById(box).textContent === ""){
        if(player === 1) {
          document.getElementById(box).textContent = 'X';
          player++;
          console.log(checkall)
          if(checkall("X")) {
              confirm("Player 1 Wins!");
                clearBoard()
              p1Score++;
                document.getElementById('p1Score').textContent = p1Score;

              return;
          }
        }else{
            document.getElementById(box).textContent = 'O';
            player--;
            if(checkall("O")) {
                confirm("Player 2 Wins!");
                    setTimeout(function(){
                        clearBoard()
                    p2Score++;
                document.getElementById('p2Score').textContent = p2Score;
            },0)
                return;
            }
        }
        document.getElementById("turnText").textContent = `Current Player ${player}`
    }
    tie();
    
}

document.getElementById("turnText").textContent = `Current Player: ${player}`;

var table=[1, 2, 3, 4, 5, 6, 7, 8, 9];

let check=(symbol, spot1, spot2, spot3) => {
    if(document.getElementById(spot1.toString()).textContent==symbol && document.getElementById(spot2.toString()).textContent==symbol
    && document.getElementById(spot3.toString()).textContent==symbol){
        document.getElementById(spot1).style.backgroundColor= "gold";
        document.getElementById(spot2).style.backgroundColor= "gold";
        document.getElementById(spot3).style.backgroundColor= "gold";
   
        console.log("after timeout")
        return true;
    } 
    return false;
}



let tie = () => {
    for(let i of table){
        if(document.getElementById(i).textContent === "") return false;
    }
    alert('Tie! You are to cracked!')
    return true;

}

function clearBoard() {
    let elems = document.getElementsByClassName('box');
    for(let i = 0; i < elems.length; i++){
        elems[i].textContent=''
        elems[i].style.backgroundColor = '#00bfff'
    }
}