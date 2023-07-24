let galeria = document.querySelector(".galeria");
let init = document.querySelector(".init");
let btnAdd = document.querySelector("#btnAdd");
let btnLimpar = document.querySelector(".limpar");

function criarImageDiv(file) {
    let imageDiv = document.createElement('div');
    imageDiv.classList.add("image");
    imageDiv.innerHTML = `<button class="remove">Remover</button>`

    const image = document.createElement('img');
    image.src = URL.createObjectURL(file);

    imageDiv.appendChild(image);
    init.appendChild(imageDiv);

    return imageDiv;
}

btnAdd.addEventListener("change", (e) => {
    const files = e.target.files;

    for (const file of files) {
        criarImageDiv(file);
    }

    verificarTamanhoTela();
});

galeria.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        e.target.parentNode.remove();
    }
});

btnLimpar.addEventListener("click", () => {
    const divs = document.querySelectorAll(".galeria div")
    divs.forEach((div) => {
        div.remove()
    });

    verificarTamanhoTela();
});

function verificarTamanhoTela() {
    const larguraTela = window.innerWidth;

    if (larguraTela < 520) {
        galeria.classList.add("carousel", "slide");
        init.classList.add("carousel-inner");

        if (init.children.length > 0) {
            const imagensDivs = init.querySelectorAll('.image');
            imagensDivs.forEach((imagemDiv, i) => {
                imagemDiv.classList.remove('active');
                imagemDiv.classList.add('carousel-item');
            });

            imagensDivs[0].classList.add('active');

            function removerActive() {
                imagensDivs[slideAtual].classList.remove("active");
            }

            function adicionarActive() {
                slideAtual = (slideAtual + 1) % imagensDivs.length;
                imagensDivs[slideAtual].classList.add("active");
            }

            setInterval(() => {
                removerActive();
                adicionarActive();
            }, 3000);
        }

        let btnPrev = document.createElement('button');
        btnPrev.classList.add("carousel-control-prev");
        btnPrev.setAttribute('data-bs-target', '#my-carousel');
        btnPrev.setAttribute('data-bs-slide', 'prev');
        let spanPrev = document.createElement('span');
        spanPrev.classList.add('carousel-control-prev-icon')
        btnPrev.appendChild(spanPrev);
        galeria.appendChild(btnPrev);

        let btnNext = document.createElement('button');
        btnNext.classList.add("carousel-control-next");
        btnNext.setAttribute('data-bs-target', '#my-carousel');
        btnNext.setAttribute('data-bs-slide', 'next');
        let spanNext = document.createElement('span');
        spanNext.classList.add('carousel-control-next-icon')
        btnNext.appendChild(spanNext);
        galeria.appendChild(btnNext);

        const imagensDivs = init.querySelectorAll('.image img');
        imagensDivs.forEach((imagemDiv) => {
            imagemDiv.classList.add("d-block", "w-100");
        });

        let remove = document.querySelectorAll('.remove');
        remove.forEach((e) => {
            e.style.display = "none";
        })
    } else {
        galeria.classList.remove("carousel");
        galeria.classList.remove("slide");
        init.classList.remove("carousel-inner");

        const imagensDivs = init.querySelectorAll('.image');
        imagensDivs.forEach((imagemDiv) => {
            imagemDiv.classList.remove("active");
            imagemDiv.classList.remove("carousel-item");
            imagemDiv.classList.remove("d-block", "w-100");
        });

        const btnPrev = galeria.querySelector('.carousel-control-prev');
        if (btnPrev) {
            btnPrev.remove();
        }

        const spanPrev = document.querySelector(".carousel-control-prev-icon");
        if (spanPrev) {
            spanPrev.remove();
        }

        const spanNext = document.querySelector(".carousel-control-next-icon");
        if (spanNext) {
            spanNext.remove();
        }

        const btnNext = galeria.querySelector('.carousel-control-next');
        if (btnNext) {
            btnNext.remove();
        }

        let remove = document.querySelectorAll('.remove');
        remove.forEach((e) => {
            e.style.display = "block";
        })
    }
}

verificarTamanhoTela();

window.addEventListener("resize", verificarTamanhoTela);