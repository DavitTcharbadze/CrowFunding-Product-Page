import classes from '../modules/Pledge.module.scss';

export function Pledge() {

  return (
    <div className={classes['pledge-wrapper']}>
      <h2 className={classes['headline']}><b>About this project</b></h2>
      <h3 className={classes['description']}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti incidunt maiores enim.
        Repellat officia, incidunt dolorem explicabo repellendus at reprehenderit totam inventore accusantium eos esse.
        Laudantium laboriosam aliquid minima quidem corporis, ipsum, dolorum cupiditate tempora consequatur eum quis.
        Perferendis incidunt dolore quaerat! Aliquid provident nisi veniam velit at natus hic voluptas.
      </h3>

      <div className={classes['reward-section']}>
        <div className={classes['reward-box']}>
          <div className={classes['head-line']}>
            <h2><b>Bamboo Stand</b></h2>
            <h2 className={classes['pledge']}>Pledge $25 or more</h2>
          </div>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, itaque?
            Iste inventore neque cumque recusandae magni quaerat itaque, adipisci provident?
          </h3>
          <div className={classes['body-line']}>
            <div className={classes['left-info']}><h1>101</h1> <h3>left</h3></div>
            <button className={classes['select-button']}>Select Reward</button>
          </div>
        </div>

        <div className={classes['reward-box']}>
          <div className={classes['head-line']}>
            <h2><b>Black Edition Stand</b></h2>
            <h2 className={classes['pledge']}>Pledge $75 or more</h2>
          </div>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, itaque?
            Iste inventore neque cumque recusandae magni quaerat itaque, adipisci provident?
          </h3>
          <div className={classes['body-line']}>
            <div className={classes['left-info']}><h1>64</h1> <h3>left</h3></div>
            <button className={classes['select-button']}>Select Reward</button>
          </div>
        </div>

        <div className={classes['reward-box']} style={{ opacity: 0.5 }}>
          <div className={classes['head-line']}>
            <h2><b>Mahogany Special Edition</b></h2>
            <h2 className={classes['pledge']}>Pledge $200 or more</h2>
          </div>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, itaque?
            Iste inventore neque cumque recusandae magni quaerat itaque, adipisci provident?
          </h3>
          <div className={classes['body-line']}>
            <div className={classes['left-info']}><h1>0</h1> <h3>left</h3></div>
            <button className={classes['out-button']} disabled>Out of stock</button>
          </div>
        </div>
      </div>
    </div>
  )
}
