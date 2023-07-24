let list = document.querySelector(".list");
let btnCadastrar = document.querySelector(".btn-cadastrar");
let btnLimpar = document.querySelector(".btn-limpar");

function salvarTarefas() {
    const tarefas = [];
  
    const cards = document.querySelectorAll('.list-element');
    cards.forEach((card) => {
      const tarefaTexto = card.querySelector('.text h1').textContent;
      const tarefaMarcada = card.querySelector('input[type="checkbox"]').checked;
      tarefas.push({texto: tarefaTexto, marcada: tarefaMarcada});
    });
  
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }
  
  function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (tarefas) {
      tarefas.forEach((tarefa) => {
        let card = document.createElement('div');
        card.classList.add('list-element');
        card.innerHTML = `
          <input type="checkbox" id="check" ${tarefa.marcada ? 'checked' : ''}>
          <div class="text">
          <h1>${tarefa.texto}</h1>
          </div>
          <button class="remove">Remover</button>`;
        list.appendChild(card);
      });
    }
  }

btnCadastrar.addEventListener("click", () => {
    let tarefa = document.querySelector(".tarefa").value;

    let card = document.createElement('div');
    card.classList.add('list-element');
    card.innerHTML = `

        <input type="checkbox" id="check">
        <div class="text">
        <h1>${tarefa}</h1>
        </div>
        <button class="remove">Remover</button>`

    list.appendChild(card);

    document.querySelector(".tarefa").value = "";

    salvarTarefas()
})

list.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
        event.target.parentNode.remove();
    }
    salvarTarefas();
});

btnLimpar.addEventListener("click", () => {
    const divs = document.querySelectorAll('.list div');

    divs.forEach((div) => {
        div.remove();
    })
    salvarTarefas();
})

carregarTarefas();



