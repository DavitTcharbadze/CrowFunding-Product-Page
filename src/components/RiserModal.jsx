import ReactDOM from 'react-dom';
import classes from '../modules/RiserModal.module.scss';
import { useState } from 'react';

export function RiserModal({ isOpen, setIsOpen }) {
  if (!isOpen) return null;
  const [isFirstSelected, setIsFirstSelected] = useState(false)
  const [isSecondSelected, setIsSecondSelected] = useState(false)
  const [isThirdSelected, setIsThirdSelected] = useState(false)

  const onFirstSelectHandler = () => {
    setIsFirstSelected(true)
    setIsSecondSelected(false)
    setIsThirdSelected(false)
  }
  const onSecondSelectHandler = () => {
    setIsSecondSelected(true)
    setIsFirstSelected(false)
    setIsThirdSelected(false)
  }
  const onThirdSelectHandler = () => {
    setIsThirdSelected(true)
    setIsFirstSelected(false)
    setIsSecondSelected(false)
  }
  return ReactDOM.createPortal(
    <div className={classes['modal-overlay']}>
      <div className={classes['modal-wrapper']}>

        <div className={classes['header-section']}>
          <h1>Back This project</h1>
          <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        </div>


        <button onClick={() => setIsOpen(false)} className={classes['close-button']}><h1>x</h1></button>

        <div className={classes['section-wrapper']}>

          <div className={`${classes['first-section']} ${isFirstSelected === true && classes['first-selected']}`}>
            <input onClick={onFirstSelectHandler} type="checkbox" />
            <h2>Pledge with no reword</h2>
            <p>Choose to support us without reword if you simply believe in our project. As a <br /> backer
              you will be signed up to recieve product updates via email.
            </p>
          </div>

          <div className={`${classes['second-section']} ${isSecondSelected === true && classes['second-selected']}`}>
            <input onClick={onSecondSelectHandler} type="checkbox" />
            <h2>BambooStand </h2> <h4>Pledge $25 or more</h4>
            <p>You get an ergonomic stand made of natural bamboo. You've helped us launch <br /> our
              promotional campaign, and you'll be added to a special Backer member list.
            </p>
          </div>

          <div className={`${classes['third-section']} ${isThirdSelected === true && classes['third-selected']}`}>
            <input onClick={onThirdSelectHandler} type="checkbox" />
            <h2>Black Edition Stand </h2> <h4>Pledge $75 or more</h4>
            <p>Choose to support us without reword if you simply believe in our project. As a <br /> backer
              you will be signed up to recieve product updates via email.
            </p>
          </div>

          <div className={classes['forth-section']}>
            <input type="checkbox" />
            <h2>Mahogany Special Edition </h2> <h4>Pledge $200 or more</h4>
            <p>Choose to support us without reword if you simply believe in our project. As a <br /> backer
              you will be signed up to recieve product updates via email.
            </p>
          </div>

        </div>
      </div>
    </div>,
    document.getElementById('riserModal')
  );
}
