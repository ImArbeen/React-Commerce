
import React from 'react'
import { createRoot } from 'react-dom/client'
import HomePages from './pages/home/home.pages'
import "./assets/global.css"




createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <HomePages/>


  </React.StrictMode>

 
)
