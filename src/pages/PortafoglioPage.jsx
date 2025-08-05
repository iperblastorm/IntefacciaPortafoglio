import Card from '../component/Card';
import { fetchAllPasswords } from '../features/portafoglio/PortafoglioApi';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import MenuBar from '../component/menuBar';


const PortafoglioPage = () => {

    const dispatch = useDispatch(); //DICHIARO USEDISPATCH
    const { items, status, error } = useSelector(state => state.PortafoglioSlice); //ASSOCIO GLI ELEMNTI DELLA SLICE AD UNA COSTANTE

    useEffect(() => { //QUANDO LA PAGINA VIENE CARICATA SI EFFETTUA QUESTA RICHIESTA
        if (status === 'idle') {
            dispatch(fetchAllPasswords()); //MANDO LA RICHIESTA DI FETCH
        }
    }, [status, dispatch]); // L'ARRAY DELLE DIPENDENZE PERMETTE DI RIESEGUIRE IL FETCH SOLO SE STATUS O DISPATCH CAMBIANO

    if (status === 'loading') {
        return (
            <>
                <MenuBar />
                <p>Password in caricamento</p>
            </>
        )
    }

    if (status === 'failed') {
        return (
            <>
                <MenuBar />
                <p>Caricamento Password fallito: {error}</p>
            </>
        )
    }

    if (status === 'succeeded') {
        return (
                <div className="grid grid-cols-6">
                    {items/** ITEMS È L'ARRAY COMPLETO*/
                        .map/** MAP È COME FARE UN FOR PER LA LUNGHEZZA DEL ARRAY UN FOR POTENZIATO*/
                        (passwordItem /** PASSWORDITEN DIVENTA L'EMENTO PRESO IN QUEL MOMENTO COME CICLO FOR POTENZIATO */ => (
                            <Card  //CREO UNA CARD PER OGNI PASSWORD
                                key={passwordItem.id}
                                id={passwordItem.id}
                                servizio={passwordItem.servizio}
                                username={passwordItem.username}
                                password={passwordItem.password}
                            />
                        ))}
                </div>
        )
    }
}

export default PortafoglioPage;