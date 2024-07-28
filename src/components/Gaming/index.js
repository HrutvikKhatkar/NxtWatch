import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import ContextComponent from '../../ContextComponents'
import NavSectionBar from '../NavSectionBar'
import VideoDetails from '../VideoDetails'
import Navbar from '../Navbar'
import GamingItem from '../GamingItem'
import {
  GamingPage,
  GamingContainer,
  TrendingHeader,
  IconContainer,
  UlistGaming,
  FailureImg,
  TrendingContainerFailure,
} from './gamingContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const formatedDate = pdate => formatDistanceToNow(new Date(pdate))

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideoData: []}

  componentDidMount() {
    this.getTrendingVideo()
  }

  getTrendingVideo = async () => {
    // this.setState({
    //   apiStatus:apiStatusConstants.inProgress
    // })

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    // console.log(response)
    if (response.ok) {
      const fetchedData = await response.json()
      // console.log(fetchedData)

      const updatedData = fetchedData.videos.map(product => ({
        id: product.id,
        title: product.title,
        thumbnailUrl: product.thumbnail_url,
        viewCount: product.view_count,
      }))
      // console.log(updatedData)
      this.setState({
        trendingVideoData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader color="#000000" height={50} width={50} />
    </div>
  )

  renderSuccessView = isDarkTheme => {
    const {trendingVideoData} = this.state
    return (
      <GamingContainer isDarkTheme={isDarkTheme}>
        <TrendingHeader isDarkTheme={isDarkTheme}>
          <IconContainer>
            <SiYoutubegaming />
          </IconContainer>
          <h1>Gaming</h1>
        </TrendingHeader>
        <UlistGaming isDarkTheme={isDarkTheme}>
          {trendingVideoData.map(each => (
            <GamingItem trendingVideo={each} key={each.id} />
          ))}
        </UlistGaming>
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
              const {isDarkTheme} = value
              return this.renderSuccessView(isDarkTheme)
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

export default Gaming
