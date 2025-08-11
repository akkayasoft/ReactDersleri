import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KisiKart from './KisiKart';

function App() {
  

  return (
    <div>
      <h1>Kişiler</h1>
      <KisiKart ad="Ayhan" yas={40}/>
      <KisiKart ad="Muhammed" yas={19}/>
      <KisiKart ad="Şevket" yas={20}/>
    </div>
  );
}

export default App
