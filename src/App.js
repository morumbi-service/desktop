import React from 'react';
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import './App.css';

// import Logo from './assets/images/StartLogo.svg'

var data = new Date();
var hour = data.getHours();

function App() {
  return (
    <div id="welcome-page">
      <div className="content">
          <header>
            <div className="animation">
              <motion.div
                animate={{
                  scale: [0.5, 1, 1, 0.5, 0.5],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3
                }}
              />
            </div>
          </header>

              <p className="welcomeText"><b>{`${(hour <= 12 ? 'Bom Dia!' : hour <= 17 ? 'Boa Tarde!' : 'Boa Noite!')}`}</b> Vamos checar algumas coisas?</p>
              <p className="welcomeDescription">Continue quando estiver pronta!</p>

          <Link to="/home" >
              <button>
                  Continuar
              </button>
          </Link>
      </div>
    </div>
  );
}

export default App;
