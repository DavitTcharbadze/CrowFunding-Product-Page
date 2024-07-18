import classes from '../modules/Riser.module.scss';
import MasterCraft from '../assets/images/logo-mastercraft.svg';
import BookMark from '../assets/images/icon-bookmark.svg';
import Selected from '../assets/images/icon-check.svg';

import { useState } from 'react';
import { RiserModal } from './RiserModal';

export function Riser() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const onBackHandler = () => {
    setIsOpen(true);
  }

  const onSelectHandler = () => {
    setIsSelected(!isSelected);
  }

  return (
    <div className={classes['riser-wrapper']}>

      <div className={classes['first-section']}>
        <img className={classes['masterCraft-logo']} src={MasterCraft} alt="" />
        <b><h1>Mastercraft Bamboo Monitor Riser</h1></b>
        <h3>A beautiful & handcrafted monitor stand to reduce neck and eye strain</h3>

        <div className={classes['button-section']}>
          <button onClick={onBackHandler} className={classes['back-button']}><h2>Back This Project</h2></button>
          <button
            onClick={onSelectHandler}
            className={`${classes['bookmark-button']} ${isSelected && classes['book-marked']}`}
          >
            <img className={`${classes['select-button']} ${isSelected ? classes['selected-button'] : ''}`} src={isSelected ? Selected : BookMark} alt="" />
            <h2 className={classes['book-title']}>{isSelected ? 'Bookmarked' : 'Bookmark'}</h2>
          </button>
        </div>
      </div>

      <div className={classes['second-section']}>
        <div>
          <h1 className={classes['price']}>$89,914</h1>
          <h3 className={classes['price-tag']}>of $100,100 backed</h3>
        </div>
        <div className={classes['first-line']}></div>

        <div>
          <h1 className={classes['backer']}>5,007</h1>
          <h3 className={classes['backer-tag']}>total backers</h3>
        </div>
        <div className={classes['second-line']}></div>

        <div>
        <h1 className={classes['days']}>56</h1>
        <h3 className={classes['days-tag']}>days left</h3>
        </div>
      </div>

      <div className={classes['outter-line']}><div className={classes['inner-line']}></div></div>

      <RiserModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
