import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { addPortafoglioItem } from "../features/portafoglio/PortafoglioApi";

const InserisciElemento = () => {

    const dispatch = useDispatch();


    //STATO CON GLI ELEMENTI DEL FORM
    const [formData, setFormData] = useState({
        servizio: "",
        username: "",
        password: ""
    })

    //GESTISCE IL CAMBIAMENTO DEGLI INPUT
    const handleInputChange = (e) => {
        const { name, value } = e.target; //PRENDE NOME E VALUE DAL EVENTO
        setFormData(prevFormData => ({ //IN QUESTO  MODO TIENE TRACCIA DI QUALUNQUE CAMBIO CI SIA STATO NEL VALUE
            ...prevFormData, //COPIA LO STATO PRECEDENTE
            [name]: value,
        }));
    }

    //GESTISCE L'INVIO DEL FORM
    const handleSubmit = async (e) => {
        e.preventDefault(); //NON FA RICARICARE LA PAGINA

        try {
            await dispatch(addPortafoglioItem(formData)).unwrap();/**INVIA FORM DATA ALLA FUNZIONE ADDPORTAFOGLIOITEM CHE LA MANDA AL BACK END */
            alert('Password Inserita con Successo');
            setFormData({ servizio: "", username: "", password: "" });/** RESETTA IL FORM */
        } catch (error) {
            console.error("Errore", error);
            alert('Errore aggiunta password');
        }
    }

    //GESTIONE RESET
    const handleReset = () => {
        setFormData({ servizio: "", username: "", password: "" })
    }

    return (
        <div className="flex justify-center">
        <form onSubmit={handleSubmit} className=" w-56 bg-blue-800/75 flex flex-col">
            <div>
                <label htmlFor="servizio">Servizio</label>
                <input type="text" name="servizio" value={formData.servizio} onChange={handleInputChange} className="w-46 border-solid border border-black"></input>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleInputChange} className="w-46 border-solid border border-black"></input>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="w-46 border-solid border border-black"></input>
            </div>
            <div className="p-4 flex flex-row">
                <button type="submit" className="m-2">Invia</button>
                <button type="button" onClick={handleReset} className="m-2">Annulla</button>
            </div>
        </form>
        </div>
    );
};

export default InserisciElemento;
