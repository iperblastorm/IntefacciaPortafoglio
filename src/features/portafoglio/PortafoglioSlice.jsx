import { createSlice } from "@reduxjs/toolkit";
import { addPortafoglioItem, fetchAllPasswords } from "./PortafoglioApi";

//QUI CREO UNO STATO IN QUESTO CASO UNO STATO CHE GESTISCHE LE SCHEDE DEL PORTAFOGLIO
export const PortafoglioSlice = createSlice({
    //NOME DELLO STATO
    name: "portafoglio",
    //QUESTO STATO CONTIENE IL POSTO PER UN ARRAY "ITEMS" , UNO STATUS E UN ERRORE
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },

    //QUI SONO LE OPERAZIONE SINCRONE "IMMEDIATE" CHE POSSO FARE SU QUESTI OGGETTI
    reducers: {

    },

    /**QUESTE SONO LE OPERAZIONI ASINCRONE "NON IMMEDIATE" CHE POSSO FARE SU QUESTI OGGETTI,
     * IL BILDER È UN OGGETTO CHE GESTISCE LE OPERAZIONI E PUO RESTITUIRE 3 STATUS PENDING,
     * FULLFILLED O REJECTED*/
    extraReducers: (builder) => {
        //CASE GET
        builder.addCase(fetchAllPasswords.pending, (state) => {
            state.status = 'loading';//RESTITUISCE CARICAMENTO NELLO STATUS
        })

        builder.addCase(fetchAllPasswords.fulfilled, (state, action) => {
            state.status = 'succeeded'; //ASSEGNO ALLO STATO IL SUCCESSO
            state.items = action.payload; // ASSEGNO GLI OGGETTI RICEVUTI ALLO SLOT ITEM DELLO STATO
            state.error = null; //NON CI SONO ERRORI

        })

        builder.addCase(fetchAllPasswords.rejected, (state, action) => {
            state.status = 'failed'; //CE STATO UN ERRORE NEL CARICAMENTO
            state.error = action.error.message || 'Errore Sconosciuto'; //ERRORE OPPURE SCONOSCIUTO
        })

        //CASE POST
        builder.addCase(addPortafoglioItem.pending, (state) => {
            state.status = 'loading'; //RESTITUISCE STATUS INVIO
        })
        
        builder.addCase(addPortafoglioItem.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items.push(action.payload);
            state.error = null;
        })

        builder.addCase(addPortafoglioItem.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Errore Sconosciuto'
        })
    }

});