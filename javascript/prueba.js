//* funciones toastify*//

function toastifyDBaP () {
  Toastify({
    text: 'Tenes  ' +  monto.value * JSONdolarblue + ' pesos' ,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}

function toastifyDOaP () {
  Toastify({
    text: 'Tenes  ' +  monto.value * JSONdolaroficial + ' pesos' ,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}

function toastifyPaDB () {
  Toastify({
    text: 'Tenes  ' +  monto.value * JSONdolarbluepeso + ' dolares' ,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}

function toastifyPaDO () {
  Toastify({
    text: 'Tenes  ' +  monto.value * JSONdolaroficialpeso + ' dolares' ,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
} 

/* API */
let url = 'https://api.bluelytics.com.ar/v2/latest'
  fetch (url)
  .then((resp) => resp.json())
  .then((data) => mostrarData (data))
  .catch((error) => console.log (error))

  /*local storage precio dolar */
  const mostrarData = (data) => {
    console.log (data)
    localStorage.setItem ("dolarprecios", JSON.stringify ({data}))
  }



let JSONdolarprecios = JSON.parse (localStorage.getItem ("dolarprecios"))
let JSONdolarblue = JSONdolarprecios.data.blue.value_sell;
let JSONdolarbluepeso = 1 / JSONdolarprecios.data.blue.value_sell;
let JSONdolaroficial = JSONdolarprecios.data.oficial.value_sell;
let JSONdolaroficialpeso = 1 / JSONdolarprecios.data.oficial.value_sell;


/*IDs del html y código*/
const monto = document.getElementById ("monto")

const salidainput = document.getElementById ("resultado")

const enviar = document.getElementById ("enviar")
let peso = document.getElementById ("peso")
let dolarblue = document.getElementById ("dolarblue")
let dolaroficial = document.getElementById ("dolaroficial")

dolarblue = JSONdolarblue
dolaroficial = JSONdolaroficial
peso = 1 

let cambio = document.getElementById("cambio1");
let cambio2 = document.getElementById("cambio2");
let option1 = document.createElement("option");
let option2 = document.createElement("option");

function cambioChange(){
  let cambio = document.getElementById("cambio1");
  let cambio2 = document.getElementById("cambio2");
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  removeAll(cambio2);
  if(cambio.value == "p"){
      option1.value = "pdo";
      option1.text = "Dolar Oficial";
      option2.value = "pdb";
      option2.text = "Dolar Blue";
      cambio2.add(option1);
      cambio2.add(option2);

  }else if(cambio.value == "db"){
      option1.text = "Peso Argentino";
      option1.value = "dbp";
      cambio2.add(option1);
  }else if(cambio.value == "do"){
      option1.text = "Peso Argentino";
      option1.value = "dop";
      cambio2.add(option1);
  }
}


function removeAll(selectBox) {
  while (selectBox.options.length > 0) {
      selectBox.remove(0);
}
}


  enviar.onclick = () => {if ((cambio.value == "p") && (cambio2.value == "pdo")) {

    salidainput.value = monto.value / dolaroficial, toastifyPaDO()
  }
  else if ((cambio.value == "p") && (cambio2.value == "pdb")) {
    salidainput.value = monto.value /dolarblue, toastifyPaDB ()
  }
  else if ((cambio.value == "db") && (cambio2.value == "dbp")) {
    salidainput.value = dolarblue * monto.value, toastifyDBaP()
  }
  else if ((cambio.value == "do") && (cambio2.value == "dop")){
    salidainput.value = dolaroficial * monto.value, toastifyDOaP()
  }}

  monto.onkeyup = (montoenviar) => {if ((cambio.value == "p") && (cambio2.value == "pdo")){if (montoenviar.code === 'Enter') {
    salidainput.value = monto.value / dolaroficial; toastifyPaDO()
  }}
  else if ((cambio.value == "p") && (cambio2.value == "pdb")) {
    salidainput.value = monto.value /dolarblue, toastifyPaDB ()
  }
  else if ((cambio.value == "db") && (cambio2.value == "dbp")) {
    salidainput.value = dolarblue * monto.value, toastifyDBaP()
  }
  else if ((cambio.value == "do") && (cambio2.value == "dop")){
    salidainput.value = dolaroficial * monto.value, toastifyDOaP()
  }}