'use strict'
async function responder() {
  try {
      const response = await fetch('https://reqres.in/api/users/1');
      const json = await response.json();
      console.log('result', json);
  } catch (error) {
      console.log(error.message);
  }
}

responder();
