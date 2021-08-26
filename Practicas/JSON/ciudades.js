const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = "https://faviolasoliz.github.io/MiRepositorio/Practicas/JSON/ciudad.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
// Conexion
request.responseType = 'json';
request.send();

// Obteniendo los datos json

request.onload = function() {
    const Ciudades_json = request.response;

    console.log(Ciudades_json);

    //populateHeader(superHeroes);
    //showHeroes(superHeroes);

    mostrarTitulo(Ciudades_json);
    mostrarCiudades(Ciudades_json);
  }

  function mostrarTitulo(jsonObj)
  {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['Titulo'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = 'Pais: ' + jsonObj['pais'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);

  }

  function mostrarCiudades(jsonObj) {
    const ciudades1 = jsonObj['ciudades'];
  
    for (var i = 0; i < ciudades1.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
     // const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      // nimbre de la ciudad
      myH2.textContent = ciudades1[i].nombre;
      // Fundacion
      myPara1.textContent = 'Fundado el : ' + ciudades[i].fundacion;
      //Para2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Lugares Turisticos:';
  
      const lugares = ciudades1[i].lugares turisticos;
      for (var j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }





