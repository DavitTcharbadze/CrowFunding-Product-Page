/* eslint-disable no-unused-vars */
import { useState } from 'react'
import classes from './modules/App.module.scss'
import { Header } from './components/Header'
import { Riser } from './components/Riser'
import { Pledge } from './components/Pledge'


function App() {

  return (
    <div className={classes['main-wrapper']}>
      <div className={classes['header-section']}>
        <Header />
      </div>

      <div className={classes['riser-section']}>
        <Riser />
      </div>

      <div className={classes['pledge-section']}>
        <Pledge />
      </div>
    </div>
  )
}

export default App
