import { useState } from 'react'
import './App.css'
import DropDownList from './assets/DropDownList'
import ImgMediaCard from './assets/ImgMediaCard';

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm); // trigger the search
  };

  return (
    <>
      <header>
        <img
          className='header-img'
          src='https://cdn-icons-png.flaticon.com/512/2093/2093843.png'
          alt='logo'
        />
        <h2>Auckland Zoo</h2>

        <nav>
          <div className={hamburgerOpen ? 'hamburger-open' : 'hamburger'} onClick={toggleHamburger}>
            <DropDownList />
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
        <form onSubmit={handleSearch}>
          <input value={searchTerm} onChange={handleInputChange} placeholder='Search animals...' />
          <button className='search-btn'>Search</button>
        </form>
      </section>

      <section className='section2'>
        <ImgMediaCard searchQuery={query} />
      </section>

      <footer className='footer'>
        <div className='footer-content'>
          <p>Produced in 2025 by <a href='https://github.com/nicolealeisha'>Nicole Smith</a></p>
        </div>
      </footer>
    </>
  );
}

export default App;
