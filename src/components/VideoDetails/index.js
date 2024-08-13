import React, {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {FiSearch} from 'react-icons/fi'
import VideoItem from '../VideoItem'
import ContextComponent from '../../ContextComponents'
import {
  Ulistvideos,
  SearchBar,
  SearchInputText,
  SearchIconContainer,
  NoVideoContainer,
  NoVideoImg,
  TrendingContainerFailure,
  FailureImg,
  LoaderContainer,
} from './VideoDetailsContext'

const formatedDate = pdate => formatDistanceToNow(new Date(pdate))

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetails extends Component {
  state = {
    videoData: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideoData()
  }

  onFailureToFetchVideoData = () => {
    this.setState({apiStatus: apiStatusConstants.failure})
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onSearchVideo = () => {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const token = Cookies.get('jwt_token')
    console.log(token)
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    try {
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const fetchedData = await response.json()
        const updatedData = fetchedData.videos.map(product => ({
          id: product.id,
          title: product.title,
          thumbnailUrl: product.thumbnail_url,
          channel: product.channel,
          viewCount: product.view_count,
          publishedAt: formatedDate(product.published_at),
        }))
        this.setState({
          videoData: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        })
      }
    } catch (error) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onRetryClick = () => {
    this.setState(
      {
        searchInput: '',
      },
      this.getVideoData,
    )
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader" style={{color: 'black'}}>
      <Loader type="ThreeDots" color="#000000" height={50} width={50} />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {videoData} = this.state
    const videoDataLength = videoData.length === 0
    return (
      <Ulistvideos>
        {videoDataLength ? (
          <NoVideoContainer>
            <NoVideoImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <h1>No Search results found</h1>
            <p>Try different keyword or remove search filter</p>
            <button type="button" onClick={this.onRetryClick}>
              Retry
            </button>
          </NoVideoContainer>
        ) : (
          videoData.map(each => <VideoItem videoItem={each} key={each.id} />)
        )}
      </Ulistvideos>
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
      <button onClick={this.onRetryClick}>Retry</button>
    </TrendingContainerFailure>
  )

  render() {
    const {apiStatus, searchInput} = this.state
    return (
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <SearchBar isDarkTheme={isDarkTheme}>
                <SearchInputText
                  isDarkTheme={isDarkTheme}
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
                <SearchIconContainer
                  data-testid="searchButton"
                  onClick={this.onSearchVideo}
                >
                  <FiSearch className="search-icon" />
                </SearchIconContainer>
              </SearchBar>
              {apiStatus === apiStatusConstants.inProgress &&
                this.renderLoaderView()}
              {apiStatus === apiStatusConstants.success &&
                this.renderSuccessView()}
              {apiStatus === apiStatusConstants.failure &&
                this.renderFailureView()}
            </>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}

export default VideoDetails
