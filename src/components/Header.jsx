import classes from '../modules/Header.module.scss'

export function Header() {

  return (
    <div className={classes['header-wrapper']}>
      <h1 className={classes['header-title']}><b> crowdfund </b></h1>
      
      <nav>
        <h2>About</h2>
        <h2>Discover</h2>
        <h2>Get Started</h2>
      </nav>
    </div>
  )
}
