
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

function App() {


  return (
    <>
    
  <Header></Header>
  <div className='flex'>
  <Cards></Cards>
  <Cart></Cart>
  </div>
    
    </>
  )
}

export default App
