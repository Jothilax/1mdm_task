import styles from './App.module.css'
import Header from './components/header/Header'
import About from './components/about/About'
import Seller from './components/seller/Seller'
import Story from './components/story/Story'
import Pricing from './components/pricing/Pricing'
import Footer from './components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
 
  return (
    <div className={styles.App}>
   <Header/>
   
   <Routes>
    <Route path='/' element={<Seller/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/story' element={<Story/>} />
    <Route path='/seller' element={<Seller/>} />
    <Route path='/pricing' element={<Pricing/>} />
   </Routes>
   <Footer/>
    </div>
  )
}

export default App
