import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const containerClassName = isDarkTheme ? 'bg-dark' : 'bg-light'
      const colorClassName = isDarkTheme ? 'dark' : 'light'
      const onClickLogo = () => {
        toggleTheme()
      }
      return (
        <div className={`header-container ${containerClassName}`}>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="logo"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="logo"
            />
          )}
          <ul className="list-container">
            <Link to="/" className="link-item">
              <li className={`list-item ${colorClassName}`}>Home</li>
            </Link>
            <Link to="/about" className="link-item">
              <li className={`list-item ${colorClassName}`}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            data-testid="theme"
            className="button"
            onClick={onClickLogo}
          >
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="logo"
              />
            )}
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
