import axios from 'axios';
import connessionePortafoglio from './connPortafoglio';

//FUNZIONE ASINCRONA CIOE ASPETTA CHE SIA POSSIBILE EFFETTUARLA NON BLOCCA IL PROGRAMMA
export async function getallrecord() {
        //METTO LA CONNESSIONE IN ATTESA DENTRO UNA COSTANTE
        const elementi = await connessionePortafoglio.get('/Portafoglio');

        //SE CORRETTA STAMPO OK NEL RECORD E RITORNO I DATI
        console.log('get all record OK');
        return elementi.data;
}
