import axios from 'axios';

//CREO LA CONNESSIONE AL BACKEND INDIRIZZO STANDARD
const connessionePortafoglio = axios.create({
  baseURL: 'http://localhost:8080',
});

//IN UN FUTURO AGGIUNGERE AUTENTICAZIONE
//connessionePortafoglio.defaults.headers.common['Authorization'] = AUTH_TOKEN;

//ANCHE SE IN LOCALE NON HO PROBLEMI DI RETE LO IMPOSTO
connessionePortafoglio.defaults.timeout = 2500;


//GESTIONE ERRORI CON INTERCEPTOR
//GESTIONE IN RICHIESTA
connessionePortafoglio.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//GESTIONE IN RISPOSTA
connessionePortafoglio.interceptors.response.use(
  function onFulfilled(response) {
    return response;
  },
  function onRejected(error) {
    console.log('Errore nella risposta del server', error);

    if (error.response) {
      console.error('Dati errore del server:', error.response.data);
      console.error('Codice stato HTTP:', error.response.status);
    } else if (error.request) {
      console.error('Nessuna risposta dal server');
    } else {
      console.error('Errore nella configurazione', error.message);
    }
    return Promise.reject(error);
  }
);

export default connessionePortafoglio;
