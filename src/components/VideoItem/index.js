import {Link} from 'react-router-dom'

import {
  ListVideoItem,
  ThumbnailImage,
  BelowVideoDetails,
  ChannelLogo,
  ChannelDetails,
  Title,
  Channelname,
  ChannelViews,
} from './videoItemContext'

const VideoItem = props => {
  const {videoItem} = props
  // console.log(videoItem)
  const {thumbnailUrl, channel, id, title, viewCount, publishedAt} = videoItem
  // console.log(videoItem)
  return (
    <ListVideoItem>
      <Link
        to={`/videos/${id}`}
        style={{textDecoration: 'none', color: 'inherit'}}
      >
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <BelowVideoDetails>
          <ChannelLogo src={channel.profile_image_url} alt="channel logo" />
          <ChannelDetails>
            <Title>{title}</Title>
            <Channelname>{channel.name}</Channelname>
            <ChannelViews>
              <p>{viewCount} views </p>
              <p>{publishedAt}</p>
            </ChannelViews>
          </ChannelDetails>
        </BelowVideoDetails>
      </Link>
    </ListVideoItem>
  )
}

export default VideoItem
