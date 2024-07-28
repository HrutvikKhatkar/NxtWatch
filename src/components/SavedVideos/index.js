import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {CgAddR} from 'react-icons/cg'
import ContextComponent from '../../ContextComponents'
import NavSectionBar from '../NavSectionBar'
import VideoDetails from '../VideoDetails'
import Navbar from '../Navbar'
import TrendingItem from '../TrendingItems'
import {
  GamingPage,
  GamingContainer,
  TrendingHeader,
  IconContainer,
  UlistSaved,
  FailureImg,
  TrendingContainerFailure,
  NoVideoContainer,
  NoVideoImg,
  LoaderContainer,
} from './savedVideoContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const formatedDate = pdate => formatDistanceToNow(new Date(pdate))

class SavedVideos extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideoData: []}

  componentDidMount() {
    this.getTrendingVideo()
  }

  getTrendingVideo = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    this.setState({
      apiStatus: apiStatusConstants.success,
    })
  }

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader color="#000000" height={50} width={50} />
    </div>
  )

  renderSuccessView = (isDarkTheme, savedVideo) => {
    const savedVideoLength = savedVideo.length === 0
    return (
      <GamingContainer isDarkTheme={isDarkTheme}>
        <TrendingHeader isDarkTheme={isDarkTheme}>
          <IconContainer>
            <CgAddR />
          </IconContainer>
          <h1>Saved Videos</h1>
        </TrendingHeader>
        {savedVideoLength ? (
          <UlistSaved isDarkTheme={isDarkTheme}>
            <NoVideoContainer>
              <NoVideoImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <h1>No Saved videos found</h1>
              <p>You can save your videos while watching them</p>
            </NoVideoContainer>
          </UlistSaved>
        ) : (
          <UlistSaved isDarkTheme={isDarkTheme}>
            {savedVideo.map(each => (
              <TrendingItem trendingVideo={each} key={each.id} />
            ))}
          </UlistSaved>
        )}
      </GamingContainer>
    )
  }

  renderFailureView = isDarkTheme => (
    <TrendingContainerFailure isDarkTheme={isDarkTheme}>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
      <h1>Opps! Something Went Wrong</h1>
      <p>We are having some trouble to complete your request.</p>
      <p>Please Try Again</p>
      <button onClick={this.getTrendingVideo}>Retry</button>
    </TrendingContainerFailure>
  )

  renderView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return (
          <ContextComponent.Consumer>
            {value => {
              const {isDarkTheme, savedVideo} = value
              return this.renderSuccessView(isDarkTheme, savedVideo)
            }}
          </ContextComponent.Consumer>
        )
      case apiStatusConstants.failure:
        return (
          <ContextComponent.Consumer>
            {value => {
              const {isDarkTheme} = value
              return this.renderFailureView(isDarkTheme)
            }}
          </ContextComponent.Consumer>
        )
      case apiStatusConstants.inProgress:
        return (
          <ContextComponent.Consumer>
            {value => {
              const {isDarkTheme} = value
              return this.renderLoaderView(isDarkTheme)
            }}
          </ContextComponent.Consumer>
        )
      default:
        return null
    }
  }

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
                {this.renderView(isDarkTheme)}
              </GamingPage>
            </>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}

export default SavedVideos
