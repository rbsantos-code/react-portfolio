import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';


function App() {

  const [aboutSelected, setAboutSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'contact'
    },
    {
      name: 'projects'
    },
    {
      name: 'resume'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header>
          <Nav
            // category 
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}

            // about
            aboutSelected={aboutSelected}
            setAboutSelected={setAboutSelected}
          ></Nav>
        </Header>
        <hr></hr>
        <main>
          {!aboutSelected ? (
            <>
              <Hero></Hero>
            </>
          ) : (
            <About></About>
          )}
        </main>
        <hr></hr>
        <Footer />
      </div>
    </div>
  );
}

export default App;
