'use strict';
async function fetchData(url, options) {
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
};


async function haeDataa() {
try {
  const user = {
     name: 'none',
     job: 'none'
  };
  const url = 'https://reqres.in/api/unknown/23';



  const options = {
     method: 'POST',
     headers: {
        'Content-Type': 'application/json'
     },
     body: JSON.stringify(user)
  }

  const optionsP = {
    method: 'PUT',
    headers: {
       'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
 }


const userData = await fetchData(url, {method: 'GET',});
  console.log(userData);
const userData2 = await fetchData(url, options);
  console.log(userData2);
const userData3 = await fetchData(url, optionsP);
  console.log(userData3);
const userData4 = await fetchData(url, {method: 'DELETE',});
  console.log(userData4);


} catch (error) {
  console.error(error.message);
}
}

haeDataa();
