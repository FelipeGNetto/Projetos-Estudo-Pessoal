let btn = document.querySelector('.btnGato');
let box = document.querySelector('.box');
let inner = document.querySelector('.carousel-inner');
const api_key = "live_sLpi9qp4Mc1BpyGmuRJhi7SyJ3pIjBK7JTgZwfwZeMwGhZeIEEYtRMNVlFJITOOz";
const url = `https://api.thecatapi.com/v1/images/search?api_key=${api_key}`;


btn.addEventListener("click", () => {

    fetch(url)
    .then(res => res.json())
    .then(data => {
        let imagemURL = data[0].url;

        let image = document.createElement('img');
        image.setAttribute('src',imagemURL);
        let novaDiv = document.createElement('div');

        inner.appendChild(novaDiv);

        novaDiv.classList.add("carousel-item", "active");
        image.classList.add("d-block", "image-fluid")

        novaDiv.appendChild(image);

    })
    .catch((err) => {
        console.log(err.message);
    })
})
