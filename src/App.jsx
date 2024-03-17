
import { useState } from 'react';
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Title from './components/Title/Title';
function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [preparedCards, setPreparedCards] = useState([]);
  const [totalCalories, setTotalCalories] = useState([0]);
  const [totalTime, setTotalTime] = useState([0]);

  const handleAddCard = (card) => {
    // console.log(card);

    // toast declaration *************

    const notify = () => toast.error("The Course is Already Selected");
    const isExist = selectedCards.find((item) => item.id == card.id);
    if (isExist) {
      return notify();
    }

    const newSelectedCards = [...selectedCards, card];
    setSelectedCards(newSelectedCards);
  };

  const handlePrepared = (id, calories, time, selectedCard) => {
    // console.log('prepared');
    const newPreparedCards = [...preparedCards, selectedCard];
    setPreparedCards(newPreparedCards);

    // remove card ************************

    // console.log('remove',id);
    const remainingCards = selectedCards.filter(item => item.id !== id);
    setSelectedCards(remainingCards);

    // total Calories calculation **************

    let totalCalories = parseInt(selectedCard.calories);
    preparedCards.forEach((item) => {
      totalCalories = totalCalories + parseInt(item.calories);
    })
    setTotalCalories(totalCalories);

    // total Time calculation **************

    let totalTime = parseInt(selectedCard.preparing_time);
    preparedCards.forEach((item) => {
      totalTime = totalTime + parseInt(item.preparing_time);
    })
    setTotalTime(totalTime);
  }
  return (
    <>

      <Header></Header>
      <Title></Title>
      <div className='flex md:flex-row flex-col'>
        <Cards handleAddCard={handleAddCard}></Cards>
        <Cart
          selectedCards={selectedCards}
          handlePrepared={handlePrepared}
          preparedCards={preparedCards}
          totalCalories={totalCalories}
          totalTime={totalTime}
        ></Cart>
      </div>

    </>
  )
}

export default App
