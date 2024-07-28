import {Component} from 'react'
import {GrClose} from 'react-icons/gr'
import ContextComponent from '../../ContextComponents'
import NavSectionBar from '../NavSectionBar'
import {
  Homepage,
  ContentSection,
  AddContainer,
  CloseAddButton,
  BannerContentContainer,
  BuyPremiumPara,
  BannerLogo,
  GetItButton,
} from './HomeContext'
import VideoDetails from '../VideoDetails'
import Navbar from '../Navbar'

class Home extends Component {
  state = {isActiveTab: false, isAddVisible: true}

  onClickNavHeader = () => {
    this.setState(prev => ({
      isActiveTab: !prev.isActiveTab,
    }))
  }

  removeAdd = () => {
    this.setState(prev => ({
      isAddVisible: !prev.isAddVisible,
    }))
  }

  render() {
    const {isActiveTab, isAddVisible} = this.state
    return (
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Navbar />
              <Homepage isDarkTheme={isDarkTheme}>
                <NavSectionBar />
                <ContentSection isDarkTheme={isDarkTheme}>
                  {isAddVisible && (
                    <AddContainer>
                      <BannerContentContainer>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                          data-testid="banner"
                        />
                        <BuyPremiumPara isDarkTheme={isDarkTheme}>
                          Buy Nxt Watch Premium prepaid plan with UPI
                        </BuyPremiumPara>
                        <GetItButton>GET IT NOW</GetItButton>
                      </BannerContentContainer>
                      <CloseAddButton
                        type="button"
                        data-testid="close"
                        onClick={this.removeAdd}
                      >
                        <GrClose />
                      </CloseAddButton>
                    </AddContainer>
                  )}
                  <VideoDetails />
                </ContentSection>
              </Homepage>
            </>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}

export default Home
