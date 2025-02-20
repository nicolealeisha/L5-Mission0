import { useState, useEffect } from 'react'
import './App.css'
import DropDownList from './assets/DropDownList'
import ImgMediaCard from './assets/ImgMediaCard';

function App() {
  
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <>
      <header>
          <img className='header-img' src='https://cdn-icons-png.flaticon.com/512/2093/2093843.png' alt='logo' />
          <h2>Auckland Zoo</h2>
          
          <nav>
            <div className={hamburgerOpen ? 'hamburger-open' : 'hamburger'} onClick={toggleHamburger}>
            <DropDownList></DropDownList>
            </div>
          
            <div className={hamburgerOpen ? 'nav-btns-open' : 'nav-btns'}>
              <button className='menu-btn'>Button 1</button>
              <button className='menu-btn'>Button 2</button>
              <button className='btn-border menu-btn'>Button 3</button>
            </div> 
          </nav>
      </header>

      <section className='section1'>
        <h1>Discover the different animals at Auckland Zoo</h1>
        <form>
          <input></input>
          <button className='search-btn'>Search</button>
        </form>
      </section>

      <section className='section2'>
          <ImgMediaCard></ImgMediaCard>
      </section>
        
    </>
  )
}

export default App
