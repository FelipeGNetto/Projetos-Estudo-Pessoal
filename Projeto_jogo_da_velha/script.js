let campos = document.querySelectorAll(".campo");
let j1 = document.querySelector("#j1");
let j2 = document.querySelector("#j2");
let currentPlayer = "X";
let gameOver = false;
let pointPlayer1 = 0;
let pointPlayer2 = 0;

function playAgain(){
    const resposta = confirm("Deseja jogar novamente?");

    if(resposta){
        campos.forEach((campo) => {
            campo.textContent = "";
            campo.classList.remove('winner');
        })
        gameOver = false;
        currentPlayer = 'X';
    }
}

function checkWinner(){
    const patterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

let empate = true;


for(const pattern of patterns){
        const [a, b, c] = pattern;
        if(
            campos[a].textContent &&
            campos[a].textContent === campos[b].textContent &&
            campos[b].textContent === campos[c].textContent
        ){
            campos[a].classList.add('winner');
            campos[b].classList.add('winner');
            campos[c].classList.add('winner');
            gameOver = true;
            alert(`O jogador ${campos[a].textContent} ganhou!`);
            if(campos[a].textContent == "X"){
                pointPlayer1 += 1;
                j1.innerHTML = `${pointPlayer1} pontos`
            }else if(campos[a].textContent == "O"){
                pointPlayer2 += 1;
                j2.innerHTML = `${pointPlayer2} pontos`
            }
            setTimeout(playAgain, 1000);
        }else{
            if(!campos[a].textContent){
                empate = false;
            }
        }
    }

    if(empate){
        alert("empate");
        setTimeout(playAgain, 1000);
    }
}

campos.forEach((campo) => {
    campo.addEventListener("click", () => {
        if(campo.textContent || gameOver){
            return;
        }

        campo.textContent = currentPlayer;
        checkWinner();

        currentPlayer = currentPlayer === "X"? "O" : "X";
    });
});