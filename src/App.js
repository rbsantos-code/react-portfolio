import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';


function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'projects'
    },
    {
      name: 'resume'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div class="d-flex h-100 text-center text-white bg-dark">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header>
          <Nav
            // category 
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            // contact
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
          ></Nav>
        </Header>
        <hr></hr>
        <main>
          <Hero></Hero>
        </main>
        <hr></hr>
        <Footer />
      </div>
    </div>
  );
}

export default App;
