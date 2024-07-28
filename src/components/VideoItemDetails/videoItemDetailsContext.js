import styled from 'styled-components'

export const TrendingPage = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#212121' : '#ffffff')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
`
export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#1a1a1a' : '#f7f7f7')};
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  overflow-y: auto;
  padding: 20px;
`
export const VideoWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position: relative;
  width:100%
  max-width: 1000px;
  background-color: #000;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }  
`

export const TrendingContainerFailure = styled(TrendingContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TrendingHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#333' : '#e3e3e3')};
  padding: 30px;
  padding-left: 50px;

  h1 {
    margin: 0 0 0 20px;
    font-size: 40px;
    font-weight: bold;
    color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  }
`

export const IconContainer = styled.div`
  background-color: #f0fcff;
  padding: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  svg {
    width: 35px;
    height: 35px;
    color: red;
  }
`

export const UlistTrending = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 50px;
`

export const ListTrending = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: row;
  align-items: center;
  width: 90%;
`
export const TrendingImmg = styled.img`
  width: 50%;
`
export const FailureImg = styled.img`
  width: 40%;
`
export const VideoActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
`
export const VideoAction = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
`
export const VideoActionButtonLike = styled.button`
  background-color: inherit;
  border: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: ${({isDarkTheme, isLiked}) =>
    isLiked ? '#2563eb' : isDarkTheme ? '#ffffff' : '#000000'};

  p {
    font-size: 15px;
    margin-left: 5px;
  }
`
export const VideoActionButtonDislike = styled(VideoActionButtonLike)`
  color: ${({isDarkTheme, isDisliked}) =>
    isDisliked ? '#2563eb' : isDarkTheme ? '#ffffff' : '#000000'};
`
export const VideoActionButtonSaved = styled(VideoActionButtonLike)`
  color: ${({isDarkTheme, isSaved}) =>
    isSaved ? '#2563eb' : isDarkTheme ? '#ffffff' : '#000000'};
`
export const HorizontalLine = styled.hr`
  width: 100%;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  margin-bottom: 30px;
`
export const ChannelInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ChannelLogo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`
export const Description = styled.p`
  margin-left: 100px;
`
