
import { useState } from 'react';
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [preparedCards,setPreparedCards]=useState([]);

  const handleAddCard = (card) => {

    // console.log(card);
    const newSelectedCards=[...selectedCards,card];
    setSelectedCards(newSelectedCards);
  };

    const handlePrepared = (selectedCard) => {
        console.log('prepared');
        const newPreparedCards=[...preparedCards,selectedCard];
        setPreparedCards(newPreparedCards);
    }
  return (
    <>
    
  <Header></Header>
  <div className='flex'>
  <Cards handleAddCard={handleAddCard}></Cards>
  <Cart 
  selectedCards={selectedCards}
  handlePrepared={handlePrepared}
  preparedCards={preparedCards}
  ></Cart>
  </div>
    
    </>
  )
}

export default App
