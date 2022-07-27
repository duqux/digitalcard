import React from 'react'
import ReactDOM from 'react-dom/client'
import MyPhoto from './js/MyPhoto'
import BasicInfo from './js/BasicInfo'
import MySocials from './js/MySocials'
import './index.css'
import MyInterests from './js/MyInterests'
import Footer from './js/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='MainClass'>
      <MyPhoto/>
      <container className='container'>
        <BasicInfo/>
        <MySocials/>
        <MyInterests/>
      </container>
      <footer className="footer">
        <Footer/>
      </footer>
    </main>
  </React.StrictMode>
)
