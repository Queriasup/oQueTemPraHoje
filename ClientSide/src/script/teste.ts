import axios from 'axios'

axios.get('http://localhost:3000/ingredientes')
  .then(response => {
    // Manipule a resposta aqui
    console.log(response.data);
  })
  .catch(error => {
    // Trate erros aqui
    console.error(error);
  });
