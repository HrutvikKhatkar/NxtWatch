import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import ContextComponent from '../../ContextComponents'
import NavSectionBar from '../NavSectionBar'
import VideoDetails from '../VideoDetails'
import Navbar from '../Navbar'
import TrendingItem from '../TrendingItems'
import {
  TrendingPage,
  TrendingContainer,
  TrendingHeader,
  IconContainer,
  UlistTrending,
  FailureImg,
  TrendingContainerFailure,
} from './trendingContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const formatedDate = pdate => formatDistanceToNow(new Date(pdate))

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideoData: []}

  componentDidMount() {
    this.getTrendingVideo()
  }

  getTrendingVideo = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        channel: product.channel,
        viewCount: product.view_count,
        publishedAt: formatedDate(product.published_at),
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

  renderLoaderView = isDarkTheme => (
    <div className="loader-container" data-testid="loader">
      <Loader color="#000000" height={50} width={50} />
    </div>
  )

  renderSuccessView = isDarkTheme => {
    const {trendingVideoData} = this.state
    return (
      <TrendingContainer isDarkTheme={isDarkTheme} data-testid="gaming">
        <TrendingHeader isDarkTheme={isDarkTheme}>
          <IconContainer>
            <HiFire />
          </IconContainer>
          <h1>Trending</h1>
        </TrendingHeader>
        <UlistTrending>
          {trendingVideoData.map(each => (
            <TrendingItem trendingVideo={each} key={each.id} />
          ))}
        </UlistTrending>
      </TrendingContainer>
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
              <TrendingPage isDarkTheme={isDarkTheme}>
                <NavSectionBar />
                {this.renderView()}
              </TrendingPage>
            </>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}

export default Trending
