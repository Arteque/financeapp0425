import Class from './Header.module.scss'
import Navigation from "./Navigation"


const Header = () => {
  return (
    <header className={Class.header}>
        <div className="logo"></div>
        <Navigation />
    </header>
  )
}

export default Header
