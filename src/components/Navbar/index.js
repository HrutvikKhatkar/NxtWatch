import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import ContextComponent from '../../ContextComponents'

import 'reactjs-popup/dist/index.css'

import {
  GlobalStyles,
  Nav,
  NavLogo,
  RightSection,
  Image,
  LogoutButton,
  ThemeButton,
  ThemeButtonDark,
  // LogoutContainer,
  PopUpContainer,
  ButtonContainer,
  Button,
} from './NavbarContext'

const Navbar = props => {
  const toLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <>
      <GlobalStyles />
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme, changeTheme} = value
          const onChangeTheme = () => {
            changeTheme()
          }
          return (
            <Nav isDarkTheme={isDarkTheme}>
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  width: '100%',
                }}
              >
                <NavLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <RightSection>
                {isDarkTheme ? (
                  <ThemeButtonDark data-testid="theme">
                    <IoSunnyOutline onClick={onChangeTheme} />
                  </ThemeButtonDark>
                ) : (
                  <ThemeButton data-testid="theme">
                    <FaMoon onClick={onChangeTheme} />
                  </ThemeButton>
                )}
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <div className="popup-container">
                  <Popup
                    modal
                    trigger={
                      <LogoutButton
                        type="button"
                        isDarkTheme={isDarkTheme}
                        className="trigger-button"
                      >
                        Logout
                      </LogoutButton>
                    }
                  >
                    {close => (
                      <PopUpContainer isDarkTheme={isDarkTheme}>
                        <div>
                          <p>Are you sure, you want to logout?</p>
                        </div>
                        <ButtonContainer isDarkTheme={isDarkTheme}>
                          <button
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </button>
                          <Button
                            type="button"
                            className="trigger-button"
                            onClick={toLogOut}
                          >
                            Confirm
                          </Button>
                        </ButtonContainer>
                      </PopUpContainer>
                    )}
                  </Popup>
                </div>
              </RightSection>
            </Nav>
          )
        }}
      </ContextComponent.Consumer>
    </>
  )
}

export default withRouter(Navbar)
