import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import PortafoglioPage from '../pages/PortafoglioPage';
import InserisciElemento from '../pages/InserisciPage';

const route = [
    {
        path: '/', //QUESTA È LA SCERMATA PRINCIPALE DELL'APP
        element: <App />, //GLI DICO DI ANDARE A PRENDERE APP.JSX
        children: [ //MANTIENE LA BARRA LATERALE E CAMBIA SOLO IL CONTENUTO A DESTRA
            {
                path: '/Portafoglio',
                element: <PortafoglioPage />
            },
            {
                path: '/Aggiungi',
                element: <InserisciElemento />
            }
        ]
    }, //per inserire piu rotte      , { path: '', element: <  />} ecc ecc
];

export const router = createBrowserRouter(route);