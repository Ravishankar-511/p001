import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <div className='logo'>My Website</div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
        <section>
          <h1>Welcome to My Responsive Website</h1>
          <p>This design adopts that various screen sizes</p>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;