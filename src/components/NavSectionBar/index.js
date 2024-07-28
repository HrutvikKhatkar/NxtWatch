import {Component} from 'react'
import {HiHome, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgAddR} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import ContextComponent from '../../ContextComponents'
import {
  NavSection,
  NavHeaderSection,
  NavFooterSection,
  Ulist,
  ListItem,
  NavButton,
  ContactLogo,
} from './navSectionContext'

const activeTabConstants = [
  {id: 'HOME', tab: 'home'},
  {id: 'TRENDING', tab: 'trending'},
  {id: 'GAMING', tab: 'gaming'},
  {id: 'SAVEDVIDEO', tab: 'saved-video'},
]

class NavSectionBar extends Component {
  state = {activeTab: activeTabConstants[0].id, isActive: false}

  onChangeTab = tab => {}

  render() {
    return (
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <NavSection isDarkTheme={isDarkTheme}>
              <NavHeaderSection isDarkTheme={isDarkTheme}>
                <Ulist>
                  <Link
                    to="/"
                    style={{textDecoration: 'none', color: 'inherit'}}
                    onClick={this.onChangeTab(activeTabConstants[0].id)}
                  >
                    <ListItem isDarkTheme={isDarkTheme}>
                      <HiHome />
                      <NavButton>Home</NavButton>
                    </ListItem>
                  </Link>
                  <Link
                    to="/trending"
                    style={{textDecoration: 'none', color: 'inherit'}}
                    onClick={this.onChangeTab(activeTabConstants[1].id)}
                  >
                    <ListItem isDarkTheme={isDarkTheme}>
                      <HiFire />
                      <NavButton>Trending</NavButton>
                    </ListItem>
                  </Link>
                  <Link
                    to="/gaming"
                    style={{textDecoration: 'none', color: 'inherit'}}
                    onClick={this.onChangeTab(activeTabConstants[2].id)}
                  >
                    <ListItem isDarkTheme={isDarkTheme}>
                      <SiYoutubegaming />
                      <NavButton>Gaming</NavButton>
                    </ListItem>
                  </Link>
                  <Link
                    to="/saved-videos"
                    style={{textDecoration: 'none', color: 'inherit'}}
                    onClick={this.onChangeTab(activeTabConstants[3].id)}
                  >
                    <ListItem isDarkTheme={isDarkTheme}>
                      <CgAddR />
                      <NavButton>Saved Videos</NavButton>
                    </ListItem>
                  </Link>
                </Ulist>
              </NavHeaderSection>
              <NavFooterSection isDarkTheme={isDarkTheme}>
                <p>CONTACT US</p>
                <div>
                  <ContactLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </div>
                <p>Enjoy! Now to see your channels and recommendations!</p>
              </NavFooterSection>
            </NavSection>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}
export default NavSectionBar
