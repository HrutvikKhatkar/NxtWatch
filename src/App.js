import {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import Contextcontainer from './ContextComponents'

class App extends Component {
  state = {isDarkTheme: false, savedVideo: []}

  changeTheme = () => {
    this.setState(prev => ({
      isDarkTheme: !prev.isDarkTheme,
    }))
  }

  onToggleSaved = trendingVideoDetails => {
    // console.log(trendingVideoDetails)
    this.setState(prevState => {
      // console.log(prevState.savedVideo)
      const isPresent = prevState.savedVideo.some(
        each => each.id === trendingVideoDetails.id,
      )
      if (isPresent) {
        return {
          savedVideo: prevState.savedVideo.filter(
            each => each.id !== trendingVideoDetails.id,
          ),
        }
      }
      return {
        savedVideo: [...prevState.savedVideo, trendingVideoDetails],
      }
    })
  }

  render() {
    const {isDarkTheme, savedVideo} = this.state
    return (
      <Contextcontainer.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
          savedVideo,
          onToggleSaved: this.onToggleSaved,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </Contextcontainer.Provider>
    )
  }
}

export default App
