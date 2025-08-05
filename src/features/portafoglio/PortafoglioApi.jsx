import { createAsyncThunk } from "@reduxjs/toolkit"
import connessionePortafoglio from "../../api/connPortafoglio"


export const fetchAllPasswords =
    createAsyncThunk( //DEFINISCO ASYNC THUNK
        "portafoglio/fetchItems", //IL NOME CHE REDUX USA PER DEFINIRE L'AZIONE
            async () => { //FUNZIONE ASINCRONA DI RICHIAMO DATI
                const response = await connessionePortafoglio.get('/Portafoglio');
                return response.data;
        });

export const addPortafoglioItem =
    createAsyncThunk( //DEFINISCO ASYNC THUNK
        "portafoglio/addItems",
        async (formData) => {//PRENDO FORM DATA DAL FORM
            const response = await connessionePortafoglio.post('/Portafoglio', formData);//FACCIO UN "POST" INVIANDO I DATI DEL FORM
            return response.data;// MI VIENE RESTITUITO L'ELEMENTO AGGIUNTO
        }
)