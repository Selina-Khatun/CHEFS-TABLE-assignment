
import { useState } from 'react';
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [preparedCards, setPreparedCards] = useState([]);

  const handleAddCard = (card) => {
    // console.log(card);
    const notify = () => toast.error("The Course is Already Selected");
    const isExist = selectedCards.find((item) => item.id == card.id);
    if (isExist) {
      return notify();
    }

    const newSelectedCards = [...selectedCards, card];
    setSelectedCards(newSelectedCards);
  };

  const handlePrepared = (id, selectedCard) => {
    // console.log('prepared');
    const newPreparedCards = [...preparedCards, selectedCard];
    setPreparedCards(newPreparedCards);
    // console.log('remove',id);
    const remainingCards = selectedCards.filter(item => item.id !== id);

    setSelectedCards(remainingCards);
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
