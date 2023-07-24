let tela = document.querySelector(".tela");
let btns = document.querySelectorAll(".btn");
let igual = document.querySelector(".btnIgual");
let btnC = document. querySelector(".c");

let conta = tela.value;

function calc(){
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            conta += btn.value;
            tela.value = conta;
        })
    })
    igual.addEventListener('click', () => {
        const res = eval(conta);
        tela.value = res;
        conta = "";
    })
}

btnC.addEventListener("click", () => {
    conta = "";
})

calc();
