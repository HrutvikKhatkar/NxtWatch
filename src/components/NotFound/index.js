import {Component} from 'react'
import ContextComponent from '../../ContextComponents'
import NavSectionBar from '../NavSectionBar'
import Navbar from '../Navbar'

import {GamingPage, GamingContainer, NotFoundimg} from './NotFoundContext'

class NotFound extends Component {
  renderSuccessView = isDarkTheme => (
    <GamingContainer isDarkTheme={isDarkTheme}>
      <NotFoundimg
        src={
          isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        }
        alt="not-found"
        className="not found"
      />
      <h1>Page Not Found</h1>
      <p>we are sorry, the page you requested could not be found.</p>
    </GamingContainer>
  )

  render() {
    return (
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Navbar />
              <GamingPage isDarkTheme={isDarkTheme}>
                <NavSectionBar />
                {this.renderSuccessView(isDarkTheme)}
              </GamingPage>
            </>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}

export default NotFound
