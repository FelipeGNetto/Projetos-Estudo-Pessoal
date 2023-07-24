let btn = document.querySelector(".btn");
let total = document.querySelector(".total");
let valorGorj = document.querySelector(".valor-gorjeta");



btn.addEventListener("click", (e) => {
    e.preventDefault();

    let valor = Number(document.querySelector(".preco").value);
    let gorj = Number(document.querySelector(".gorj").value);

    let porcento = gorj / 100;
    let totalGorj = valor * porcento;
    let valorTotal = valor + (valor * porcento);

    valorGorj.innerHTML = `Valor da gorjeta: R$${totalGorj.toFixed(2)}`;
    total.innerText = `Total da conta: R$${valorTotal.toFixed(2)}`;
})

