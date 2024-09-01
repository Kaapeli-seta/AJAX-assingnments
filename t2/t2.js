'use strict'


async function responder() {

  const data = {
    body: JSON.stringify({
        name: 'none',
        job: 'none'
    }),
    method: 'POST',
    headers: {
          'Content-type': 'application/json',
    },
  }
  try {
    const response = await fetch('https://reqres.in/api/users', data);
    if (!response.ok) throw new Error('Invalid input!');
    const json = await response.json();
    console.log('result', json);
 } catch (e) {
    console.log('error', e);
 }
}

responder();
