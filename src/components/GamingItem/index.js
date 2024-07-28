import {
  ListTrending,
  TrendingImg,
  TrendingVideoContent,
} from './gamingItemContext'

const GamingItem = props => {
  const {trendingVideo} = props
  const {title, thumbnailUrl, viewCount} = trendingVideo
  return (
    <ListTrending>
      <TrendingImg src={thumbnailUrl} alt={title} />
      <TrendingVideoContent>
        <h1>{title}</h1>
        <p>{viewCount} Watching Worldwide</p>
      </TrendingVideoContent>
    </ListTrending>
  )
}

export default GamingItem
