'use strict';

const apiURL = 'https://media1.edu.metropolia.fi/restaurant';

const kohde = document.querySelector('tbody');
const modaali = document.querySelector('dialog');
const info = document.querySelector('#info');
const closeModal = document.querySelector('#close-modal');




async function teeRavintolaLista() {
  const restaurants = await fetchData(apiURL + '/api/v1/restaurants');


// your code here

closeModal.addEventListener('click', function () {
  modaali.close();
});

restaurants.sort((a, b) => a.name.localeCompare(b.name));

for (const restaurant of restaurants) {
  const nimi = document.createElement('td');
  nimi.innerText = restaurant.name;

  const osoite = document.createElement('td');
  osoite.innerText = restaurant.address;

  const rivi = document.createElement('tr');
  rivi.append(nimi, osoite);

  rivi.addEventListener('click', async function () {
    const cour = await fetchData(apiURL + `/api/v1/restaurants/daily/${restaurant._id}/fi`)
    let listaHTML = '';
    for (const food of cour.courses) {
      listaHTML += `<il>
      <h3>${food.name},</h3>
      <p>${food.price},</p>
      <p>${food.diets}</p>
      </il>`
    }


    const korostetut = document.querySelectorAll('.highlight');
    for (const korostettu of korostetut) {
      korostettu.classList.remove('highlight');
    }
    rivi.classList.add('highlight');
    modaali.showModal();
    const ravintolaHTML = `
    <header>
      <h3>${restaurant.name}</h3>
      <p>${restaurant.company}</p>
    </header>
    <address>
      ${restaurant.address} <br>
      ${restaurant.postalCode} ${restaurant.city} <br>
      ${restaurant.phone} <br>
    </address>
    <div>
      <h3>Päivän roukalista</h3>
      <ul>
        ${listaHTML}
      </ul>
    </div>
    `;
    info.innerHTML = '';
    info.insertAdjacentHTML('beforeend', ravintolaHTML);
  });

  kohde.append(rivi);
}
}

teeRavintolaLista();
