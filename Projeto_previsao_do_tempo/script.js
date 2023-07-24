let btn = document.querySelector(".buscar");
let box =document.querySelector(".box");

function temElemento(element) {
    const childElements = element.querySelectorAll('*');
    for (const childElement of childElements) {
      if (childElement.textContent.trim() !== '') {
        return true;
      }
    }
    return false;
  }


btn.addEventListener('click', () => {
    if(temElemento(box)){
        box.innerHTML = '';
    }

    let cidade = document.querySelector(".cidade").value;

    const apiKey = "2f8f0e7afe1b778dbc80908e6b32b0e4";
    const URLgeo = `https://api.openweathermap.org/geo/1.0/direct?q=${cidade}&appid=${apiKey}`;

    fetch(URLgeo)
    .then(res => res.json())
    .then(data => {
        const latitude = data[0].lat;
        const longitude = data[0].lon;
        const state = data[0].state;
        
        const urlPrev = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=pt_br`;

        fetch(urlPrev)
        .then(res => res.json())
        .then(data => {
            const tempK = data.main.temp;
            const tempC = tempK - 273.15;
            const feelsLikeK = data.main.feels_like;
            const feelsLikeC = feelsLikeK - 273.15
            const city = data.name;
            const country = data.sys.country;
            const desc = data.weather[0].description;
            const iconCode = data.weather[0].icon;

            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            let cidade = document.createElement('h1');
            cidade.innerHTML = `Cidade: <span>${city}</span>`;
            let estado = document.createElement('h1');
            estado.innerHTML = `Estado: <span>${state}</span>`;
            let pais = document.createElement('h1');
            pais.innerHTML = `País: <span>${country}</span>`;
            let descricao = document.createElement('h1');
            descricao.innerHTML = `Descrição: <span>${desc}</span>`;
            let temperatura = document.createElement('h1');
            temperatura.innerHTML = `Temperatura atual: <span>${tempC.toFixed(1)}ºC</span>`;
            let sensacaoT = document.createElement('h1');
            sensacaoT.innerHTML = `Sensação térmica: <span>${feelsLikeC.toFixed(1)}ºC</span>`;
            let icone = document.createElement('img');
            icone.setAttribute('src', iconUrl);

            box.appendChild(cidade);
            box.appendChild(estado);
            box.appendChild(pais);
            box.appendChild(descricao);
            box.appendChild(temperatura);
            box.appendChild(sensacaoT);
            box.appendChild(icone);

            console.log(data)
        })
        .catch(error => {
            alert(error.message);
        })


    })
    .catch(error => {
        alert(error.message);
    })
    document.querySelector(".cidade").value = "";
})