import {React, Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgAddR} from 'react-icons/cg'
import Navbar from '../Navbar'
import NavSectionBar from '../NavSectionBar'
import ContextComponent from '../../ContextComponents'
import {
  TrendingPage,
  TrendingContainer,
  VideoWrapper,
  TrendingHeader,
  IconContainer,
  UlistTrending,
  FailureImg,
  TrendingContainerFailure,
  VideoActionContainer,
  VideoAction,
  VideoActionButtonLike,
  VideoActionButtonDislike,
  VideoActionButtonSaved,
  HorizontalLine,
  ChannelInfoContainer,
  ChannelLogo,
  Description,
} from './videoItemDetailsContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const formatedDate = pdate => formatDistanceToNow(new Date(pdate))

class VideoDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideoDetails: [],
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getTrendingVideo()
  }

  getTrendingVideo = async () => {
    // this.setState({
    //   apiStatus:apiStatusConstants.inProgress
    // })
    const {match} = this.props
    const {id} = match.params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
      // console.log(fetchedData.video_details)
      const videoData = fetchedData.video_details
      // console.log(videoData)
      const updatedData = {
        id: videoData.id,
        title: videoData.title,
        thumbnailUrl: videoData.thumbnail_url,
        channel: videoData.channel,
        viewCount: videoData.view_count,
        description: videoData.description,
        publishedAt: formatedDate(videoData.published_at),
        videoUrl: videoData.video_url,
      }
      console.log(updatedData)
      this.setState({
        trendingVideoDetails: updatedData,
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

  toggleLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: prevState.isDisliked ? false : null,
    }))
  }

  toggleDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: prevState.isDisliked ? false : null,
    }))
  }
  // toggleSaved = () => {
  //   this.setState(prevState => ({isSaved: !prevState.isSaved}))
  // }

  renderLoaderView = isDarkTheme => (
    <div className="loader-container" data-testid="loader">
      <Loader color="#000000" height={50} width={50} />
    </div>
  )

  toggleSavedVideo = onToggleSaved => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
    const {trendingVideoDetails} = this.state
    // console.log(trendingVideoDetails)
    onToggleSaved(trendingVideoDetails)
  }

  renderSuccessView = (isDarkTheme, onToggleSaved) => {
    const {trendingVideoDetails, isLiked, isDisliked, isSaved} = this.state
    return (
      <TrendingContainer isDarkTheme={isDarkTheme}>
        <VideoWrapper>
          <ReactPlayer url={trendingVideoDetails.videoUrl} />
        </VideoWrapper>
        <p>{trendingVideoDetails.title}</p>
        <VideoActionContainer isDarkTheme={isDarkTheme}>
          <div>
            <p>{trendingVideoDetails.viewCount} views</p>
            <p>{trendingVideoDetails.publishedAt}</p>
          </div>
          <VideoAction isDarkTheme={isDarkTheme}>
            <VideoActionButtonLike
              isDarkTheme={isDarkTheme}
              onClick={this.toggleLike}
              isLiked={isLiked}
            >
              <BiLike />
              <p>Like</p>
            </VideoActionButtonLike>
            <VideoActionButtonDislike
              isDarkTheme={isDarkTheme}
              onClick={this.toggleDislike}
              isDisliked={isDisliked}
            >
              <BiDislike />
              <p>Dislike</p>
            </VideoActionButtonDislike>
            <VideoActionButtonSaved
              isDarkTheme={isDarkTheme}
              onChange={this.toggleSaved}
              onClick={() => this.toggleSavedVideo(onToggleSaved)}
              isSaved={isSaved}
            >
              <CgAddR />
              <p>Save</p>
            </VideoActionButtonSaved>
          </VideoAction>
        </VideoActionContainer>
        <HorizontalLine isDarkTheme={isDarkTheme} />
        <ChannelInfoContainer>
          <ChannelLogo src={trendingVideoDetails.channel.profile_image_url} />
          <div>
            <p>{trendingVideoDetails.channel.name}</p>
            <p>{trendingVideoDetails.channel.subscriber_count} subscribers</p>
          </div>
        </ChannelInfoContainer>
        <Description>{trendingVideoDetails.description}</Description>
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
              const {isDarkTheme, onToggleSaved} = value
              return this.renderSuccessView(isDarkTheme, onToggleSaved)
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
          const {isDarkTheme, onToggleSaved} = value
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

export default VideoDetails
