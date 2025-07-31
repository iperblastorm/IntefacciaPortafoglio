import { useState } from 'react';
import './App.css';
import Card from './component/Card';
import { getallrecord } from './api/funzPortafoglio';
import { useEffect } from 'react';
import MenuBar from './component/menuBar';

function App() {
  const [cards, setCards] = useState([]);

  const addCards = (newCard) => {
    setCards([...cards, newCard]);
  };

  /**FUNZIONE CHE UNISCE LA RICEZIONE DI DATI CON LA PARTE GRAFICA,
   * ASPETTA CHE LA RICEZIONE DAL DB SIA STATA EFFETTUATA E RESTITUISCE L'ARRAY*/
  useEffect(() => {
    async function fetchData() {
      setCards(await getallrecord());
    }
    fetchData();
  }, []);

  return (
    <>
      <MenuBar></MenuBar>
      <div className={"grid grid-cols-6 gap-5 overflow-auto"}>
      {cards.map((elemento) => (
        <Card
        key={elemento.id}
        servizio={elemento.servizio}
        username={elemento.username}
        password={elemento.password}>
        </Card>
      ))}
      </div>
    </>
  );
}

export default App;
