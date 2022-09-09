const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getData = (url: string) => fetch(`${BASE_URL}/${url}`)
  .then(response => response.json())
  .catch(err => console.log(new Error(err)));
