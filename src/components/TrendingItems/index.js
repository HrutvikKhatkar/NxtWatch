import {Link} from 'react-router-dom'

import {
  ListTrending,
  TrendingImg,
  TrendingVideoContent,
} from './trendingItemContext'

const TrendingItem = props => {
  const {trendingVideo} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = trendingVideo
  return (
    <Link
      to={`/videos/${id}`}
      style={{textDecoration: 'none', color: 'inherit'}}
    >
      <ListTrending>
        <TrendingImg src={thumbnailUrl} alt={title} />
        <TrendingVideoContent>
          <h1>{title}</h1>
          <p>{channel.name}</p>
          <p>{viewCount} views</p>
          <p>{publishedAt}</p>
        </TrendingVideoContent>
      </ListTrending>
    </Link>
  )
}

export default TrendingItem
