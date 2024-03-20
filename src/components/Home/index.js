import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const containerClassName = isDarkTheme ? 'home-dark' : 'home-light'
      return (
        <>
          <Navbar />

          <div className={`home-container ${containerClassName}`}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home1"
                className="image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home1"
                className="image"
              />
            )}
            <h1>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
