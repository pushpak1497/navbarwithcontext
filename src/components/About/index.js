import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const containerClassName = isDarkTheme ? 'about-dark' : 'about-light'
      return (
        <>
          <Navbar />

          <div className={`about-container ${containerClassName}`}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="image"
              />
            )}
            <h1>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
